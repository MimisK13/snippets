module.exports = {
	title: 'MimisK',
	description: 'Just playing around',

	base: '/snippets/',
	
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Guide', link: '/guide/' },
			{ text: 'External', link: 'https://google.com' }
		]
	},
  
	plugins: [
		[
			'@vuepress/back-to-top'
		],
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