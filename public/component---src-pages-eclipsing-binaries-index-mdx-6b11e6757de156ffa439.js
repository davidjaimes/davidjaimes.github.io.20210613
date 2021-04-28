(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[913],{7631:function(a,e,t){"use strict";t.r(e),t.d(e,{_frontmatter:function(){return p},default:function(){return r}});var n=t(9756),s=(t(7294),t(4983)),o=t(9997),p={},c={_frontmatter:p},l=o.Z;function r(a){var e=a.components,t=(0,n.Z)(a,["components"]);return(0,s.kt)(l,Object.assign({},c,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{align:"center",style:{marginTop:"2em"}},(0,s.kt)("b",null,"KOI-3570:")," An Eclipsing Binary Star System"),(0,s.kt)("br",null),(0,s.kt)("br",null),(0,s.kt)("p",null,"Time series analysis in search for eclipsing binary stars can be daunting. Sometimes, it takes hours--even days or months--to find a single eclipsing binary in a dataset. However, when you find one, it is exciting. The following is an example light curve for target Kepler Object of Interest (KOI) 3570."),(0,s.kt)("br",null),(0,s.kt)("br",null),(0,s.kt)("h2",null,"KOI-3570"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"KOI-3570")," (aliases: ",(0,s.kt)("strong",{parentName:"p"},"2MASS J19405783+4009273"),", ",(0,s.kt)("strong",{parentName:"p"},"KIC 5023948"),", and ",(0,s.kt)("strong",{parentName:"p"},"WISE J194057.82+400927.3"),") is an eclipsing binary star system. It is a member of the old open cluster NGC 6819. By analyzing the eclipse properties of this system, we can measure the mass and radius of each star. These measurements can be used to precisely determine the age of the stars."),(0,s.kt)("br",null),(0,s.kt)("br",null),(0,s.kt)("h2",null,"Getting the data: FITS file"),(0,s.kt)("p",null,"If you're familiar getting FITS files, then download the data from ",(0,s.kt)("a",{parentName:"p",href:"https://exoplanetarchive.ipac.caltech.edu"},"Nasa Exoplanet Archive"),". I downloaded the following batch file ",(0,s.kt)("code",{parentName:"p",className:"language-text"},"download_exoarch_27821.bat")," from the archive."),(0,s.kt)("div",{className:"gatsby-highlight","data-language":"bash"},(0,s.kt)("pre",{parentName:"div",className:"language-bash"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},(0,s.kt)("span",{parentName:"code",className:"token function"},"wget")," -v -O ",(0,s.kt)("span",{parentName:"code",className:"token string"},"'kplr005023948-2012060035710_slc_lc.tbl'")," ",(0,s.kt)("span",{parentName:"code",className:"token string"},"'http://exoplanetarchive.ipac.caltech.edu:80/data/ETSS//Kepler/005/756/03/kplr005023948-2012060035710_slc_lc.tbl'")))),(0,s.kt)("br",null),(0,s.kt)("p",null,"If you don't have the ",(0,s.kt)("code",{parentName:"p",className:"language-text"},"wget")," command installed in your system, then I recommend installing ",(0,s.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew")," and using the following command:"),(0,s.kt)("div",{className:"gatsby-highlight","data-language":"batch"},(0,s.kt)("pre",{parentName:"div",className:"language-batch"},(0,s.kt)("code",{parentName:"pre",className:"language-batch"},(0,s.kt)("span",{parentName:"code",className:"token command"},(0,s.kt)("span",{parentName:"span",className:"token keyword"},"brew")," install wget")))),(0,s.kt)("br",null),(0,s.kt)("br",null),(0,s.kt)("h2",null,"Lightcurve"),(0,s.kt)("p",null,"Use ",(0,s.kt)("a",{parentName:"p",href:"https://www.astropy.org/"},"AstroPy")," to plot a lightcurve (flux vs time) for KOI-3570. I am using ",(0,s.kt)("code",{parentName:"p",className:"language-text"},"kplr005023948-2012060035710_slc.fits")," because it has the greatest amount of data points in any file on the batch list--over 40,000 points."),(0,s.kt)("div",{className:"gatsby-highlight","data-language":"python"},(0,s.kt)("pre",{parentName:"div",className:"language-python"},(0,s.kt)("code",{parentName:"pre",className:"language-python"},(0,s.kt)("span",{parentName:"code",className:"token keyword"},"from")," astropy",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"io ",(0,s.kt)("span",{parentName:"code",className:"token keyword"},"import")," fits\n",(0,s.kt)("span",{parentName:"code",className:"token keyword"},"import")," matplotlib",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"pyplot ",(0,s.kt)("span",{parentName:"code",className:"token keyword"},"as")," plt\n\nhdu ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"=")," fits",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),(0,s.kt)("span",{parentName:"code",className:"token builtin"},"open"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,s.kt)("span",{parentName:"code",className:"token string"},"'kplr005023948-2012060035710_slc.fits'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")"),"\ntime ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"=")," hdu",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"["),(0,s.kt)("span",{parentName:"code",className:"token number"},"1"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"]"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"data",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"["),(0,s.kt)("span",{parentName:"code",className:"token string"},"'TIME'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"]"),"\nflux ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"=")," hdu",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"["),(0,s.kt)("span",{parentName:"code",className:"token number"},"1"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"]"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"data",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"["),(0,s.kt)("span",{parentName:"code",className:"token string"},"'SAP_FLUX'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"]"),"\nplt",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"plot",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),"time",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," flux",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," ",(0,s.kt)("span",{parentName:"code",className:"token string"},"'.'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," markersize",(0,s.kt)("span",{parentName:"code",className:"token operator"},"="),(0,s.kt)("span",{parentName:"code",className:"token number"},"1"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")")))),(0,s.kt)("br",null),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"800px"}},"\n      ",(0,s.kt)("a",{parentName:"span",className:"gatsby-resp-image-link",href:"/static/4214051aa054f34b03fce3f41c36ba28/59ab2/koi-3570-lc.png",style:{display:"block"},target:"_blank",rel:"noopener"},"\n    ",(0,s.kt)("span",{parentName:"a",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.5%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAC4jAAAuIwF4pT92AAACu0lEQVQ4y62TW2sTURSF15lkknQml6a5XybTmaRJibU3tS3VUqGCCoqg/0BREbzVVufU5oopVhD1QUEQBPVFRLSdPV6giIgX8Ff4UyonTqUUH90vs2fPnI911joHABiAIIAUgAKAGIAeHxBy54oCRACEVaBXzIIyogBCcjDaq6qK6KNM9ke9EYEAZAC7mNfvheTxA1D1pY9HTYuu6JZzTrecCyZ3LuuWc8ngzpXCDZo3uLOoW8413aKrBn9naQtvLvrz1d7wxMku0AvA6JIT/R6hrrC8Ua0s2dMGp7Jh0cRQjUraDTJNToP5646+u0YDBqdKkVN2d+NDJXPhmQ4gALcE0ASQBZPMPiA0dfdHaqa9Vpy9RYnROg0cuW1nxhqkTbXIGK5TZm7F1sYbZE637dSBzvvS0PzzQlhYtLn5d8v9XXI0K+ABrfk1PlxbNwaWKGZyMidalNAtyuxapnx60Ynva1K6yClfXrJ7x9sftdTZJ6ntCj1bQDlpdLestb5Hx2pr+fJNihR5V1ncsCg5WqdccsGJTrYoVeSUcYH5nUCvm3AKYMUYEJm5/zM+237bf7BDsbEGGcfu2MmpNqXnVuz8ngbFj9+x0/uaVJjr2H2HVj9oI/NPM2EgvOkCJQDa9lC01re+keW3WpmvR4rczk8212KmRYnx+no2uUDRyeZ6osgpV+ZrkfHW+1zyzOOEWLelUHg4KBrmVwVQyb3YlA/f+xze29nwDS47oVMPvyiVxVeBE49+hHD6pXzqwYZa5W+U/aufvKdf/+qRZ8/7xDpsUxjopizSZiwnDrEis6QERBgQCgZ84rAHVZ8krFHCaqBPAlTxXZG7sxgYS0uBEHaWUJuQfAHxTP4Ji4nbUwKY1rWGSWkAw8JvV0SCeWS/m4MH/yrG2Fabda+jgFUZYz73veTalNnx//+v3wKnqVm3R8MCAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"a",className:"gatsby-resp-image-image",alt:"koi-3570-lightcurve",title:"koi-3570-lightcurve",src:"/static/4214051aa054f34b03fce3f41c36ba28/acfc1/koi-3570-lc.png",srcSet:["/static/4214051aa054f34b03fce3f41c36ba28/59afc/koi-3570-lc.png 200w","/static/4214051aa054f34b03fce3f41c36ba28/a45af/koi-3570-lc.png 400w","/static/4214051aa054f34b03fce3f41c36ba28/acfc1/koi-3570-lc.png 800w","/static/4214051aa054f34b03fce3f41c36ba28/7dc98/koi-3570-lc.png 1200w","/static/4214051aa054f34b03fce3f41c36ba28/362ee/koi-3570-lc.png 1600w","/static/4214051aa054f34b03fce3f41c36ba28/59ab2/koi-3570-lc.png 1800w"],sizes:"(max-width: 800px) 100vw, 800px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n  "),"\n    ")),(0,s.kt)("br",null),(0,s.kt)("h2",null,"Phase Fold Lightcurve"),(0,s.kt)("p",null,"Arguably, one of the most important parameters to find for an eclipsing binary star system is the orbital period. There are many ways to find the period around the center of mass and the method I like to use is a multi-term Lomb-Scargle approach. For this system, I used the period published in Brewer et al. 2016. They found an orbital period of 3.649301 days. Phase folding the light curve with this orbital period yields the following plot. The secondary and primary eclipses are at about phase equal to 0.2 and 0.7, respectively."),(0,s.kt)("div",{className:"gatsby-highlight","data-language":"python"},(0,s.kt)("pre",{parentName:"div",className:"language-python"},(0,s.kt)("code",{parentName:"pre",className:"language-python"},"period ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"=")," ",(0,s.kt)("span",{parentName:"code",className:"token number"},"3.649301"),"\nphase ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"=")," ",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),"time ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"-")," time",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"["),(0,s.kt)("span",{parentName:"code",className:"token number"},"0"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"]"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")")," ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"/")," period ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"%")," ",(0,s.kt)("span",{parentName:"code",className:"token number"},"1"),"\nplt",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"plot",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),"phase",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," flux",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," ",(0,s.kt)("span",{parentName:"code",className:"token string"},"'.'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," markersize",(0,s.kt)("span",{parentName:"code",className:"token operator"},"="),(0,s.kt)("span",{parentName:"code",className:"token number"},"1"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")")))),(0,s.kt)("br",null),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"800px"}},"\n      ",(0,s.kt)("a",{parentName:"span",className:"gatsby-resp-image-link",href:"/static/e5f8b86bd9c9b292ab1c52f3f01c32db/59ab2/koi-3570-pflc.png",style:{display:"block"},target:"_blank",rel:"noopener"},"\n    ",(0,s.kt)("span",{parentName:"a",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.5%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAC4jAAAuIwF4pT92AAACvUlEQVQ4y7WTTUhUURTH/+++j/l6b+bNqDOjpuOMzoxfQxFuJIQwKApLEHIRFNEH1KIQyZnRGdPKFkaFFaUUQWGhos7XfRj2AbmoKAqidVuXUbRp0eLGlTuR1LYD9717z7vn9/7nnnMBQAKgAwhAkuoBmAAcAFxOwA3AUG0Oj+HQuN9luN0+GTD4XJfhEbFOHiepdhkAVABtzuYu7TBjqD52e18ovTLVkKKnYyNWT32SXgmlrGw4ZU3UJ2kmnLYmQilroC5JO8NpaySUpAOh9Eq65sRMXx9jnAcFQBjCjI7eQOjiG28kVYwlsjTqG7Qc289T+67LJbfjrGU7dL1ob81QT+2Q1dg9UXK3pZacDZOfXPrWPVUA5DIwAqCavytcmon2YewYywW6LtEIdj/Bu6d55dvbnMq+Lko/3ufU0XtFe0uGxq1i3sZeXyMcEjQ0j8h249EgBCrE5jS27D2FlnTek8jSeMcYxdGpEnmwUFDY90WwL4vStlHq5AoZu4v+7B1SyQshq3pZofwHkIAoeqBnAE1Dy67oMI21ZylO3iyRfL4gr7/KgbHHUiJLdQ4EnuNgdpoEAgGI4vxOOSBGpLLK7+POneNLntYMbQZe4NajglYoFGyziwX554dl9cBkyWzJ0Bhjc2RyZlZjjEnBYNBbTpmfQZ1QKEuyolfvH0RsaFmPD5fiiWwJRybnyPz8vPx59SEYu4D2kSJXGEX1R/QmbxC/379JIac2l4GQJD3a3Y/uc9NK39QzV4Ex3M+tSmtrazJjDGz9JekcL9r8ZxZ8fH08c5WEw+FNQK7QDqBGtA9P3a4S6Ia60eR2TdPcpmnylJym1+vVyEaw6jG9FZqqGuIi+MXx/WW1AKrECAHgReQ3qFZRVCJ+2iTJik9850LcYj/5F9AhNpbV8g5oFHOn8G9Ay70r1g78D/sFENS7VYRe7JQAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"a",className:"gatsby-resp-image-image",alt:"koi-3570-phasefold",title:"koi-3570-phasefold",src:"/static/e5f8b86bd9c9b292ab1c52f3f01c32db/acfc1/koi-3570-pflc.png",srcSet:["/static/e5f8b86bd9c9b292ab1c52f3f01c32db/59afc/koi-3570-pflc.png 200w","/static/e5f8b86bd9c9b292ab1c52f3f01c32db/a45af/koi-3570-pflc.png 400w","/static/e5f8b86bd9c9b292ab1c52f3f01c32db/acfc1/koi-3570-pflc.png 800w","/static/e5f8b86bd9c9b292ab1c52f3f01c32db/7dc98/koi-3570-pflc.png 1200w","/static/e5f8b86bd9c9b292ab1c52f3f01c32db/362ee/koi-3570-pflc.png 1600w","/static/e5f8b86bd9c9b292ab1c52f3f01c32db/59ab2/koi-3570-pflc.png 1800w"],sizes:"(max-width: 800px) 100vw, 800px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n  "),"\n    ")),(0,s.kt)("br",null),(0,s.kt)("h2",null,"References"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://exoplanetarchive.ipac.caltech.edu"},"Nasa Exoplanet Archive")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://brew.sh/"},"Homebrew")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://www.astropy.org/"},"AstroPy"))))}r.isMDXComponent=!0},9997:function(a,e,t){"use strict";t.d(e,{Z:function(){return i}});var n=t(7294),s=t(5414),o=t(6187),p=t(994),c=t(7408),l=t(8194),r=t(1780);function i(a){var e=a.children;return n.createElement(n.Fragment,null,n.createElement(n.Fragment,null,n.createElement(s.q,null,n.createElement("title",null,"Cool"),n.createElement("html",{lang:"en"})),n.createElement(l.Z,null),n.createElement(o.Z,{fluid:!0},n.createElement(p.Z,{className:"justify-content-center"},n.createElement(c.Z,{style:{maxWidth:"768px"}},e))),n.createElement(r.Z,null)))}}}]);
//# sourceMappingURL=component---src-pages-eclipsing-binaries-index-mdx-6b11e6757de156ffa439.js.map