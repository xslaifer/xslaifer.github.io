$(document).ready(function(){  
  
  $("#tecnologia").click(function () {
    $("html,body").animate({
        scrollTop: $("#div_tec").offset().top
    }, 1000);
});

  $("#videos").click(function () {
    $("html,body").animate({
        scrollTop: $("#div_vid").offset().top
    }, 1000);
});

    $("#miscelaneos").click(function () {
    $("html,body").animate({
        scrollTop: $("#div_misce").offset().top
    }, 1000);
});

      $("#noticias").click(function () {
    $("html,body").animate({
        scrollTop: $("#div_noti").offset().top
    }, 1000);
});
});  