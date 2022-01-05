module.exports = {
	title: 'Snippets',
	description: 'CheatSheet',
	base: '/snippets/',
	themeConfig: {
		//repo: 'MimisK13/snippets',
		editLinks: false,
		docsDir: '',
		editLinkText: 'Edit this page on GitHub',
		lastUpdated: 'Last Updated',
		displayAllHeaders: true,
		nav: [
			{ text: 'Home', link: '/' },
			//{ text: 'Guide', link: '/guide/' }			
		],
		sidebar: [
			// {
				// title: 'Home',
				// path: '/',
				// collapsable: true,
				// sidebarDepth: -1,
				// children: [
					// ''
				// ]
			// },
			{
				title: 'PHP',				
				collapsable: true,
				children: [
					{
						title: 'PDO',
						path: '/php/pdo.md',
					},
				]
			},
			{
				title: 'Laravel',				
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
			},
			{
				title: 'JavaScript',				
				collapsable: true,
				children: [
					{
						title: 'Model',
						path: '/javascript/',
					},
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
