
$(function() {
    // ハンバーガーメニュー
    $('.hamburger').on('click', function() {
        $('.header__list').toggleClass('active');
        $('.hamburger').toggleClass('active');
        $('#navi').toggleClass('active');
        $('header').toggleClass('active');
    });

    $('.header__list a').on('click', function(){
        $('#navi').removeClass('active');
        $('.hamburger').toggleClass('active');
    });
    
    // リンククリックイベント
    $('a[href^="#"]').on('click',function() {
        var adjust = -100;  //スクロール位置
        var speed = 500;    //スクロール速度
        var href = $(this).attr('href');    //リンク取得
        var target = $(href == "#" || href == "" ? "html" : href);  //距離の取得
        var position = target.offset().top + adjust;    //トップからの距離を取得し、位置を合わせる
        $('html, body').animate(
            {
            scrollTop: position
        }, 
        speed, "swing"
        );
        return false;
    });

    //ページトップボタン
    $('.page-top').on('click', function () {
        $("body,html").animate({ scrollTop: 0, }, 300);
        return false;
    });
    
    // ページトップボタンスクロールイベント(フェードイン・アウト)
    const PageTop = $('.page-top');
    PageTop.hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 700) {
            PageTop.fadeIn();
        } else {
            PageTop.fadeOut();
        }
    });
    // ページスクロールコンテンツアニメーション
    $(window).on('scroll', function() {
        mvHeight = $('.mainvisual').height();
        if($(window).scrollTop() > mvHeight - 200) {
            $('.fade-in').addClass('scroll-in');
        } else {
            $('.fade-in').removeClass('scroll-in');
        }
    })
    // ページフェードイン・アウト
    $(window).on('load', function() {
        setTimeout(function(){
            $('.mask').fadeOut(500);
        },500);
    })
    
    // スライダー
    $('.slider').slick({
        autoplay: true,       //自動再生
        autoplaySpeed: 2000,  //自動再生のスピード
        speed: 800,           //スライドするスピード
        dots: true,           //スライド下のドット
        arrows: false,         //左右の矢印
        infinite: true,       //永久にループさせる
        slidesToShow: 3,
    });

});