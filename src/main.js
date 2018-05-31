$(document).ready( function(){

	/*
	*
	* Добавление в корзину
	*
	*/

	var min = 1;

	$('.good').children('button').click( function(){

		var caption = $(this).siblings('h3').html()
		var price = $(this).siblings('.price').html()
		var articul = $(this).parent('div.good').attr('articul')
		var curent = min++;
		console.log('Articul = ' + articul)

		var template = "\
			<div class='addToCart' lightbox='" + curent + "' id='needtoremove' style='display:none'>\
				<div class='topCart'>\
					<p>Товар добавлен в корзину!</p>\
					<button class='lightcloseButton' lightclose='" + curent + "'><i class='fa fa-times' aria-hidden='true'></i></button>\
				</div>\
				<p>" + caption + "</p>\
				<div class='downCart'>\
					<p>" + price + "</p>\
					<a href='#'>Перейти в корзину</a>\
				</div>\
			</div>\
		"

		if ( $('.addToCart').length >= 4 ) {
			var div = document.getElementById('needtoremove')
			document.getElementById('heaven').removeChild(div);
		}

		$('#heaven').append(template)
		$('div[lightbox = ' + curent + ']').fadeIn(250)

	})

	$('body').on('click', '.lightcloseButton', function(e) {
		$(this).closest('.addToCart').remove()
	})


	/*
	*
	* Всякие фичи
	*
	*/

	// Изменение цвета текста при выборе элементов фильтра
	$('.filters .promoted-checkbox > label').click( function(){

		var checker = $(this).siblings('input').prop('checked')

		if ( checker !== true ) {
			$(this).siblings('span').css('color','#ff6900')
		}
		else{
			$(this).siblings('span').css('color','inherit')
		}

	})

	// Открыть закрыть фильтры
	$('#filterShow').click( function(){

		if ( $('#filters').css('display') == 'none'){
			$('#filters').slideDown(250)
			$(this).html('Скрыть фильтр <i class="fa fa-caret-up" aria-hidden="true"></i></i>')
		}
		else {
			$('#filters').slideUp(250)
			$(this).html('Показать фильтр <i class="fa fa-caret-down" aria-hidden="true"></i></i>')
		}

	})

	// Плавающий Label
	$('.floatLabel > input').focusin( function(){

		$(this).siblings('label').css({'top':'-14px','transition-duration':'0.25s'})

	})

	$('.floatLabel > input').focusout( function(){

		if ( $(this).val() == '' ) {
			$(this).siblings('label').css({'top':'7px','transition-duration':'0.25s'})
		}
		else{
			$(this).siblings('label').css({'top':'-14px','transition-duration':'0.25s'})
		}

	})



})