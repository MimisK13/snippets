module.exports = {
	title: 'Mimis K',
	description: 'Just playing around',
	base: '/snippets/',
	themeConfig: {
		repo: 'MimisK13/snippets',
		editLinks: false,
		docsDir: '',
		editLinkText: 'Edit this page on GitHub',
		lastUpdated: 'Last Updated',
		displayAllHeaders: true,
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Guide', link: '/guide/' },
			// { text: 'External', link: 'https://google.com' }
		],
		sidebar:
		[
			{
				title: 'Home',
				path: '/',
				collapsable: true,
				sidebarDepth: -1,
				children: [
					''
				]
			},
			{
				title: 'PHP',
				path: '/php/',
				collapsable: true,
				//sidebarDepth: -1,
				sidebarDepth: 2,
				children: [
					'',
					'pdo',
				]
			}
		]


			// 'Home': '/' ,
			// '/php/': getPHPSiderbar( 'PHP')



			// '/php/': [
			// 	'',     /* /foo/ */
			// 	'pdo',  /* /foo/one.html */
			// ],
			//
			// '/JavaScript/': [
			// 	'',      /* /bar/ */
			// ],

			//// fallback
			// '/': [
			// 	'',
			// 	'/php/',
			// 	//'contact',
			// 	//'about'
			// ]

	},
  
	plugins: [
		['@vuepress/back-to-top', true],
		[
			'@vuepress/search', 
			{
				searchMaxSuggestions: 10
			}
		],
		[
			'@vuepress/last-updated',
			{
				dateOptions:{
					hour12: false
				}
			}
		]
	]
}

/*
function getPHPSiderbar (groupA, groupB) {
	return [
		{
			title: groupA,
			collapsable: true,
			sidebarDepth: -1,
			children: [
				'pdo',
			]
		}
	]
}
 */