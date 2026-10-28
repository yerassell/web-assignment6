$(".append").click(function(){
    $(".items").append("<li>New item after</li>");
});
$(".prepend").click(function(){
    $(".items").prepend("<li>New item before</li>");
});
$(".remove").click(function(){
    $(".items li").remove();
}); 