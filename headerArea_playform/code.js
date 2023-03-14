let slideWrapper = $('.slide_wrapper'),
    slides = slideWrapper.find('li'),
    currentIdx = 0,
    timer = undefined,
    pager = slideWrapper.find('.pager a');

    // 슬라이드 배치
    slides.each(function(idx){
        $(this).css({left:`${idx*100}%`});
    });

    // 페이저 슬라이드 작동시키기
    pager.click(function(e){
        e.preventDefault();
        let idx = $(this).index(); // a링크가 하나일 경우 불가
        moveSlide(idx);
    });

    // moveSlide 함수
    function moveSlide(i){
        if(currentIdx === i) return; // 바로 전 보던 페이지와 같은지 확인
        let currentSlide = slides.eq(currentIdx);
        let nextSlide = slides.eq(i);

        // 다음 슬라이드 순간 left 100%, animate 0
        // 현재 슬라이드 순간 animate -100%
        nextSlide.css({left:'100%'}).animate({left:'0%'});
        currentSlide.animate({left:'-100%'});

        currentIdx = i;

        // 모든 pager에서 active 제거 후
        // 현재 번호에 맞는 요소에 active 추가
        pager.removeClass('active');
        pager.eq(currentIdx).addClass('active');
    }

    function autoSlide(){
        if (timer == undefined) {
            timer = setInterval(()=>{
                // let ni = (currentIdx + 1)%slides.length;
                let ni = currentIdx + 1;
                if(ni === slides.length){
                    ni = 0;
                }
                moveSlide(ni);
            }, 3000);
        }
    }
    autoSlide();
    slideWrapper.mouseenter(function(){
        clearInterval(timer);
        timer = undefined;
    })
    .mouseleave(function(){
        autoSlide();
    });