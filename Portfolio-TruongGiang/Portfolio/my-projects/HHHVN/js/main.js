$(document).ready(function() {
    "use strict";
    $('.scroll-to-top').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
    // end
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
        $(".menu-btn-show").toggleClass("active");
    });
    $(".menu-btn-show").click(function() {
        $(this).toggleClass("active");
        $('.menu-bar-mobile').fadeToggle(500);
        $(".shadow-open-menu").fadeToggle(500);
    });
    $(".slide-programe, .img-cate-news-media").owlCarousel({
        items : 1,
        slideSpeed : 300,
        pagination: false,
        navigation:true,
        itemsDesktop  :  [1200,1],
        itemsDesktopSmall :  [992,1],
        itemsTablet :  [560,1]
    });
    $('.tab-programme li a').click(function(){
        var getTabId = $(this).attr('id');                             
        $('.list-programe').hide();                          
        $('.tab-programme li a').removeClass('active');                         
        $(this).addClass('active');                             
        $('.programe-'+getTabId).show();                            
    });
});