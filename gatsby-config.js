/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {siteUrl: `https://djaimes.com`},
	plugins: [
		`gatsby-plugin-postcss`,
		`gatsby-plugin-react-helmet`,
		{
	    	resolve: `gatsby-plugin-sharp`,
	    	options: {
				useMozJpeg: false,
				stripMetadata: false,
				defaultQuality: 50,
	    	},
	 	},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				icon: `src/images/favicon.png`,
				icon_options: {purpose: `any maskable`},
				name: `David Jaimes`,
				short_name: `djaimes`,
				description: `Husband, Scientist, and Trail Runner.`,
				lang: `en`,
				start_url: `/`,
				display: `standalone`,
				theme_color: `#fff`,
				background_color: `#fff`
      		},
    	},
  		{resolve: `gatsby-plugin-offline`},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/src/pages/`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images/`,
			},
		},
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				remarkPlugins: [require(`remark-math`)],
    			rehypePlugins: [require(`rehype-katex`)],
				defaultLayouts: {default: require.resolve(`./src/components/homepage.jsx`)},
				extensions: [`.mdx`, `.md`],
				plugins: [`gatsby-remark-images`],
				gatsbyRemarkPlugins: [
					{
				    	resolve: `gatsby-remark-prismjs`,
				    	options: {
				      		classPrefix: 'language-',
				      		inlineCodeMarker: null
				    	}
				  	},
					{
	            		resolve: `gatsby-remark-images`,
	            		options: {
	            			maxWidth: 768,
	            			showCaptions: false,
	            			markdownCaptions: false,
	            		},
	          		},
				]
			},
		},
	],
}