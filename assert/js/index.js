/*var w=$(window).width();
var h=$(window).height();
alert(w);
alert(h);*/
var section_one=$(".section_one");
var section_two=$(".section_two");
var section_three=$(".section_three");
var section_four=$(".section_four");
var section_five=$(".section_five");
var section_six=$(".section_six");
var w=$(window).width();

$(".fullPage").fullpage({
    navigation: true,
    css3: false,
    afterLoad: function (anchorLink, index){
        if(index==1){
            section_one.addClass('section1');
        }
        if(index==2){
            section_two.addClass('section2');
        }
        if(index==3){
            section_three.addClass('section3');
        }
        if(index==4){
            section_four.addClass('section4');

            if(w>959){
                //PC端旋转动画
                setTimeout(function () {
                    $('.img_wrapper_pic_2').rotate({
                        angle: 0,
                        animateTo: 180,
                        center: ["50.12%", "51.65%"],
                        duration: 3000
                    });
                }, 800);
                setTimeout(function () {
                    $('.img_wrapper_pic_3').rotate({
                        angle: 0,
                        animateTo: 15,
                        center: ["50%", "52%"],
                        duration: 3000
                    });
                }, 1500);
                setTimeout(function () {
                    $('.img_wrapper_pic_3').rotate({
                        angle: 0,
                        animateTo: 0,
                        center: ["50%", "52%"],
                        duration: 3000
                    });
                }, 4000);
            }else{
                //手机端旋转动画
                setTimeout(function () {
                    $('.img_wrapper_pic_2').rotate({
                        angle: 0,
                        animateTo: 180,
                        center: ["49.4%", "71.8%"],
                        duration: 3000
                    });
                }, 800);
                setTimeout(function () {
                    $('.img_wrapper_pic_3').rotate({
                        angle: 0,
                        animateTo: 15,
                        center: ["51.4%", "71.8%"],
                        duration: 3000
                    });
                }, 2000);
                setTimeout(function () {
                    $('.img_wrapper_pic_3').rotate({
                        angle: 0,
                        animateTo: 0,
                        center: ["51.4%", "71.8%"],
                        duration: 3000
                    });
                }, 4000);
            }
        }
        if(index==5){
            section_five.addClass('section5');
        }
        if(index==6){
            section_six.addClass('section6');
        }
    },
    onLeave: function (anchorLink, index) {
        if(index==1){
            section_one.removeClass('section1');
        }
        if(index==2){
            section_two.removeClass('section2');
        }
        if(index==3){
            section_three.removeClass('section3');
        }
        if(index==4){
            section_four.removeClass('section4');

            if(w>959){
                //PC端移除动画
                $('.img_wrapper_pic_2').rotate({
                    angle: 0,
                    animateTo: 180,
                    center: ["50.12%", "51.65%"]
                });
                $('.img_wrapper_pic_3').rotate({
                    angle: 0,
                    animateTo: 0,
                    center: ["50%", "52%"]
                });
            }else{
                //手机端移除动画
                setTimeout(function () {
                    $('.img_wrapper_pic_2').rotate({
                        angle: 0,
                        animateTo: 180,
                        center: ["49.4%", "71.8%"],
                        duration: 3000
                    });
                }, 800);
                setTimeout(function () {
                    $('.img_wrapper_pic_3').rotate({
                        angle: 0,
                        animateTo: 0,
                        center: ["51.4%", "71.8%"],
                        duration: 3000
                    });
                }, 2000);
            }


        }
        if(index==5){
            section_five.removeClass('section5');
        }
        if(index==6){
            section_six.removeClass('section6');
        }
    }
});