module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"icon":"src/images/favicon.png","icon_options":{"purpose":"any maskable"},"name":"David Jaimes","short_name":"djaimes","description":"Husband, Scientist, and Trail Runner.","lang":"en","start_url":"/","display":"standalone","theme_color":"#fff","background_color":"#fff","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"3904f8ae34cd845e664573dea6d38c6c"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[{"resolve":"/Users/djaimes/davidjaimes.github.io.20210613/node_modules/gatsby-remark-images","id":"28c42f28-53d0-5cae-aad5-aee248175898","name":"gatsby-remark-images","version":"5.1.0","pluginOptions":{"plugins":[],"maxWidth":650,"linkImagesToOriginal":true,"showCaptions":false,"markdownCaptions":false,"sizeByPixelDensity":false,"backgroundColor":"white","quality":50,"withWebp":false,"tracedSVG":false,"loading":"lazy","disableBgImageOnAlpha":false,"disableBgImage":false},"nodeAPIs":["pluginOptionsSchema"],"browserAPIs":["onRouteUpdate"],"ssrAPIs":[]}],"remarkPlugins":[null],"rehypePlugins":[null],"defaultLayouts":{"default":"/Users/djaimes/davidjaimes.github.io.20210613/src/components/homepage.jsx"},"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-prismjs","options":{"classPrefix":"language-","inlineCodeMarker":null}},{"resolve":"gatsby-remark-images","options":{"maxWidth":768,"showCaptions":false,"markdownCaptions":true}}],"lessBabel":false,"mediaTypes":["text/markdown","text/x-markdown"],"root":"/Users/djaimes/davidjaimes.github.io.20210613"},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":650,"linkImagesToOriginal":true,"showCaptions":false,"markdownCaptions":false,"sizeByPixelDensity":false,"backgroundColor":"white","quality":50,"withWebp":false,"tracedSVG":false,"loading":"lazy","disableBgImageOnAlpha":false,"disableBgImage":false},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
