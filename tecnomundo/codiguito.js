$(document).ready(function(){  
  
  $("#unete").click(function () {
    $("html,body").animate({
        scrollTop: $("#formulario").offset().top
    }, 0);
});
  
  $("#inicio").click(function () {
    $("html,body").animate({
        scrollTop: $("header").offset().top
    }, 1000);
});

  $("#novedades").click(function () {
    $("html,body").animate({
        scrollTop: $(".novedades_cont").offset().top
    }, 1000);
});

  $("#actualidad").click(function () {
    $("html,body").animate({
        scrollTop: $(".actualidad_cont").offset().top
    }, 1000);
});

});  