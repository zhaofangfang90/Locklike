$(document).ready(function(){
    var w=$(window).width();
    if(w>959){
        $(".banner_slogan").mouseenter(function(){
            $(this).addClass("banner_slogan_hover");
            /* $(this).find(".banner_desc").fadeIn();*/
        });
        $(".banner_slogan").mouseleave(function(){
            $(this).removeClass("banner_slogan_hover");
            /*  $(this).find(".banner_desc").fadeOut();*/
        });
    }

});