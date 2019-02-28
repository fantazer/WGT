window.jStoreConfig = {
    "restaurant" : "3f46ac68-54f4-4ea5-84c1-b7db224a544e",
    //"restaurant" : "a8af42fb-ac27-11e8-80d2-d8d385655247",
    //"restaurant" : "f0a741f9-b494-11e7-80ca-d8d385655247",
    //"restaurant" : "44e4dda6-02c4-11e5-80c1-d8d385655247",
			'loc': {
				'Auth': 'Вход',
				'energy_sum': 'Состав',
				'Nutritional_value': 'Состав',
				'Total': 'Итого',
				'Delivery_to_House': '<span>Доставка на дом</span>',
				'Take_from_Rest': '<span>Забрать из ресторана</span>',
				'Order_comment': 'Комментарий к заказу, аккаунт ВК или Instagram, номер купона'
			},
			'templates': [
				{
				 'type': 'itemsFilter#first',
				 'class': 'product-items',
				 'template' : '#cart-favorites',
				 'properties': {
				 'sliderUse': false,
				 'tags': ['novinka']
				 }
				},
				{
					'type': 'itemPopUp',
					'template': '#custom-popup'
				},
				{
					'type': 'lastPurchases#top_lastPurchases',
					'class': 'test',
					'properties': {
						'sliderUse': true,
						'showLastPurchases': true,
						'sliderConfig': {
							infinite: true,
							variableWidth: true,
							autoplay: true,
							autoplaySpeed: 4000,
							prevArrow: '<span class="lsp-slider-prev"><</span>',
							nextArrow: '<span class="lsp-slider-next">></span>',
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				},
				{
					'type': 'userRegister',
					'properties': {
						'showInPopUp': true
					}
				},
				{
					'type': 'userRememberPassword',
					'properties': {
						'showInPopUp': true
					}
				},
				{
					'type': 'userPersonalEdit',
					'properties': {
						'showInPopUp': true
					}
				},
				{
					'type': 'userAuth',
					'properties': {
						'showInPopUp': true
					}
				},
				{
					'type': 'checkOrder',
					'properties': {
						'showInPopUp': true
					}
				},
				{
					'type': 'orderSuccess',
					'properties': {
						'showInPopUp': true
					}
				},
				{
					'SpecialOfferProductCode': 'yasenevo',
					'SpecialOfferPrice': 130,
					'EndDate': null,
					'IsHappyHour': true
				},
        /*{
					'type': 'catalogItem',
					'template': '#pageToppings',
					'class' : 'page-toppings'
        }*/
			]
};
