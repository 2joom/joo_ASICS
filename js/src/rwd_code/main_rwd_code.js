// main_rwd_code.js
(function($) {
  var winW = $(window).width();
  var mob = 480;
  var tab = 768;
  var pc  = 960;

  // mobile 환경일때 구동되는 기능
  if(winW <= mob){ Mobile(); }
  // tablet 환경일때 구동되는 기능
  if(winW > mob && winW <= tab){ Tablet(); }
  // pc 환경일때 구동되는 기능
  if(winW > tab && winW <= pc){ Pc(); }
  // pcful 환경일때 구동되는 기능
  if(winW > pc){ PcFull(); }


// Mobile ==============================================
 function Mobile(){
  // ************* #bannerBox=======================================
  var bannerBox = $('#bannerBox');
  var bannerView = $('.banner_view');
  var banneImg = bannerView.children('.banner_img');
  var banChildren = banneImg.children('div');
  var num =0;
  var banneImg01 = banneImg.children('div').eq(0).width();
  var indicator = $('.indicator');
  var indiLi = indicator.find('li');
console.log(banneImg01);
indicator.remove();


/*
  var indiSelect = function(n){
    // indiLi.eq(n).addClass('active');
    // indiLi.eq(n).siblings('li').removeClass('active');
    banneImg01.animate({marginLeft: -banneImg01 * n +'px'});
  };

  indiLi.eq(0).addClass('active');

  $(window).on('mouseenter',function(e){
    e.preventDefault();
    banChildren = $(this).index();
    indiSelect(num);
  });
*/
var bannerMove = function(){
  banneImg.animate({marginLeft:-banneImg01}, function(){
    banneImg.css({marginLeft:0});
    banChildren.eq(0).appendTo(banneImg);
    banChildren = banneImg.children('div');
  });
};

// bannerMove();
var starMove = setInterval(bannerMove, 3000);

// var stopMove = function(){
//   clearInterval( starMove );
};




// Tablet ==============================================
 function Tablet(){
    





  };

  // Pc ==============================================
 function Pc(){
  



  };

// PcFull ==============================================
  function PcFull(){
   


   
  };
})(jQuery);
