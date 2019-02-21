// ascis_women.js

(function($){
// ********** #mainBox start======================================
  var mainBox = $('#mainBox');
  var mainBig = mainBox.find('.main_big');
  var mainUl = mainBig.find('ul');
  var mainLi = mainUl.children('li');

  var mainBigLast = mainLi.eq(-1).clone(true);
  mainLi.eq(0).before(mainBigLast);
  // mainUl.prepend(mainBigLast); // ul안에 첫 순서로 넣어 생성하라

  // 내용 변경 후 갯수 다시 파악  
  mainLi = mainUl.children('li');

  var len = mainLi.length;
  // console.log(len);
  mainUl.css({ width : len * 100 + '%' , marginLeft: -100 + '%' ,
            position:'relative' , top:0, left:0}); // transform:'translateX(' + -100/len + '%' +')' == marginLeft
  mainLi.css({ width : 100 / len + '%'});
  // 본래 5개의 크기에서 복재까지 합쳐 6개를 대상으로 넓이를 다시확인.

//좌,우 버튼을 클릭하든, 인디케이트를 클릭하든 공통의 기능을 하는 변수가 하나 필요하다!
  var mainBtn = mainBox.find('.main_btn');
  var nextBtn = mainBtn.children('.next_btn');
  var prevBtn = mainBtn.children('.prev_btn');
  
  var showI = 0;
  var mainIndi = mainBox.find('.main_indicator');
  var indiLi = mainIndi.find('li');

    var SlideBtn = function(i){
    indiLi.removeClass('active');
    indiLi.eq(showI).addClass('active');
    mainUl.animate({ left : i * -100 + '%'});
    
    };

    SlideBtn(showI);
    


//좌,우 버튼 클릭시

// nextBtn클릭시 변수 showI에 1씩 더하는 기능 부여
// 최대 숫자는 전체 갯수-2 까지만 가능하게 (5개 중 3개까지 움직여아하니까 3개는 4번째라는 jquery식을 이용하여 -2했음)
  nextBtn.on('click', function(e) {
    e.preventDefault();
    // 맨뒤 eq(3):4번째 그림까지 가게만들어줬다.
    if(showI >= len-2){ // eq(3) : 4번째 이미지에 왔을때
      mainUl.stop(true,false).css({left: 100 + '%'}); // css는 콜백 함수의 기능이없다.css( ,funcution(){})안됨
      // 맨앞에 4번째로 가라 why? 스르륵 애니메이트 효과를 주기위해서
      showI = 0; // 다시 초기화 시켜서 한칸씩 가라 : 무한회전으로 보이도록
      // SlideBanner(showI);
      // viewBanner.animate({left:showI * -100 + '%'});
      // indiLi.removeClass('active');
      // indiLi.eq(showI).addClass('active');
    }else{
      showI += 1;
    }
    console.log(showI);
    SlideBtn(showI);
  });



  prevBtn.on('click',function(e){
      e.preventDefault();
      if(showI <= 0){ // 0보다 작거나 같다면,
        showI = -1; // 무조건 -1이 되어라
        indiLi.removeClass('active');
        indiLi.eq(showI).addClass('active');
        mainUl.stop(true,true).animate({ left : showI * -100 + '%'},500,function(){ 
          //  -1 x -100% : +100% 하면 사실 상 맨앞에 5였다.하지만, 
          // function으로 실행하면서
          // 맨 뒤에 5로 이동하게 되었다.
          // showI값은 3가 되면서 -> eq(3) = 4번째 이미지
          showI = len-2;
          mainUl.css({left:showI * -100 + '%'});
        });
      }else{        //아니면
        showI -= 1; // 1씩 빼줘라
        SlideBtn(showI);
      }

    });

  // 인디케이터

   indiLi.on('click',function(e) {
    e.preventDefault();
    showI = $(this).index();
    console.log(showI);
   
    SlideBtn(showI);
  });

  var movingSlide;

  var startMove = function(){
    movingSlide = setInterval(function(){
      nextBtn.trigger('click');
    }, 4000);
  };

  var stopMove = function(){
    clearInterval( movingSlide );
  };

  var mainBig = $('.main_big');
  startMove();
  mainBig.on({ 'mouseenter': stopMove, 'mouseleave': startMove  });

})(jQuery);

