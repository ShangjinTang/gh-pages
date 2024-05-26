"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3190],{3612:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>t,default:()=>o,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var l=a(85893),c=a(11151);const s={authors:["sol"],slug:"cpp/update-compiler-on-ubuntu2204",tags:["cpp","ubuntu2204","clang","gcc"]},t="Ubuntu 22.04 \u66f4\u65b0 C++ \u7f16\u8bd1\u5668",i={permalink:"/blog/cpp/update-compiler-on-ubuntu2204",source:"@site/blog/2024-01-31-cpp-update-compiler-on-ubuntu2204/index.mdx",title:"Ubuntu 22.04 \u66f4\u65b0 C++ \u7f16\u8bd1\u5668",description:"Ubuntu 22.04 \u9ed8\u8ba4\u4f7f\u7528 g++-11 \u548c clang++-14 \u4f5c\u4e3a\u9ed8\u8ba4\u7684 g++ \u548c clang++\u3002",date:"2024-01-31T00:00:00.000Z",tags:[{label:"cpp",permalink:"/blog/tags/cpp"},{label:"ubuntu2204",permalink:"/blog/tags/ubuntu-2204"},{label:"clang",permalink:"/blog/tags/clang"},{label:"gcc",permalink:"/blog/tags/gcc"}],hasTruncateMarker:!0,authors:[{name:"Sol",title:"\u5168\u6808\u5f00\u53d1\u8005",imageURL:"https://github.com/ShangjinTang.png",key:"sol"}],frontMatter:{authors:["sol"],slug:"cpp/update-compiler-on-ubuntu2204",tags:["cpp","ubuntu2204","clang","gcc"]},unlisted:!1,prevItem:{title:"\u6a21\u677f\u5143\u7f16\u7a0b\uff1a\u6590\u6ce2\u90a3\u5951\u6570\u5217",permalink:"/blog/cpp/calculate-fibonnaci-with-template-meta-programming"},nextItem:{title:"\u505c\u6b62\u56fd\u9645\u5316\u652f\u6301",permalink:"/blog/site/remove-i18n-support"}},r={authorsImageUrls:[void 0]},d=[{value:"\u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684 C++ \u7f16\u8bd1\u5668",id:"install-latest-c++-compiler",level:2},{value:"\u5b89\u88c5\u6700\u65b0\u7684 g++",id:"install-latest-g++",level:3},{value:"\u5b89\u88c5\u6700\u65b0\u7684 clang++",id:"install-latest-clang++",level:3},{value:"\u5207\u6362\u7f16\u8bd1\u5668\u7684\u9ed8\u8ba4\u7248\u672c",id:"change-default-version",level:2},{value:"\u5207\u6362 g++ \u7684\u9ed8\u8ba4\u7248\u672c",id:"change-g++-default-version",level:3},{value:"\u5207\u6362 clang++ \u7684\u9ed8\u8ba4\u7248\u672c",id:"change-clang++-default-version",level:3}];function u(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,c.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.p,{children:["Ubuntu 22.04 \u9ed8\u8ba4\u4f7f\u7528 ",(0,l.jsx)(e.code,{children:"g++-11"})," \u548c ",(0,l.jsx)(e.code,{children:"clang++-14"})," \u4f5c\u4e3a\u9ed8\u8ba4\u7684 ",(0,l.jsx)(e.code,{children:"g++"})," \u548c ",(0,l.jsx)(e.code,{children:"clang++"}),"\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"\u672c\u6587\u8bf4\u660e\u5982\u4f55\u5347\u7ea7 C++ \u7f16\u8bd1\u5668\u5e76\u8bbe\u7f6e\u9ed8\u8ba4\u7248\u672c\uff0c\u4ece\u800c\u4f7f\u7528\u6700\u65b0\u7684 C++ \u8bed\u8a00\u7279\u6027\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"install-latest-c++-compiler",children:"\u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684 C++ \u7f16\u8bd1\u5668"}),"\n",(0,l.jsx)(e.h3,{id:"install-latest-g++",children:"\u5b89\u88c5\u6700\u65b0\u7684 g++"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"sudo apt update\nsudo add-apt-repository ppa:ubuntu-toolchain-r/test\nsudo apt install gcc-12 g++-12 -y\nsudo apt install gcc-13 g++-13 -y\n"})}),"\n",(0,l.jsx)(e.h3,{id:"install-latest-clang++",children:"\u5b89\u88c5\u6700\u65b0\u7684 clang++"}),"\n",(0,l.jsxs)(e.p,{children:["\u53c2\u89c1 ",(0,l.jsx)(e.a,{href:"https://apt.llvm.org/",children:"LLVM Debian/Ubuntu Packages"})," \u4e2d\u7684\u5b89\u88c5\u6307\u5357\uff1a"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"wget https://apt.llvm.org/llvm.sh\nchmod +x llvm.sh\n# sudo ./llvm.sh <version number> all\n# or\n# sudo ./llvm.sh all\nsudo ./llvm.sh 18 all\n"})}),"\n",(0,l.jsx)(e.h2,{id:"change-default-version",children:"\u5207\u6362\u7f16\u8bd1\u5668\u7684\u9ed8\u8ba4\u7248\u672c"}),"\n",(0,l.jsxs)(e.p,{children:["\u4e0a\u8ff0\u547d\u4ee4\u6267\u884c\u4e4b\u540e\uff0c\u6211\u4eec\u4f1a\u53d1\u73b0\uff0c",(0,l.jsx)(e.code,{children:"g++"})," \u4ecd\u7136\u662f ",(0,l.jsx)(e.code,{children:"g++11"}),", ",(0,l.jsx)(e.code,{children:"clang++"})," \u4ecd\u7136\u662f ",(0,l.jsx)(e.code,{children:"clang++-14"}),"\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u8fd9\u91cc\u4ecb\u7ecd\u4e00\u4e0b ",(0,l.jsx)(e.code,{children:"update-alternatives"})," \uff0c\u7531\u4e8e\u7ba1\u7406 Ubuntu \u4e0a\u8f6f\u4ef6\u7248\u672c\u7684\u5207\u6362\uff0c\u4f7f\u5176\u591a\u7248\u672c\u5171\u5b58\u3002\u8bed\u6cd5\uff1a"]}),"\n",(0,l.jsx)(e.p,{children:"\u6ce8\u518c\u53ef\u9009\u7684\u8f6f\u4ef6\u7248\u672c\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"sudo update-alternatives --install link name path priority \\\n                        [--slave link name path]\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5207\u6362\u9ed8\u8ba4\u7684\u8f6f\u4ef6\u7248\u672c\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"sudo update-alternatives --config name\n"})}),"\n",(0,l.jsx)(e.admonition,{type:"warning",children:(0,l.jsx)(e.p,{children:"\u5207\u6362\u7f16\u8bd1\u5668\u8f6f\u4ef6\u5305\u53ef\u80fd\u6709\u98ce\u9669\uff0c\u5efa\u8bae\u53ea\u5728\u4e2a\u4eba\u8ba1\u7b97\u673a\u4e0a\u4f7f\u7528\u3002"})}),"\n",(0,l.jsx)(e.h3,{id:"change-g++-default-version",children:"\u5207\u6362 g++ \u7684\u9ed8\u8ba4\u7248\u672c"}),"\n",(0,l.jsxs)(e.p,{children:["\u6ce8\u518c ",(0,l.jsx)(e.code,{children:"gcc"})," / ",(0,l.jsx)(e.code,{children:"g++"})," \u7248\u672c\uff1a"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-11 11 --slave /usr/bin/g++ g++ /usr/bin/g++-11\nsudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-12 12 --slave /usr/bin/g++ g++ /usr/bin/g++-12\nsudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-13 13 --slave /usr/bin/g++ g++ /usr/bin/g++-13\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u9009\u62e9\u9ed8\u8ba4 ",(0,l.jsx)(e.code,{children:"gcc"})," / ",(0,l.jsx)(e.code,{children:"g++"})," \u7248\u672c\uff1a"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"sudo update-alternatives --config gcc\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u4f1a\u5f39\u51fa\u4ee5\u4e0b\u9009\u9879\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"There are 3 choices for the alternative gcc (providing /usr/bin/gcc).\n\n  Selection    Path             Priority   Status\n------------------------------------------------------------\n* 0            /usr/bin/gcc-13   13        auto mode\n  1            /usr/bin/gcc-11   11        manual mode\n  2            /usr/bin/gcc-12   12        manual mode\n  3            /usr/bin/gcc-13   13        manual mode\n\nPress <enter> to keep the current choice[*], or type selection number:\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u8f93\u5165\u5e8f\u53f7\u5373\u53ef\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"change-clang++-default-version",children:"\u5207\u6362 clang++ \u7684\u9ed8\u8ba4\u7248\u672c"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"clang"})," / ",(0,l.jsx)(e.code,{children:"clang++"})," \u662f LLVM \u5de5\u5177\u94fe\u7684\u4e00\u90e8\u5206\uff0c\u66f4\u65b0\u7684\u65f6\u5019\uff0c\u5efa\u8bae\u628a llvm \u6240\u6709\u5de5\u5177\u4e00\u8d77\u66f4\u65b0\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"\u8fd9\u91cc\u4f7f\u7528\u4ee5\u4e0b\u811a\u672c\u8fdb\u884c\u6279\u91cf\u6ce8\u518c:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"wget https://raw.githubusercontent.com/ShangjinTang/dotfiles/05ef87daae29475244c276db5d406b58c52be445/linux/ubuntu/22.04/bin/update-alternatives-clang\nsudo bash ./update-alternatives-clang\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u7ed3\u679c\u5982\u4e0b:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-plain",children:"[Adding alternative /usr/bin/clang-14 ...]\nMaster command: clang-14\nSlave commands: analyze-build-14 bugpoint-14 ...\n[Adding alternative /usr/bin/clang-14: succeeded]\n\n[Adding alternative /usr/bin/clang-18 ...]\nMaster command: clang-18\nSlave commands: amdgpu-arch-18 analyze-build-18 ...\n[Adding alternative /usr/bin/clang-18: succeeded]\n\n======================================================================\nclang alternative is set to: /usr/bin/clang-18\n======================================================================\n...\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u540c\u4e0a\u9762\u7684 ",(0,l.jsx)(e.code,{children:"gcc"}),"/",(0,l.jsx)(e.code,{children:"g++"})," \u7248\u672c\u5207\u6362\uff0c\u5207\u6362 ",(0,l.jsx)(e.code,{children:"clang"})," / ",(0,l.jsx)(e.code,{children:"llvm"})," \u5de5\u5177\u94fe\u7248\u672c\u547d\u4ee4\u5982\u4e0b\uff1a"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"sudo update-alternatives --config clang\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u4f1a\u5f39\u51fa\u4ee5\u4e0b\u9009\u9879\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"There are 2 choices for the alternative clang (providing /usr/bin/clang).\n\n  Selection    Path               Priority   Status\n------------------------------------------------------------\n* 0            /usr/bin/clang-18   18        auto mode\n  1            /usr/bin/clang-14   14        manual mode\n  2            /usr/bin/clang-18   18        manual mode\n\nPress <enter> to keep the current choice[*], or type selection number:\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u8f93\u5165\u5e8f\u53f7\u5373\u53ef\u3002"})]})}function o(n={}){const{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(u,{...n})}):u(n)}},11151:(n,e,a)=>{a.d(e,{Z:()=>i,a:()=>t});var l=a(67294);const c={},s=l.createContext(c);function t(n){const e=l.useContext(s);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:t(n.components),l.createElement(s.Provider,{value:e},n.children)}}}]);