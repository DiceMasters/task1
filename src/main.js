$(document).ready( function(){



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

})