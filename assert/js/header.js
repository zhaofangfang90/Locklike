/*响应式导航*/
$(document).ready(function(){
   $("#menuBtn").click(function(){
      //debugger;
      $(this).toggleClass("menu-btn-selected");
      $(this).parents(".nav_conn").siblings(".header_wrapper_mob").slideToggle();
   });
});

/*关于我们 下拉*/
$(document).ready(function(){
   $("#aboutUs").click(function(){
         $(this).find(".about_list").slideToggle();
         $(this).find(".down_icon").toggleClass("up_icon");
   }) ;
   /*$(".close_nav_about").click(function(){
       $(this).parents(".about_list").slideUp();
   });*/
 /*$(".nav_item_about").mouseenter(function(){
     $(this).siblings(".about_list").slideDown();
     return false;
 });
 $(".about_list").mouseleave(function(){
     $(this).slideUp();
     return false;
 });*/
});
