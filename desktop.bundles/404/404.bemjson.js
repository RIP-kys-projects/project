/**
 * Created by andreiGladkov on 26.05.15.
 */
({
	block: 'page',
	mods: { 'sticky-push': true},
	title: 'Форма приема заявок от потенциальных партнеров.',
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
			url: '/img/background-blur/background-gradient-cabinet.jpg'
		},
		{
			block: 'content-opaque',
			content: {
				elem: 'inner',
				content: {
					block: 'row',
					content: {
						block: 'col-md-offset-2',
						mix: { block: 'col-md-8'},
						content: {
							block: 'article',
							elem: 'title',
							elemMods: { 'text-align': 'center'},
							content: 'Страница не найдена'
						}
					}
				}
			}
		}
	]
});

