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
    
    //proud wrapper item-1
    $("#item-1").click(function(){

        $(".proud-wrapper-item-1").fadeIn();
    });

    $(".close-proud").click(function(){

        $(".proud-wrapper-item-1").fadeOut();   
    });
    //Proud wrapper end

    //proud wrapper item-2
    $("#item-2").click(function(){

        $(".proud-wrapper-item-2").fadeIn();
    });

    $(".close-proud").click(function(){

        $(".proud-wrapper-item-2").fadeOut();   
    });
    //Proud wrapper end

    //proud wrapper item-3
    $("#item-3").click(function(){

        $(".proud-wrapper-item-3").fadeIn();
    });

    $(".close-proud").click(function(){

        $(".proud-wrapper-item-3").fadeOut();   
    });
    //Proud wrapper end
    //proud wrapper item-4
    $("#item-4").click(function(){

        $(".proud-wrapper-item-4").fadeIn();
    });

    $(".close-proud").click(function(){

        $(".proud-wrapper-item-4").fadeOut();   
    });
    //Proud wrapper end
    //proud wrapper item-1
    $("#item-5").click(function(){

        $(".proud-wrapper-item-5").fadeIn();
    });

    $(".close-proud").click(function(){

        $(".proud-wrapper-item-5").fadeOut();   
    });
    //Proud wrapper end
    //proud wrapper item-6
    $("#item-6").click(function(){

        $(".proud-wrapper-item-6").fadeIn();
    });

    $(".close-proud").click(function(){

        $(".proud-wrapper-item-6").fadeOut();   
    });
    //Proud wrapper end

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

