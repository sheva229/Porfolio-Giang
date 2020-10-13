$(".btn-show-more").click(function() {
    $(".sort-desc-about").toggleClass("open");
});

$(".item-program").each(function(){
    $(this).click(function(){
        $(".item-program").removeClass('open');
        $(this).addClass('open');
    });
});


// creat menu sidebar
$(".menu-bar-lv-1").each(function(){
    $(this).find(".span-lv-1").click(function(){
        $(this).toggleClass('rotate-menu');
        $(this).parent().find(".menu-bar-lv-2").toggle(500);
    });
});
$(".menu-bar-lv-2").each(function(){
    $(this).find(".span-lv-2").click(function(){
        $(this).toggleClass('rotate-menu');
        $(this).parent().find(".menu-bar-lv-3").toggle(500);
    });
});
$(".shadow-open-menu").click(function() {
    $('.menu-bar-mobile').fadeOut();
    $(".shadow-open-menu").fadeOut();
    $(".iconmenu").toggleClass("open");
    $(".hide-mobile-check").removeClass('show');
});
$(".iconmenu").click(function() {
    $(this).toggleClass("open");
    $('.menu-bar-mobile').fadeToggle(500);
    $(".shadow-open-menu").fadeToggle(500);
});
$(".item-faq").each(function(){
    $(this).find(".title").click(function(){
        $('.item-faq .content').hide();
        $('.item-faq .title').removeClass('active');
        $(this).addClass('active');
        $(this).next().show(500);
    });
});
$(document).ready(function(){
    $('.logo-footer').click(function(event){
        $('html, body').animate({
            scrollTop: $('body').offset().top - 10
        }, 500);
    });

    if ($(window).width() < 992 ) {
        $('.main-menu ul li').find('.span-lv-1').click(function(){
            if ($('.main-menu > ul > li').hasClass('active')) {
                $('.main-menu ul li').removeClass('active');
            } else{
                $('.main-menu ul li').removeClass('active');
                $(this).parent().toggleClass('active')
            }
            
        });
        $('.main-menu ul li').find('.span-lv-2').click(function(){
            if ($('.main-menu > ul > li > ul > li').hasClass('active')) {
                $('.main-menu > ul > li > ul > li').removeClass('active');
            } else{
                $('.main-menu > ul > li > ul > li').removeClass('active');
                $(this).parent().toggleClass('active')
            }
            
        });
    }
    var myScrollFunc = function () {
        var y = window.scrollY;
        if (y > 30) {
            $('.header').addClass('fixed-header');
        } else {
            $('.header').removeClass('fixed-header');
        };
    };
    window.addEventListener("scroll", myScrollFunc);

    $('.tab-book-ticket ul li a').click(function() {
        var getTabId = $(this).attr('id');
        $('.tab-book-ticket ul li a,.tab-book-ticket ul li').removeClass('active');
        $(this).addClass('active');
        $(this).parent().addClass('active');
        $('.tab-read').slideUp();
        $('.tab-read-' + getTabId).slideDown();

    });
});



function font_size_width_destop() {
    var width = window.innerWidth
    var font_size_html = width/1920*10;
    $('html').css({
        'font-size': font_size_html,
    });
}

$(window).resize(function(){
    if ($(window).width() >= 1000 ) {
        font_size_width_destop();
    }

});

if ($(window).width() >= 1000 ) {
    font_size_width_destop();
}

$(document).click(function (e) {
    if (!$(e.target).hasClass(".count-people") 
        && $(e.target).parents(".count-people").length === 0) 
    {
        $(".box-check-people").removeClass('open');
    }
});