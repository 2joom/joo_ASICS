// w_a_rwd_code.js
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
  //  artBox ==========================
  var artBox = $('#artBox');
  var artP = artBox.children('.art_p');
    
    artP.find('.mob_hidden').attr({class:'hidden'});

  //  bannerBox ==========================
  var bannerBox = $('#bannerBox');
  var banFont = bannerBox.find('.font');

    banFont.before('<br />');

  };

// Tablet ==============================================
 function Tablet(){
    





  };

  // Pc ==============================================
  function Pc(){
    $('.coach_box01').wrap('<div class="pc_box01">');
    $('.pc_box01').append( $('.coach_box02') );
    $('.pc_box01').append( $('.coach_box03') );
    
    $('.coach_box04').wrap('<div class="pc_box02">');
    $('.pc_box02').append( $('.coach_box05') );




  };

// PcFull ==============================================
  function PcFull(){
   


   
  };



})(jQuery);