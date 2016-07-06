({
	block: 'page',
	mods: { 'sticky-push': true},
	title: 'Страница книги',
	head: [
		{
			elem : 'meta',
			attrs : { name : 'viewport', content: 'width=1260' },
		},
		{ elem: 'css', url: '../merged/_merged.css' },
		{
			elem : 'conditional-comment',
			condition : '< IE 9',
			content : [
				{ elem : 'js', url : '//yastatic.net/es5-shims/0.0.1/es5-shims.min.js' },
				{ elem : 'js', url : '/js/modernizr-html5shiv-respond.min.js' },
				{ elem : 'js', url : '/js/polifil_event.js' }
			]
		},
		{ elem: 'js', url: '../merged/_merged.js' }
	],
	content: [
		{
			block: 'blur',
			js: true,
			url: '/img/background-blur/background-gradient-service-min.jpg'
		},
		{
			block: 'container',
			content: {
				block: 'row',
				content: {
					block: 'col-md-offset-2',
					mix: [{block: 'col-md-8'}],
					content: [
						{
							block: 'article',
							elem: 'title',
							mods : { subtitle: true },
							content: 'Библия торговли'
						},
						{
							block: 'content',
							elem: 'title',
							mods: { size: 'xxs' },
							content: 'Автор: Джеффри Гитомер '
						},
						{
							block: 'article',
							elem: 'books',
							content: [
								{
									block: 'file-link',
									mods: { display: 'inline-block', color: 'white' },
									extension: 'ePub',
									size: '237 КБ',
									url: '22'
								},
								{
									block: 'file-link',
									mods: { display: 'inline-block', color: 'white' },
									extension: 'Mobi',
									size: '237 КБ',
									url: '22'
								}
							]
						}
					]
				}
			}
		},
		{
			block: 'content',
			content: {
				elem: 'inner',
				content: [
					{
						block: 'row',
						content: [
							{

								block: 'col-md-offset-2',
								mix: [{ block: 'col-md-8'}, { block: 'content', elem: 'manager' }],
								content: [
									{
										tag: 'h3',
										content: 'Самари книги библия торговли'
									},
									{
										tag: 'p',
										content: '«Библия торговли» — очень необычная книга. Прежде всего, само название неординарно. Первая глава называется «Книгой бытия», и за ней следуют другие книги-главы. Однако за столь претенциозным названием кроется не столько желание автора продемонстрировать, что он знает о торговле абсолютно все, сколько стремление дать ответы на максимальное количество вопросов о сути торговли, о работе продавца, о методах, способах и инструментах продаж. И надо сказать, Джеффри Гитомеру это удается! Несомненно, это первая книга, которую стоит изучить начинающему продавцу, и обязательное чтение для тех, кто уже не первый день работает в торговле.'
									},
									{
										tag: 'p',
										content: 'Автор утверждает, что <strong>торговля — это сложная наука</strong>, которую нужно постигать каждый день, открывая новые горизонты, и при этом ежедневно удивляться ее нескончаемым возможностям. В то же время, <strong>к продажам следует подходить творчески:</strong> если вы будете слепо следовать правилам, которые предлагает автор, успеха не добьетесь, — все надо переосмысливать и модифицировать под себя. Д. Гитомер также отмечает, что <strong>в торговле есть элементы религии:</strong> существуют ежедневные ритуалы, которые необходимо соблюдать неукоснительно.'
									},
									{
										tag: 'p',
										content: 'Стремление просто продать свой товар — цель далекого прошлого. Современный подход к торговле подразумевает, что нужно стремиться к тому, чтобы покупатель был удовлетворен обслуживанием или качеством товара настолько, что вернулся бы к вам снова и рекомендовал знакомым.'
									},
									{
										tag: 'p',
										content: 'Автор щедро делится с читателем секретами успешной торговли, разъясняя, в чем отличие между плохим и хорошим продавцом, и подсказывая, как грамотно организовать работу и увеличить прибыль.'
									}
								]
							}
						]
					},
				]
			}
		}
	]
});


