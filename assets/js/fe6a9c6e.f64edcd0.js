"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4860],{76662:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var r=s(74848),i=s(28453);const d={description:"\u53ef\u5c06\u4e00\u4e2a\u5927\u7c7b\u6216\u4e00\u7cfb\u5217\u7d27\u5bc6\u76f8\u5173\u7684\u7c7b\u62c6\u5206\u4e3a\u62bd\u8c61\u548c\u5b9e\u73b0\u4e24\u4e2a\u72ec\u7acb\u7684\u5c42\u6b21\u7ed3\u6784\uff0c \u4ece\u800c\u80fd\u5728\u5f00\u53d1\u65f6\u5206\u522b\u4f7f\u7528\u3002",slug:"/design-patterns/bridge"},t="\u6865\u63a5\u6a21\u5f0f",c={id:"design-patterns/structural-patterns/bridge",title:"\u6865\u63a5\u6a21\u5f0f",description:"\u53ef\u5c06\u4e00\u4e2a\u5927\u7c7b\u6216\u4e00\u7cfb\u5217\u7d27\u5bc6\u76f8\u5173\u7684\u7c7b\u62c6\u5206\u4e3a\u62bd\u8c61\u548c\u5b9e\u73b0\u4e24\u4e2a\u72ec\u7acb\u7684\u5c42\u6b21\u7ed3\u6784\uff0c \u4ece\u800c\u80fd\u5728\u5f00\u53d1\u65f6\u5206\u522b\u4f7f\u7528\u3002",source:"@site/docs/design-patterns/02-structural-patterns/02-bridge.mdx",sourceDirName:"design-patterns/02-structural-patterns",slug:"/design-patterns/bridge",permalink:"/docs/design-patterns/bridge",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"\u53ef\u5c06\u4e00\u4e2a\u5927\u7c7b\u6216\u4e00\u7cfb\u5217\u7d27\u5bc6\u76f8\u5173\u7684\u7c7b\u62c6\u5206\u4e3a\u62bd\u8c61\u548c\u5b9e\u73b0\u4e24\u4e2a\u72ec\u7acb\u7684\u5c42\u6b21\u7ed3\u6784\uff0c \u4ece\u800c\u80fd\u5728\u5f00\u53d1\u65f6\u5206\u522b\u4f7f\u7528\u3002",slug:"/design-patterns/bridge"},sidebar:"designpatternsSidebar",previous:{title:"\u9002\u914d\u5668\u6a21\u5f0f",permalink:"/docs/design-patterns/adapter"},next:{title:"\u7ec4\u5408\u6a21\u5f0f",permalink:"/docs/design-patterns/composite"}},l={},h=[{value:"<strong>\u610f\u56fe</strong>",id:"\u610f\u56fe",level:2},{value:"<strong>\u95ee\u9898</strong>",id:"\u95ee\u9898",level:2},{value:"<strong>\u89e3\u51b3\u65b9\u6848</strong>",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"<strong>\u62bd\u8c61\u90e8\u5206\u548c\u5b9e\u73b0\u90e8\u5206</strong>",id:"\u62bd\u8c61\u90e8\u5206\u548c\u5b9e\u73b0\u90e8\u5206",level:3},{value:"<strong>\u6865\u63a5\u6a21\u5f0f\u7ed3\u6784</strong>",id:"\u6865\u63a5\u6a21\u5f0f\u7ed3\u6784",level:2},{value:"<strong>\u4f2a\u4ee3\u7801</strong>",id:"\u4f2a\u4ee3\u7801",level:2},{value:"<strong>\u6865\u63a5\u6a21\u5f0f\u9002\u5408\u5e94\u7528\u573a\u666f</strong>",id:"\u6865\u63a5\u6a21\u5f0f\u9002\u5408\u5e94\u7528\u573a\u666f",level:2},{value:"<strong>\u6865\u63a5\u6a21\u5f0f\u4f18\u7f3a\u70b9</strong>",id:"\u6865\u63a5\u6a21\u5f0f\u4f18\u7f3a\u70b9",level:2},{value:"<strong>\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb</strong>",id:"\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb",level:2}];function o(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u6865\u63a5\u6a21\u5f0f",children:"\u6865\u63a5\u6a21\u5f0f"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u4ea6\u79f0\uff1aBridge"})}),"\n",(0,r.jsx)(n.h2,{id:"\u610f\u56fe",children:(0,r.jsx)(n.strong,{children:"\u610f\u56fe"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6865\u63a5\u6a21\u5f0f"}),"\u662f\u4e00\u79cd\u7ed3\u6784\u578b\u8bbe\u8ba1\u6a21\u5f0f\uff0c\u53ef\u5c06\u4e00\u4e2a\u5927\u7c7b\u6216\u4e00\u7cfb\u5217\u7d27\u5bc6\u76f8\u5173\u7684\u7c7b\u62c6\u5206\u4e3a\u62bd\u8c61\u548c\u5b9e\u73b0\u4e24\u4e2a\u72ec\u7acb\u7684\u5c42\u6b21\u7ed3\u6784\uff0c\u4ece\u800c\u80fd\u5728\u5f00\u53d1\u65f6\u5206\u522b\u4f7f\u7528\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://refactoringguru.cn/images/patterns/content/bridge/bridge-2x.png",alt:""})}),"\n",(0,r.jsx)(n.h2,{id:"\u95ee\u9898",children:(0,r.jsx)(n.strong,{children:"\u95ee\u9898"})}),"\n",(0,r.jsx)(n.p,{children:"*\u62bd\u8c61\uff1f\u5b9e\u73b0\uff1f*\u542c\u4e0a\u53bb\u633a\u5413\u4eba\uff1f\u8ba9\u6211\u4eec\u6162\u6162\u6765\uff0c\u5148\u8003\u8651\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5047\u5982\u4f60\u6709\u4e00\u4e2a\u51e0\u4f55 ",(0,r.jsx)(n.code,{children:"\u5f62\u72b6"})," Shape \u7c7b\uff0c\u4ece\u5b83\u80fd\u6269\u5c55\u51fa\u4e24\u4e2a\u5b50\u7c7b\uff1a",(0,r.jsx)(n.code,{children:"\u5706\u5f62"})," Circle \u548c ",(0,r.jsx)(n.code,{children:"\u65b9\u5f62"})," Square\u3002\u4f60\u5e0c\u671b\u5bf9\u8fd9\u6837\u7684\u7c7b\u5c42\u6b21\u7ed3\u6784\u8fdb\u884c\u6269\u5c55\u4ee5\u4f7f\u5176\u5305\u542b\u989c\u8272\uff0c\u6240\u4ee5\u4f60\u6253\u7b97\u521b\u5efa\u540d\u4e3a ",(0,r.jsx)(n.code,{children:"\u7ea2\u8272"})," Red \u548c ",(0,r.jsx)(n.code,{children:"\u84dd\u8272"})," Blue \u7684\u5f62\u72b6\u5b50\u7c7b\u3002\u4f46\u662f\uff0c\u7531\u4e8e\u4f60\u5df2\u6709\u4e24\u4e2a\u5b50\u7c7b\uff0c\u6240\u4ee5\u603b\u5171\u9700\u8981\u521b\u5efa\u56db\u4e2a\u7c7b\u624d\u80fd\u8986\u76d6\u6240\u6709\u7ec4\u5408\uff0c\u4f8b\u5982 ",(0,r.jsx)(n.code,{children:"\u84dd\u8272\u5706\u5f62"})," Blue\xadCircle \u548c ",(0,r.jsx)(n.code,{children:"\u7ea2\u8272\u65b9\u5f62"})," Red\xadSquare\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://refactoringguru.cn/images/patterns/diagrams/bridge/problem-zh-2x.png",alt:""})}),"\n",(0,r.jsx)(n.p,{children:"\u6240\u6709\u7ec4\u5408\u7c7b\u7684\u6570\u91cf\u5c06\u4ee5\u51e0\u4f55\u7ea7\u6570\u589e\u957f\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u5c42\u6b21\u7ed3\u6784\u4e2d\u65b0\u589e\u5f62\u72b6\u548c\u989c\u8272\u5c06\u5bfc\u81f4\u4ee3\u7801\u590d\u6742\u7a0b\u5ea6\u6307\u6570\u589e\u957f\u3002\u4f8b\u5982\u6dfb\u52a0\u4e09\u89d2\u5f62\u72b6\uff0c\u4f60\u9700\u8981\u65b0\u589e\u4e24\u4e2a\u5b50\u7c7b\uff0c\u4e5f\u5c31\u662f\u6bcf\u79cd\u989c\u8272\u4e00\u4e2a\uff1b\u6b64\u540e\u65b0\u589e\u4e00\u79cd\u65b0\u989c\u8272\u9700\u8981\u65b0\u589e\u4e09\u4e2a\u5b50\u7c7b\uff0c\u5373\u6bcf\u79cd\u5f62\u72b6\u4e00\u4e2a\u3002\u5982\u6b64\u4ee5\u5f80\uff0c\u60c5\u51b5\u4f1a\u8d8a\u6765\u8d8a\u7cdf\u7cd5\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:(0,r.jsx)(n.strong,{children:"\u89e3\u51b3\u65b9\u6848"})}),"\n",(0,r.jsx)(n.p,{children:"\u95ee\u9898\u7684\u6839\u672c\u539f\u56e0\u662f\u6211\u4eec\u8bd5\u56fe\u5728\u4e24\u4e2a\u72ec\u7acb\u7684\u7ef4\u5ea6\u2014\u2014\u5f62\u72b6\u4e0e\u989c\u8272\u2014\u2014\u4e0a\u6269\u5c55\u5f62\u72b6\u7c7b\u3002\u8fd9\u5728\u5904\u7406\u7c7b\u7ee7\u627f\u65f6\u662f\u5f88\u5e38\u89c1\u7684\u95ee\u9898\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6865\u63a5\u6a21\u5f0f\u901a\u8fc7\u5c06\u7ee7\u627f\u6539\u4e3a\u7ec4\u5408\u7684\u65b9\u5f0f\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002\u5177\u4f53\u6765\u8bf4\uff0c\u5c31\u662f\u62bd\u53d6\u5176\u4e2d\u4e00\u4e2a\u7ef4\u5ea6\u5e76\u4f7f\u4e4b\u6210\u4e3a\u72ec\u7acb\u7684\u7c7b\u5c42\u6b21\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u5728\u521d\u59cb\u7c7b\u4e2d\u5f15\u7528\u8fd9\u4e2a\u65b0\u5c42\u6b21\u7684\u5bf9\u8c61\uff0c\u4ece\u800c\u4f7f\u5f97\u4e00\u4e2a\u7c7b\u4e0d\u5fc5\u62e5\u6709\u6240\u6709\u7684\u72b6\u6001\u548c\u884c\u4e3a\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://refactoringguru.cn/images/patterns/diagrams/bridge/solution-zh-2x.png",alt:""})}),"\n",(0,r.jsx)(n.p,{children:"\u5c06\u4e00\u4e2a\u7c7b\u5c42\u6b21\u8f6c\u5316\u4e3a\u591a\u4e2a\u76f8\u5173\u7684\u7c7b\u5c42\u6b21\uff0c\u907f\u514d\u5355\u4e2a\u7c7b\u5c42\u6b21\u7684\u5931\u63a7\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u6839\u636e\u8be5\u65b9\u6cd5\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u989c\u8272\u76f8\u5173\u7684\u4ee3\u7801\u62bd\u53d6\u5230\u62e5\u6709 ",(0,r.jsx)(n.code,{children:"\u7ea2\u8272"})," \u548c ",(0,r.jsx)(n.code,{children:"\u84dd\u8272"})," \u4e24\u4e2a\u5b50\u7c7b\u7684\u989c\u8272\u7c7b\u4e2d\uff0c\u7136\u540e\u5728 ",(0,r.jsx)(n.code,{children:"\u5f62\u72b6"})," \u7c7b\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u6307\u5411\u67d0\u4e00\u989c\u8272\u5bf9\u8c61\u7684\u5f15\u7528\u6210\u5458\u53d8\u91cf\u3002\u73b0\u5728\uff0c\u5f62\u72b6\u7c7b\u53ef\u4ee5\u5c06\u6240\u6709\u4e0e\u989c\u8272\u76f8\u5173\u7684\u5de5\u4f5c\u59d4\u6d3e\u7ed9\u8fde\u5165\u7684\u989c\u8272\u5bf9\u8c61\u3002\u8fd9\u6837\u7684\u5f15\u7528\u5c31\u6210\u4e3a\u4e86 ",(0,r.jsx)(n.code,{children:"\u5f62\u72b6"})," \u548c ",(0,r.jsx)(n.code,{children:"\u989c\u8272"})," \u4e4b\u95f4\u7684\u6865\u6881\u3002\u6b64\u540e\uff0c\u65b0\u589e\u989c\u8272\u5c06\u4e0d\u518d\u9700\u8981\u4fee\u6539\u5f62\u72b6\u7684\u7c7b\u5c42\u6b21\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u62bd\u8c61\u90e8\u5206\u548c\u5b9e\u73b0\u90e8\u5206",children:(0,r.jsx)(n.strong,{children:"\u62bd\u8c61\u90e8\u5206\u548c\u5b9e\u73b0\u90e8\u5206"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8bbe\u8ba1\u6a21\u5f0f",(0,r.jsx)(n.em,{children:"\u56db\u4eba\u7ec4"}),"\u7684\u8457\u4f5c\u5728\u6865\u63a5\u5b9a\u4e49\u4e2d\u63d0\u51fa\u4e86",(0,r.jsx)(n.em,{children:"\u62bd\u8c61\u90e8\u5206"}),"\u548c",(0,r.jsx)(n.em,{children:"\u5b9e\u73b0\u90e8\u5206"}),"\u4e24\u4e2a\u672f\u8bed\u3002\u6211\u89c9\u5f97\u8fd9\u4e9b\u672f\u8bed\u8fc7\u4e8e\u5b66\u672f\u4e86\uff0c\u53cd\u800c\u8ba9\u6a21\u5f0f\u770b\u4e0a\u53bb\u6bd4\u5b9e\u9645\u60c5\u51b5\u66f4\u52a0\u590d\u6742\u3002\u5728\u4ecb\u7ecd\u8fc7\u5f62\u72b6\u548c\u989c\u8272\u7684\u7b80\u5355\u4f8b\u5b50\u540e\uff0c\u6211\u4eec\u6765\u770b\u770b\u56db\u4eba\u7ec4\u8457\u4f5c\u4e2d\u8ba9\u4eba\u671b\u800c\u751f\u754f\u7684\u8bcd\u8bed\u7684\u542b\u4e49\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"\u62bd\u8c61\u90e8\u5206"})," (\u4e5f\u88ab\u79f0\u4e3a",(0,r.jsx)(n.em,{children:"\u63a5\u53e3"}),") \u662f\u4e00\u4e9b\u5b9e\u4f53\u7684\u9ad8\u9636\u63a7\u5236\u5c42\u3002\u8be5\u5c42\u81ea\u8eab\u4e0d\u5b8c\u6210\u4efb\u4f55\u5177\u4f53\u7684\u5de5\u4f5c\uff0c\u5b83\u9700\u8981\u5c06\u5de5\u4f5c\u59d4\u6d3e\u7ed9",(0,r.jsx)(n.em,{children:"\u5b9e\u73b0\u90e8\u5206"}),"\u5c42 (\u4e5f\u88ab\u79f0\u4e3a",(0,r.jsx)(n.em,{children:"\u5e73\u53f0"}),")\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6ce8\u610f\uff0c\u8fd9\u91cc\u63d0\u5230\u7684\u5185\u5bb9\u4e0e\u7f16\u7a0b\u8bed\u8a00\u4e2d\u7684",(0,r.jsx)(n.em,{children:"\u63a5\u53e3"}),"\u6216",(0,r.jsx)(n.em,{children:"\u62bd\u8c61\u7c7b"}),"\u65e0\u5173\u3002\u5b83\u4eec\u5e76\u4e0d\u662f\u4e00\u56de\u4e8b\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u5b9e\u9645\u7684\u7a0b\u5e8f\u4e2d\uff0c\u62bd\u8c61\u90e8\u5206\u662f\u56fe\u5f62\u7528\u6237\u754c\u9762 (GUI)\uff0c\u800c\u5b9e\u73b0\u90e8\u5206\u5219\u662f\u5e95\u5c42\u64cd\u4f5c\u7cfb\u7edf\u4ee3\u7801 (API)\uff0cGUI \u5c42\u8c03\u7528 API \u5c42\u6765\u5bf9\u7528\u6237\u7684\u5404\u79cd\u64cd\u4f5c\u505a\u51fa\u54cd\u5e94\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4e00\u822c\u6765\u8bf4\uff0c\u4f60\u53ef\u4ee5\u5728\u4e24\u4e2a\u72ec\u7acb\u65b9\u5411\u4e0a\u6269\u5c55\u8fd9\u79cd\u5e94\u7528\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5f00\u53d1\u591a\u4e2a\u4e0d\u540c\u7684 GUI (\u4f8b\u5982\u9762\u5411\u666e\u901a\u7528\u6237\u548c\u7ba1\u7406\u5458\u8fdb\u884c\u5206\u522b\u914d\u7f6e)"}),"\n",(0,r.jsx)(n.li,{children:"\u652f\u6301\u591a\u4e2a\u4e0d\u540c\u7684 API (\u4f8b\u5982\uff0c\u80fd\u591f\u5728 Windows\u3001Linux \u548c macOS \u4e0a\u8fd0\u884c\u8be5\u7a0b\u5e8f)\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u6700\u7cdf\u7cd5\u7684\u60c5\u51b5\u4e0b\uff0c\u7a0b\u5e8f\u53ef\u80fd\u4f1a\u662f\u4e00\u56e2\u4e71\u9ebb\uff0c\u5176\u4e2d\u5305\u542b\u6570\u767e\u79cd\u6761\u4ef6\u8bed\u53e5\uff0c\u8fde\u63a5\u7740\u4ee3\u7801\u5404\u5904\u4e0d\u540c\u79cd\u7c7b\u7684 GUI \u548c\u5404\u79cd API\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://refactoringguru.cn/images/patterns/content/bridge/bridge-3-zh-2x.png",alt:""})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u5e9e\u6742\u7684\u4ee3\u7801\u4e2d\uff0c\u5373\u4f7f\u662f\u5f88\u5c0f\u7684\u6539\u52a8\u90fd\u975e\u5e38\u96be\u4ee5\u5b8c\u6210\uff0c\u56e0\u4e3a\u4f60\u5fc5\u987b\u8981\u5728",(0,r.jsx)(n.em,{children:"\u6574\u4f53\u4e0a"}),"\u5bf9\u4ee3\u7801\u6709\u5145\u5206\u7684\u7406\u89e3\u3002\u800c\u5728\u8f83\u5c0f\u4e14\u5b9a\u4e49\u660e\u786e\u7684\u6a21\u5757\u4e2d\uff0c\u8fdb\u884c\u4fee\u6539\u5219\u8981\u5bb9\u6613\u5f97\u591a\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u5c06\u7279\u5b9a\u63a5\u53e3-\u5e73\u53f0\u7684\u7ec4\u5408\u4ee3\u7801\u62bd\u53d6\u5230\u72ec\u7acb\u7684\u7c7b\u4e2d\uff0c\u4ee5\u5728\u6df7\u4e71\u4e2d\u5efa\u7acb\u4e00\u4e9b\u79e9\u5e8f\u3002\u4f46\u662f\uff0c\u4f60\u5f88\u5feb\u4f1a\u53d1\u73b0\u8fd9\u79cd\u7c7b\u7684\u6570\u91cf",(0,r.jsx)(n.em,{children:"\u5f88\u591a"}),"\u3002\u7c7b\u5c42\u6b21\u5c06\u4ee5\u6307\u6570\u5f62\u5f0f\u589e\u957f\uff0c\u56e0\u4e3a\u6bcf\u6b21\u6dfb\u52a0\u4e00\u4e2a\u65b0\u7684 GUI \u6216\u652f\u6301\u4e00\u79cd\u65b0\u7684 API \u90fd\u9700\u8981\u521b\u5efa\u66f4\u591a\u7684\u7c7b\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u8ba9\u6211\u4eec\u8bd5\u7740\u7528\u6865\u63a5\u6a21\u5f0f\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002\u8be5\u6a21\u5f0f\u5efa\u8bae\u5c06\u7c7b\u62c6\u5206\u4e3a\u4e24\u4e2a\u7c7b\u5c42\u6b21\u7ed3\u6784\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u62bd\u8c61\u90e8\u5206\uff1a\u7a0b\u5e8f\u7684 GUI \u5c42\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5b9e\u73b0\u90e8\u5206\uff1a\u64cd\u4f5c\u7cfb\u7edf\u7684 API\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://refactoringguru.cn/images/patterns/content/bridge/bridge-2-zh-2x.png",alt:""})}),"\n",(0,r.jsx)(n.p,{children:"\u521b\u5efa\u8de8\u5e73\u53f0\u5e94\u7528\u7a0b\u5e8f\u7684\u4e00\u79cd\u65b9\u6cd5"}),"\n",(0,r.jsx)(n.p,{children:"\u62bd\u8c61\u5bf9\u8c61\u63a7\u5236\u7a0b\u5e8f\u7684\u5916\u89c2\uff0c\u5e76\u5c06\u771f\u5b9e\u5de5\u4f5c\u59d4\u6d3e\u7ed9\u8fde\u5165\u7684\u5b9e\u73b0\u5bf9\u8c61\u3002\u4e0d\u540c\u7684\u5b9e\u73b0\u53ea\u8981\u9075\u5faa\u76f8\u540c\u7684\u63a5\u53e3\u5c31\u53ef\u4ee5\u4e92\u6362\uff0c\u4f7f\u540c\u4e00 GUI \u53ef\u5728 Windows \u548c Linux \u4e0b\u8fd0\u884c\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6700\u540e\u7684\u7ed3\u679c\u662f\uff1a\u4f60\u65e0\u9700\u6539\u52a8\u4e0e API \u76f8\u5173\u7684\u7c7b\u5c31\u53ef\u4ee5\u4fee\u6539 GUI \u7c7b\u3002\u6b64\u5916\u5982\u679c\u60f3\u652f\u6301\u4e00\u4e2a\u65b0\u7684\u64cd\u4f5c\u7cfb\u7edf\uff0c\u53ea\u9700\u5728\u5b9e\u73b0\u90e8\u5206\u5c42\u6b21\u4e2d\u521b\u5efa\u4e00\u4e2a\u5b50\u7c7b\u5373\u53ef\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u6865\u63a5\u6a21\u5f0f\u7ed3\u6784",children:(0,r.jsx)(n.strong,{children:"\u6865\u63a5\u6a21\u5f0f\u7ed3\u6784"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://refactoringguru.cn/images/patterns/diagrams/bridge/structure-zh-2x.png",alt:""})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u62bd\u8c61\u90e8\u5206"})," (Abstraction) \u63d0\u4f9b\u9ad8\u5c42\u63a7\u5236\u903b\u8f91\uff0c\u4f9d\u8d56\u4e8e\u5b8c\u6210\u5e95\u5c42\u5b9e\u9645\u5de5\u4f5c\u7684\u5b9e\u73b0\u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u5b9e\u73b0\u90e8\u5206"})," (Implementation) \u4e3a\u6240\u6709\u5177\u4f53\u5b9e\u73b0\u58f0\u660e\u901a\u7528\u63a5\u53e3\u3002\u62bd\u8c61\u90e8\u5206\u4ec5\u80fd\u901a\u8fc7\u5728\u8fd9\u91cc\u58f0\u660e\u7684\u65b9\u6cd5\u4e0e\u5b9e\u73b0\u5bf9\u8c61\u4ea4\u4e92\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u62bd\u8c61\u90e8\u5206\u53ef\u4ee5\u5217\u51fa\u548c\u5b9e\u73b0\u90e8\u5206\u4e00\u6837\u7684\u65b9\u6cd5\uff0c\u4f46\u662f\u62bd\u8c61\u90e8\u5206\u901a\u5e38\u58f0\u660e\u4e00\u4e9b\u590d\u6742\u884c\u4e3a\uff0c\u8fd9\u4e9b\u884c\u4e3a\u4f9d\u8d56\u4e8e\u591a\u79cd\u7531\u5b9e\u73b0\u90e8\u5206\u58f0\u660e\u7684\u539f\u8bed\u64cd\u4f5c\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u5177\u4f53\u5b9e\u73b0"})," (Concrete Implementations) \u4e2d\u5305\u62ec\u7279\u5b9a\u4e8e\u5e73\u53f0\u7684\u4ee3\u7801\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u7cbe\u786e\u62bd\u8c61"})," (Refined Abstraction) \u63d0\u4f9b\u63a7\u5236\u903b\u8f91\u7684\u53d8\u4f53\u3002\u4e0e\u5176\u7236\u7c7b\u4e00\u6837\uff0c\u5b83\u4eec\u901a\u8fc7\u901a\u7528\u5b9e\u73b0\u63a5\u53e3\u4e0e\u4e0d\u540c\u7684\u5b9e\u73b0\u8fdb\u884c\u4ea4\u4e92\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c",(0,r.jsx)(n.strong,{children:"\u5ba2\u6237\u7aef"})," (Client) \u4ec5\u5173\u5fc3\u5982\u4f55\u4e0e\u62bd\u8c61\u90e8\u5206\u5408\u4f5c\u3002\u4f46\u662f\uff0c\u5ba2\u6237\u7aef\u9700\u8981\u5c06\u62bd\u8c61\u5bf9\u8c61\u4e0e\u4e00\u4e2a\u5b9e\u73b0\u5bf9\u8c61\u8fde\u63a5\u8d77\u6765\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4f2a\u4ee3\u7801",children:(0,r.jsx)(n.strong,{children:"\u4f2a\u4ee3\u7801"})}),"\n",(0,r.jsxs)(n.p,{children:["\u793a\u4f8b\u6f14\u793a\u4e86",(0,r.jsx)(n.strong,{children:"\u6865\u63a5"}),"\u6a21\u5f0f\u5982\u4f55\u62c6\u5206\u7a0b\u5e8f\u4e2d\u540c\u65f6\u7ba1\u7406\u8bbe\u5907\u53ca\u5176\u9065\u63a7\u5668\u7684\u5e9e\u6742\u4ee3\u7801\u3002",(0,r.jsx)(n.code,{children:"\u8bbe\u5907"})," Device \u7c7b\u4f5c\u4e3a\u5b9e\u73b0\u90e8\u5206\uff0c\u800c ",(0,r.jsx)(n.code,{children:"\u9065\u63a7\u5668"})," Remote \u7c7b\u5219\u4f5c\u4e3a\u62bd\u8c61\u90e8\u5206\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://refactoringguru.cn/images/patterns/diagrams/bridge/example-zh-2x.png",alt:""})}),"\n",(0,r.jsx)(n.p,{children:"\u6700\u521d\u7c7b\u5c42\u6b21\u7ed3\u6784\u88ab\u62c6\u5206\u4e3a\u4e24\u4e2a\u90e8\u5206\uff1a\u8bbe\u5907\u548c\u9065\u63a7\u5668\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u9065\u63a7\u5668\u57fa\u7c7b\u58f0\u660e\u4e86\u4e00\u4e2a\u6307\u5411\u8bbe\u5907\u5bf9\u8c61\u7684\u5f15\u7528\u6210\u5458\u53d8\u91cf\u3002\u6240\u6709\u9065\u63a7\u5668\u901a\u8fc7\u901a\u7528\u8bbe\u5907\u63a5\u53e3\u4e0e\u8bbe\u5907\u8fdb\u884c\u4ea4\u4e92\uff0c\u4f7f\u5f97\u540c\u4e00\u4e2a\u9065\u63a7\u5668\u53ef\u4ee5\u652f\u6301\u4e0d\u540c\u7c7b\u578b\u7684\u8bbe\u5907\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4f60\u53ef\u4ee5\u5f00\u53d1\u72ec\u7acb\u4e8e\u8bbe\u5907\u7c7b\u7684\u9065\u63a7\u5668\u7c7b\uff0c\u53ea\u9700\u65b0\u5efa\u4e00\u4e2a\u9065\u63a7\u5668\u5b50\u7c7b\u5373\u53ef\u3002\u4f8b\u5982\uff0c\u57fa\u7840\u9065\u63a7\u5668\u53ef\u80fd\u53ea\u6709\u4e24\u4e2a\u6309\u94ae\uff0c\u4f46\u4f60\u53ef\u5728\u5176\u57fa\u7840\u4e0a\u6269\u5c55\u65b0\u529f\u80fd\uff0c\u6bd4\u5982\u989d\u5916\u7684\u4e00\u8282\u7535\u6c60\u6216\u4e00\u5757\u89e6\u6478\u5c4f\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5ba2\u6237\u7aef\u4ee3\u7801\u901a\u8fc7\u9065\u63a7\u5668\u6784\u9020\u51fd\u6570\u5c06\u7279\u5b9a\u79cd\u7c7b\u7684\u9065\u63a7\u5668\u4e0e\u8bbe\u5907\u5bf9\u8c61\u8fde\u63a5\u8d77\u6765\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"// \u201c\u62bd\u8c61\u90e8\u5206\u201d\u5b9a\u4e49\u4e86\u4e24\u4e2a\u7c7b\u5c42\u6b21\u7ed3\u6784\u4e2d\u201c\u63a7\u5236\u201d\u90e8\u5206\u7684\u63a5\u53e3\u3002\u5b83\u7ba1\u7406\u7740\u4e00\u4e2a\u6307\u5411\u201c\u5b9e\n// \u73b0\u90e8\u5206\u201d\u5c42\u6b21\u7ed3\u6784\u4e2d\u5bf9\u8c61\u7684\u5f15\u7528\uff0c\u5e76\u4f1a\u5c06\u6240\u6709\u771f\u5b9e\u5de5\u4f5c\u59d4\u6d3e\u7ed9\u8be5\u5bf9\u8c61\u3002\nclass RemoteControl is\n    protected field device: Device\n    constructor RemoteControl(device: Device) is\n        this.device = device\n    method togglePower() is\n        if (device.isEnabled()) then\n            device.disable()\n        else\n            device.enable()\n    method volumeDown() is\n        device.setVolume(device.getVolume() - 10)\n    method volumeUp() is\n        device.setVolume(device.getVolume() + 10)\n    method channelDown() is\n        device.setChannel(device.getChannel() - 1)\n    method channelUp() is\n        device.setChannel(device.getChannel() + 1)\n\n\n// \u4f60\u53ef\u4ee5\u72ec\u7acb\u4e8e\u8bbe\u5907\u7c7b\u7684\u65b9\u5f0f\u4ece\u62bd\u8c61\u5c42\u4e2d\u6269\u5c55\u7c7b\u3002\nclass AdvancedRemoteControl extends RemoteControl is\n    method mute() is\n        device.setVolume(0)\n\n\n// \u201c\u5b9e\u73b0\u90e8\u5206\u201d\u63a5\u53e3\u58f0\u660e\u4e86\u5728\u6240\u6709\u5177\u4f53\u5b9e\u73b0\u7c7b\u4e2d\u901a\u7528\u7684\u65b9\u6cd5\u3002\u5b83\u4e0d\u9700\u8981\u4e0e\u62bd\u8c61\u63a5\u53e3\u76f8\n// \u5339\u914d\u3002\u5b9e\u9645\u4e0a\uff0c\u8fd9\u4e24\u4e2a\u63a5\u53e3\u53ef\u4ee5\u5b8c\u5168\u4e0d\u4e00\u6837\u3002\u901a\u5e38\u5b9e\u73b0\u63a5\u53e3\u53ea\u63d0\u4f9b\u539f\u8bed\u64cd\u4f5c\uff0c\u800c\n// \u62bd\u8c61\u63a5\u53e3\u5219\u4f1a\u57fa\u4e8e\u8fd9\u4e9b\u64cd\u4f5c\u5b9a\u4e49\u8f83\u9ad8\u5c42\u6b21\u7684\u64cd\u4f5c\u3002\ninterface Device is\n    method isEnabled()\n    method enable()\n    method disable()\n    method getVolume()\n    method setVolume(percent)\n    method getChannel()\n    method setChannel(channel)\n\n\n// \u6240\u6709\u8bbe\u5907\u90fd\u9075\u5faa\u76f8\u540c\u7684\u63a5\u53e3\u3002\nclass Tv implements Device is\n    // \u2026\u2026\n\nclass Radio implements Device is\n    // \u2026\u2026\n\n\n// \u5ba2\u6237\u7aef\u4ee3\u7801\u4e2d\u7684\u67d0\u4e2a\u4f4d\u7f6e\u3002\ntv = new Tv()\nremote = new RemoteControl(tv)\nremote.togglePower()\n\nradio = new Radio()\nremote = new AdvancedRemoteControl(radio)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6865\u63a5\u6a21\u5f0f\u9002\u5408\u5e94\u7528\u573a\u666f",children:(0,r.jsx)(n.strong,{children:"\u6865\u63a5\u6a21\u5f0f\u9002\u5408\u5e94\u7528\u573a\u666f"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u5982\u679c\u4f60\u60f3\u8981\u62c6\u5206\u6216\u91cd\u7ec4\u4e00\u4e2a\u5177\u6709\u591a\u91cd\u529f\u80fd\u7684\u5e9e\u6742\u7c7b (\u4f8b\u5982\u80fd\u4e0e\u591a\u4e2a\u6570\u636e\u5e93\u670d\u52a1\u5668\u8fdb\u884c\u4ea4\u4e92\u7684\u7c7b)\uff0c\u53ef\u4ee5\u4f7f\u7528\u6865\u63a5\u6a21\u5f0f\u3002"})}),"\n",(0,r.jsx)(n.p,{children:"\u7c7b\u7684\u4ee3\u7801\u884c\u6570\u8d8a\u591a\uff0c\u5f04\u6e05\u5176\u8fd0\u4f5c\u65b9\u5f0f\u5c31\u8d8a\u56f0\u96be\uff0c\u5bf9\u5176\u8fdb\u884c\u4fee\u6539\u6240\u82b1\u8d39\u7684\u65f6\u95f4\u5c31\u8d8a\u957f\u3002\u4e00\u4e2a\u529f\u80fd\u4e0a\u7684\u53d8\u5316\u53ef\u80fd\u9700\u8981\u5728\u6574\u4e2a\u7c7b\u8303\u56f4\u5185\u8fdb\u884c\u4fee\u6539\uff0c\u800c\u4e14\u5e38\u5e38\u4f1a\u4ea7\u751f\u9519\u8bef\uff0c\u751a\u81f3\u8fd8\u4f1a\u6709\u4e00\u4e9b\u4e25\u91cd\u7684\u526f\u4f5c\u7528\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6865\u63a5\u6a21\u5f0f\u53ef\u4ee5\u5c06\u5e9e\u6742\u7c7b\u62c6\u5206\u4e3a\u51e0\u4e2a\u7c7b\u5c42\u6b21\u7ed3\u6784\u3002\u6b64\u540e\uff0c\u4f60\u53ef\u4ee5\u4fee\u6539\u4efb\u610f\u4e00\u4e2a\u7c7b\u5c42\u6b21\u7ed3\u6784\u800c\u4e0d\u4f1a\u5f71\u54cd\u5230\u5176\u4ed6\u7c7b\u5c42\u6b21\u7ed3\u6784\u3002\u8fd9\u79cd\u65b9\u6cd5\u53ef\u4ee5\u7b80\u5316\u4ee3\u7801\u7684\u7ef4\u62a4\u5de5\u4f5c\uff0c\u5e76\u5c06\u4fee\u6539\u5df2\u6709\u4ee3\u7801\u7684\u98ce\u9669\u964d\u5230\u6700\u4f4e\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u5982\u679c\u4f60\u5e0c\u671b\u5728\u51e0\u4e2a\u72ec\u7acb\u7ef4\u5ea6\u4e0a\u6269\u5c55\u4e00\u4e2a\u7c7b\uff0c\u53ef\u4f7f\u7528\u8be5\u6a21\u5f0f\u3002"})}),"\n",(0,r.jsx)(n.p,{children:"\u6865\u63a5\u5efa\u8bae\u5c06\u6bcf\u4e2a\u7ef4\u5ea6\u62bd\u53d6\u4e3a\u72ec\u7acb\u7684\u7c7b\u5c42\u6b21\u3002\u521d\u59cb\u7c7b\u5c06\u76f8\u5173\u5de5\u4f5c\u59d4\u6d3e\u7ed9\u5c5e\u4e8e\u5bf9\u5e94\u7c7b\u5c42\u6b21\u7684\u5bf9\u8c61\uff0c\u65e0\u9700\u81ea\u5df1\u5b8c\u6210\u6240\u6709\u5de5\u4f5c\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u5982\u679c\u4f60\u9700\u8981\u5728\u8fd0\u884c\u65f6\u5207\u6362\u4e0d\u540c\u5b9e\u73b0\u65b9\u6cd5\uff0c\u53ef\u4f7f\u7528\u6865\u63a5\u6a21\u5f0f\u3002"})}),"\n",(0,r.jsx)(n.p,{children:"\u5f53\u7136\u5e76\u4e0d\u662f\u8bf4\u4e00\u5b9a\u8981\u5b9e\u73b0\u8fd9\u4e00\u70b9\uff0c\u6865\u63a5\u6a21\u5f0f\u53ef\u66ff\u6362\u62bd\u8c61\u90e8\u5206\u4e2d\u7684\u5b9e\u73b0\u5bf9\u8c61\uff0c\u5177\u4f53\u64cd\u4f5c\u5c31\u548c\u7ed9\u6210\u5458\u53d8\u91cf\u8d4b\u65b0\u503c\u4e00\u6837\u7b80\u5355\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:["\u987a\u4fbf\u63d0\u4e00\u53e5\uff0c\u6700\u540e\u4e00\u70b9\u662f\u5f88\u591a\u4eba\u6df7\u6dc6\u6865\u63a5\u6a21\u5f0f\u548c",(0,r.jsx)(n.a,{href:"https://www.szdev.com/docs/design-patterns/strategy",children:(0,r.jsx)(n.strong,{children:"\u7b56\u7565"})}),"\u6a21\u5f0f\u7684\u4e3b\u8981\u539f\u56e0\u3002\u8bb0\u4f4f\uff0c\u8bbe\u8ba1\u6a21\u5f0f\u5e76\u4e0d\u4ec5\u662f\u4e00\u79cd\u5bf9\u7c7b\u8fdb\u884c\u7ec4\u7ec7\u7684\u65b9\u5f0f\uff0c\u5b83\u8fd8\u80fd\u7528\u4e8e\u6c9f\u901a\u610f\u56fe\u548c\u89e3\u51b3\u95ee\u9898\u3002"]})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u5b9e\u73b0\u65b9\u5f0f"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u660e\u786e\u7c7b\u4e2d\u72ec\u7acb\u7684\u7ef4\u5ea6\u3002\u72ec\u7acb\u7684\u6982\u5ff5\u53ef\u80fd\u662f\uff1a\u62bd\u8c61/\u5e73\u53f0\uff0c\u57df/\u57fa\u7840\u8bbe\u65bd\uff0c\u524d\u7aef/\u540e\u7aef\u6216\u63a5\u53e3/\u5b9e\u73b0\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4e86\u89e3\u5ba2\u6237\u7aef\u7684\u4e1a\u52a1\u9700\u6c42\uff0c\u5e76\u5728\u62bd\u8c61\u57fa\u7c7b\u4e2d\u5b9a\u4e49\u5b83\u4eec\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u786e\u5b9a\u5728\u6240\u6709\u5e73\u53f0\u4e0a\u90fd\u53ef\u6267\u884c\u7684\u4e1a\u52a1\u3002\u5e76\u5728\u901a\u7528\u5b9e\u73b0\u63a5\u53e3\u4e2d\u58f0\u660e\u62bd\u8c61\u90e8\u5206\u6240\u9700\u7684\u4e1a\u52a1\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4e3a\u4f60\u57df\u5185\u7684\u6240\u6709\u5e73\u53f0\u521b\u5efa\u5b9e\u73b0\u7c7b\uff0c\u4f46\u9700\u786e\u4fdd\u5b83\u4eec\u9075\u5faa\u5b9e\u73b0\u90e8\u5206\u7684\u63a5\u53e3\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5728\u62bd\u8c61\u7c7b\u4e2d\u6dfb\u52a0\u6307\u5411\u5b9e\u73b0\u7c7b\u578b\u7684\u5f15\u7528\u6210\u5458\u53d8\u91cf\u3002\u62bd\u8c61\u90e8\u5206\u4f1a\u5c06\u5927\u90e8\u5206\u5de5\u4f5c\u59d4\u6d3e\u7ed9\u8be5\u6210\u5458\u53d8\u91cf\u6240\u6307\u5411\u7684\u5b9e\u73b0\u5bf9\u8c61\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5982\u679c\u4f60\u7684\u9ad8\u5c42\u903b\u8f91\u6709\u591a\u4e2a\u53d8\u4f53\uff0c\u5219\u53ef\u901a\u8fc7\u6269\u5c55\u62bd\u8c61\u57fa\u7c7b\u4e3a\u6bcf\u4e2a\u53d8\u4f53\u521b\u5efa\u4e00\u4e2a\u7cbe\u786e\u62bd\u8c61\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5ba2\u6237\u7aef\u4ee3\u7801\u5fc5\u987b\u5c06\u5b9e\u73b0\u5bf9\u8c61\u4f20\u9012\u7ed9\u62bd\u8c61\u90e8\u5206\u7684\u6784\u9020\u51fd\u6570\u624d\u80fd\u4f7f\u5176\u80fd\u591f\u76f8\u4e92\u5173\u8054\u3002\u6b64\u540e\uff0c\u5ba2\u6237\u7aef\u53ea\u9700\u4e0e\u62bd\u8c61\u5bf9\u8c61\u8fdb\u884c\u4ea4\u4e92\uff0c\u65e0\u9700\u548c\u5b9e\u73b0\u5bf9\u8c61\u6253\u4ea4\u9053\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u6865\u63a5\u6a21\u5f0f\u4f18\u7f3a\u70b9",children:(0,r.jsx)(n.strong,{children:"\u6865\u63a5\u6a21\u5f0f\u4f18\u7f3a\u70b9"})}),"\n",(0,r.jsx)(n.p,{children:"\u2714\ufe0f \u4f60\u53ef\u4ee5\u521b\u5efa\u4e0e\u5e73\u53f0\u65e0\u5173\u7684\u7c7b\u548c\u7a0b\u5e8f\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u2714\ufe0f \u5ba2\u6237\u7aef\u4ee3\u7801\u4ec5\u4e0e\u9ad8\u5c42\u62bd\u8c61\u90e8\u5206\u8fdb\u884c\u4e92\u52a8\uff0c\u4e0d\u4f1a\u63a5\u89e6\u5230\u5e73\u53f0\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u2714\ufe0f ",(0,r.jsx)(n.em,{children:"\u5f00\u95ed\u539f\u5219"}),"\u3002\u4f60\u53ef\u4ee5\u65b0\u589e\u62bd\u8c61\u90e8\u5206\u548c\u5b9e\u73b0\u90e8\u5206\uff0c\u4e14\u5b83\u4eec\u4e4b\u95f4\u4e0d\u4f1a\u76f8\u4e92\u5f71\u54cd\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u2714\ufe0f ",(0,r.jsx)(n.em,{children:"\u5355\u4e00\u804c\u8d23\u539f\u5219"}),"\u3002\u62bd\u8c61\u90e8\u5206\u4e13\u6ce8\u4e8e\u5904\u7406\u9ad8\u5c42\u903b\u8f91\uff0c\u5b9e\u73b0\u90e8\u5206\u5904\u7406\u5e73\u53f0\u7ec6\u8282\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u274c \u5bf9\u9ad8\u5185\u805a\u7684\u7c7b\u4f7f\u7528\u8be5\u6a21\u5f0f\u53ef\u80fd\u4f1a\u8ba9\u4ee3\u7801\u66f4\u52a0\u590d\u6742\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb",children:(0,r.jsx)(n.strong,{children:"\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://www.szdev.com/docs/design-patterns/bridge",children:(0,r.jsx)(n.strong,{children:"\u6865\u63a5\u6a21\u5f0f"})}),"\u901a\u5e38\u4f1a\u4e8e\u5f00\u53d1\u524d\u671f\u8fdb\u884c\u8bbe\u8ba1\uff0c\u4f7f\u4f60\u80fd\u591f\u5c06\u7a0b\u5e8f\u7684\u5404\u4e2a\u90e8\u5206\u72ec\u7acb\u5f00\u6765\u4ee5\u4fbf\u5f00\u53d1\u3002\u53e6\u4e00\u65b9\u9762\uff0c",(0,r.jsx)(n.a,{href:"https://www.szdev.com/docs/design-patterns/adapter",children:(0,r.jsx)(n.strong,{children:"\u9002\u914d\u5668\u6a21\u5f0f"})}),"\u901a\u5e38\u5728\u5df2\u6709\u7a0b\u5e8f\u4e2d\u4f7f\u7528\uff0c\u8ba9\u76f8\u4e92\u4e0d\u517c\u5bb9\u7684\u7c7b\u80fd\u5f88\u597d\u5730\u5408\u4f5c\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://www.szdev.com/docs/design-patterns/bridge",children:(0,r.jsx)(n.strong,{children:"\u6865\u63a5"})}),"\u3001",(0,r.jsx)(n.a,{href:"https://www.szdev.com/docs/design-patterns/state",children:(0,r.jsx)(n.strong,{children:"\u72b6\u6001\u6a21\u5f0f"})}),"\u548c",(0,r.jsx)(n.a,{href:"https://www.szdev.com/docs/design-patterns/strategy",children:(0,r.jsx)(n.strong,{children:"\u7b56\u7565\u6a21\u5f0f"})})," (\u5728\u67d0\u79cd\u7a0b\u5ea6\u4e0a\u5305\u62ec",(0,r.jsx)(n.a,{href:"https://www.szdev.com/docs/design-patterns/adapter",children:(0,r.jsx)(n.strong,{children:"\u9002\u914d\u5668"})}),") \u6a21\u5f0f\u7684\u63a5\u53e3\u975e\u5e38\u76f8\u4f3c\u3002\u5b9e\u9645\u4e0a\uff0c\u5b83\u4eec\u90fd\u57fa\u4e8e",(0,r.jsx)(n.a,{href:"https://www.szdev.com/docs/design-patterns/composite",children:(0,r.jsx)(n.strong,{children:"\u7ec4\u5408\u6a21\u5f0f"})}),"\u2014\u2014\u5373\u5c06\u5de5\u4f5c\u59d4\u6d3e\u7ed9\u5176\u4ed6\u5bf9\u8c61\uff0c\u4e0d\u8fc7\u4e5f\u5404\u81ea\u89e3\u51b3\u4e86\u4e0d\u540c\u7684\u95ee\u9898\u3002\u6a21\u5f0f\u5e76\u4e0d\u53ea\u662f\u4ee5\u7279\u5b9a\u65b9\u5f0f\u7ec4\u7ec7\u4ee3\u7801\u7684\u914d\u65b9\uff0c\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528\u5b83\u4eec\u6765\u548c\u5176\u4ed6\u5f00\u53d1\u8005\u8ba8\u8bba\u6a21\u5f0f\u6240\u89e3\u51b3\u7684\u95ee\u9898\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u4f60\u53ef\u4ee5\u5c06",(0,r.jsx)(n.a,{href:"https://www.szdev.com/docs/design-patterns/abstract-factory",children:(0,r.jsx)(n.strong,{children:"\u62bd\u8c61\u5de5\u5382\u6a21\u5f0f"})}),"\u548c",(0,r.jsx)(n.a,{href:"https://www.szdev.com/docs/design-patterns/bridge",children:(0,r.jsx)(n.strong,{children:"\u6865\u63a5"})}),"\u642d\u914d\u4f7f\u7528\u3002\u5982\u679c\u7531",(0,r.jsx)(n.em,{children:"\u6865\u63a5"}),"\u5b9a\u4e49\u7684\u62bd\u8c61\u53ea\u80fd\u4e0e\u7279\u5b9a\u5b9e\u73b0\u5408\u4f5c\uff0c\u8fd9\u4e00\u6a21\u5f0f\u642d\u914d\u5c31\u975e\u5e38\u6709\u7528\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c",(0,r.jsx)(n.em,{children:"\u62bd\u8c61\u5de5\u5382"}),"\u53ef\u4ee5\u5bf9\u8fd9\u4e9b\u5173\u7cfb\u8fdb\u884c\u5c01\u88c5\uff0c\u5e76\u4e14\u5bf9\u5ba2\u6237\u7aef\u4ee3\u7801\u9690\u85cf\u5176\u590d\u6742\u6027\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u4f60\u53ef\u4ee5\u7ed3\u5408\u4f7f\u7528",(0,r.jsx)(n.a,{href:"https://www.szdev.com/docs/design-patterns/builder",children:(0,r.jsx)(n.strong,{children:"\u751f\u6210\u5668\u6a21\u5f0f"})}),"\u548c",(0,r.jsx)(n.a,{href:"https://www.szdev.com/docs/design-patterns/bridge",children:(0,r.jsx)(n.strong,{children:"\u6865\u63a5\u6a21\u5f0f"})}),"\uff1a",(0,r.jsx)(n.em,{children:"\u4e3b\u7ba1"}),"\u7c7b\u8d1f\u8d23\u62bd\u8c61\u5de5\u4f5c\uff0c\u5404\u79cd\u4e0d\u540c\u7684",(0,r.jsx)(n.em,{children:"\u751f\u6210\u5668"}),"\u8d1f\u8d23",(0,r.jsx)(n.em,{children:"\u5b9e\u73b0"}),"\u5de5\u4f5c\u3002"]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var r=s(96540);const i={},d=r.createContext(i);function t(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);