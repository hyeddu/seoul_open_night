/*main.js파일 */

$(document).ready(function(){

    //wow초기세팅
    new WOW().init();

    //메뉴버튼
    let btnMenu = $('#header .btn-menu'),
        sideMenu = $('#header .side-menu')

    btnMenu.click(function(){
        
        if($(this).hasClass('on')){
            $(this).removeClass('on');
            sideMenu.stop().animate({'right':'-390px'},300,'swing');
        }else{
            $(this).addClass('on');
            sideMenu.stop().animate({'right':'0'},300,'swing');
        }
    });
    //이미지효과
    let img1 = $('.img1')
        img2 = $('.img2')
        img3 = $('.img3')
        img4 = $('.img4');

    img1.hover(function(){
        $(this).stop().animate({'top':'68px'},200,'swing');
    },function(){
        $(this).stop().animate({'top':'83px'},200,'swing');
    });

    img2.hover(function(){
        $(this).stop().animate({'bottom':'15px'},200,'swing');
    },function(){
        $(this).stop().animate({'bottom':'0'},200,'swing');
    });

    img3.hover(function(){
        $(this).stop().animate({'top':'35px'},200,'swing');
    },function(){
        $(this).stop().animate({'top':'50px'},200,'swing');
    });
    
    img4.hover(function(){
        $(this).stop().animate({'top':'65px'},200,'swing');
    },function(){
        $(this).stop().animate({'top':'80px'},200,'swing');
    });
    
});


