({
	block: 'page',
	mods: { 'sticky-push': 'none'},
	title: 'Блог о бизнесе',
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
			url: '/img/background-blur/background-gradient-story.jpg'
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
							block: 'article-head',
							content: [
								{
									block: 'article',
									elem: 'title',
									mods: { 'margin-bottom' : 's'},
									content: 'Блог о бизнесе'
								},
								{
									block: 'article',
									elem: 'text',
									content: 'Обыкновенный текст для заполнения контент-менеджерами Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum'
								}
							]
						}
					]
				}
			}
		},
		{
			block: 'content',
			content:{
				elem: 'inner',
				content: [
					{
						block: 'abstract-section-list',
						mods: { 'content-inner': 'reset' , type: 'blog'},
						items:[
							{
								imgUrl: '/img/stories/author.jpg',
								title: 'Ай Пи Решения: Наблюдение за эффективностью',
								subtitle: 'Максим Голубев',
								subtitleSecond: [
									{
										tag: '',
										content: 'Сооснователь компании '
									},
									{
										block: 'link',
										url: '/',
										content: 'Ай Пи Решения'
									}

								],
								previewText: [
									{
										tag: 'p',
										content: 'Сооснователь компании «Ай Пи Решения» Максим Голубев расскрывает секрет, за счет чего ему удалось за год добиться успеха на рынке установки систем видеонаблюдения'
									},
									{
										block: 'abstract-section-list',
										elem: 'count-shows',
										mix: [{ block: 'position', mods: { align : 'right'}, }],
										tag: 'p',
										content: [
											{
												block: 'fa',
												tag: 'i',
												mix: { block: 'fa-eye'}
											},
											{
												tag: '',
												content: ' 20'
											}
										]
									}
								]
							},
							{
								imgUrl: '/img/stories/outofcloud_ceo2.jpg',
								title: 'Out of Cloud: Сегодня мы на гребне волны',
								subtitle: 'Артемий Петров',
								subtitleSecond: [
									{
										tag: '',
										content: 'Генеральный директор: '
									},
									{
										block: 'link',
										url: '/',
										content: 'Out of Cloud'
									}

								],
								previewText: [
									{
										tag: 'p',
										content: '«Out of cloud» — студия email-маркетинга. Студия помогает бизнесу делать регулярные рассылки по клиентской базе, увеличивать повторные продажи и превращать подписчиков в постоянных клиентов.'
									},
									{
										block: 'abstract-section-list',
										elem: 'count-shows',
										mix: [{ block: 'position', mods: { align : 'right'}, }],
										tag: 'p',
										content: [
											{
												block: 'fa',
												tag: 'i',
												mix: { block: 'fa-eye'}
											},
											{
												tag: '',
												content: ' 20'
											}
										]
									}
								]
							},
							{
								imgUrl: '/img/stories/story-list-1.png',
								title: 'Партия еды: я не знаю как работать не в кризис',
								subtitle: 'Александр Перумов',
								subtitleSecond: [
									{
										tag: '',
										content: 'Генеральный директор: '
									},
									{
										block: 'link',
										url: '/',
										content: 'Партия еды'
									}

								],
								previewText: [
									{
										tag: 'p',
										content: '«Партия еды» — сервис доставки продуктов и рецептов на 5 ужинов. Каждое воскресенье клиенты получают коробку с свежими, охлажденными и расфасованными по дням недели продуктами. Каждое блюдо готовится не больше 30 минут по фоторецепту.'
									},
									{
										block: 'abstract-section-list',
										elem: 'count-shows',
										mix: [{ block: 'position', mods: { align : 'right'}, }],
										tag: 'p',
										content: [
											{
												block: 'fa',
												tag: 'i',
												mix: { block: 'fa-eye'}
											},
											{
												tag: '',
												content: ' 20'
											}
										]
									}
								]
							},
							{
								imgUrl: '/img/stories/dodo-author.jpg',
								title: 'Додо Пицца: правило «минус один»',
								subtitle: 'Василий Перумов',
								subtitleSecond: [
									{
										tag: '',
										content: 'Генеральный директор: '
									},
									{
										block: 'link',
										url: '/',
										content: 'Додо Пицца'
									}

								],
								previewText: [
									{
										tag: 'p',
										content: '«Додо Пицца» — быстро растущая сеть пиццерий: открыто 4 собственных и 15 франчайзинговых предприятий. Ключевая особенность компании — автоматизация и учет всех бизнес-процессов, начиная от планирования закупки ингредиентов и приготовления теста до управленческой отчетности и мониторинга качества обслуживания в реальном времени.'
									},
									{
										block: 'abstract-section-list',
										elem: 'count-shows',
										mix: [{ block: 'position', mods: { align : 'right'}, }],
										tag: 'p',
										content: [
											{
												block: 'fa',
												tag: 'i',
												mix: { block: 'fa-eye'}
											},
											{
												tag: '',
												content: ' 20'
											}
										]
									}
								]
							}
						]
					},
					{
						block: 'row',
						content:{
							block: 'col-md-offset-2',
							mix: [{ block: 'col-md-8' }, { block: 'position', mods:{ align: 'center' } }],
							content: [
								{
									block: "pagination",
									mods: { margin: 'm', size: 's' },
									items: [
										{
											content: '1'
										},
										{
											content: '2'
										},
										{
											content: '3'
										},
										{
											content: '4'
										},
										{
											content: '5'
										},
										{
											content: '6'
										},
										{
											content: '7'
										}
									]
								}
							]
						}
					}

				]
			}
		}
	]
});


