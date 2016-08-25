$(document).ready(function(){
  $('#checky').change(function () {
      $('#checkButton').prop("disabled", !this.checked);
  }).change()
});
