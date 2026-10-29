$(".img").hide().fadeIn(1000);
$(".img").click(function(){
    $(this).animate({width: 450, height: 300}, 1000)
    .animate({width: 400, height: 250}, 1000);
});
$(".fadetoggle").click(function(){
    $(".img").fadeToggle(1500);
});