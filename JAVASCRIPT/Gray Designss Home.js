$(function(){
    $('#toggle').click(function(){
    $('#menu').slideToggle();
        return false;
    });
    $(window).resize(function(){
        var p = 480;
        if(win > p){
            $('#menu').show();
        }
    })

    $('.footer-logo').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500); //ワッハッハ
        return false;
    });
});
