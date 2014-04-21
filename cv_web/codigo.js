$(document).ready(function(){
	$(".img_portafolio1").click(function(){

	$(".emergente1").css({

				"display":"block"
	});
 
});

	$(".cerrar").click(function(){
		$(".emergente1").css({
			"display":"none"


		});

	});


$(".uno").click(function(){
		$(".emergente_img1").css({
			"display":"block"


		});

		$(".emergente_img2").css({
			"display":"none"


		});

		$(".emergente_img3").css({
			"display":"none"


		});

	});

$(".dos").click(function(){
		$(".emergente_img2").css({
			"display":"block"


		});

		$(".emergente_img1").css({
			"display":"none"


		});


	});


$(".tres").click(function(){
		$(".emergente_img3").css({
			"display":"block"


		});

		$(".emergente_img1").css({
			"display":"none"


		});
		$(".emergente_img2").css({
			"display":"none"


		});

	});

});