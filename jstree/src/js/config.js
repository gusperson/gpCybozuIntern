jQuery.noConflict();
(function($, PLUGIN_ID) {
  'use strict';
  var $form = $('.js-submit-settings');
  var $folder = $('#select_dropdown');
  var $text = $('#select_text');
  var $cancelButton = $('.js-cancel-button');
  var $root = $('.js-text-message');
  var config = kintone.plugin.app.getConfig(PLUGIN_ID);
  var buttonbool = false;
  document.getElementById('viewmaker').onclick = function() {
    buttonbool = true;
    var customView = {
      'app': kintone.app.getId(),
      'views': {
        'Folder View': {
          'name': 'Folder View',
          'index': 0,
          'type': 'CUSTOM',
          'html': '<ul id=tree></ul>',
        },
      }
    };
    kintone.api(kintone.api.url('/k/v1/preview/app/views', true), 'PUT', customView, function(resp) {
      // success
      console.log(resp);
    }, function(error) {
      // error
      console.log(error);
    });
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
  $form.on('submit', function(e) {
    if (buttonbool) {
      e.preventDefault();
      config = {
        'dropdown': $folder.val(),
        'root': $root.val(),
        'text': $text.val(),
      };
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
