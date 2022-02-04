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
		displayAllHeaders: false,
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
						path: '/php/classes/pdo.md',
					},
					{
						title: 'Pagination',
						path: '/php/classes/pagination.md',
					},
				]
			},
			{
				title: 'Laravel',				
				collapsable: true,
				children: [
					{
						title: 'Installation',
						path: '/php/laravel/installation.md',
					},
					{
						title: 'Model',
						path: '/php/laravel/model.md',
					},
					{
						title: 'Scopes',
						path: '/php/laravel/scopes.md',
					},					
					{
						title: 'Queries',
						path: '/php/laravel/queries.md',
					},
					{
						title: 'Migrations',
						path: '/php/laravel/migrations.md',
					},
					{
						title: 'Factories',
						path: '/php/laravel/factories.md',
					},					
					{
						title: 'Seeders',
						path: '/php/laravel/seeders.md',
					},					
					{
						title: 'Controller',
						path: '/php/laravel/controller.md',						
					},
					{
						title: 'Validation',
						path: '/php/laravel/validation.md',						
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
						title: 'Views',
						path: '/php/laravel/views.md',						
					},
					{
						title: 'Testing',
						path: '/php/laravel/testing.md',						
					},
					{
						title: 'Packages',
						path: '/php/laravel/packages.md',						
					}
				]
			},
			{
				title: 'Livewire',
				collapsable: true,
				children: [
					{
						title: 'Installation',
						path: '/livewire/installation.md',
					},
				]
			},
			{
				title: 'Other',
				collapsable: true,
				children: [
					{
						title: 'Static Site Generators',
						path: '/other/static-site-generators.md',
					},
				]
			},
			{
				title: 'Javascript',
				collapsable: true,
				children: [
					{
						title: 'Modules',
						path: '/javascript/modules.md',
					},
				]
			},
			{
				title: 'HTML',
				collapsable: true,
				children: [
					{
						title: 'Bootstrap',
						path: '/html/bootstrap/',
						children: [
							{
								title: 'Forms',		
								path: '/html/bootstrap/forms/',								
								children: [
									{
										title: 'Form Control',
										path: '/html/bootstrap/forms/form-control.md',
									},
									{
										title: 'Select',
										path: '/html/bootstrap/forms/select.md',
									},	
									{
										title: 'Checks & Radios',
										path: '/html/bootstrap/forms/checks-radios.md',
									},									
									{
										title: 'Floating labels',
										path: '/html/bootstrap/forms/floating-labels.md',
									},									
									{
										title: 'Layout',
										path: '/html/bootstrap/forms/layout.md',										
									},
									{
										title: 'Validation',
										path: '/html/bootstrap/forms/validation.md',										
									}									
								]
							},
							{
								title: 'Tables',
								path: '/html/bootstrap/tables.md',
							},
							{
								title: 'Cards',
								path: '/html/bootstrap/cards.md',
							},							
						],											
					},
					{
						title: 'Tailwind',
						path: '/html/tailwind/',						
						children: [
							{
								title: 'Directives',
								path: '/html/tailwind/directives.md',								
							}
						]							
					},
				]
			},			
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
