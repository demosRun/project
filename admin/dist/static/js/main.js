
setTimeout(function () {
  $.datetimepicker.setLocale('ch');
  $('.date-input input').datetimepicker({
    timepicker:false,
    format:'Y-m-d'
  })
}, 500)