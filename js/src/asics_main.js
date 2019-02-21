// ascis_main.js
(function($){
    // console.log('gnbLieq');

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

  var Enter  = function(e){
      e.preventDefault();
      index    = $(this).index();
      gnbpLieq = gnbpLi.eq(index);
      gnbpLieq.stop(true, false).fadeIn();
      gnbP.addClass('active');
      gnbpLieq.siblings('li').removeClass('active');
  };
  var Out = function(e){
    e.preventDefault();
    index    = $(this).index();
    gnbpLieq = gnbpLi.eq(index);
    gnbP     = navBox.find('.gnb_p');
    gnbpLi.stop(true, false).fadeOut(100);   
    gnbP.removeClass('active');
  };

  gnbLi.on('mouseenter',Enter);
  gnbLi.on('mouseleave',Out);
    
// ************* #headBox end=======================================
 




})(jQuery);


// 과제 : 재생 정지버튼 생성 ,  li 뜯어서 붙이는걸로 바꾸기