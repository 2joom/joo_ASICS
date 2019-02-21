// head.js
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
  var gnbBox = $('.gnb_box');
  var menu = $('#navBox').find('.menu').children('button');

  menu.on('click',function(e){
    e.preventDefault();
    var gnbBoxView = gnbBox.css('display') == 'none' ;
    if(gnbBoxView){
    console.log('나타나라!!');
        gnbBox.show();
        gnbBox.stop().animate({marginRight:0});
    }else{
       gnbBox.stop().animate({marginRight:'-80vw'}, function(){
          gnbBox.hide();
       });
    }
  


  });


  };// 모바일 뚜껑

// Tablet ==============================================
 function Tablet(){
  var gnbBox =$('.gnb_box');





  };

  // Pc ==============================================
 function Pc(){
  
  var navBox = $('#navBox');

var menu   = navBox.find('.menu');
var gnb    = navBox.find('.gnb');
var gnbLi  = gnb.children('li');
var index  = 0;

var gnbP   = navBox.find('.gnb_p');
var gnbpLi = gnbP.children('li');
var gnbLieq, gnbpLieq;

// ************* #headBox =======================================
//step1: gnbLi의 eq(index)를 누르면 gnbLi의 eq(index)가 나타나라

  // var Enter  = function(e){
  //     e.preventDefault();
  //     index    = $(this).index();
  //     gnbpLieq = gnbpLi.eq(index);
  //     gnbpLi.stop(true, false).fadeOut();
  //     gnbpLieq.stop(true, false).fadeIn();
  //     gnbP.addClass('active');
  //     gnbpLieq.siblings('li').removeClass('active');
  // };

  // var Out = function(e){
  //   e.preventDefault();
  //   index    = $(this).index();
  //   gnbpLieq = gnbpLi.eq(index);
  //   gnbP     = navBox.find('.gnb_p');
  //   gnbpLi.stop(true, false).fadeOut(100);   
  //   gnbP.removeClass('active');
  // };

  // gnbLi.on('mouseenter',Enter);
  // menu.on('mouseleave',Out);
    
// ************* #headBox end=======================================




  };

// PcFull ==============================================
  function PcFull(){
   
   var navBox = $('#navBox');

var menu   = navBox.find('.menu');
var gnb    = navBox.find('.gnb');
var gnbLi  = gnb.children('li');
var index  = 0;

var gnbP   = navBox.find('.gnb_p');
var gnbpLi = gnbP.children('li');
var gnbLieq, gnbpLieq;

// ************* #headBox =======================================
//step1: gnbLi의 eq(index)를 누르면 gnbLi의 eq(index)가 나타나라

  // var Enter  = function(e){
  //     e.preventDefault();
  //     index    = $(this).index();
  //     gnbpLieq = gnbpLi.eq(index);
  //     gnbpLi.stop(true, false).fadeOut();
  //     gnbpLieq.stop(true, false).fadeIn();
  //     gnbP.addClass('active');
  //     gnbpLieq.siblings('li').removeClass('active');
  // };

  // var Out = function(e){
  //   e.preventDefault();
  //   index    = $(this).index();
  //   gnbpLieq = gnbpLi.eq(index);
  //   gnbP     = navBox.find('.gnb_p');
  //   gnbpLi.stop(true, false).fadeOut(100);   
  //   gnbP.removeClass('active');
  // };

  // gnbLi.on('mouseenter',Enter);
  // menu.on('mouseleave',Out);
    
// ************* #headBox end=======================================



   
  };
})(jQuery);

