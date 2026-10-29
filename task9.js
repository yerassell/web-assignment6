$("#box").click(function(){
    $("#task9").animate({height:350}, 1000);
    $(this)
        .animate({left: '150px'})              
        .animate({top: '150px'})               
        .animate({width: '40px', height: '40px'}) 
        .animate({left: '0px', top: '0px', width: '80px', height: '80px'}); 
    $("#task9").animate({height:200}, 1000);
    
});