// asics_rwd_page.js
(function($) {
 // var winW = $(window).width();
  // var size = $('.size');
  // var product = $('.product');

// step1 -----------------------------
 
/*
  $(window).on('resize',function(){
     var nowW = $(window).width();
      if(winW !== nowW){
        location.reload();
      }
  });
*/

// step1 -----------------------------
/* 각각의 디바이스 환경이 변하면 새로고침 */
var winW = $(window).width();
var mob = 480;
var tab = 768;
var pc  = 960;
var myDevice;
var product = $('.product');

var Device = function(w){
  if(w <= mob){  
    myDevice = 'mobile';
  }else if(w > mob && w <= tab){
    myDevice = 'table';
  }else if(w > tab && w <= pc){
    myDevice = 'pc';
  }else{
    myDevice = 'pcfull';
  }
product.text(myDevice);
// console.log(myDevice);
return myDevice;
};

var beforeDevice = Device(winW);
$(window).on('resize',function(){
  var nowW = $(window).width();
  var afterDevice = Device(nowW);
  // console.log(beforeDevice, afterDevice);
  if(beforeDevice !== afterDevice){ location.reload(); }
});

})(jQuery);
