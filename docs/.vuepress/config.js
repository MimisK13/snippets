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
				title: 'Laravel',
				//path: '/php/laravel/',
				collapsable: true,
				children: [
					{
						title: 'Model',
						path: '/php/laravel/model.md',
					},
					{
						title: 'Migrations',
						path: '/php/laravel/migrations.md',
					},
					{
						title: 'Controller',
						path: '/php/laravel/controller.md',						
					},
					{
						title: 'Routes',
						path: '/php/laravel/routes.md',						
					},
					{
						title: 'Observer',
						path: '/php/laravel/observer.md',						
					},
					{
						title: 'Packages',
						path: '/php/laravel/packages.md',						
					}						
					
				]
			}
		]
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
