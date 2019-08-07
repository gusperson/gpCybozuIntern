jQuery.noConflict();
(function($, PLUGIN_ID) {
    'use strict';
    const $form = $('.js-submit-settings');
    const $folder = $('#select_dropdown');
    const $text = $('#select_text');
    const $cancelButton = $('.js-cancel-button');
    const $root = $('.js-text-message');
    const $viewname = $('.js-view-name');
    let config = kintone.plugin.app.getConfig(PLUGIN_ID);
    let buttonbool = false;
    document.getElementById('viewmaker').onclick = function() {
        if ($viewname === '') {
            window.alert('Please enter a folder view name.');
        } else {
            buttonbool = true;
            const app = {
                'app': kintone.app.getId(),
            };
            kintone.api(kintone.api.url('/k/v1/preview/app/views', true), 'GET', app, (view) => {
                view.app = kintone.app.getId();
                let maxindex = -1;
                let firstview = true;
                for (const numb in view.views) {
                    if ((view.views.hasOwnProperty(numb))) {
                        if (view.views[numb].index > maxindex) {
                            maxindex = view.views[numb].index + 1;
                            firstview = false;
                        }
                    }
                }
                if (firstview) {
                    maxindex = 0;
                }
                view.views[$viewname.val()] = {
                    'filterCond': '',
                    'name': $viewname.val(),
                    'type': 'CUSTOM',
                    'html': '<ul id="tree"></ul>',
                    'index': maxindex,
                };
                kintone.api(kintone.api.url('/k/v1/preview/app/views', true), 'PUT', view, (resp) => {
                    // success
                    window.alert('View Created!');
                }, function(error) {
                    window.alert('Please enter a folder view name.');
                    // error
                    console.log(error);
                });
                // success
            }, function(error) {
                // error
                console.log(error);
            });
        }
    };
    KintoneConfigHelper.getFields().then(function(resp) {
        for (let i = 0; i < resp.length; i++) {
            switch (resp[i].type) {
            case 'DROP_DOWN':
                const opt = $('<option>'); 
                const text = document.createTextNode(resp[i].label);
                opt.attr('value', resp[i].code);
                opt.append(text);
                $folder.append(opt);
                break;
            case 'SINGLE_LINE_TEXT':
                const opt = $('<option>'); 
                const text = document.createTextNode(resp[i].label);
                opt.attr('value', resp[i].code); 
                opt.append(text);
                $text.append(opt);
                break;
            default:
                break;
            }
        }
        if (config.dropdown) {
            $folder.val(config.dropdown);
        }
        if (config.text) {
            $text.val(config.text);
        }
    }, function(error) {
        // error
        console.log(error);
    });
    if (config.root) {
        $root.val(config.root);
    }
    if (config.viewname) {
        $viewname.val(config.viewname);
    }
    $form.on('submit', function(e) {
        if (buttonbool || config.viewname) {
            e.preventDefault();
            if (buttonbool) {
                config = {
                    'dropdown': $folder.val(),
                    'root': $root.val(),
                    'text': $text.val(),
                    'viewname': $viewname.val(),
                };
            } else {
                config = {
                    'dropdown': $folder.val(),
                    'root': $root.val(),
                    'text': $text.val(),
                    'viewname': config.viewname
                };
            }
            kintone.plugin.app.setConfig(config, () => {
                alert('The plug-in settings have been saved. Please update the app!');
                window.location.href = '/k/admin/app/flow?app=' + kintone.app.getId();
            });
        } else {
            window.alert('Please press the button to create a Folder View page!');
            return false;
        }
    });
    $cancelButton.on('click', () => {
        window.location.href = '/k/admin/app/' + kintone.app.getId() + '/plugin/';
    });
})(jQuery, kintone.$PLUGIN_ID);
