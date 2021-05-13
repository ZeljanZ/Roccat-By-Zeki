jQuery(document).ready(function($){

    setTimeout(function(){
        $(".loader-wrapper").fadeOut();
    },1000);

    $("#search-btn").click(function(){

        $(".search-wrapper").fadeIn();
    });

    $("#close-search").click(function(){

        $(".search-wrapper").fadeOut();
    });

    $(window).scroll(function(){
        if($(window).scrollTop()>50){
            $("nav").addClass('fixed-nav');
        }else{
            $("nav").removeClass('fixed-nav');
        }
    });
});

