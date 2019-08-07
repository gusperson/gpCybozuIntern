jQuery.noConflict();
(function($, PLUGIN_ID) {
    'use strict';
    kintone.events.on('app.record.index.show', function(event) {
        if (document.getElementById('tree')) {
            const config = kintone.plugin.app.getConfig(PLUGIN_ID);
            const root = config.root;
            const folder = config.dropdown;
            const textField = config.text;
            const body = {
                'app': kintone.app.getId()
            };
            $('#tree').jstree({
                'core': {
                    'check_callback': true,
                    'themes': {'variant': 'large'},
                    'data': [
                        {
                            'text': root,
                            'expand_selected_onload': 'false',
                            'id': 'root',
                            'numb': -1,
                            'children': [
                            ]
                        }
                    ]
                }
            });
            kintone.api(kintone.api.url('/k/v1/app/form/fields', true), 'GET', body, function(resp) {
                for (const prop in resp.properties) {
                    if (resp.properties.hasOwnProperty(prop)) {
                        if (folder === prop) {
                            for (const option in resp.properties[prop].options) {
                                if (resp.properties[prop].hasOwnProperty(option)) {
                                    $('#tree').jstree(true).create_node('#root', {id: option, text: option, numb: -1});
                                }
                            }
                        }
                    }
                }
                // success
            }, function(error) {
                // error
                console.log(error);
            });
            kintone.api(kintone.api.url('/k/v1/records', true), 'GET', body, function(resp) {
                for (let i = 0; i < resp.records.length; i++) {
                    const recNum = resp.records[i].$id.value;
                    const name = resp.records[i][textField].value;
                    const department = resp.records[i][folder].value;
                    $('#tree').jstree(true).create_node('#' + department, {text: name, numb: recNum, icon: false});
                }
            }, function(error) {
                console.log(error);
            });
            $('#tree').on('select_node.jstree', function(e, data) {
                if (data.node.original.numb !== -1) {
                    const origin = window.location.origin;
                    const pathname = window.location.pathname;
                    window.open(origin + pathname + 'show#record=' + data.node.original.numb);
                }
            });
        }
    });
})(jQuery, kintone.$PLUGIN_ID);
