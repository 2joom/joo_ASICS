// women_rwd_code.js
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
