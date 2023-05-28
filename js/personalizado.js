$(window).scroll(function () {            
    if($(document).scrollTop()>10){                
        $('.bg-warning ').addClass("banner-background");
    }else{
        $('.bg-warning ').removeClass("banner-background");
    }
})