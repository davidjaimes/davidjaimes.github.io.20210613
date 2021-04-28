(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[156],{2513:function(a,e,t){"use strict";t.r(e),t.d(e,{_frontmatter:function(){return p},default:function(){return r}});var n=t(9756),s=(t(7294),t(4983)),o=t(9997),p={},c={_frontmatter:p},m=o.Z;function r(a){var e=a.components,t=(0,n.Z)(a,["components"]);return(0,s.kt)(m,Object.assign({},c,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{align:"center",style:{marginTop:"2em"}},(0,s.kt)("b",null,"Kepler-16b:")," The First Circumbinary Planet"),(0,s.kt)("br",null),(0,s.kt)("br",null),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Kepler-16b")," (formally ",(0,s.kt)("strong",{parentName:"p"},"Kepler-16 (AB)-b"),') is an extrasolar planet. It is a Saturn-mass planet consisting of half gas and half rock and ice, and it orbits a binary star, Kepler-16, with a period of 229 days. "It is the first confirmed, unambiguous example of a circumbinary planet – a planet orbiting not one, but two stars," said Josh Carter of the Harvard-Smithsonian Center for Astrophysics, one of the discovery team.'),(0,s.kt)("h2",{style:{marginTop:"2em"}},"Kepler Mission Data"),(0,s.kt)("p",null,"The Kepler Mission, a NASA Discovery mission launched on March 6, 2009, was the first space mission dedicated to the search for Earth-sized and smaller planets in the habitable zone of other stars in our neighborhood of the galaxy. Visit the ",(0,s.kt)("a",{parentName:"p",href:"https://exoplanetarchive.ipac.caltech.edu/index.html"},"NASA Exoplanet Archive")," website to find the data files for Kepler-16, the eclipsing binary star system, or any other Kepler Object of Interest (KOI) out there. The following lines can copied over to the command line on your terminal window to automatically download:"),(0,s.kt)("div",{className:"gatsby-highlight","data-language":"bash"},(0,s.kt)("pre",{parentName:"div",className:"language-bash"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},(0,s.kt)("span",{parentName:"code",className:"token function"},"wget")," -v -O ",(0,s.kt)("span",{parentName:"code",className:"token string"},"'kplr012644769-20160128150956_dvt.fits'")," ",(0,s.kt)("span",{parentName:"code",className:"token string"},"'http://exoplanetarchive.ipac.caltech.edu:80/data/ETSS//KeplerDV/005/713/24/kplr012644769-20160128150956_dvt.fits'"),"\n",(0,s.kt)("span",{parentName:"code",className:"token function"},"wget")," -v -O ",(0,s.kt)("span",{parentName:"code",className:"token string"},"'kplr012644769_q1_q16_tce_01_dvt_lc.tbl'")," ",(0,s.kt)("span",{parentName:"code",className:"token string"},"'http://exoplanetarchive.ipac.caltech.edu:80/data/ETSS//KeplerDV/000/866/64/kplr012644769_q1_q16_tce_01_dvt_lc.tbl'")))),(0,s.kt)("br",null),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Flexible Image Transport System (FITS)")," is an open standard defining a digital file format useful for storage, transmission and processing of data: formatted as multi-dimensional arrays (for example a 2D image), or tables. FITS is the most commonly used digital file format in astronomy. The FITS standard was designed specifically for astronomical data, and includes provisions such as describing photometric and spatial calibration information, together with image origin metadata. Visit the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.astropy.org/en/stable/io/fits/"},"AstroPy.org")," documentation page to learn how to work with FITS files."),(0,s.kt)("h2",{style:{marginTop:"2em"}},"Matplotlib to Visualize Transits"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Matplotlib")," is a comprehensive library for creating static, animated, and interactive visualizations in Python."),(0,s.kt)("p",null,"Import all the Python dependencies:"),(0,s.kt)("div",{className:"gatsby-highlight","data-language":"python"},(0,s.kt)("pre",{parentName:"div",className:"language-python"},(0,s.kt)("code",{parentName:"pre",className:"language-python"},(0,s.kt)("span",{parentName:"code",className:"token keyword"},"from")," astropy",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"io ",(0,s.kt)("span",{parentName:"code",className:"token keyword"},"import")," fits",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," ",(0,s.kt)("span",{parentName:"code",className:"token builtin"},"ascii"),"\n",(0,s.kt)("span",{parentName:"code",className:"token keyword"},"from")," astropy",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"time ",(0,s.kt)("span",{parentName:"code",className:"token keyword"},"import")," Time\n",(0,s.kt)("span",{parentName:"code",className:"token keyword"},"import")," matplotlib",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"pyplot ",(0,s.kt)("span",{parentName:"code",className:"token keyword"},"as")," plt\n",(0,s.kt)("span",{parentName:"code",className:"token keyword"},"from")," matplotlib",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"dates ",(0,s.kt)("span",{parentName:"code",className:"token keyword"},"import")," DateFormatter\n",(0,s.kt)("span",{parentName:"code",className:"token keyword"},"import")," pandas ",(0,s.kt)("span",{parentName:"code",className:"token keyword"},"as")," pd"))),(0,s.kt)("br",null),(0,s.kt)("p",null,"Use ",(0,s.kt)("code",{parentName:"p",className:"language-text"},"astropy.io.fits")," to read in the FITS file:"),(0,s.kt)("div",{className:"gatsby-highlight","data-language":"python"},(0,s.kt)("pre",{parentName:"div",className:"language-python"},(0,s.kt)("code",{parentName:"pre",className:"language-python"},"fname ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"=")," ",(0,s.kt)("span",{parentName:"code",className:"token string"},"'kplr012644769-20160128150956_dvt.fits'"),"\nhdu ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"=")," fits",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),(0,s.kt)("span",{parentName:"code",className:"token builtin"},"open"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),"fname",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")"),"\ndata ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"=")," hdu",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"["),(0,s.kt)("span",{parentName:"code",className:"token number"},"1"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"]"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"data\ndf ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"=")," pd",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"DataFrame",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"{"),(0,s.kt)("span",{parentName:"code",className:"token string"},"'time'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},":")," data",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"["),(0,s.kt)("span",{parentName:"code",className:"token string"},"'TIME'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"]"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," ",(0,s.kt)("span",{parentName:"code",className:"token string"},"'flux'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},":")," data",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"["),(0,s.kt)("span",{parentName:"code",className:"token string"},"'LC_INIT'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"]"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"}"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")"),"\ndf",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"["),(0,s.kt)("span",{parentName:"code",className:"token string"},"'time'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"]")," ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"=")," Time",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),"df",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"["),(0,s.kt)("span",{parentName:"code",className:"token string"},"'time'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"]")," ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"+")," ",(0,s.kt)("span",{parentName:"code",className:"token number"},"2454833"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," ",(0,s.kt)("span",{parentName:"code",className:"token builtin"},"format"),(0,s.kt)("span",{parentName:"code",className:"token operator"},"="),(0,s.kt)("span",{parentName:"code",className:"token string"},"'jd'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"datetime64\nplt",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"plot",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),"df",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"["),(0,s.kt)("span",{parentName:"code",className:"token string"},"'time'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"]"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," df",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"["),(0,s.kt)("span",{parentName:"code",className:"token string"},"'flux'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"]"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," ",(0,s.kt)("span",{parentName:"code",className:"token string"},"'.'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," ms",(0,s.kt)("span",{parentName:"code",className:"token operator"},"="),(0,s.kt)("span",{parentName:"code",className:"token number"},"3"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," label",(0,s.kt)("span",{parentName:"code",className:"token operator"},"="),"fname",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")")))),(0,s.kt)("br",null),(0,s.kt)("p",null,"Use ",(0,s.kt)("code",{parentName:"p",className:"language-text"},"astropy.io.ascii")," to read in the TBL file:"),(0,s.kt)("div",{className:"gatsby-highlight","data-language":"python"},(0,s.kt)("pre",{parentName:"div",className:"language-python"},(0,s.kt)("code",{parentName:"pre",className:"language-python"},"fname ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"=")," ",(0,s.kt)("span",{parentName:"code",className:"token string"},"'kplr012644769_q1_q16_tce_01_dvt_lc.tbl'"),"\ndata ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"=")," ",(0,s.kt)("span",{parentName:"code",className:"token builtin"},"ascii"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"read",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),"fname",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")"),"\ndf ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"=")," pd",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"DataFrame",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"{"),(0,s.kt)("span",{parentName:"code",className:"token string"},"'time'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},":")," data",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"["),(0,s.kt)("span",{parentName:"code",className:"token string"},"'TIME'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"]"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," ",(0,s.kt)("span",{parentName:"code",className:"token string"},"'flux'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},":")," data",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"["),(0,s.kt)("span",{parentName:"code",className:"token string"},"'INIT_FLUX_PL'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"]"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"}"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")"),"\ndf",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"["),(0,s.kt)("span",{parentName:"code",className:"token string"},"'time'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"]")," ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"=")," Time",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),"df",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"["),(0,s.kt)("span",{parentName:"code",className:"token string"},"'time'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"]")," ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"+")," ",(0,s.kt)("span",{parentName:"code",className:"token number"},"2454833"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," ",(0,s.kt)("span",{parentName:"code",className:"token builtin"},"format"),(0,s.kt)("span",{parentName:"code",className:"token operator"},"="),(0,s.kt)("span",{parentName:"code",className:"token string"},"'jd'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"datetime64\nplt",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"plot",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),"df",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"["),(0,s.kt)("span",{parentName:"code",className:"token string"},"'time'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"]"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," df",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"["),(0,s.kt)("span",{parentName:"code",className:"token string"},"'flux'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"]"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," ",(0,s.kt)("span",{parentName:"code",className:"token string"},"'.'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," ms",(0,s.kt)("span",{parentName:"code",className:"token operator"},"="),(0,s.kt)("span",{parentName:"code",className:"token number"},"3"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," c",(0,s.kt)("span",{parentName:"code",className:"token operator"},"="),(0,s.kt)("span",{parentName:"code",className:"token string"},"'C0'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," label",(0,s.kt)("span",{parentName:"code",className:"token operator"},"="),"fname",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")")))),(0,s.kt)("br",null),(0,s.kt)("p",null,"Add names to your labels:"),(0,s.kt)("div",{className:"gatsby-highlight","data-language":"python"},(0,s.kt)("pre",{parentName:"div",className:"language-python"},(0,s.kt)("code",{parentName:"pre",className:"language-python"},"plt",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"title",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,s.kt)("span",{parentName:"code",className:"token string"},"'Kepler-16'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," size",(0,s.kt)("span",{parentName:"code",className:"token operator"},"="),(0,s.kt)("span",{parentName:"code",className:"token number"},"16"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")"),"\nplt",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"xlabel",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,s.kt)("span",{parentName:"code",className:"token string"},"r'Date ($P_{orb}=41.0778$ days)'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," size",(0,s.kt)("span",{parentName:"code",className:"token operator"},"="),(0,s.kt)("span",{parentName:"code",className:"token number"},"16"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")"),"\nplt",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"ylabel",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,s.kt)("span",{parentName:"code",className:"token string"},"r'Flux ($F_e/F_o - 1$)'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," size",(0,s.kt)("span",{parentName:"code",className:"token operator"},"="),(0,s.kt)("span",{parentName:"code",className:"token number"},"16"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")")))),(0,s.kt)("br",null),(0,s.kt)("p",null,"Use ",(0,s.kt)("code",{parentName:"p",className:"language-text"},"matplotlib.dates.DateFormatter")," to chage dates from ",(0,s.kt)("strong",{parentName:"p"},"YYYY-MM-DD")," to ",(0,s.kt)("strong",{parentName:"p"},"MMM YYYY")," format:"),(0,s.kt)("div",{className:"gatsby-highlight","data-language":"python"},(0,s.kt)("pre",{parentName:"div",className:"language-python"},(0,s.kt)("code",{parentName:"pre",className:"language-python"},"date_form ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"=")," DateFormatter",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,s.kt)("span",{parentName:"code",className:"token string"},'"%b %Y"'),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")"),"\nplt",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"gca",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"xaxis",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"set_major_formatter",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),"date_form",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")")))),(0,s.kt)("br",null),(0,s.kt)("p",null,"Add final layout options:"),(0,s.kt)("div",{className:"gatsby-highlight","data-language":"python"},(0,s.kt)("pre",{parentName:"div",className:"language-python"},(0,s.kt)("code",{parentName:"pre",className:"language-python"},"plt",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"xticks",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),"rotation",(0,s.kt)("span",{parentName:"code",className:"token operator"},"="),(0,s.kt)("span",{parentName:"code",className:"token number"},"45"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")"),"\nplt",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"grid",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),"ls",(0,s.kt)("span",{parentName:"code",className:"token operator"},"="),(0,s.kt)("span",{parentName:"code",className:"token string"},"':'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")"),"\nplt",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"legend",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),"markerscale",(0,s.kt)("span",{parentName:"code",className:"token operator"},"="),(0,s.kt)("span",{parentName:"code",className:"token number"},"4"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")"),"\nplt",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"tight_layout",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")"),"\nplt",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"savefig",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,s.kt)("span",{parentName:"code",className:"token string"},"'kepler-16.png'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," dpi",(0,s.kt)("span",{parentName:"code",className:"token operator"},"="),(0,s.kt)("span",{parentName:"code",className:"token number"},"300"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")")))),(0,s.kt)("br",null),(0,s.kt)("br",null),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"800px"}},"\n      ",(0,s.kt)("a",{parentName:"span",className:"gatsby-resp-image-link",href:"/static/6b4bfd0cde63a628702b2b4952b61556/e957c/kepler-16.png",style:{display:"block"},target:"_blank",rel:"noopener"},"\n    ",(0,s.kt)("span",{parentName:"a",className:"gatsby-resp-image-background-image",style:{paddingBottom:"75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAC4jAAAuIwF4pT92AAACbElEQVQ4y11UiVLbQAzN//9XO9PpBRQKNMSk+CCJY+/tPZ3XkYKBsjMayVrp6VyvAOB0OjHN84xcClIuyAuVgqZtcXt3h7pu0LYd61POrzYkl1IICSsCWs4oFVIIQImYU0BJJCdoKTD2e1glYLXEKcdXml9sjNEMuiKglBLEcMRDN+DzZsCPvwKXtcTts2Z50ztctQZXrcLts8HPp/P918cRN63ERa2wHxVOc8HKe48QIjAXbLoB37YjrhuJy1rgdyfx6aFH1Rt8qY64eBrxfTswyK9Gsu6qFuxzBpyxMsZASglFpC1yOfcxpgwXEkqZ4WNm3RQz95d0RCSHlLldxtpzyVprOOeQUoTUFtpndrQhQU0JLmZon2BDhpoicxcyfCowPkFPEamcoM0L4G63w36/h7MWUht2oIwoOzImcHIkLl1k/ZnOQY2PXJVaAMdx5JJTjBikQSc9RhfRa496cDiagGc5oTcBzehYP9iAnfLYyQmdcLCxsO9MQ+m6Dn3fw/sJh1Fhrz1GG3AkwNFB2MiAFKQTEwegVlCAvfI4aA8XC4S2mClDWmZKdZomaOvwtpcnJrqfaYlTREkROSXEEPg7xYBMlD/sIQnWWgZ9gzqfnY6oux3+3N/j+voGd/f32FQV1usHrNdrbDYbVI+P2G63bM+AMUbQtGmFhJAMLKWC0RqDEBBCcFuOxyOGYeAhknw4HPh7uSOc/57e5By6roVSig1oWFordqIKiFMwGiSt2jJQ4gRKutXyc2DAaeKe0eshZyqDsiDwJaOqqkCDbJqGM6dA5LO06zXDj5xasDi9J8qGiEApu/eHfP8BImR/ef2CpWQAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"a",className:"gatsby-resp-image-image",alt:"kepler-16",title:"kepler-16",src:"/static/6b4bfd0cde63a628702b2b4952b61556/acfc1/kepler-16.png",srcSet:["/static/6b4bfd0cde63a628702b2b4952b61556/59afc/kepler-16.png 200w","/static/6b4bfd0cde63a628702b2b4952b61556/a45af/kepler-16.png 400w","/static/6b4bfd0cde63a628702b2b4952b61556/acfc1/kepler-16.png 800w","/static/6b4bfd0cde63a628702b2b4952b61556/7dc98/kepler-16.png 1200w","/static/6b4bfd0cde63a628702b2b4952b61556/362ee/kepler-16.png 1600w","/static/6b4bfd0cde63a628702b2b4952b61556/e957c/kepler-16.png 1920w"],sizes:"(max-width: 800px) 100vw, 800px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n  "),"\n    ")))}r.isMDXComponent=!0},9997:function(a,e,t){"use strict";t.d(e,{Z:function(){return l}});var n=t(7294),s=t(5414),o=t(6187),p=t(994),c=t(7408),m=t(701),r=t(1780);function l(a){var e=a.children;return n.createElement(n.Fragment,null,n.createElement(n.Fragment,null,n.createElement(s.q,null,n.createElement("title",null,"Cool"),n.createElement("html",{lang:"en"})),n.createElement(m.Z,null),n.createElement(o.Z,{fluid:!0},n.createElement(p.Z,{className:"justify-content-center"},n.createElement(c.Z,{style:{maxWidth:"768px"}},e))),n.createElement(r.Z,null)))}}}]);
//# sourceMappingURL=component---src-pages-kepler-16-b-index-mdx-cb5252b55e662ce5e28c.js.map