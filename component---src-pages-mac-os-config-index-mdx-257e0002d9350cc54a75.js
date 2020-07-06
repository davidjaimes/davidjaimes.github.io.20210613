(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{ehAj:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return c})),t.d(a,"default",(function(){return i}));t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("91GP"),t("q1tI");var n=t("7ljp"),s=t("TiLl");var c={},l={_frontmatter:c},b=s.a;function i(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,s={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,["components"]);return Object(n.b)(b,Object.assign({},l,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h1",null,"macOS Configuration"),Object(n.b)("p",null,"Are you setting up a brand new Apple computer for the first time or are you have you forgotten the last process you took to get everything up and running? No worries. I have you covered and will lay out the steps to get up and running in no time. This is the general route I take whenever I execute a clean install on my Mac computer."),Object(n.b)("p",null,"Here are the tools we will be setting up:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://developer.apple.com/xcode/"}),"Xcode"),": Apple Developer Tools."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://ohmyz.sh/"}),"Oh My Zsh"),": A delightful, open source, community-driven framework for managing your Zsh configuration."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://brew.sh/"}),"Homebrew"),": The missing package manager for macOS."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://docs.conda.io/en/latest/miniconda.html"}),"Miniconda"),": A free minimal installer for conda.\nand integrate systems more effectively."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://tug.org/mactex/"}),"MacTeX"),": A document preparation system."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://atom.io/"}),"Atom"),": An open-source text editor for the 21st century.")),Object(n.b)("h1",null,"Xcode"),Object(n.b)("p",null,"The first thing to install is Apple's command line tools."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Launch the Terminal application found in your ",Object(n.b)("code",Object.assign({parentName:"li"},{className:"language-text"}),"Applications/Utilities")," directory."),Object(n.b)("li",{parentName:"ol"},"Enter this install command:")),Object(n.b)("div",{className:"gatsby-highlight","data-language":"bash"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-bash"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"xcode-select --install"))),Object(n.b)("ol",{start:3},Object(n.b)("li",{parentName:"ol"},"A pop up window appears and press the Install button. After the installation is done you can enter the ",Object(n.b)("code",Object.assign({parentName:"li"},{className:"language-text"}),"gcc -version")," command and something similar to this should print out:")),Object(n.b)("div",{className:"gatsby-highlight","data-language":"text"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-text"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"Configured with: --prefix=/Library/Developer/CommandLineTools/usr --with-gxx-include-dir=/Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/include/c++/4.2.1\nApple clang version 11.0.0 (clang-1100.0.33.8)\nTarget: x86_64-apple-darwin19.2.0\nThread model: posix\nInstalledDir: /Library/Developer/CommandLineTools/usr/bin"))),Object(n.b)("h1",null,"Oh My Zsh"),Object(n.b)("p",null,"Install oh-my-zsh now and use this link to ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/ohmyzsh/ohmyzsh/wiki/Themes"}),"change themes"),":"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"bash"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-bash"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"sh")," -c ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"',Object(n.b)("span",Object.assign({parentName:"span"},{className:"token variable"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token variable"}),"$("),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token function"}),"curl")," -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh",Object(n.b)("span",Object.assign({parentName:"span"},{className:"token variable"}),")")),'"')))),Object(n.b)("h1",null,"Homebrew"),Object(n.b)("p",null,"Install Homebrew now:"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"bash"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-bash"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"/usr/bin/ruby -e ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),'"',Object(n.b)("span",Object.assign({parentName:"span"},{className:"token variable"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token variable"}),"$("),Object(n.b)("span",Object.assign({parentName:"span"},{className:"token function"}),"curl")," -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install",Object(n.b)("span",Object.assign({parentName:"span"},{className:"token variable"}),")")),'"')))),Object(n.b)("h1",null,"Miniconda"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Download the latest bash file from the ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://docs.conda.io/en/latest/miniconda.html"}),"Miniconda")," page and install with the following command:")),Object(n.b)("div",{className:"gatsby-highlight","data-language":"bash"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-bash"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"bash")," Miniconda3-latest-MacOSX-x86_64.sh"))),Object(n.b)("ol",{start:2},Object(n.b)("li",{parentName:"ol"},"Update conda and initialize zsh environment for macOS Catalina users:")),Object(n.b)("div",{className:"gatsby-highlight","data-language":"bash"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-bash"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"conda update conda\nconda init ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"zsh")))),Object(n.b)("ol",{start:3},Object(n.b)("li",{parentName:"ol"},"Install all Python libraries at once (NumPy and SciPy will also be installed):")),Object(n.b)("div",{className:"gatsby-highlight","data-language":"bash"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-bash"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"conda ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"install")," matplotlib pandas astropy notebook scikit-learn"))))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-mac-os-config-index-mdx-257e0002d9350cc54a75.js.map