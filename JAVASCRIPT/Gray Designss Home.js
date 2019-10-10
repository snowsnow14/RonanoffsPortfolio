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
});
