// header_footer.js
(function($){

  var url = "../";
  $('#wrap').prepend('<header id="headBox">');
  $('#headBox').load(url+'asics_head.html');
  
  $('#wrap').append('<footer id="footBox">');
  $('#footBox').load(url+'asics_footer.html');

})(jQuery);