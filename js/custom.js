jQuery(document).ready(function($){

    setTimeout(function(){
        $(".loader-wrapper").fadeOut();
    },1000);
    // search wrraper
    $("#search-btn").click(function(){

        $(".search-wrapper").fadeIn();
    });

    $("#close-search").click(function(){

        $(".search-wrapper").fadeOut();
    });
    
    //proud wrapper
    $("#item-6").click(function(){

        $(".proud-wrapper").fadeIn();
    });

    $("#close-proud").click(function(){

        $(".proud-wrapper").fadeOut();
    });


    //hamburger-menu
    $("#hamburger-btn").click(function(){

        if($(this).hasClass('opened')) {
            $("nav ul").slideUp();
        }else{
            $("nav ul").slideDown();
        }

        $(this).toggleClass('opened');

    });

    $(window).scroll(function(){
        if($(window).scrollTop()>50){
            $("nav").addClass('fixed-nav');
        }else{
            $("nav").removeClass('fixed-nav');
        }
    });
});

