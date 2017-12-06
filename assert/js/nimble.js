var section_one=$(".section_one");
var section_two=$(".section_two");
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
    },
    onLeave: function (anchorLink, index) {
        if(index==1){
            section_one.removeClass('section1');
        }
        if(index==2){
            section_two.removeClass('section2');
        }
    }});