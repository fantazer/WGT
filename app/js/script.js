$(document).ready(function () {

	//main slider
	$('.main-slider').slick({
  	slidesToShow: 1,
  	dots:false
	});

	$('.slider-control--right').click(function(){
		$(this).closest(".slider-wrap").find(".slider-item").slick('slickNext');
	});

	$('.slider-control--left').click(function(){
		$(this).closest(".slider-wrap").find(".slider-item").slick('slickPrev');
	});
	//main slider ===end

	//shrink
	var shrinkHeader = 250;
	var heightHeader=$('.header-menu-wrap').height();
	$(window).scroll(function() {
		var scroll = $(this).scrollTop();
		if ( scroll >= shrinkHeader ) {
				$('body').css('paddingTop',heightHeader);
				$('.header-menu-wrap').addClass('shrink');
			}
			else {
					$('body').css('paddingTop',0);
					$('.header-menu-wrap').removeClass('shrink');
			}
	});

	$(window).resize(function(){
		heightHeader=$('.header').height();
	});
	//shrink === end


	//modals
	var modalState = {
		"isModalShow": false, //state show modal
		"scrollPos": 0
	};
	$('.modal-content').click(function (event) {
		event.stopPropagation();
	});

	var openModal = function () {
		if (!$('.modal-layer').hasClass('modal-layer-show')) {
			$('.modal-layer').addClass('modal-layer-show');
			modalState.scrollPos = $(window).scrollTop();
			$('body').css({
				overflow: 'hidden',
				position: 'fixed',
				overflowY: 'hidden',
				top: -modalState.scrollPos,
				width: '100%'
			});
		}
		modalState.isModalShow = true;
	};
	var closeModal = function () {
		$('.modal-layer').removeClass('modal-layer-show');
		$('body').css({
			overflow: '',
			position: '',
			top: modalState.scrollPos
		});
		$(window).scrollTop(modalState.scrollPos);
		$('.modal').removeClass('modal__show');
		modalState.isModalShow = false;
	};

	var initModal = function (el) {
		openModal();
		$('.modal').each(function () {
			if ($(this).data('modal') === el) {
				$(this).addClass('modal__show')
			} else {
				$(this).removeClass('modal__show')
			}
		});
		var modalHeightCont = $(window).height();
		$('.modal-filter').height(modalHeightCont);

	};

	$('.modal-get').click(function () {
		var currentModal = $(this).data("modal");
		initModal(currentModal);
	});

	$('.modal-layer , .modal-close').click(function () {
		closeModal();
	});
	//modals===end
	
	if($('.loader').length > 0) {
		$('body').addClass('body--fix');
	}

	var onLoadWGT = function(){
		// + - card config
		$('.item-footer__get-btn').click(function(){
			$(this).closest('.item-footer__get').addClass('item-footer__get--active');
		});
		$('.item-count__el--minus').click(function(){
			var curent = $(this).closest('.item-footer__get').find('.item-count-val').val()*1 - 1;
			if(curent === 0){
				$(this).closest('.item-footer__get').removeClass('item-footer__get--active');
			}
			console.log(curent);
		});
		$('.item-count__el--plus').click(function(){
			var curent = $(this).closest('.item-footer__get').find('.item-count-val').val()*1 + 1;
			if(curent === 0){
				$(this).closest('.item-footer__get').removeClass('item-footer__get--active');
			}
		});
	};
	//============ WIDGET ==============
	window.jStoreEvents = window.jStoreEvents ? window.jStoreEvents : [];

	jStoreEvents.push(['ready', function () {
		//$('#lsp-block-tree').append('<li class="jstore-tag"><a href="/actions/" class="jstore-tag lsp-js-block-tree-item">Акции</a></li>');
		var checkAuth = function () {
			if(jStoreApp.user.isAuthorised()) {
				var wallets = jStoreApp.user.get('wallets');
				//кошелёк либо boolean false, либо массив из элементов со свойствами "name","balance", "type"
				if(wallets && wallets.length) {
					console.table(wallets);
					$('.header .bonus').text(Math.floor(wallets[0].balance)+'Б');
				} else {
					$('.header .bonus').text('Бонусы');
				}
				console.log('Auth status: authorized');
				$('.user').text(jStoreApp.user.getName());
			} else {
				console.log('Auth status: not authorized');
				$('.user').text('Войти');
			}
		};
		jStoreApp.user.on('change:authorized change:wallets', checkAuth);
		checkAuth();
		console.log('ready');

		$('.loader').remove();
		$('body').removeClass('body--fix');

		onLoadWGT();
		jStoreApp.cart.bind('change add remove',function(){
			console.log('change');
			onLoadWGT();
		})
	}]);
	//============ WIDGET ==============


});
