/* Javascript for pdfXBlock. */
function CertificateXBlockEdit(runtime, element) {

  $(element).find('.action-cancel').bind('click', function() {
      runtime.notify('cancel', {});
  });

  $(element).find('.action-save').bind('click', function() {
      var data = {
          'display_name': $('#certificate_edit_display_name').val(),
          'enable_email': $('#certificate_edit_enable_email').val()
      };
      runtime.notify('save', {state: 'start'});
      var handlerUrl = runtime.handlerUrl(element, 'studio_submit');
      $.post(handlerUrl, JSON.stringify(data)).done(function(response) {
          if (response.result === 'success') {
              runtime.notify('save', {state: 'end'});
              // Reload the whole page :
              // window.location.reload(false);
          } else {
              runtime.notify('error', {msg: response.message})
          }
      });
  });
}
