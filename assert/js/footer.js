$(document).ready(function(){
	  var w=$(window).width();
		if(w>959){
		   $(window).scroll(function(){
	       var scrollValue=$(window).scrollTop();
	       scrollValue > 100 ? $("#backTop_pic").fadeIn():$("#backTop_pic").fadeOut();
	   });
	   $("#backTop_pic").click(function(){
	       $("html,body").animate({scrollTop:0},200);
	   });
	}else{
		return false;
	}
  
});