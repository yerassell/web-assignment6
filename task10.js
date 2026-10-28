$("#combined").click(function(){
    $(this).animate({opacity: 0.3, left: '150px', width: '40px', height: '40px'}, 800)
           .animate({opacity: 1, left: '0px', width: '80px', height: '80px'}, 800);
});