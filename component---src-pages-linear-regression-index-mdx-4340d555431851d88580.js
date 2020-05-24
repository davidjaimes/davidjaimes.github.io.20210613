(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{WJ7r:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return c})),t.d(a,"default",(function(){return p}));t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("91GP"),t("q1tI");var n=t("7ljp"),s=t("L12J");var c={},b={_frontmatter:c},o=s.a;function p(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,s={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,["components"]);return Object(n.b)(o,Object.assign({},b,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h1",{align:"center"},"Fitting a Line to Data"),Object(n.b)("p",{align:"center"},"From Hogg et al. 2010"),Object(n.b)("h2",null,"Exercise 1"),Object(n.b)("p",null,"Using the standard linear algebra method of this Section, fit a straight line $y = mx + b$ to the $x$, $y$, $\\sigma",Object(n.b)("em",{parentName:"p"},"y$ values for data points 5 through 20 in Table 1 on page 6. That is, ignore the first four data points, and also ignore the columns for $\\sigma_x$ and $\\rho"),"{xy}$. Make a plot showing the points, their uncertainties, and the best-fit line. Your plot should end up looking like Figure 1. What is the standard uncertainty variance $\\sigma^2_m$ on the slope of the line?"),Object(n.b)("p",null,"Table 1 on page 6:"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"text"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"ID x y sig_y sig_x rho_xy\n1 201 592 61 9 -0.84\n2 244 401 25 4 0.31\n3 47 583 38 11 0.64\n4 287 402 15 7 -0.27\n5 203 495 21 5 -0.33\n6 58 173 15 9 0.67\n7 210 479 27 4 -0.02\n8 202 504 14 4 -0.05\n9 198 510 30 11 -0.84\n10 158 416 16 7 -0.69\n11 165 393 14 5 0.30\n12 201 442 25 5 -0.46\n13 157 317 52 5 -0.03\n14 131 311 16 6 0.50\n15 166 400 34 6 0.73\n16 160 337 31 5 -0.52\n17 186 423 42 9 0.90\n18 125 334 26 8 0.40\n19 218 533 16 6 -0.78\n20 146 344 22 5 -0.56"))),Object(n.b)("p",null,"Linear Regression Function:"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"python"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-python"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-python"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"def")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"linear"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"objectx",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," objecty",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," objectey",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":"),"\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token triple-quoted-string string"}),"'''\n    Returns (b, m) values from y = mx + b linear regression.\n    Parameters\n    ----------\n    objectx : array_like\n        Independent variable, usually labeled as the x values.\n    objecty : array_like\n        Dependent variable, usually labeled as the y values.\n    objectey : array_like\n        Gaussian uncertainties in the y direction.\n    Returns\n    -------\n    (b, eb, m, em) : scalars\n        There are two best-fit and their respective standard uncertainty\n        variances. The values are returned in a set.\n    '''"),"\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"import")," numpy ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"as")," np\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"from")," numpy",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"linalg ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"import")," inv\n\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"# Create matrices and solve the best-fit values."),"\n    Y ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," objecty\n    A ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," np",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"matrix",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),"np",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"ones_like",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"Y",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," objectx",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"T\n    C ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," np",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"diag",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token builtin"}),"pow"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"objectey",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"2"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n    X1 ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," inv",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"A",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"T @ inv",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"C",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," @ A",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n    X2 ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," A",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"T @ inv",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"C",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," @ Y\n    X ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),"  X2 @ X1\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"return")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"X",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"item",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"0"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," np",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"sqrt",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"X1",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"item",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"0"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," X",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"item",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"1"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," np",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"sqrt",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"X1",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"item",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"3"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")))),Object(n.b)("p",null,"Read the date, remove unwanted lines, and preform linear regression."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"python"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-python"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-python"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"import")," matplotlib",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"pyplot ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"as")," plt\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"import")," numpy ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"as")," np\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"import")," pandas ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"as")," pd\n\ndf ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," pd",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"read_csv",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'table1.dat'"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," sep",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"' '"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\ndf ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," df",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"4"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),"\nb",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," eb",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," m",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," em ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," linear",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"df",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'x'"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," df",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'y'"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," df",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'sig_y'"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\nx ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," np",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"linspace",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"0"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"300"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\ny ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," m ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"*")," x ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"+")," b"))),Object(n.b)("p",null,"Plot the data:"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"python"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-python"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-python"}),"plt",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"errorbar",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"df",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'x'"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," df",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'y'"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," yerr",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),"df",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'sig_y'"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," label",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'Data'"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\nplt",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"plot",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"x",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," y",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," label",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"="),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'Model'"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")))),Object(n.b)("p",null,Object(n.b)("span",Object.assign({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"800px"}}),"\n      ",Object(n.b)("a",Object.assign({parentName:"span"},{className:"gatsby-resp-image-link",href:"/static/1828d41e35980fba73aefc3df31e9993/59ab2/exercise1.png",style:{display:"block"},target:"_blank",rel:"noopener"}),"\n    ",Object(n.b)("span",Object.assign({parentName:"a"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.5%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAC4jAAAuIwF4pT92AAAC5UlEQVQ4y2NgAAItTQ0mICXq5u6uuHXVgtit61bGzp03P2HhggUxpaWlKkA5Lh4eHj5hYWEBIJtbUkpKEEjzAjGnrryw8PpQVpU4PRZlIJ8RZB6DrY0VG5Din9DXa3n5xP6vl04f/b56zdqf27Zt/XXlyhUnkJr///+zvHr9mhVIM0L5jP8n64n+69FQ+b/FlE9IUEAIKMwKNtDU1BTEEK2vrjQ8ePLC9rMXLu/YsGH97kOHDu28fv26KUjNiqULOc9duMMCYofVTjbqq023+NWuIjV15hxOkJgoEMANFBYSAIuxsLIJTUp3Zf128yAz0AVsIFcsntHLxgAFRc2dUrtqnbTyauoczapXiYHEJsxZCpbn5OQUhBkICj8RIJbm5+MTS07PYtt78AjLxK5mjszKVube//+ZcjumCc9vTNDPq20IyG9olZx77T/Ll8v7mbctm8G2bPECTqDFTGJiSC5kZGRkB7mQi4tLODc1ju3h6e0sC4CK5mw+xgQMI4ld9W7acbV9akptF8CuWn3sIUvRvv9MaQ/+MzavuQA2hJ2bDxGGLCzMoICW4OPhEmEwnsoEDHHGVa0Jsj/rRRRfdRrL/J9tzPZ/KQPLh2mePK/aDdhvTArhuzvBm/NRrxPX+d5g3v/r7TjUJPlALgSHMQMzCyvI25IM7IIi15ut+L93ayvv7IxWu37uMPPdhTl8H/vNJT516Sm87bNS+N2rI/qhx1j5W7+p+PduHZk3XSay/6dpygcaisjADQzSZAW5kDfFmF3hfAav6v4cFS4Gn1sgS5jb21rYGFjCmYEJhYEh4x4zWMOc/0C5aCB+ysiQdgoixsAqwMEENRAKWGX5gK4EJlwgFuTmZAOzWZiZ5dmYGQS4WBhEuNlZpIBRysPJxqzAARRjZ2YQ42JjluFlYeABukgBHoZIAGwDPzuYZoeKCUBpbmhqAAFBKM0GFYepY0Y3kEGEkwEXYAamBriXxMTEGOgCANCL3Y82OSF4AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object.assign({parentName:"a"},{className:"gatsby-resp-image-image",alt:"exercise1",title:"exercise1",src:"/static/1828d41e35980fba73aefc3df31e9993/acfc1/exercise1.png",srcSet:["/static/1828d41e35980fba73aefc3df31e9993/59afc/exercise1.png 200w","/static/1828d41e35980fba73aefc3df31e9993/a45af/exercise1.png 400w","/static/1828d41e35980fba73aefc3df31e9993/acfc1/exercise1.png 800w","/static/1828d41e35980fba73aefc3df31e9993/7dc98/exercise1.png 1200w","/static/1828d41e35980fba73aefc3df31e9993/362ee/exercise1.png 1600w","/static/1828d41e35980fba73aefc3df31e9993/59ab2/exercise1.png 1800w"],sizes:"(max-width: 800px) 100vw, 800px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n  "),"\n    ")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-linear-regression-index-mdx-4340d555431851d88580.js.map