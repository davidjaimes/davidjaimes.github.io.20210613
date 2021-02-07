(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{ehAj:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return b})),t.d(a,"default",(function(){return r}));var n=t("zLVn"),s=(t("q1tI"),t("7ljp")),l=t("nOLG"),b={},c={_frontmatter:b},o=l.a;function r(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(s.b)(o,Object.assign({},c,t,{components:a,mdxType:"MDXLayout"}),Object(s.b)("h1",{align:"center",style:{marginTop:"2em"}},"macOS Configuration"),Object(s.b)("br",null),Object(s.b)("p",null,"Are you setting up a brand new Apple computer for the first time or are you have you forgotten the last process you took to get everything up and running? No worries. I have you covered and will lay out the steps to get up and running in no time. This is the general route I take whenever I execute a clean install on my Mac computer."),Object(s.b)("p",null,"Here are the tools we will be setting up:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://developer.apple.com/xcode/"},"Xcode"),": Apple Developer Tools."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://ohmyz.sh/"},"Oh My Zsh"),": A delightful, open source, community-driven framework for managing your Zsh configuration."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://brew.sh/"},"Homebrew"),": The missing package manager for macOS."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://docs.conda.io/en/latest/miniconda.html"},"Miniconda"),": A free minimal installer for conda.\nand integrate systems more effectively."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://tug.org/mactex/"},"MacTeX"),": A document preparation system."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://atom.io/"},"Atom"),": An open-source text editor for the 21st century.")),Object(s.b)("br",null),Object(s.b)("h1",null,"Xcode"),Object(s.b)("p",null,"The first thing to install is Apple's command line tools."),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Launch the Terminal application found in your ",Object(s.b)("code",{parentName:"li",className:"language-text"},"Applications/Utilities")," directory."),Object(s.b)("li",{parentName:"ol"},"Enter this install command:")),Object(s.b)("div",{className:"gatsby-highlight","data-language":"bash"},Object(s.b)("pre",{parentName:"div",className:"language-bash"},Object(s.b)("code",{parentName:"pre",className:"language-bash"},"xcode-select --install"))),Object(s.b)("br",null),Object(s.b)("ol",{start:3},Object(s.b)("li",{parentName:"ol"},"A pop up window appears and press the Install button. After the installation is done you can enter the ",Object(s.b)("code",{parentName:"li",className:"language-text"},"gcc -version")," command and something similar to this should print out:")),Object(s.b)("div",{className:"gatsby-highlight","data-language":"text"},Object(s.b)("pre",{parentName:"div",className:"language-text"},Object(s.b)("code",{parentName:"pre",className:"language-text"},"Configured with: --prefix=/Library/Developer/CommandLineTools/usr --with-gxx-include-dir=/Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/include/c++/4.2.1\nApple clang version 11.0.0 (clang-1100.0.33.8)\nTarget: x86_64-apple-darwin19.2.0\nThread model: posix\nInstalledDir: /Library/Developer/CommandLineTools/usr/bin"))),Object(s.b)("br",null),Object(s.b)("h1",null,"Oh My Zsh"),Object(s.b)("p",null,"Install oh-my-zsh now and use this link to ",Object(s.b)("a",{parentName:"p",href:"https://github.com/ohmyzsh/ohmyzsh/wiki/Themes"},"change themes"),":"),Object(s.b)("div",{className:"gatsby-highlight","data-language":"bash"},Object(s.b)("pre",{parentName:"div",className:"language-bash"},Object(s.b)("code",{parentName:"pre",className:"language-bash"},Object(s.b)("span",{parentName:"code",className:"token function"},"sh")," -c ",Object(s.b)("span",{parentName:"code",className:"token string"},'"',Object(s.b)("span",{parentName:"span",className:"token variable"},Object(s.b)("span",{parentName:"span",className:"token variable"},"$("),Object(s.b)("span",{parentName:"span",className:"token function"},"curl")," -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh",Object(s.b)("span",{parentName:"span",className:"token variable"},")")),'"')))),Object(s.b)("br",null),Object(s.b)("h1",null,"Homebrew"),Object(s.b)("p",null,"Install Homebrew now:"),Object(s.b)("div",{className:"gatsby-highlight","data-language":"bash"},Object(s.b)("pre",{parentName:"div",className:"language-bash"},Object(s.b)("code",{parentName:"pre",className:"language-bash"},"/usr/bin/ruby -e ",Object(s.b)("span",{parentName:"code",className:"token string"},'"',Object(s.b)("span",{parentName:"span",className:"token variable"},Object(s.b)("span",{parentName:"span",className:"token variable"},"$("),Object(s.b)("span",{parentName:"span",className:"token function"},"curl")," -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install",Object(s.b)("span",{parentName:"span",className:"token variable"},")")),'"')))),Object(s.b)("br",null),Object(s.b)("h1",null,"Miniconda"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Download the latest bash file from the ",Object(s.b)("a",{parentName:"li",href:"https://docs.conda.io/en/latest/miniconda.html"},"Miniconda")," page and install with the following command:")),Object(s.b)("div",{className:"gatsby-highlight","data-language":"bash"},Object(s.b)("pre",{parentName:"div",className:"language-bash"},Object(s.b)("code",{parentName:"pre",className:"language-bash"},Object(s.b)("span",{parentName:"code",className:"token function"},"bash")," Miniconda3-latest-MacOSX-x86_64.sh"))),Object(s.b)("ol",{start:2},Object(s.b)("li",{parentName:"ol"},"Update conda and initialize zsh environment for macOS Catalina users:")),Object(s.b)("div",{className:"gatsby-highlight","data-language":"bash"},Object(s.b)("pre",{parentName:"div",className:"language-bash"},Object(s.b)("code",{parentName:"pre",className:"language-bash"},"conda update conda\nconda init ",Object(s.b)("span",{parentName:"code",className:"token function"},"zsh")))),Object(s.b)("ol",{start:3},Object(s.b)("li",{parentName:"ol"},"Install all Python libraries at once (NumPy and SciPy will also be installed):")),Object(s.b)("div",{className:"gatsby-highlight","data-language":"bash"},Object(s.b)("pre",{parentName:"div",className:"language-bash"},Object(s.b)("code",{parentName:"pre",className:"language-bash"},"conda ",Object(s.b)("span",{parentName:"code",className:"token function"},"install")," matplotlib pandas astropy notebook scikit-learn"))))}r.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-mac-os-config-index-mdx-41c8f4418938a8b19a40.js.map