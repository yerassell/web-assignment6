$("#box").click(function(){
    $(this)
        .animate({left: '150px'})              // 1. move right
        .animate({top: '150px'})               // 2. move down
        .animate({width: '40px', height: '40px'}) // 3. shrink
        .animate({left: '0px', top: '0px', width: '80px', height: '80px'}); // 4. return
});