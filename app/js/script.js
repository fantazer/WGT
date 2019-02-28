$(document).ready(function () {

	//stars
	$('.get-rating .star-row__el').hover(function () {
		if (!$(this).parent().hasClass('fix-rating')) {
			$('.get-rating .star-row__el').removeClass('star--active');
			$(this).addClass('star--active');
			$(this).prevAll('.star-row__el').addClass('star--active')
		}
	});
	$('.get-rating .star-row__el').click(function () {
		$(this).parent().toggleClass('fix-rating');
		$(this).addClass('star--active');
		$(this).prevAll('.star-row__el').addClass('star--active')
	});
	//stars==end


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

	//mobile menu
		//Фиксируем скрол
		$('.head-toggle--open').click(function(){
			$('body').css({
				overflow: '',
				position: '',
				top: ''
			})
		});

		$('.head-toggle').click(function(event){
			console.log('clc');
			event.stopPropagation();
			$(this).toggleClass('head-toggle--open');
			$('.slide-menu').toggleClass('slide-menu--open');
			$('body').toggleClass('body-fix')
		});

		$('.slide-menu').on("click", function (event) {
			event.stopPropagation();
		});

		var closeSlideMenu = function(){
				$('.head-toggle').removeClass('head-toggle--open');
				$('.slide-menu').removeClass('slide-menu--open');
				$('body').removeClass('body-fix');
				console.log('close slide menu');
		};
		$(document).on("click", function () {
				closeSlideMenu();
		});
		$('.slide-menu-cont .header-auth__enter').click(function(){
			closeSlideMenu();
		});
		//mobile menu===end

	//animate basket
	var flyBasket = function () {
	 $(".container .item-footer__get-btn ").click(function (e) { //click on btn
		 $('.header-menu__basket').removeClass('shake');
		setTimeout(function () {
						$('.header-menu__basket').addClass('shake');
		 }, 200)
	 });
	};

	//animate basket === end
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
		// + - card config === end

		//position scroll on open cart
		$('.header-menu__basket').click(function(){
			modalState.scrollPos = ($(window).scrollTop());
		});
		$('.modal-layer').click(function(){
			$(window).scrollTop(modalState.scrollPos);
			$('body').removeClass('cart-open');
		});
		$('.cart-item').click(function(e){
			e.stopPropagation();
		});
		//position scroll on open cart === end

		//add placeholder
		$('.label-row-field input').each(function () {
			$label = $(this).parent().parent().find('.label-row-text').text();
			$(this).attr('placeholder', $label.substring(0, $label.length - 1));
		});
		$('.label-row-field textarea').each(function () {
			$label = $(this).parent().parent().find('.label-row-text').text();
			$(this).attr('placeholder', $label.substring(0, $label.length - 1));
		});
		//add placeholder===end


	};
	//============ WIDGET ==============
	
	
	
	window.jStoreEvents = window.jStoreEvents ? window.jStoreEvents : [];

	jStoreEvents.push(['ready', function (data) {
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

		$('.loader').remove();
		$('body').removeClass('body--fix');
		//toggle mobile menu
		$('.slide-menu__title').click(function(){
			$(this).toggleClass('slide-menu__title--active');
			$('.slide-menu__list .lsp-block-menu-tree').slideToggle();
		});
		//toggle mobile menu===end

		onLoadWGT();
		flyBasket();
	}]);

	//change url
	jStoreEvents.push(['pageChanged', null, function(data){
		onLoadWGT();
		closeSlideMenu();
		flyBasket();
		$('body').removeClass('cart-open');
		$('.modal-layer').removeClass('modal-layer-show');
		$(window).scrollTop(0);

		var currentPage = data.newPage;
		if(currentPage == 'order'){
			$('.main-slider').hide();
			$('.page').addClass('page--white');
			$('.container').addClass('container--order');
		}else{
			$('.main-slider').show();
			$('.page').removeClass('page--white');
			$('.container').removeClass('container--order');
		}
	}]);

	//modal open
	jStoreEvents.push(['popupOpen', function (pageType, view) {
		modalState.scrollPos = $(window).scrollTop();
		$('body').css({
				overflow: 'hidden',
				position: 'fixed',
				overflowY: 'hidden',
				top: -modalState.scrollPos,
				width: '100%'
			});
	}]);

	//modal close
	jStoreEvents.push(['popupClose', function (pageType, view) {
		$('body').css({
			overflow: '',
			position: '',
			top: modalState.scrollPos
		});
		$(window).scrollTop(modalState.scrollPos);

	}]);

	//============ WIDGET ==============

});
