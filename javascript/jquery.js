// animaciones con jquery en la pagina Tienda

$(document).ready (function() {
	$('.novedades__texto--tamanio').text("Ponete al día con las ultimas novedades y ofertas que tenemos en Metropolis con los accesorios, cámaras, films y lentes que tenemos para ofrecerte.");
});

$(document).ready(function(){
	$('.imgJQuno').hover(function()

	{ $('.imgJQuno').attr('src', '../assets/img/tienda/1q.jpg'); },
	function() 
	{$('.imgJQuno').attr('src', '../assets/img/tienda/lomo1.jpg'); })
});

$(document).ready(function(){
	$('.imgJQdos').hover(function()

	{ $('.imgJQdos').attr('src', '../assets/img/tienda/2q.jpg'); },
	function() 
	{$('.imgJQdos').attr('src', '../assets/img/tienda/lomo2.jpg'); })
});

$(document).ready(function(){
	$('.imgJQtres').hover(function()

	{ $('.imgJQtres').attr('src', '../assets/img/tienda/3q.jpg'); },
	function()
	{$('.imgJQtres').attr('src', '../assets/img/tienda/lomo3.jpg'); })
});

$(document).ready(function(){
	$('.imgJQcuatro').hover(function()

	{ $('.imgJQcuatro').attr('src', '../assets/img/tienda/4q.jpg'); },
	function() 
	{$('.imgJQcuatro').attr('src', '../assets/img/tienda/lomo4.jpg'); })
});

$(document).ready(function(){
	$('.contenedor-carrito').hide();

});

$(document).ready(function(){
	$('.addToCart').click(function(){
		$('.contenedor-carrito').show();
	});
});

$(document).ready(function(){
	$('.botonBorrar').click(function(){
		$('.contenedor-carrito').fadeOut()
	});
});
