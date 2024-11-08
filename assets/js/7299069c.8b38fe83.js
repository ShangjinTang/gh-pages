"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6520],{44335:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>m,toc:()=>d});var a=s(74848),c=s(28453),t=s(11470),i=s(19365);const l={authors:["sol"],slug:"cpp/calculate-fibonnaci-with-template-meta-programming",tags:["cpp","template-meta-programming"]},r="\u6a21\u677f\u5143\u7f16\u7a0b\uff1a\u6590\u6ce2\u90a3\u5951\u6570\u5217",m={permalink:"/site/blog/cpp/calculate-fibonnaci-with-template-meta-programming",editUrl:"https://github.com/ShangjinTang/docusaurus/edit/master/website/blog/2024-02-20-calculate-fibonacci-with-template-meta-programming/index.mdx",source:"@site/blog/2024-02-20-calculate-fibonacci-with-template-meta-programming/index.mdx",title:"\u6a21\u677f\u5143\u7f16\u7a0b\uff1a\u6590\u6ce2\u90a3\u5951\u6570\u5217",description:"\u5728\u7f16\u7a0b\u4e2d\uff0c\u6590\u6ce2\u90a3\u5951\u6570\u5217\u662f\u4e00\u4e2a\u7ecf\u5178\u7684\u6570\u5b66\u95ee\u9898\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4f20\u7edf\u9012\u5f52\u51fd\u6570\u6765\u8ba1\u7b97\u6590\u6ce2\u90a3\u5951\u6570\u5217\u3002\u4f46\u662f\u8fd0\u884c\u65f6\u8ba1\u7b97\u9012\u5f52\u4f1a\u9020\u6210\u6bd4\u8f83\u957f\u7684\u8017\u65f6\u3002",date:"2024-02-20T00:00:00.000Z",tags:[{inline:!0,label:"cpp",permalink:"/site/blog/tags/cpp"},{inline:!0,label:"template-meta-programming",permalink:"/site/blog/tags/template-meta-programming"}],hasTruncateMarker:!0,authors:[{name:"Sol",title:"\u5343\u91cc\u4e4b\u884c\uff0c\u59cb\u4e8e\u8db3\u4e0b\u3002",email:"shangjin.tang@gmail.com",socials:{x:"https://x.com/ShangjinTang",github:"https://github.com/ShangjinTang"},imageURL:"https://github.com/ShangjinTang.png",key:"sol",page:null}],frontMatter:{authors:["sol"],slug:"cpp/calculate-fibonnaci-with-template-meta-programming",tags:["cpp","template-meta-programming"]},unlisted:!1,prevItem:{title:"\u7edf\u4e00\u4e2d\u6587\u6392\u7248",permalink:"/site/blog/tools/cli/autocorrect"},nextItem:{title:"Ubuntu 22.04 \u66f4\u65b0 C++ \u7f16\u8bd1\u5668",permalink:"/site/blog/cpp/update-compiler-on-ubuntu2204"}},o={authorsImageUrls:[void 0]},d=[{value:"\u4f20\u7edf\u9012\u5f52",id:"\u4f20\u7edf\u9012\u5f52",level:2},{value:"\u6a21\u677f\u5143\u7f16\u7a0b\u5b9e\u73b0",id:"\u6a21\u677f\u5143\u7f16\u7a0b\u5b9e\u73b0",level:2},{value:"C++11",id:"c11",level:3},{value:"C++14",id:"c14",level:3},{value:"C++20",id:"c20",level:3},{value:"\u5b8c\u6574\u4ee3\u7801",id:"\u5b8c\u6574\u4ee3\u7801",level:2}];function h(e){const n={a:"a",annotation:"annotation",code:"code",h2:"h2",h3:"h3",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",mtext:"mtext",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"\u5728\u7f16\u7a0b\u4e2d\uff0c\u6590\u6ce2\u90a3\u5951\u6570\u5217\u662f\u4e00\u4e2a\u7ecf\u5178\u7684\u6570\u5b66\u95ee\u9898\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4f20\u7edf\u9012\u5f52\u51fd\u6570\u6765\u8ba1\u7b97\u6590\u6ce2\u90a3\u5951\u6570\u5217\u3002\u4f46\u662f\u8fd0\u884c\u65f6\u8ba1\u7b97\u9012\u5f52\u4f1a\u9020\u6210\u6bd4\u8f83\u957f\u7684\u8017\u65f6\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u6a21\u677f\u5143\u7f16\u7a0b\u53ef\u4ee5\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u5728\u7f16\u8bd1\u65f6\u8ba1\u7b97\u6590\u6ce2\u90a3\u5951\u6570\u5217\uff0c\u4ece\u800c\u63d0\u9ad8\u6267\u884c\u6548\u7387\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u6590\u6ce2\u90a3\u5951\u6570\u5217\u6709\u4e24\u79cd\uff1a"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\u4ece ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mn,{children:"0"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"0"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(n.span,{className:"mord",children:"0"})]})})]})," \u5f00\u59cb\uff1a ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mn,{children:"0"}),(0,a.jsx)(n.mo,{separator:"true",children:","}),(0,a.jsx)(n.mn,{children:"1"}),(0,a.jsx)(n.mo,{separator:"true",children:","}),(0,a.jsx)(n.mn,{children:"1"}),(0,a.jsx)(n.mo,{separator:"true",children:","}),(0,a.jsx)(n.mn,{children:"2"}),(0,a.jsx)(n.mo,{separator:"true",children:","}),(0,a.jsx)(n.mn,{children:"3"}),(0,a.jsx)(n.mo,{separator:"true",children:","}),(0,a.jsx)(n.mn,{children:"5"}),(0,a.jsx)(n.mo,{separator:"true",children:","}),(0,a.jsx)(n.mn,{children:"8"}),(0,a.jsx)(n.mo,{separator:"true",children:","}),(0,a.jsx)(n.mi,{mathvariant:"normal",children:"."}),(0,a.jsx)(n.mi,{mathvariant:"normal",children:"."}),(0,a.jsx)(n.mi,{mathvariant:"normal",children:"."})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"0,1,1,2,3,5,8,..."})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.8389em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(n.span,{className:"mord",children:"0"}),(0,a.jsx)(n.span,{className:"mpunct",children:","}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(n.span,{className:"mord",children:"1"}),(0,a.jsx)(n.span,{className:"mpunct",children:","}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(n.span,{className:"mord",children:"1"}),(0,a.jsx)(n.span,{className:"mpunct",children:","}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(n.span,{className:"mord",children:"2"}),(0,a.jsx)(n.span,{className:"mpunct",children:","}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(n.span,{className:"mord",children:"3"}),(0,a.jsx)(n.span,{className:"mpunct",children:","}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(n.span,{className:"mord",children:"5"}),(0,a.jsx)(n.span,{className:"mpunct",children:","}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(n.span,{className:"mord",children:"8"}),(0,a.jsx)(n.span,{className:"mpunct",children:","}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(n.span,{className:"mord",children:"..."})]})})]})]}),"\n",(0,a.jsxs)(n.li,{children:["\u4ece ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mn,{children:"1"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(n.span,{className:"mord",children:"1"})]})})]})," \u5f00\u59cb\uff1a ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mn,{children:"1"}),(0,a.jsx)(n.mo,{separator:"true",children:","}),(0,a.jsx)(n.mn,{children:"1"}),(0,a.jsx)(n.mo,{separator:"true",children:","}),(0,a.jsx)(n.mn,{children:"2"}),(0,a.jsx)(n.mo,{separator:"true",children:","}),(0,a.jsx)(n.mn,{children:"3"}),(0,a.jsx)(n.mo,{separator:"true",children:","}),(0,a.jsx)(n.mn,{children:"5"}),(0,a.jsx)(n.mo,{separator:"true",children:","}),(0,a.jsx)(n.mn,{children:"8"}),(0,a.jsx)(n.mo,{separator:"true",children:","}),(0,a.jsx)(n.mi,{mathvariant:"normal",children:"."}),(0,a.jsx)(n.mi,{mathvariant:"normal",children:"."}),(0,a.jsx)(n.mi,{mathvariant:"normal",children:"."})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"1,1,2,3,5,8,..."})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.8389em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(n.span,{className:"mord",children:"1"}),(0,a.jsx)(n.span,{className:"mpunct",children:","}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(n.span,{className:"mord",children:"1"}),(0,a.jsx)(n.span,{className:"mpunct",children:","}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(n.span,{className:"mord",children:"2"}),(0,a.jsx)(n.span,{className:"mpunct",children:","}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(n.span,{className:"mord",children:"3"}),(0,a.jsx)(n.span,{className:"mpunct",children:","}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(n.span,{className:"mord",children:"5"}),(0,a.jsx)(n.span,{className:"mpunct",children:","}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(n.span,{className:"mord",children:"8"}),(0,a.jsx)(n.span,{className:"mpunct",children:","}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(n.span,{className:"mord",children:"..."})]})})]})]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["\u6211\u4eec\u5047\u8bbe\u4ece ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mn,{children:"0"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"0"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(n.span,{className:"mord",children:"0"})]})})]})," \u5f00\u59cb\uff0c\u5373 ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"f"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsx)(n.mn,{children:"0"}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"}),(0,a.jsx)(n.mo,{children:"="}),(0,a.jsx)(n.mn,{children:"0"}),(0,a.jsx)(n.mtext,{children:"\uff0c"}),(0,a.jsx)(n.mi,{children:"f"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsx)(n.mn,{children:"1"}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"}),(0,a.jsx)(n.mo,{children:"="}),(0,a.jsx)(n.mn,{children:"1"}),(0,a.jsx)(n.mtext,{children:"\uff0c"}),(0,a.jsx)(n.mi,{children:"f"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsx)(n.mn,{children:"2"}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"}),(0,a.jsx)(n.mo,{children:"="}),(0,a.jsx)(n.mn,{children:"1"}),(0,a.jsx)(n.mtext,{children:"\uff0c"}),(0,a.jsx)(n.mi,{mathvariant:"normal",children:"."}),(0,a.jsx)(n.mi,{mathvariant:"normal",children:"."}),(0,a.jsx)(n.mi,{mathvariant:"normal",children:"."})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:" f(0) = 0\uff0cf(1) = 1\uff0cf(2) = 1\uff0c..."})]})})}),(0,a.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsx)(n.span,{className:"mord",children:"0"}),(0,a.jsx)(n.span,{className:"mclose",children:")"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(n.span,{className:"mrel",children:"="}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord",children:"0"}),(0,a.jsx)(n.span,{className:"mord cjk_fallback",children:"\uff0c"}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsx)(n.span,{className:"mord",children:"1"}),(0,a.jsx)(n.span,{className:"mclose",children:")"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(n.span,{className:"mrel",children:"="}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord",children:"1"}),(0,a.jsx)(n.span,{className:"mord cjk_fallback",children:"\uff0c"}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsx)(n.span,{className:"mord",children:"2"}),(0,a.jsx)(n.span,{className:"mclose",children:")"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(n.span,{className:"mrel",children:"="}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(n.span,{className:"mord",children:"1"}),(0,a.jsx)(n.span,{className:"mord cjk_fallback",children:"\uff0c"}),(0,a.jsx)(n.span,{className:"mord",children:"..."})]})]})]}),"\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u4f20\u7edf\u9012\u5f52",children:"\u4f20\u7edf\u9012\u5f52"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"/**\n * @file fibonacci_recursive.cpp\n * @brief calculate fibonacci value recursively\n */\n#include <iostream>\n\nunsigned int calc_fibonacci(unsigned int i) {\n    if (i == 0 || i == 1) {\n        return i;\n    }\n    return calc_fibonacci(i - 1) + calc_fibonacci(i - 2);\n};\n\nint main() {\n    std::cout << calc_fibonacci(42) << '\\n';\n    return 0;\n}\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plain",children:'> g++ -O0 -g a.out fibonacci_recursive.cpp -o prog_fibonacci_recursive\n\n> ./prog_fibonacci_recursive\n267914296\n\n> hyperfine "./prog_fibonacci_recursive"\nBenchmark 1: ./prog_fibonacci_recursive\n  Time (mean \xb1 \u03c3):      1.657 s \xb1  0.015 s    [User: 1.652 s, System: 0.002 s]\n  Range (min \u2026 max):    1.647 s \u2026  1.696 s    10 runs\n'})}),"\n",(0,a.jsx)(n.h2,{id:"\u6a21\u677f\u5143\u7f16\u7a0b\u5b9e\u73b0",children:"\u6a21\u677f\u5143\u7f16\u7a0b\u5b9e\u73b0"}),"\n",(0,a.jsx)(n.h3,{id:"c11",children:"C++11"}),"\n",(0,a.jsxs)(n.p,{children:["\u9996\u5148\uff0c\u6211\u4eec\u5b9a\u4e49\u4e00\u4e2a\u6a21\u677f\u7c7b ",(0,a.jsx)(n.code,{children:"fibonacci"}),"\uff0c\u5b83\u5177\u6709\u4e00\u4e2a\u9759\u6001\u6210\u5458\u53d8\u91cf ",(0,a.jsx)(n.code,{children:"value"}),"\uff0c\u7528\u4e8e\u5b58\u50a8\u6590\u6ce2\u90a3\u5951\u6570\u5217\u7684\u503c\u3002\u8be5\u6a21\u677f\u7c7b\u4f7f\u7528\u9012\u5f52\u5b9a\u4e49\uff0c\u6839\u636e\u7ed9\u5b9a\u7684\u5927\u5c0f\u8ba1\u7b97\u6590\u6ce2\u90a3\u5951\u6570\u5217\u503c\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"template <int size>\nstruct fibonacci {\n    static constexpr unsigned int value = fibonacci<size - 1>::value + fibonacci<size - 2>::value;\n};\n\ntemplate <>\nstruct fibonacci<0> {\n    static constexpr unsigned int value = 0;\n};\n\ntemplate <>\nstruct fibonacci<1> {\n    static constexpr unsigned int value = 1;\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,a.jsx)(n.code,{children:"fibonacci<42>::value"})," \u5219\u53ef\u4ee5\u5f97\u5230\u5bf9\u5e94\u7684\u7ed3\u679c\u3002\u8fd9\u4e2a\u8bed\u6cd5\u7c7b\u4f3c\u4e8e\u4f20\u7edf\u7684\u9012\u5f52\uff0c\u4f46\u662f\u4f1a\u5728\u7f16\u8bd1\u671f\u8fdb\u884c\u6c42\u503c\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u4f7f\u7528\u6a21\u677f\u5143\u7f16\u7a0b\u7684\u6590\u6ce2\u90a3\u5951\u6570\u5217\u8ba1\u7b97\u65b9\u6cd5\u76f8\u6bd4\u4e8e\u4f20\u7edf\u7684\u9012\u5f52\u65b9\u6cd5\u5177\u6709\u66f4\u9ad8\u7684\u6548\u7387\u3002\u5b83\u5728\u7f16\u8bd1\u65f6\u5b8c\u6210\u8ba1\u7b97\uff0c\u907f\u514d\u4e86\u8fd0\u884c\u65f6\u7684\u91cd\u590d\u8ba1\u7b97\uff0c\u4ece\u800c\u63d0\u9ad8\u4e86\u7a0b\u5e8f\u7684\u6027\u80fd\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u8fd9\u91cc\u4f7f\u7528\u4e86\u7f16\u8bd1\u671f\u6c42\u503c\u7684\u5173\u952e\u5b57 ",(0,a.jsx)(n.code,{children:"constexpr"}),"\uff0c\u56e0\u6b64\u9700\u8981 C++11 \u7248\u672c\u53ca\u4ee5\u4e0a\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plain",children:'> g++ -O0 -g -std=c++11 a.out fibonacci_tmp.cpp -o prog_fibonacci_tmp\n\n> ./prog_fibonacci_tmp\n267914296\n\n> hyperfine "./prog_fibonacci_tmp"\nBenchmark 1: ./prog_fibonacci_tmp\n  Time (mean \xb1 \u03c3):       0.8 ms \xb1   0.1 ms    [User: 0.9 ms, System: 0.2 ms]\n  Range (min \u2026 max):     0.6 ms \u2026   1.5 ms    1605 runs\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\u5728\u8ba1\u7b97\u7b2c 42 \u4e2a\u6590\u6ce2\u90a3\u5951\u6570\u7684\u65f6\u5019\uff0c\u8fd0\u884c\u65f6\u95f4\u4ec5\u9700 ~0.8ms\uff0c\u76f8\u5f53\u4e8e\u4f20\u7edf\u9012\u5f52\u65b9\u6cd5 ~1.6s \u7684 1/2000\u3002"})}),"\n",(0,a.jsx)(n.h3,{id:"c14",children:"C++14"}),"\n",(0,a.jsxs)(n.p,{children:["\u5728 C++17 \u4e2d\uff0c\u901a\u5e38\u4f7f\u7528 ",(0,a.jsx)(n.code,{children:"_v"})," \u7ed3\u5c3e\u5f53\u4f5c ",(0,a.jsx)(n.code,{children:"value"})," \u7c7b\u578b (\u53c2\u89c1\u8fd9\u7bc7 ",(0,a.jsx)(n.a,{href:"https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2014/n3854.htm",children:"proposal"}),")\uff0c\u6bd4\u5982\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"template <struct T>\nconstexpr bool is_integral_v = is_integral<T>::value;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u7c7b\u4f3c\u7684\uff0c\u6211\u4eec\u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e2a\u6a21\u677f\u53d8\u91cf ",(0,a.jsx)(n.code,{children:"fibonacci_v"}),"\uff0c\u7528\u4e8e\u65b9\u4fbf\u5730\u83b7\u53d6\u6590\u6ce2\u90a3\u5951\u6570\u5217\u7684\u503c\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"template <int size>\nconstexpr auto fibonacci_v = fibonacci<size>::value;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u6ce8\u610f\uff0c\u8fd9\u79cd ",(0,a.jsx)(n.code,{children:"_v"})," \u7684\u5b9e\u73b0\u5e76\u4e0d\u9700\u8981 C++17 \u7684\u7f16\u8bd1\u5668\uff1bC++14 \u7684\u7f16\u8bd1\u5668\u5373\u53ef\u4ee5\u6ee1\u8db3\u9700\u6c42\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u7f16\u8bd1\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plain",children:"> g++ -O0 -g -std=c++14 a.out fibonacci_tmp.cpp -o prog_fibonacci_tmp\n"})}),"\n",(0,a.jsx)(n.h3,{id:"c20",children:"C++20"}),"\n",(0,a.jsxs)(n.p,{children:["C++20 \u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,a.jsx)(n.code,{children:"concept"})," / ",(0,a.jsx)(n.code,{children:"requires"}),"\uff0c\u5408\u5e76\u4e24\u4e2a\u504f\u7279\u5316\u6a21\u677f\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"template <int size>\nconcept FibonacciBaseCase = (size == 0) || (size == 1);\n\ntemplate <int size>\nrequires FibonacciBaseCase<size>\nstruct fibonacci<size> {\npublic:\n    static constexpr unsigned int value = size;\n};\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u7f16\u8bd1\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plain",children:"> g++ -O0 -g -std=c++20 a.out fibonacci_tmp.cpp -o prog_fibonacci_tmp\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u5b8c\u6574\u4ee3\u7801",children:"\u5b8c\u6574\u4ee3\u7801"}),"\n",(0,a.jsxs)(t.A,{groupId:"code-examples",children:[(0,a.jsx)(i.A,{value:"c++11",label:"c++11",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",metastring:'tab={"label":"c++11"}',children:"#include <iostream>\n\ntemplate <int size>\nstruct fibonacci {\npublic:\n    static constexpr unsigned int value = fibonacci<size - 1>::value + fibonacci<size - 2>::value;\n};\n\ntemplate <>\nstruct fibonacci<0> {\npublic:\n    static constexpr unsigned int value = 0;\n};\n\ntemplate <>\nstruct fibonacci<1> {\npublic:\n    static constexpr unsigned int value = 1;\n};\n\nint main() {\n    std::cout << fibonacci<42>::value << '\\n';\n    return 0;\n}\n"})})}),(0,a.jsx)(i.A,{value:"c++14",label:"c++14",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",metastring:'tab={"label":"c++14"}',children:"#include <iostream>\n\ntemplate <int size>\nstruct fibonacci {\npublic:\n    static constexpr unsigned int value = fibonacci<size - 1>::value + fibonacci<size - 2>::value;\n};\n\ntemplate <>\nstruct fibonacci<0> {\npublic:\n    static constexpr unsigned int value = 0;\n};\n\ntemplate <>\nstruct fibonacci<1> {\npublic:\n    static constexpr unsigned int value = 1;\n};\n\n// highlight-add-start\ntemplate <int size>\nconstexpr auto fibonacci_v = fibonacci<size>::value;\n// highlight-add-end\n\nint main() {\n    // highlight-delete\n    // std::cout << fibonacci<42>::value << '\\n';\n    // highlight-add\n    std::cout << fibonacci_v<42> << '\\n';\n    return 0;\n}\n"})})}),(0,a.jsx)(i.A,{value:"c++20",label:"c++20",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",metastring:'tab={"label":"c++20"}',children:"#include <iostream>\n\ntemplate <int size>\nstruct fibonacci {\npublic:\n    static constexpr unsigned int value = fibonacci<size - 1>::value + fibonacci<size - 2>::value;\n};\n\n// highlight-delete-start\n// template <>\n// struct fibonacci<0> {\n// public:\n//     static constexpr unsigned int value = 0;\n// };\n\n// template <>\n// struct fibonacci<1> {\n// public:\n//     static constexpr unsigned int value = 1;\n// };\n// highlight-delete-end\n// highlight-add-start\ntemplate <int size>\nconcept FibonacciBaseCase = (size == 0) || (size == 1);\n\ntemplate <int size>\nrequires FibonacciBaseCase<size>\nstruct fibonacci<size> {\npublic:\n    static constexpr unsigned int value = size;\n};\n// highlight-add-end\n\ntemplate <int size>\nconstexpr auto fibonacci_v = fibonacci<size>::value;\n\nint main() {\n    std::cout << fibonacci_v<42> << '\\n';\n    return 0;\n}\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"\u901a\u8fc7\u4f7f\u7528\u6a21\u677f\u5143\u7f16\u7a0b\u6280\u672f\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u7f16\u8bd1\u65f6\u8ba1\u7b97\u6590\u6ce2\u90a3\u5951\u6570\u5217\uff0c\u907f\u514d\u4e86\u9012\u5f52\u51fd\u6570\u7684\u91cd\u590d\u8ba1\u7b97\uff0c\u5728\u4e00\u4e9b\u9700\u8981\u9ad8\u6548\u8ba1\u7b97\u6590\u6ce2\u90a3\u5951\u6570\u5217\u7684\u573a\u666f\u4e0b\uff0c\u8fd9\u79cd\u65b9\u6cd5\u53ef\u4ee5\u63d0\u4f9b\u66f4\u597d\u7684\u6027\u80fd\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u5e0c\u671b\u8fd9\u7bc7\u535a\u5ba2\u80fd\u5e2e\u52a9\u4f60\u7406\u89e3\u5982\u4f55\u4f7f\u7528\u6a21\u677f\u5143\u7f16\u7a0b\u5b9e\u73b0\u6590\u6ce2\u90a3\u5951\u6570\u5217\u7684\u7f16\u8bd1\u671f\u8ba1\u7b97\uff0c\u5e76\u5bf9\u6b64\u6709\u6240\u542f\u53d1\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>i});s(96540);var a=s(34164);const c={tabItem:"tabItem_Ymn6"};var t=s(74848);function i(e){let{children:n,hidden:s,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.A)(c.tabItem,i),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>y});var a=s(96540),c=s(34164),t=s(23104),i=s(56347),l=s(205),r=s(57485),m=s(31682),o=s(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:s,attributes:a,default:c}}=e;return{value:n,label:s,attributes:a,default:c}}))}(s);return function(e){const n=(0,m.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function u(e){let{queryString:n=!1,groupId:s}=e;const c=(0,i.W6)(),t=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,r.aZ)(t),(0,a.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(c.location.search);n.set(t,e),c.replace({...c.location,search:n.toString()})}),[t,c])]}function x(e){const{defaultValue:n,queryString:s=!1,groupId:c}=e,t=h(e),[i,r]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=s.find((e=>e.default))??s[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:t}))),[m,d]=u({queryString:s,groupId:c}),[x,j]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[c,t]=(0,o.Dv)(s);return[c,(0,a.useCallback)((e=>{s&&t.set(e)}),[s,t])]}({groupId:c}),g=(()=>{const e=m??x;return p({value:e,tabValues:t})?e:null})();(0,l.A)((()=>{g&&r(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);r(e),d(e),j(e)}),[d,j,t]),tabValues:t}}var j=s(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=s(74848);function f(e){let{className:n,block:s,selectedValue:a,selectValue:i,tabValues:l}=e;const r=[],{blockElementScrollPositionUntilNextRender:m}=(0,t.a_)(),o=e=>{const n=e.currentTarget,s=r.indexOf(n),c=l[s].value;c!==a&&(m(n),i(c))},d=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const s=r.indexOf(e.currentTarget)+1;n=r[s]??r[0];break}case"ArrowLeft":{const s=r.indexOf(e.currentTarget)-1;n=r[s]??r[r.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.A)("tabs",{"tabs--block":s},n),children:l.map((e=>{let{value:n,label:s,attributes:t}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>r.push(e),onKeyDown:d,onClick:o,...t,className:(0,c.A)("tabs__item",g.tabItem,t?.className,{"tabs__item--active":a===n}),children:s??n},n)}))})}function N(e){let{lazy:n,children:s,selectedValue:t}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:(0,c.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function v(e){const n=x(e);return(0,b.jsxs)("div",{className:(0,c.A)("tabs-container",g.tabList),children:[(0,b.jsx)(f,{...n,...e}),(0,b.jsx)(N,{...n,...e})]})}function y(e){const n=(0,j.A)();return(0,b.jsx)(v,{...e,children:d(e.children)},String(n))}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var a=s(96540);const c={},t=a.createContext(c);function i(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);