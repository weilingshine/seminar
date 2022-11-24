$(function($) {
    rwd_fun3();
    $(window).resize(rwd_fun3);
});
function rwd_fun3() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    if (width < 992) {
        $(".nav li a").on('click',function(e){
            if($(this).next('.dropdown-menu').css('display') == 'none') {
                $(this).next().slideDown();
            }else {
                $(this).next().slideUp();
            }
        });
    }
}
