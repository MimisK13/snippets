module.exports = {
	title: 'Mimis K',
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
			{
				title: 'PHP',				
				initialOpenGroupIndex: -1,
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
				path: '/php/laravel/',				
				initialOpenGroupIndex: -1,
				children: [
					{
						title: 'Database',
						path: '/php/laravel/database/',						
						children : [
							{
								title: 'Model',
								path: '/php/laravel/database/model.md',
							},
							{
								title: 'Scopes',
								path: '/php/laravel/database/scopes.md',
							},					
							{
								title: 'Queries',
								path: '/php/laravel/database/queries.md',
							},
							{
								title: 'Migrations',
								path: '/php/laravel/database/migrations.md',
							},
							{
								title: 'Factories',
								path: '/php/laravel/database/factories.md',
							},					
							{
								title: 'Seeders',
								path: '/php/laravel/database/seeders.md',
							},		
							{
								title: 'Observer',
								path: '/php/laravel/database/observer.md',						
							},	
							{
								title: 'Relationships',
								path: '/php/laravel/relationships/',
								children : [
									{
										title: 'Many To Many',
										path: '/php/laravel/relationships/many-to-many.md',
									},
									{
										title: 'Belongs To Many',
										path: '/php/laravel/relationships/belongs-to-many.md',
									}
								],						
							},							
						],
					},					
					{
						title: 'Controller',
						path: '/php/laravel/controller.md',						
					},
					{
						title: 'Validation',
						path: '/php/laravel/validation/',
						children : [
							{
								title: 'Form Request',
								path: '/php/laravel/validation/form-request.md',								
							},
							{
								title: 'Validation Rules',
								path: '/php/laravel/validation/validation-rules.md',
							},							
						],						
					},
					{
						title: 'Routes',
						path: '/php/laravel/routes.md',						
					},
					{
						title: 'Views',
						path: '/php/laravel/views.md',						
					},
					{
						title: 'Testing',
						path: '/php/laravel/testing/',						
						children : [
							{
								title: 'Controller Methods',
								path: '/php/laravel/testing/controller-methods.md',						
							},
						]
					},
					{
						title: 'Package Development',
						path: '/php/laravel/package-development/',						
						children : [
							{
								title: 'Views',
								path: '/php/laravel/package-development/views.md',						
							},
						]
					},
					{
						title: 'Packages',
						path: '/php/laravel/packages/',
						children : [
							{
								title: 'Guides',
								path: '/php/laravel/packages/guides/',
								children : [
									{
										title: 'Spatie/Permissions',
										path: '/php/laravel/packages/guides/spatie-permissions.md',											
									},
									{
										title: 'Spatie/Settings',
										path: '/php/laravel/packages/guides/spatie-settings.md',											
									},
									{
										title: 'Spatie/QueryBuilder',
										path: '/php/laravel/packages/guides/spatie-query-builder.md',											
									},
									{
										title: 'Spatie/Feed',
										path: '/php/laravel/packages/guides/spatie-feed.md',											
									},
									{
										title: 'Spatie/MediaLibrary',
										path: '/php/laravel/packages/guides/spatie-media-library.md',											
									},				
								]									
							}
						]						
					},
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
						title: 'AlpineJs',	
						path: '/javascript/alpinejs/',					
						children: [
							{
								title: 'Textarea',
								path: '/javascript/alpinejs/textarea.md',
							},
						]
					},
				]
			},
			{
				title: 'HTML',
				initialOpenGroupIndex: -1,
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
							},
							{
								title: 'Customization',
								path: '/html/tailwind/customization/',
								children: [
									{
										title: 'Presets',
										path: '/html/tailwind/customization/presets.md',
									}
								]
							},
						]							
					},
				]
			},			
		]
	},	
	plugins: [
		['@vuepress/pwa'],
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
		],
		[
			"vuepress-plugin-code-copy", {
				selector: String,
				align: String,
				color: String,
				backgroundTransition: Boolean,
				backgroundColor: String,
				successText: String
			}
		]
	]
}
