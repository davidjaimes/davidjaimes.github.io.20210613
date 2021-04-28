(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[79],{6075:function(e,a,t){"use strict";t.r(a),t.d(a,{_frontmatter:function(){return c},default:function(){return l}});var n=t(9756),s=(t(7294),t(4983)),o=t(9997),p=t(428),c={},r={_frontmatter:c},m=o.Z;function l(e){var a=e.components,t=(0,n.Z)(e,["components"]);return(0,s.kt)(m,Object.assign({},r,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{align:"center",style:{marginTop:"2em"}},"Fitting a Line to Data with ",(0,s.kt)("b",null,"Linear Algebra")),(0,s.kt)("br",null),(0,s.kt)("br",null),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Linear regression")," attempts to model the relationship between two variables by fitting a linear equation to observed data. One variable is considered to be an explanatory variable, and the other is considered to be a dependent variable. For example, a modeler might want to relate the weights of individuals to their heights using a linear regression model."),(0,s.kt)("br",null),(0,s.kt)("h2",null,"Introduction"),(0,s.kt)("p",null,"You have a set of $N > 2$ points ($x",(0,s.kt)("em",{parentName:"p"},"i, y_i)$, with known Gaussian uncertainties $\\sigma"),"{yi}$ in the $y$ direction, and no uncertainty at all (that is, perfect knowledge) in the $x$ direction. You want to find the function $f(x)$ of the form"),(0,s.kt)("p",null,"$$\nf(x) = mx + b \\ ,\n$$"),(0,s.kt)("p",null,"where $m$ is the slope and $b$ is the intercept, that ",(0,s.kt)("em",{parentName:"p"},"best fits")," the points. What is meant by the term “best fit” is, of course, very important; we are making a choice here to which we will return."),(0,s.kt)("br",null),(0,s.kt)(p.Z,{variant:"info",mdxType:"Alert"},"This exercise is adapted from ",(0,s.kt)("strong",null,"Data analysis recipes: Fitting a model to data")," by David W. Hogg and Jo Bovy and Dustin Lang, 2010, 1008.4686, arXiv, astro-ph.IM, https://arxiv.org/abs/1008.4686."),(0,s.kt)("br",null),(0,s.kt)("h2",null,"Important Equations"),(0,s.kt)("p",null,"$$\n\\begin{bmatrix}\nb ","\\","\nm\n\\end{bmatrix}\n= X =\n\\begin{bmatrix}\nA^{\\top} C^{-1} A\n\\end{bmatrix}^{-1}\n\\begin{bmatrix}\nA^{\\top} C^{-1} Y\n\\end{bmatrix}\n$$"),(0,s.kt)("p",null,"$$\n\\sigma^2 =\n\\begin{bmatrix}\n\\sigma^{2}",(0,s.kt)("em",{parentName:"p"},"{x} & \\rho"),"{xy}\\sigma",(0,s.kt)("em",{parentName:"p"},"x\\sigma_y ","\\","\n\\rho"),"{xy}\\sigma",(0,s.kt)("em",{parentName:"p"},"x\\sigma_y & \\sigma^{2}"),"{y}"),(0,s.kt)("h1",null,"\\end{bmatrix}"),(0,s.kt)("p",null,"\\begin{bmatrix}\nA^{\\top} C^{-1} A\n\\end{bmatrix}^{-1}\n$$"),(0,s.kt)("br",null),(0,s.kt)("h2",null,"Exercise 1"),(0,s.kt)("p",null,"Using the standard linear algebra method of this Section, fit a straight line $y = mx + b$ to the $x$, $y$, $\\sigma",(0,s.kt)("em",{parentName:"p"},"y$ values for data points 5 through 20 in Table 1 on page 6. That is, ignore the first four data points, and also ignore the columns for $\\sigma_x$ and $\\rho"),"{xy}$. Make a plot showing the points, their uncertainties, and the best-fit line. Your plot should end up looking like Figure 1. What is the standard uncertainty variance $\\sigma^2_m$ on the slope of the line?"),(0,s.kt)("br",null),(0,s.kt)("p",null,"Table 1 on page 6:"),(0,s.kt)("div",{className:"gatsby-highlight","data-language":"text"},(0,s.kt)("pre",{parentName:"div",className:"language-text"},(0,s.kt)("code",{parentName:"pre",className:"language-text"},"ID    x    y  sig_y  sig_x  rho_xy\n 1  201  592     61      9   -0.84\n 2  244  401     25      4    0.31\n 3   47  583     38     11    0.64\n 4  287  402     15      7   -0.27\n 5  203  495     21      5   -0.33\n 6   58  173     15      9    0.67\n 7  210  479     27      4   -0.02\n 8  202  504     14      4   -0.05\n 9  198  510     30     11   -0.84\n10  158  416     16      7   -0.69\n11  165  393     14      5    0.30\n12  201  442     25      5   -0.46\n13  157  317     52      5   -0.03\n14  131  311     16      6    0.50\n15  166  400     34      6    0.73\n16  160  337     31      5   -0.52\n17  186  423     42      9    0.90\n18  125  334     26      8    0.40\n19  218  533     16      6   -0.78\n20  146  344     22      5   -0.56"))),(0,s.kt)("br",null),(0,s.kt)("h2",null,"Function"),(0,s.kt)("div",{className:"gatsby-highlight","data-language":"python"},(0,s.kt)("pre",{parentName:"div",className:"language-python"},(0,s.kt)("code",{parentName:"pre",className:"language-python"},(0,s.kt)("span",{parentName:"code",className:"token keyword"},"def")," ",(0,s.kt)("span",{parentName:"code",className:"token function"},"linear"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),"objectx",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," objecty",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," objectey",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},":"),"\n    ",(0,s.kt)("span",{parentName:"code",className:"token triple-quoted-string string"},"'''\n    Returns (b, m) values from y = mx + b linear regression.\n    Parameters\n    ----------\n    objectx : array_like\n        Independent variable, usually labeled as the x values.\n    objecty : array_like\n        Dependent variable, usually labeled as the y values.\n    objectey : array_like\n        Gaussian uncertainties in the y direction.\n    Returns\n    -------\n    (b, eb, m, em) : scalars\n        There are two best-fit and their respective standard uncertainty\n        variances. The values are returned in a set.\n    '''"),"\n    ",(0,s.kt)("span",{parentName:"code",className:"token keyword"},"import")," numpy ",(0,s.kt)("span",{parentName:"code",className:"token keyword"},"as")," np\n    ",(0,s.kt)("span",{parentName:"code",className:"token keyword"},"from")," numpy",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"linalg ",(0,s.kt)("span",{parentName:"code",className:"token keyword"},"import")," inv\n\n    ",(0,s.kt)("span",{parentName:"code",className:"token comment"},"# Create matrices and solve the best-fit values."),"\n    Y ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"=")," objecty\n    A ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"=")," np",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"matrix",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"["),"np",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"ones_like",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),"Y",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," objectx",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"]"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"T\n    C ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"=")," np",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"diag",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,s.kt)("span",{parentName:"code",className:"token builtin"},"pow"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),"objectey",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," ",(0,s.kt)("span",{parentName:"code",className:"token number"},"2"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")"),"\n    X1 ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"=")," inv",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),"A",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"T @ inv",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),"C",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")")," @ A",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")"),"\n    X2 ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"=")," A",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"T @ inv",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),"C",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")")," @ Y\n    X ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"="),"  X2 @ X1\n    ",(0,s.kt)("span",{parentName:"code",className:"token keyword"},"return")," ",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),"X",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"item",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,s.kt)("span",{parentName:"code",className:"token number"},"0"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," np",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"sqrt",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),"X1",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"item",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,s.kt)("span",{parentName:"code",className:"token number"},"0"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," X",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"item",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,s.kt)("span",{parentName:"code",className:"token number"},"1"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," np",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"sqrt",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),"X1",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"item",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,s.kt)("span",{parentName:"code",className:"token number"},"3"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")")))),(0,s.kt)("br",null),(0,s.kt)("h2",null,"Results"),(0,s.kt)("p",null,"Read the date, remove unwanted lines, and preform linear regression."),(0,s.kt)("div",{className:"gatsby-highlight","data-language":"python"},(0,s.kt)("pre",{parentName:"div",className:"language-python"},(0,s.kt)("code",{parentName:"pre",className:"language-python"},(0,s.kt)("span",{parentName:"code",className:"token keyword"},"import")," matplotlib",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"pyplot ",(0,s.kt)("span",{parentName:"code",className:"token keyword"},"as")," plt\n",(0,s.kt)("span",{parentName:"code",className:"token keyword"},"import")," numpy ",(0,s.kt)("span",{parentName:"code",className:"token keyword"},"as")," np\n",(0,s.kt)("span",{parentName:"code",className:"token keyword"},"import")," pandas ",(0,s.kt)("span",{parentName:"code",className:"token keyword"},"as")," pd\n\ndf ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"=")," pd",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"read_csv",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,s.kt)("span",{parentName:"code",className:"token string"},"'table1.dat'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," sep",(0,s.kt)("span",{parentName:"code",className:"token operator"},"="),(0,s.kt)("span",{parentName:"code",className:"token string"},"' '"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")"),"\ndf ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"=")," df",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"["),(0,s.kt)("span",{parentName:"code",className:"token number"},"4"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},":"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"]"),"\nb",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," eb",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," m",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," em ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"=")," linear",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),"df",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"["),(0,s.kt)("span",{parentName:"code",className:"token string"},"'x'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"]"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," df",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"["),(0,s.kt)("span",{parentName:"code",className:"token string"},"'y'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"]"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," df",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"["),(0,s.kt)("span",{parentName:"code",className:"token string"},"'sig_y'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"]"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")"),"\nx ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"=")," np",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"linspace",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),(0,s.kt)("span",{parentName:"code",className:"token number"},"0"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," ",(0,s.kt)("span",{parentName:"code",className:"token number"},"300"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")"),"\ny ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"=")," m ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"*")," x ",(0,s.kt)("span",{parentName:"code",className:"token operator"},"+")," b"))),(0,s.kt)("br",null),(0,s.kt)("p",null,"Plot the data:"),(0,s.kt)("div",{className:"gatsby-highlight","data-language":"python"},(0,s.kt)("pre",{parentName:"div",className:"language-python"},(0,s.kt)("code",{parentName:"pre",className:"language-python"},"plt",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"errorbar",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),"df",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"["),(0,s.kt)("span",{parentName:"code",className:"token string"},"'x'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"]"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," df",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"["),(0,s.kt)("span",{parentName:"code",className:"token string"},"'y'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"]"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," yerr",(0,s.kt)("span",{parentName:"code",className:"token operator"},"="),"df",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"["),(0,s.kt)("span",{parentName:"code",className:"token string"},"'sig_y'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"]"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," label",(0,s.kt)("span",{parentName:"code",className:"token operator"},"="),(0,s.kt)("span",{parentName:"code",className:"token string"},"'Data'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")"),"\nplt",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"."),"plot",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},"("),"x",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," y",(0,s.kt)("span",{parentName:"code",className:"token punctuation"},",")," label",(0,s.kt)("span",{parentName:"code",className:"token operator"},"="),(0,s.kt)("span",{parentName:"code",className:"token string"},"'Model'"),(0,s.kt)("span",{parentName:"code",className:"token punctuation"},")")))),(0,s.kt)("br",null),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"800px"}},"\n      ",(0,s.kt)("a",{parentName:"span",className:"gatsby-resp-image-link",href:"/static/1828d41e35980fba73aefc3df31e9993/59ab2/exercise1.png",style:{display:"block"},target:"_blank",rel:"noopener"},"\n    ",(0,s.kt)("span",{parentName:"a",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.5%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAC4jAAAuIwF4pT92AAAC/0lEQVQ4y7WSS0xTQRSG/zv33vbe3r5pKcUioi12YbURCfjERyTGqAuNr4ULdWE0xrgwIZEAPrDQKhYSYwxqUEgwPIpwu1AkWuMzdkEFUwQ1akhUIBol6sKEZMwU1ETZejZn5pw53/xn5gAA7HY7AZCeO3eu48zp0/66ujp/KBTKC4fDC4qLi50ADIQQkyzLFrZWjCaroiFmAHpANlav4l27fEI2AI7xULR8mQjAVBUI5Ccf3Xzd/+Tu27b2yLCqqsPxeHx5MpnErZ4eMdKpalpqDhNKP3BNS4DRUL7ypdI9h4YzM/JmKukAhBSwoKBAw4QGAycLH8R7X/c+7XsbibQPx2Kx4cHBwSJKKbqjEflht6q9KgEbKltm1h/f6/te5ZmTqNtpPghAsThsAMQUkBUAsPl8PsftOzF3f/+z2YlEwpNIJHLuxXqMVBXxSgfsP6cqTyoWZx0sLd+4o7TGs3pTMXa3vEupMugV6y8g69sIIJPneRuDvxx6nrroPaU4kKSksP69Nlq5bcaRstKNobIDuYcu3NDvGqLkfsclofnKRYnVWK1W299Ah8lksh8/dkwauB/VdD8e0IJS0AsrzZGKzf6S8qNL1p5o9bJePjxoFW+0NQrt17uEpsbGf4DQSVrm0g06bdrSNesFVnS1psQ0UWFxjQe8ObR2nnZoHdAcvSP+aNjCNbZ1aVo7VNLZpZKGhgb2/lCUPy0DRCAckAnRbK89uk87FszLilZu9b8JrTA+O7/HPBrKd34OeN1jwUXu8YDX+bF6gfdT0J/5JeCdNXJqfg4N57q3LrRl/f7leQ6BzaFl+3zZNVKS5qG1udavlBJ6BJjoa9MMdQT5kbGPZGDwhXD5WifotxHhUXeE0NF+Eu/tS0GMesXyR+GkaZZmkWyXAibdaNCn5sogaKQMAGyIrbIsp2JaSXJOxdJkSXJMDjhcHMcJv2mUepiTaC+QpuN0rHAqlSEKhJ/aO6ZiTp4nPMelQNZf5/5WOAk+q4PIYTpjhyWOmz753+wnOdz9ZI5MlD8AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"a",className:"gatsby-resp-image-image",alt:"exercise1",title:"exercise1",src:"/static/1828d41e35980fba73aefc3df31e9993/acfc1/exercise1.png",srcSet:["/static/1828d41e35980fba73aefc3df31e9993/59afc/exercise1.png 200w","/static/1828d41e35980fba73aefc3df31e9993/a45af/exercise1.png 400w","/static/1828d41e35980fba73aefc3df31e9993/acfc1/exercise1.png 800w","/static/1828d41e35980fba73aefc3df31e9993/7dc98/exercise1.png 1200w","/static/1828d41e35980fba73aefc3df31e9993/362ee/exercise1.png 1600w","/static/1828d41e35980fba73aefc3df31e9993/59ab2/exercise1.png 1800w"],sizes:"(max-width: 800px) 100vw, 800px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n  "),"\n    ")))}l.isMDXComponent=!0},9997:function(e,a,t){"use strict";t.d(a,{Z:function(){return l}});var n=t(7294),s=t(5414),o=t(6187),p=t(994),c=t(7408),r=t(9490),m=t(1780);function l(e){var a=e.children;return n.createElement(n.Fragment,null,n.createElement(n.Fragment,null,n.createElement(s.q,null,n.createElement("title",null,"Cool"),n.createElement("html",{lang:"en"})),n.createElement(r.Z,null),n.createElement(o.Z,{fluid:!0},n.createElement(p.Z,{className:"justify-content-center"},n.createElement(c.Z,{style:{maxWidth:"768px"}},a))),n.createElement(m.Z,null)))}}}]);
//# sourceMappingURL=component---src-pages-linear-regression-index-mdx-bb369f3faef10c07a0ec.js.map