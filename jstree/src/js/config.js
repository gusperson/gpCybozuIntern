jQuery.noConflict();
(function($, PLUGIN_ID) {
  'use strict';
  var $form = $('.js-submit-settings');
  var $folder = $('#select_dropdown');
  var $text = $('#select_text');
  var $cancelButton = $('.js-cancel-button');
  var $root = $('.js-text-message');
  var $viewname = $('.js-view-name');
  var config = kintone.plugin.app.getConfig(PLUGIN_ID);
  var buttonbool = false;
  console.log(config);
  document.getElementById('viewmaker').onclick = function() {
    if($viewname === '') {
      window.alert('Please enter a folder view name.')
    } else {
    buttonbool = true;
    var app = {
      'app': kintone.app.getId(),
    };
    kintone.api(kintone.api.url('/k/v1/preview/app/views', true), 'GET', app, function(view) {
      view.app = kintone.app.getId();
      var maxindex = -1;
      var firstview = true;
      for (var numb in view.views) {
        if (view.views[numb].index > maxindex) {
          maxindex = view.views[numb].index + 1;
          firstview = false;
        }
      }
      if (firstview) {
        maxindex = 0;
      }
      view.views[$viewname.val()] = {
        'id': 74726565,
        'filterCond': '',
        'name': $viewname.val(),
        'type': 'CUSTOM',
        'html': '<ul id=tree></ul>',
        'index': maxindex,
      };
      console.log('test');
      console.log(view);
      kintone.api(kintone.api.url('/k/v1/preview/app/views', true), 'PUT', view, function(resp) {
        // success
        window.alert('View Created!');
        var newSettings = {
          apps: [
            {
              'app': kintone.app.getId()
            }
          ]
        };
      }, function(error) {
        window.alert('Please enter a folder view name.')
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
    for (var i = 0; i < resp.length; i++) {
      switch (resp[i].type) {
        case 'DROP_DOWN':
          var opt = document.createElement('option');
          var text = document.createTextNode(resp[i].label);
          opt.setAttribute('value', resp[i].code);
          opt.append(text);
          $folder.append(opt);
          break;
        case 'SINGLE_LINE_TEXT':
          var opt = document.createElement('option');
          var text = document.createTextNode(resp[i].label);
          opt.setAttribute('value', resp[i].code);
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
  console.log(config.viewname);
  if (config.viewname) {
    console.log('hello?')
    $viewname.val(config.viewname);
  }
  $form.on('submit', function(e) {
    console.log(config.viewname)
    if (buttonbool || config.viewname) {
      e.preventDefault();
      if (buttonbool) {
        config = {
          'dropdown': $folder.val(),
          'root': $root.val(),
          'text': $text.val(),
          'viewname': $viewname.val(),
        }
      } else {
        config = {
          'dropdown': $folder.val(),
          'root': $root.val(),
          'text': $text.val(),
          'viewname': config.viewname
        }
      }
      kintone.plugin.app.setConfig(config, function() {
        alert('The plug-in settings have been saved. Please update the app!');
        window.location.href = '/k/admin/app/flow?app=' + kintone.app.getId();
      });
    } else {
      window.alert('Please press the button to create a Folder View page!');
      return false;
    }
  });
  $cancelButton.on('click', function() {
    window.location.href = '/k/admin/app/' + kintone.app.getId() + '/plugin/';
  });
})(jQuery, kintone.$PLUGIN_ID);
