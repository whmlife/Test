$(function() {
    var timer = setInterval(move, 2000);
    $(".box").mouseover(function() {
        clearInterval(timer);
    });
    $(".box").mouseout(function() {
        timer = setInterval(move, 2000);
    });
    var i = 0;

    function move() {
        if (i == 3) {
            i = 0;
        } else {
            i++;
        }
        $(".box >ul >li").eq(i).fadeIn("fast").siblings().fadeOut("fast");
    }
});
