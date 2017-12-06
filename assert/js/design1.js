var section_one=$(".section_one");
var section_two=$(".section_two");
var section_three=$(".section_three");
var section_four=$(".section_four");
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
        }
    }});

