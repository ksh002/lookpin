$(function(){



    $("#slide_section .slide").slick({
        slide : "li", //슬라이드가 되어야 할 태그 지정 ex) div , li , p 
        infinite : true, //무한 반복 옵션
        slidesToShow : 1, //한 화면에 보여질 콘텐츠 개수
        slidesToScroll : 1, //스크롤 한번에 움직일 콘텐츠 개수
        arrow : true, //previous , next 기능 생성 유무 
        dots : true, //paginavigation 기능 생성 유무
        speed : 1000, //스크롤시 작동되는 시간 설정
        autoplay: true, //자동 스크롤 유무
        pauseOnHover : true, //슬라이드에 마우스 호버시 autoplay 일시정지 유무
        autoplaySpeed : 2000, //자동 스크롤시 다음으로 넘어가는데 걸리는 시간 설정
        draggable : false, //드래그 기능 유무
        fade : true,

        prevArrow : $(".left_arrow"), //previous 버튼 class 지정
        nextArrow : $(".right_arrow"), //next 버튼 class 지정
        appendDots : $(".bannerbtn_section"), //지정된 class의 자식으로 dots 생성

        // responsive:[ //반응형 옵션
        //     {
        //         breakpoint: 1700, //화면 width 값 1700px
        //         settings: { //위 옵션이 default 이고 setting  property 안에 추가
        //             slidesToShow : 1,
        //             slidesToScroll : 1
        //         }
        //     },
        //     {
        //         breakpoint: 1500, //화면 width 값 1500px
        //         settings: { //위 옵션이 default 이고 setting  property 안에 추가
        //             slidesToShow : 3,
        //             slidesToScroll : 3
        //         }
        //     },
        //     {
        //         breakpoint: 1100, //화면 width 값 1100px
        //         settings: { //위 옵션이 default 이고 setting  property 안에 추가
        //             slidesToShow : 2,
        //             slidesToScroll : 2
        //         }
        //     },
        //     {
        //         breakpoint: 850, //화면 width 값 850px
        //         settings: { //위 옵션이 default 이고 setting  property 안에 추가
        //             slidesToShow : 1,
        //             slidesToScroll : 1,
        //             draggable : true,
        //         }
        //     },
            
        // ]
    }); 
    // 메인배너 슬릭슬라이드

    $("#newItem_section .newSlide").slick({
        slide : "div", //슬라이드가 되어야 할 태그 지정 ex) div , li , p 
        infinite : true, //무한 반복 옵션
        slidesToShow : 7, //한 화면에 보여질 콘텐츠 개수
        slidesToScroll : 1, //스크롤 한번에 움직일 콘텐츠 개수
        arrow : true, //previous , next 기능 생성 유무 
        dots : true, //paginavigation 기능 생성 유무
        speed : 1000, //스크롤시 작동되는 시간 설정
        autoplay: true, //자동 스크롤 유무
        pauseOnHover : true, //슬라이드에 마우스 호버시 autoplay 일시정지 유무
        autoplaySpeed : 2000, //자동 스크롤시 다음으로 넘어가는데 걸리는 시간 설정
        draggable : false, //드래그 기능 유무

        prevArrow : $(".newleft_arrow"), //previous 버튼 class 지정
        nextArrow : $(".newright_arrow"), //next 버튼 class 지정
        appendDots : $(".bannertn_section"), //지정된 class의 자식으로 dots 생성

        responsive:[ //반응형 옵션
            {
                breakpoint: 1700, //화면 width 값 1700px
                settings: { //위 옵션이 default 이고 setting  property 안에 추가
                    slidesToShow : 6,
                    slidesToScroll : 1
                }
            },
            {
                breakpoint: 1420, //화면 width 값 1420px
                settings: { //위 옵션이 default 이고 setting  property 안에 추가
                    slidesToShow : 5,
                    slidesToScroll : 1
                }
            },
            {
                breakpoint: 1135, //화면 width 값 1135px
                settings: { //위 옵션이 default 이고 setting  property 안에 추가
                    slidesToShow : 4,
                    slidesToScroll : 2,
                }
            },
            {
                breakpoint: 870, //화면 width 값 870px
                settings: { //위 옵션이 default 이고 setting  property 안에 추가
                    slidesToShow : 3,
                    slidesToScroll : 2,
                }
            },
            {
                breakpoint: 501, //화면 width 값 501px
                settings: { //위 옵션이 default 이고 setting  property 안에 추가
                    slidesToShow : 2,
                    slidesToScroll : 2,
                    draggable : true,
                }
            },
            
        ]
    });
    // 뉴아이템 슬릭슬라이드 위

    $("#newItem_section .newSlide2").slick({
        slide : "div", //슬라이드가 되어야 할 태그 지정 ex) div , li , p 
        infinite : true, //무한 반복 옵션
        slidesToShow : 7, //한 화면에 보여질 콘텐츠 개수
        slidesToScroll : 1, //스크롤 한번에 움직일 콘텐츠 개수
        arrow : true, //previous , next 기능 생성 유무 
        dots : true, //paginavigation 기능 생성 유무
        speed : 1000, //스크롤시 작동되는 시간 설정
        autoplay: true, //자동 스크롤 유무
        pauseOnHover : true, //슬라이드에 마우스 호버시 autoplay 일시정지 유무
        autoplaySpeed : 2000, //자동 스크롤시 다음으로 넘어가는데 걸리는 시간 설정
        draggable : false, //드래그 기능 유무
        rtl:true,
        

        prevArrow : $(".newleft2_arrow"), //previous 버튼 class 지정
        nextArrow : $(".newright2_arrow"), //next 버튼 class 지정
        appendDots : $(".bannertn_section"), //지정된 class의 자식으로 dots 생성

        responsive:[ //반응형 옵션
            {
                breakpoint: 1700, //화면 width 값 1700px
                settings: { //위 옵션이 default 이고 setting  property 안에 추가
                    slidesToShow : 6,
                    slidesToScroll : 1
                }
            },
            {
                breakpoint: 1420, //화면 width 값 1420px
                settings: { //위 옵션이 default 이고 setting  property 안에 추가
                    slidesToShow : 5,
                    slidesToScroll : 1
                }
            },
            {
                breakpoint: 1135, //화면 width 값 1135px
                settings: { //위 옵션이 default 이고 setting  property 안에 추가
                    slidesToShow : 4,
                    slidesToScroll : 2,
                }
            },
            {
                breakpoint: 870, //화면 width 값 870px
                settings: { //위 옵션이 default 이고 setting  property 안에 추가
                    slidesToShow : 3,
                    slidesToScroll : 2,
                }
            },
            {
                breakpoint: 501, //화면 width 값 501px
                settings: { //위 옵션이 default 이고 setting  property 안에 추가
                    slidesToShow : 2,
                    slidesToScroll : 2,
                    draggable : true,
                }
            },
            
        ]
    });
    // 뉴아이템 슬릭슬라이드 아래

    $('.tap_btn div').click(function(e){
        if(e.target.className === "type2"){
            $('.search_bar').attr('placeholder','스토어를 검색해보세요.');
        } else if (e.target.className === "type1") {
            $('.search_bar').attr('placeholder','상품를 검색해보세요.');
        }

        $(this).addClass('active');
        $(this).siblings().removeClass('active');



    });

       
    $(".none-active").click(function(){
        let img = ($(this).attr("src") === "img/pin2.png")
            ? "img/pin3.png"
            : "img/pin2.png";
            $(this).attr("src",img);
         
    })

});


























