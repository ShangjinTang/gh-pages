"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8537],{16686:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var r=s(74848),t=s(28453);const i={description:"\u6452\u5f03\u4e86\u5728\u6bcf\u4e2a\u5bf9\u8c61\u4e2d\u4fdd\u5b58\u6240\u6709\u6570\u636e\u7684\u65b9\u5f0f\uff0c \u901a\u8fc7\u5171\u4eab\u591a\u4e2a\u5bf9\u8c61\u6240\u5171\u6709\u7684\u76f8\u540c\u72b6\u6001\uff0c \u8ba9\u4f60\u80fd\u5728\u6709\u9650\u7684\u5185\u5b58\u5bb9\u91cf\u4e2d\u8f7d\u5165\u66f4\u591a\u5bf9\u8c61\u3002",slug:"/design-patterns/flyweight"},l="\u4eab\u5143\u6a21\u5f0f",c={id:"design-patterns/structural-patterns/flyweight",title:"\u4eab\u5143\u6a21\u5f0f",description:"\u6452\u5f03\u4e86\u5728\u6bcf\u4e2a\u5bf9\u8c61\u4e2d\u4fdd\u5b58\u6240\u6709\u6570\u636e\u7684\u65b9\u5f0f\uff0c \u901a\u8fc7\u5171\u4eab\u591a\u4e2a\u5bf9\u8c61\u6240\u5171\u6709\u7684\u76f8\u540c\u72b6\u6001\uff0c \u8ba9\u4f60\u80fd\u5728\u6709\u9650\u7684\u5185\u5b58\u5bb9\u91cf\u4e2d\u8f7d\u5165\u66f4\u591a\u5bf9\u8c61\u3002",source:"@site/docs/design-patterns/02-structural-patterns/06-flyweight.mdx",sourceDirName:"design-patterns/02-structural-patterns",slug:"/design-patterns/flyweight",permalink:"/docs/design-patterns/flyweight",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{description:"\u6452\u5f03\u4e86\u5728\u6bcf\u4e2a\u5bf9\u8c61\u4e2d\u4fdd\u5b58\u6240\u6709\u6570\u636e\u7684\u65b9\u5f0f\uff0c \u901a\u8fc7\u5171\u4eab\u591a\u4e2a\u5bf9\u8c61\u6240\u5171\u6709\u7684\u76f8\u540c\u72b6\u6001\uff0c \u8ba9\u4f60\u80fd\u5728\u6709\u9650\u7684\u5185\u5b58\u5bb9\u91cf\u4e2d\u8f7d\u5165\u66f4\u591a\u5bf9\u8c61\u3002",slug:"/design-patterns/flyweight"},sidebar:"designpatternsSidebar",previous:{title:"\u5916\u89c2\u6a21\u5f0f",permalink:"/docs/design-patterns/facade"},next:{title:"\u4ee3\u7406\u6a21\u5f0f",permalink:"/docs/design-patterns/proxy"}},d={},h=[{value:"<strong>\u610f\u56fe</strong>",id:"\u610f\u56fe",level:2},{value:"<strong>\u95ee\u9898</strong>",id:"\u95ee\u9898",level:2},{value:"<strong>\u89e3\u51b3\u65b9\u6848</strong>",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"<strong>\u5916\u5728\u72b6\u6001\u5b58\u50a8</strong>",id:"\u5916\u5728\u72b6\u6001\u5b58\u50a8",level:3},{value:"<strong>\u4eab\u5143\u4e0e\u4e0d\u53ef\u53d8\u6027</strong>",id:"\u4eab\u5143\u4e0e\u4e0d\u53ef\u53d8\u6027",level:3},{value:"<strong>\u4eab\u5143\u5de5\u5382</strong>",id:"\u4eab\u5143\u5de5\u5382",level:3},{value:"<strong>\u4eab\u5143\u6a21\u5f0f\u7ed3\u6784</strong>",id:"\u4eab\u5143\u6a21\u5f0f\u7ed3\u6784",level:2},{value:"<strong>\u4f2a\u4ee3\u7801</strong>",id:"\u4f2a\u4ee3\u7801",level:2},{value:"<strong>\u4eab\u5143\u6a21\u5f0f\u9002\u5408\u5e94\u7528\u573a\u666f</strong>",id:"\u4eab\u5143\u6a21\u5f0f\u9002\u5408\u5e94\u7528\u573a\u666f",level:2},{value:"<strong>\u4eab\u5143\u6a21\u5f0f\u4f18\u7f3a\u70b9</strong>",id:"\u4eab\u5143\u6a21\u5f0f\u4f18\u7f3a\u70b9",level:2},{value:"<strong>\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb</strong>",id:"\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb",level:2}];function o(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u4eab\u5143\u6a21\u5f0f",children:"\u4eab\u5143\u6a21\u5f0f"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u4ea6\u79f0\uff1a\u7f13\u5b58\u3001Cache\u3001Flyweight"})}),"\n",(0,r.jsx)(n.h2,{id:"\u610f\u56fe",children:(0,r.jsx)(n.strong,{children:"\u610f\u56fe"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u4eab\u5143\u6a21\u5f0f"}),"\u662f\u4e00\u79cd\u7ed3\u6784\u578b\u8bbe\u8ba1\u6a21\u5f0f\uff0c\u5b83\u6452\u5f03\u4e86\u5728\u6bcf\u4e2a\u5bf9\u8c61\u4e2d\u4fdd\u5b58\u6240\u6709\u6570\u636e\u7684\u65b9\u5f0f\uff0c\u901a\u8fc7\u5171\u4eab\u591a\u4e2a\u5bf9\u8c61\u6240\u5171\u6709\u7684\u76f8\u540c\u72b6\u6001\uff0c\u8ba9\u4f60\u80fd\u5728\u6709\u9650\u7684\u5185\u5b58\u5bb9\u91cf\u4e2d\u8f7d\u5165\u66f4\u591a\u5bf9\u8c61\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://refactoringguru.cn/images/patterns/content/flyweight/flyweight-zh-2x.png",alt:""})}),"\n",(0,r.jsx)(n.h2,{id:"\u95ee\u9898",children:(0,r.jsx)(n.strong,{children:"\u95ee\u9898"})}),"\n",(0,r.jsx)(n.p,{children:"\u5047\u5982\u4f60\u5e0c\u671b\u5728\u957f\u65f6\u95f4\u5de5\u4f5c\u540e\u653e\u677e\u4e00\u4e0b\uff0c\u6240\u4ee5\u5f00\u53d1\u4e86\u4e00\u6b3e\u7b80\u5355\u7684\u6e38\u620f\uff1a\u73a9\u5bb6\u4eec\u5728\u5730\u56fe\u4e0a\u79fb\u52a8\u5e76\u76f8\u4e92\u5c04\u51fb\u3002\u4f60\u51b3\u5b9a\u5b9e\u73b0\u4e00\u4e2a\u771f\u5b9e\u7684\u7c92\u5b50\u7cfb\u7edf\uff0c\u5e76\u5c06\u5176\u4f5c\u4e3a\u6e38\u620f\u7684\u7279\u8272\u3002\u5927\u91cf\u7684\u5b50\u5f39\u3001\u5bfc\u5f39\u548c\u7206\u70b8\u5f39\u7247\u4f1a\u5728\u6574\u4e2a\u5730\u56fe\u4e0a\u7a7f\u884c\uff0c\u4e3a\u73a9\u5bb6\u63d0\u4f9b\u7d27\u5f20\u523a\u6fc0\u7684\u6e38\u620f\u4f53\u9a8c\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5f00\u53d1\u5b8c\u6210\u540e\uff0c\u4f60\u63a8\u9001\u63d0\u4ea4\u4e86\u6700\u65b0\u7248\u672c\u7684\u7a0b\u5e8f\uff0c\u5e76\u5728\u7f16\u8bd1\u6e38\u620f\u540e\u5c06\u5176\u53d1\u9001\u7ed9\u4e86\u4e00\u4e2a\u670b\u53cb\u8fdb\u884c\u6d4b\u8bd5\u3002\u5c3d\u7ba1\u8be5\u6e38\u620f\u5728\u4f60\u7684\u7535\u8111\u4e0a\u5b8c\u7f8e\u8fd0\u884c\uff0c\u4f46\u662f\u4f60\u7684\u670b\u53cb\u5374\u65e0\u6cd5\u957f\u65f6\u95f4\u8fdb\u884c\u6e38\u620f\uff1a\u6e38\u620f\u603b\u662f\u4f1a\u5728\u4ed6\u7684\u7535\u8111\u4e0a\u8fd0\u884c\u51e0\u5206\u949f\u540e\u5d29\u6e83\u3002\u5728\u7814\u7a76\u4e86\u51e0\u4e2a\u5c0f\u65f6\u7684\u8c03\u8bd5\u6d88\u606f\u8bb0\u5f55\u540e\uff0c\u4f60\u53d1\u73b0\u5bfc\u81f4\u6e38\u620f\u5d29\u6e83\u7684\u539f\u56e0\u662f\u5185\u5b58\u5bb9\u91cf\u4e0d\u8db3\u3002\u670b\u53cb\u7684\u8bbe\u5907\u6027\u80fd\u8fdc\u6bd4\u4e0d\u4e0a\u4f60\u7684\u7535\u8111\uff0c\u56e0\u6b64\u6e38\u620f\u8fd0\u884c\u5728\u4ed6\u7684\u7535\u8111\u4e0a\u65f6\u5f88\u5feb\u5c31\u4f1a\u51fa\u73b0\u95ee\u9898\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u771f\u6b63\u7684\u95ee\u9898\u4e0e\u7c92\u5b50\u7cfb\u7edf\u6709\u5173\u3002\u6bcf\u4e2a\u7c92\u5b50 (\u4e00\u9897\u5b50\u5f39\u3001\u4e00\u679a\u5bfc\u5f39\u6216\u4e00\u5757\u5f39\u7247) \u90fd\u7531\u5305\u542b\u5b8c\u6574\u6570\u636e\u7684\u72ec\u7acb\u5bf9\u8c61\u6765\u8868\u793a\u3002\u5f53\u73a9\u5bb6\u5728\u6e38\u620f\u4e2d\u93d6\u6218\u8fdb\u5165\u9ad8\u6f6e\u540e\u7684\u67d0\u4e00\u65f6\u523b\uff0c\u6e38\u620f\u5c06\u65e0\u6cd5\u5728\u5269\u4f59\u5185\u5b58\u4e2d\u8f7d\u5165\u65b0\u5efa\u7c92\u5b50\uff0c\u4e8e\u662f\u7a0b\u5e8f\u5c31\u5d29\u6e83\u4e86\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://refactoringguru.cn/images/patterns/diagrams/flyweight/problem-zh-2x.png",alt:""})}),"\n",(0,r.jsx)(n.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:(0,r.jsx)(n.strong,{children:"\u89e3\u51b3\u65b9\u6848"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4ed4\u7ec6\u89c2\u5bdf ",(0,r.jsx)(n.code,{children:"\u7c92\u5b50"})," Particle \u7c7b\uff0c\u4f60\u53ef\u80fd\u4f1a\u6ce8\u610f\u5230\u989c\u8272 (color) \u548c\u7cbe\u7075\u56fe (sprite) \u8fd9\u4e24\u4e2a\u6210\u5458\u53d8\u91cf\u6240\u6d88\u8017\u7684\u5185\u5b58\u8981\u6bd4\u5176\u4ed6\u53d8\u91cf\u591a\u5f97\u591a\u3002\u66f4\u7cdf\u7cd5\u7684\u662f\uff0c\u5bf9\u4e8e\u6240\u6709\u7684\u7c92\u5b50\u6765\u8bf4\uff0c\u8fd9\u4e24\u4e2a\u6210\u5458\u53d8\u91cf\u6240\u5b58\u50a8\u7684\u6570\u636e\u51e0\u4e4e\u5b8c\u5168\u4e00\u6837 (\u6bd4\u5982\u6240\u6709\u5b50\u5f39\u7684\u989c\u8272\u548c\u7cbe\u7075\u56fe\u90fd\u4e00\u6837)\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://refactoringguru.cn/images/patterns/diagrams/flyweight/solution1-zh-2x.png",alt:""})}),"\n",(0,r.jsx)(n.p,{children:"\u6bcf\u4e2a\u7c92\u5b50\u7684\u53e6\u4e00\u4e9b\u72b6\u6001 (\u5750\u6807\u3001\u79fb\u52a8\u77e2\u91cf\u548c\u901f\u5ea6) \u5219\u662f\u4e0d\u540c\u7684\u3002\u56e0\u4e3a\u8fd9\u4e9b\u6210\u5458\u53d8\u91cf\u7684\u6570\u503c\u4f1a\u4e0d\u65ad\u53d8\u5316\u3002\u8fd9\u4e9b\u6570\u636e\u4ee3\u8868\u7c92\u5b50\u5728\u5b58\u7eed\u671f\u95f4\u4e0d\u65ad\u53d8\u5316\u7684\u60c5\u666f\uff0c\u4f46\u6bcf\u4e2a\u7c92\u5b50\u7684\u989c\u8272\u548c\u7cbe\u7075\u56fe\u5219\u4f1a\u4fdd\u6301\u4e0d\u53d8\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5bf9\u8c61\u7684\u5e38\u91cf\u6570\u636e\u901a\u5e38\u88ab\u79f0\u4e3a",(0,r.jsx)(n.em,{children:"\u5185\u5728\u72b6\u6001"}),"\uff0c\u5176\u4f4d\u4e8e\u5bf9\u8c61\u4e2d\uff0c\u5176\u4ed6\u5bf9\u8c61\u53ea\u80fd\u8bfb\u53d6\u4f46\u4e0d\u80fd\u4fee\u6539\u5176\u6570\u503c\u3002\u800c\u5bf9\u8c61\u7684\u5176\u4ed6\u72b6\u6001\u5e38\u5e38\u80fd\u88ab\u5176\u4ed6\u5bf9\u8c61 \u201c\u4ece\u5916\u90e8\u201d \u6539\u53d8\uff0c\u56e0\u6b64\u88ab\u79f0\u4e3a",(0,r.jsx)(n.em,{children:"\u5916\u5728\u72b6\u6001"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4eab\u5143\u6a21\u5f0f\u5efa\u8bae\u4e0d\u5728\u5bf9\u8c61\u4e2d\u5b58\u50a8\u5916\u5728\u72b6\u6001\uff0c\u800c\u662f\u5c06\u5176\u4f20\u9012\u7ed9\u4f9d\u8d56\u4e8e\u5b83\u7684\u4e00\u4e2a\u7279\u6b8a\u65b9\u6cd5\u3002\u7a0b\u5e8f\u53ea\u5728\u5bf9\u8c61\u4e2d\u4fdd\u5b58\u5185\u5728\u72b6\u6001\uff0c\u4ee5\u65b9\u4fbf\u5728\u4e0d\u540c\u60c5\u666f\u4e0b\u91cd\u7528\u3002\u8fd9\u4e9b\u5bf9\u8c61\u7684\u533a\u522b\u4ec5\u5728\u4e8e\u5176\u5185\u5728\u72b6\u6001 (\u4e0e\u5916\u5728\u72b6\u6001\u76f8\u6bd4\uff0c\u5185\u5728\u72b6\u6001\u7684\u53d8\u4f53\u8981\u5c11\u5f88\u591a)\uff0c\u56e0\u6b64\u4f60\u6240\u9700\u7684\u5bf9\u8c61\u6570\u91cf\u4f1a\u5927\u5927\u524a\u51cf\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://refactoringguru.cn/images/patterns/diagrams/flyweight/solution3-zh-2x.png",alt:""})}),"\n",(0,r.jsx)(n.p,{children:"\u8ba9\u6211\u4eec\u56de\u5230\u6e38\u620f\u4e2d\u3002\u5047\u5982\u80fd\u4ece\u7c92\u5b50\u7c7b\u4e2d\u62bd\u51fa\u5916\u5728\u72b6\u6001\uff0c\u90a3\u4e48\u6211\u4eec\u53ea\u9700\u4e09\u4e2a\u4e0d\u540c\u7684\u5bf9\u8c61 (\u5b50\u5f39\u3001\u5bfc\u5f39\u548c\u5f39\u7247) \u5c31\u80fd\u8868\u793a\u6e38\u620f\u4e2d\u7684\u6240\u6709\u7c92\u5b50\u3002\u4f60\u73b0\u5728\u5f88\u53ef\u80fd\u5df2\u7ecf\u731c\u5230\u4e86\uff0c\u6211\u4eec\u5c06\u8fd9\u6837\u4e00\u4e2a\u4ec5\u5b58\u50a8\u5185\u5728\u72b6\u6001\u7684\u5bf9\u8c61\u79f0\u4e3a\u4eab\u5143\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u5916\u5728\u72b6\u6001\u5b58\u50a8",children:(0,r.jsx)(n.strong,{children:"\u5916\u5728\u72b6\u6001\u5b58\u50a8"})}),"\n",(0,r.jsx)(n.p,{children:"\u90a3\u4e48\u5916\u5728\u72b6\u6001\u4f1a\u88ab\u79fb\u52a8\u5230\u4ec0\u4e48\u5730\u65b9\u5462\uff1f\u603b\u5f97\u6709\u7c7b\u6765\u5b58\u50a8\u5b83\u4eec\uff0c\u5bf9\u4e0d\u5bf9\uff1f\u5728\u5927\u90e8\u5206\u60c5\u51b5\u4e2d\uff0c\u5b83\u4eec\u4f1a\u88ab\u79fb\u52a8\u5230\u5bb9\u5668\u5bf9\u8c61\u4e2d\uff0c\u4e5f\u5c31\u662f\u6211\u4eec\u5e94\u7528\u4eab\u5143\u6a21\u5f0f\u524d\u7684\u805a\u5408\u5bf9\u8c61\u4e2d\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u6211\u4eec\u7684\u4f8b\u5b50\u4e2d\uff0c\u5bb9\u5668\u5bf9\u8c61\u5c31\u662f\u4e3b\u8981\u7684 ",(0,r.jsx)(n.code,{children:"\u6e38\u620f"})," Game \u5bf9\u8c61\uff0c\u5176\u4f1a\u5c06\u6240\u6709\u7c92\u5b50\u5b58\u50a8\u5728\u540d\u4e3a ",(0,r.jsx)(n.code,{children:"\u7c92\u5b50"})," particles \u7684\u6210\u5458\u53d8\u91cf\u4e2d\u3002\u4e3a\u4e86\u80fd\u5c06\u5916\u5728\u72b6\u6001\u79fb\u52a8\u5230\u8fd9\u4e2a\u7c7b\u4e2d\uff0c\u4f60\u9700\u8981\u521b\u5efa\u591a\u4e2a\u6570\u7ec4\u6210\u5458\u53d8\u91cf\u6765\u5b58\u50a8\u6bcf\u4e2a\u7c92\u5b50\u7684\u5750\u6807\u3001\u65b9\u5411\u77e2\u91cf\u548c\u901f\u5ea6\u3002\u9664\u6b64\u4e4b\u5916\uff0c\u4f60\u8fd8\u9700\u8981\u53e6\u4e00\u4e2a\u6570\u7ec4\u6765\u5b58\u50a8\u6307\u5411\u4ee3\u8868\u7c92\u5b50\u7684\u7279\u5b9a\u4eab\u5143\u7684\u5f15\u7528\u3002\u8fd9\u4e9b\u6570\u7ec4\u5fc5\u987b\u4fdd\u6301\u540c\u6b65\uff0c\u8fd9\u6837\u4f60\u624d\u80fd\u591f\u4f7f\u7528\u540c\u4e00\u7d22\u5f15\u6765\u83b7\u53d6\u5173\u4e8e\u67d0\u4e2a\u7c92\u5b50\u7684\u6240\u6709\u6570\u636e\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://refactoringguru.cn/images/patterns/diagrams/flyweight/solution2-zh-2x.png",alt:""})}),"\n",(0,r.jsx)(n.p,{children:"\u66f4\u4f18\u96c5\u7684\u89e3\u51b3\u65b9\u6848\u662f\u521b\u5efa\u72ec\u7acb\u7684\u60c5\u666f\u7c7b\u6765\u5b58\u50a8\u5916\u5728\u72b6\u6001\u548c\u5bf9\u4eab\u5143\u5bf9\u8c61\u7684\u5f15\u7528\u3002\u5728\u8be5\u65b9\u6cd5\u4e2d\uff0c\u5bb9\u5668\u7c7b\u53ea\u9700\u5305\u542b\u4e00\u4e2a\u6570\u7ec4\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u7a0d\u7b49\uff01\u8fd9\u6837\u7684\u8bdd\u60c5\u666f\u5bf9\u8c61\u6570\u91cf\u4e0d\u662f\u4f1a\u548c\u4e0d\u91c7\u7528\u8be5\u6a21\u5f0f\u65f6\u7684\u5bf9\u8c61\u6570\u91cf\u4e00\u6837\u591a\u5417\uff1f\u7684\u786e\u5982\u6b64\uff0c\u4f46\u8fd9\u4e9b\u5bf9\u8c61\u8981\u6bd4\u4e4b\u524d\u5c0f\u5f88\u591a\u3002\u6d88\u8017\u5185\u5b58\u6700\u591a\u7684\u6210\u5458\u53d8\u91cf\u5df2\u7ecf\u88ab\u79fb\u52a8\u5230\u5f88\u5c11\u7684\u51e0\u4e2a\u4eab\u5143\u5bf9\u8c61\u4e2d\u4e86\u3002\u73b0\u5728\uff0c\u4e00\u4e2a\u4eab\u5143\u5927\u5bf9\u8c61\u4f1a\u88ab\u4e0a\u5343\u4e2a\u60c5\u5883\u5c0f\u5bf9\u8c61\u590d\u7528\uff0c\u56e0\u6b64\u65e0\u9700\u518d\u91cd\u590d\u5b58\u50a8\u6570\u5343\u4e2a\u5927\u5bf9\u8c61\u7684\u6570\u636e\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u4eab\u5143\u4e0e\u4e0d\u53ef\u53d8\u6027",children:(0,r.jsx)(n.strong,{children:"\u4eab\u5143\u4e0e\u4e0d\u53ef\u53d8\u6027"})}),"\n",(0,r.jsx)(n.p,{children:"\u7531\u4e8e\u4eab\u5143\u5bf9\u8c61\u53ef\u5728\u4e0d\u540c\u7684\u60c5\u666f\u4e2d\u4f7f\u7528\uff0c\u4f60\u5fc5\u987b\u786e\u4fdd\u5176\u72b6\u6001\u4e0d\u80fd\u88ab\u4fee\u6539\u3002\u4eab\u5143\u7c7b\u7684\u72b6\u6001\u53ea\u80fd\u7531\u6784\u9020\u51fd\u6570\u7684\u53c2\u6570\u8fdb\u884c\u4e00\u6b21\u6027\u521d\u59cb\u5316\uff0c\u5b83\u4e0d\u80fd\u5bf9\u5176\u4ed6\u5bf9\u8c61\u516c\u5f00\u5176\u8bbe\u7f6e\u5668\u6216\u516c\u6709\u6210\u5458\u53d8\u91cf\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u4eab\u5143\u5de5\u5382",children:(0,r.jsx)(n.strong,{children:"\u4eab\u5143\u5de5\u5382"})}),"\n",(0,r.jsx)(n.p,{children:"\u4e3a\u4e86\u80fd\u66f4\u65b9\u4fbf\u5730\u8bbf\u95ee\u5404\u79cd\u4eab\u5143\uff0c\u4f60\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u5de5\u5382\u65b9\u6cd5\u6765\u7ba1\u7406\u5df2\u6709\u4eab\u5143\u5bf9\u8c61\u7684\u7f13\u5b58\u6c60\u3002\u5de5\u5382\u65b9\u6cd5\u4ece\u5ba2\u6237\u7aef\u5904\u63a5\u6536\u76ee\u6807\u4eab\u5143\u5bf9\u8c61\u7684\u5185\u5728\u72b6\u6001\u4f5c\u4e3a\u53c2\u6570\uff0c\u5982\u679c\u5b83\u80fd\u5728\u7f13\u5b58\u6c60\u4e2d\u627e\u5230\u6240\u9700\u4eab\u5143\uff0c\u5219\u5c06\u5176\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\uff1b\u5982\u679c\u6ca1\u6709\u627e\u5230\uff0c\u5b83\u5c31\u4f1a\u65b0\u5efa\u4e00\u4e2a\u4eab\u5143\uff0c\u5e76\u5c06\u5176\u6dfb\u52a0\u5230\u7f13\u5b58\u6c60\u4e2d\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4f60\u53ef\u4ee5\u9009\u62e9\u5728\u7a0b\u5e8f\u7684\u4e0d\u540c\u5730\u65b9\u653e\u5165\u8be5\u51fd\u6570\u3002\u6700\u7b80\u5355\u7684\u9009\u62e9\u5c31\u662f\u5c06\u5176\u653e\u7f6e\u5728\u4eab\u5143\u5bb9\u5668\u4e2d\u3002\u9664\u6b64\u4e4b\u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u65b0\u5efa\u4e00\u4e2a\u5de5\u5382\u7c7b\uff0c\u6216\u8005\u521b\u5efa\u4e00\u4e2a\u9759\u6001\u7684\u5de5\u5382\u65b9\u6cd5\u5e76\u5c06\u5176\u653e\u5165\u5b9e\u9645\u7684\u4eab\u5143\u7c7b\u4e2d\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u4eab\u5143\u6a21\u5f0f\u7ed3\u6784",children:(0,r.jsx)(n.strong,{children:"\u4eab\u5143\u6a21\u5f0f\u7ed3\u6784"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://refactoringguru.cn/images/patterns/diagrams/flyweight/structure-2x.png",alt:""})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u4eab\u5143\u6a21\u5f0f\u53ea\u662f\u4e00\u79cd\u4f18\u5316\u3002\u5728\u5e94\u7528\u8be5\u6a21\u5f0f\u4e4b\u524d\uff0c\u4f60\u8981\u786e\u5b9a\u7a0b\u5e8f\u4e2d\u5b58\u5728\u4e0e\u5927\u91cf\u7c7b\u4f3c\u5bf9\u8c61\u540c\u65f6\u5360\u7528\u5185\u5b58\u76f8\u5173\u7684\u5185\u5b58\u6d88\u8017\u95ee\u9898\uff0c\u5e76\u4e14\u786e\u4fdd\u8be5\u95ee\u9898\u65e0\u6cd5\u4f7f\u7528\u5176\u4ed6\u66f4\u597d\u7684\u65b9\u5f0f\u6765\u89e3\u51b3\u3002"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u4eab\u5143"})," (Flyweight) \u7c7b\u5305\u542b\u539f\u59cb\u5bf9\u8c61\u4e2d\u90e8\u5206\u80fd\u5728\u591a\u4e2a\u5bf9\u8c61\u4e2d\u5171\u4eab\u7684\u72b6\u6001\u3002\u540c\u4e00\u4eab\u5143\u5bf9\u8c61\u53ef\u5728\u8bb8\u591a\u4e0d\u540c\u60c5\u666f\u4e2d\u4f7f\u7528\u3002\u4eab\u5143\u4e2d\u5b58\u50a8\u7684\u72b6\u6001\u88ab\u79f0\u4e3a \u201c\u5185\u5728\u72b6\u6001\u201d\u3002\u4f20\u9012\u7ed9\u4eab\u5143\u65b9\u6cd5\u7684\u72b6\u6001\u88ab\u79f0\u4e3a \u201c\u5916\u5728\u72b6\u6001\u201d\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u60c5\u666f"})," (Context) \u7c7b\u5305\u542b\u539f\u59cb\u5bf9\u8c61\u4e2d\u5404\u4e0d\u76f8\u540c\u7684\u5916\u5728\u72b6\u6001\u3002\u60c5\u666f\u4e0e\u4eab\u5143\u5bf9\u8c61\u7ec4\u5408\u5728\u4e00\u8d77\u5c31\u80fd\u8868\u793a\u539f\u59cb\u5bf9\u8c61\u7684\u5168\u90e8\u72b6\u6001\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u539f\u59cb\u5bf9\u8c61\u7684\u884c\u4e3a\u4f1a\u4fdd\u7559\u5728\u4eab\u5143\u7c7b\u4e2d\u3002\u56e0\u6b64\u8c03\u7528\u4eab\u5143\u65b9\u6cd5\u5fc5\u987b\u63d0\u4f9b\u90e8\u5206\u5916\u5728\u72b6\u6001\u4f5c\u4e3a\u53c2\u6570\u3002\u4f46\u4f60\u4e5f\u53ef\u5c06\u884c\u4e3a\u79fb\u52a8\u5230\u60c5\u666f\u7c7b\u4e2d\uff0c\u7136\u540e\u5c06\u8fde\u5165\u7684\u4eab\u5143\u4f5c\u4e3a\u5355\u7eaf\u7684\u6570\u636e\u5bf9\u8c61\u3002"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u5ba2\u6237\u7aef"})," (Client) \u8d1f\u8d23\u8ba1\u7b97\u6216\u5b58\u50a8\u4eab\u5143\u7684\u5916\u5728\u72b6\u6001\u3002\u5728\u5ba2\u6237\u7aef\u770b\u6765\uff0c\u4eab\u5143\u662f\u4e00\u79cd\u53ef\u5728\u8fd0\u884c\u65f6\u8fdb\u884c\u914d\u7f6e\u7684\u6a21\u677f\u5bf9\u8c61\uff0c\u5177\u4f53\u7684\u914d\u7f6e\u65b9\u5f0f\u4e3a\u5411\u5176\u65b9\u6cd5\u4e2d\u4f20\u5165\u4e00\u4e9b\u60c5\u666f\u6570\u636e\u53c2\u6570\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u4eab\u5143\u5de5\u5382"})," (Flyweight Factory) \u4f1a\u5bf9\u5df2\u6709\u4eab\u5143\u7684\u7f13\u5b58\u6c60\u8fdb\u884c\u7ba1\u7406\u3002\u6709\u4e86\u5de5\u5382\u540e\uff0c\u5ba2\u6237\u7aef\u5c31\u65e0\u9700\u76f4\u63a5\u521b\u5efa\u4eab\u5143\uff0c\u5b83\u4eec\u53ea\u9700\u8c03\u7528\u5de5\u5382\u5e76\u5411\u5176\u4f20\u9012\u76ee\u6807\u4eab\u5143\u7684\u4e00\u4e9b\u5185\u5728\u72b6\u6001\u5373\u53ef\u3002\u5de5\u5382\u4f1a\u6839\u636e\u53c2\u6570\u5728\u4e4b\u524d\u5df2\u521b\u5efa\u7684\u4eab\u5143\u4e2d\u8fdb\u884c\u67e5\u627e\uff0c\u5982\u679c\u627e\u5230\u6ee1\u8db3\u6761\u4ef6\u7684\u4eab\u5143\u5c31\u5c06\u5176\u8fd4\u56de\uff1b\u5982\u679c\u6ca1\u6709\u627e\u5230\u5c31\u6839\u636e\u53c2\u6570\u65b0\u5efa\u4eab\u5143\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4f2a\u4ee3\u7801",children:(0,r.jsx)(n.strong,{children:"\u4f2a\u4ee3\u7801"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u672c\u4f8b\u4e2d\uff0c",(0,r.jsx)(n.strong,{children:"\u4eab\u5143"}),"\u6a21\u5f0f\u80fd\u6709\u6548\u51cf\u5c11\u5728\u753b\u5e03\u4e0a\u6e32\u67d3\u6570\u767e\u4e07\u4e2a\u6811\u72b6\u5bf9\u8c61\u65f6\u6240\u9700\u7684\u5185\u5b58\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://refactoringguru.cn/images/patterns/diagrams/flyweight/example-2x.png",alt:""})}),"\n",(0,r.jsxs)(n.p,{children:["\u8be5\u6a21\u5f0f\u4ece\u4e3b\u8981\u7684 ",(0,r.jsx)(n.code,{children:"\u6811"})," Tree \u7c7b\u4e2d\u62bd\u53d6\u5185\u5728\u72b6\u6001\uff0c\u5e76\u5c06\u5176\u79fb\u52a8\u5230\u4eab\u5143\u7c7b ",(0,r.jsx)(n.code,{children:"\u6811\u79cd\u7c7b"})," Tree\xadType \u4e4b\u4e2d\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6700\u521d\u7a0b\u5e8f\u9700\u8981\u5728\u591a\u4e2a\u5bf9\u8c61\u4e2d\u5b58\u50a8\u76f8\u540c\u6570\u636e\uff0c\u800c\u73b0\u5728\u4ec5\u9700\u5728\u51e0\u4e2a\u4eab\u5143\u5bf9\u8c61\u4e2d\u4fdd\u5b58\u6570\u636e\uff0c\u7136\u540e\u5728\u4f5c\u4e3a\u60c5\u666f\u7684 ",(0,r.jsx)(n.code,{children:"\u6811"})," \u5bf9\u8c61\u4e2d\u8fde\u5165\u4eab\u5143\u5373\u53ef\u3002\u5ba2\u6237\u7aef\u4ee3\u7801\u4f7f\u7528\u4eab\u5143\u5de5\u5382\u521b\u5efa\u6811\u5bf9\u8c61\u5e76\u5c01\u88c5\u641c\u7d22\u6307\u5b9a\u5bf9\u8c61\u7684\u590d\u6742\u884c\u4e3a\uff0c\u5e76\u80fd\u5728\u9700\u8981\u65f6\u590d\u7528\u5bf9\u8c61\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"// \u4eab\u5143\u7c7b\u5305\u542b\u4e00\u4e2a\u6811\u7684\u90e8\u5206\u72b6\u6001\u3002\u8fd9\u4e9b\u6210\u5458\u53d8\u91cf\u4fdd\u5b58\u7684\u6570\u503c\u5bf9\u4e8e\u7279\u5b9a\u6811\u800c\u8a00\u662f\u552f\u4e00\n// \u7684\u3002\u4f8b\u5982\uff0c\u4f60\u5728\u8fd9\u91cc\u627e\u4e0d\u5230\u6811\u7684\u5750\u6807\u3002\u4f46\u8fd9\u91cc\u6709\u5f88\u591a\u6811\u6728\u4e4b\u95f4\u6240\u5171\u6709\u7684\u7eb9\u7406\u548c\u989c\n// \u8272\u3002\u7531\u4e8e\u8fd9\u4e9b\u6570\u636e\u7684\u4f53\u79ef\u901a\u5e38\u975e\u5e38\u5927\uff0c\u6240\u4ee5\u5982\u679c\u8ba9\u6bcf\u68f5\u6811\u90fd\u5176\u8fdb\u884c\u4fdd\u5b58\u7684\u8bdd\u5c06\u8017\n// \u8d39\u5927\u91cf\u5185\u5b58\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u53ef\u5c06\u7eb9\u7406\u3001\u989c\u8272\u548c\u5176\u4ed6\u91cd\u590d\u6570\u636e\u5bfc\u51fa\u5230\u4e00\u4e2a\u5355\u72ec\u7684\u5bf9\u8c61\n// \u4e2d\uff0c\u7136\u540e\u8ba9\u4f17\u591a\u7684\u5355\u4e2a\u6811\u5bf9\u8c61\u53bb\u5f15\u7528\u5b83\u3002\nclass TreeType is\n    field name\n    field color\n    field texture\n    constructor TreeType(name, color, texture) { \u2026\u2026 }\n    method draw(canvas, x, y) is\n        // 1. \u521b\u5efa\u7279\u5b9a\u7c7b\u578b\u3001\u989c\u8272\u548c\u7eb9\u7406\u7684\u4f4d\u56fe\u3002\n        // 2. \u5728\u753b\u5e03\u5750\u6807 (X,Y) \u5904\u7ed8\u5236\u4f4d\u56fe\u3002\n\n// \u4eab\u5143\u5de5\u5382\u51b3\u5b9a\u662f\u5426\u590d\u7528\u5df2\u6709\u4eab\u5143\u6216\u8005\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5bf9\u8c61\u3002\nclass TreeFactory is\n    static field treeTypes: collection of tree types\n    static method getTreeType(name, color, texture) is\n        type = treeTypes.find(name, color, texture)\n        if (type == null)\n            type = new TreeType(name, color, texture)\n            treeTypes.add(type)\n        return type\n\n// \u60c5\u666f\u5bf9\u8c61\u5305\u542b\u6811\u72b6\u6001\u7684\u5916\u5728\u90e8\u5206\u3002\u7a0b\u5e8f\u4e2d\u53ef\u4ee5\u521b\u5efa\u6570\u5341\u4ebf\u4e2a\u6b64\u7c7b\u5bf9\u8c61\uff0c\u56e0\u4e3a\u5b83\u4eec\n// \u4f53\u79ef\u5f88\u5c0f\uff1a\u4ec5\u6709\u4e24\u4e2a\u6574\u578b\u5750\u6807\u548c\u4e00\u4e2a\u5f15\u7528\u6210\u5458\u53d8\u91cf\u3002\nclass Tree is\n    field x,y\n    field type: TreeType\n    constructor Tree(x, y, type) { \u2026\u2026 }\n    method draw(canvas) is\n        type.draw(canvas, this.x, this.y)\n\n// \u6811\uff08Tree\uff09\u548c\u68ee\u6797\uff08Forest\uff09\u7c7b\u662f\u4eab\u5143\u7684\u5ba2\u6237\u7aef\u3002\u5982\u679c\u4e0d\u6253\u7b97\u7ee7\u7eed\u5bf9\u6811\u7c7b\u8fdb\u884c\u5f00\n// \u53d1\uff0c\u4f60\u53ef\u4ee5\u5c06\u5b83\u4eec\u5408\u5e76\u3002\nclass Forest is\n    field trees: collection of Trees\n\n    method plantTree(x, y, name, color, texture) is\n        type = TreeFactory.getTreeType(name, color, texture)\n        tree = new Tree(x, y, type)\n        trees.add(tree)\n\n    method draw(canvas) is\n        foreach (tree in trees) do\n            tree.draw(canvas)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u4eab\u5143\u6a21\u5f0f\u9002\u5408\u5e94\u7528\u573a\u666f",children:(0,r.jsx)(n.strong,{children:"\u4eab\u5143\u6a21\u5f0f\u9002\u5408\u5e94\u7528\u573a\u666f"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u4ec5\u5728\u7a0b\u5e8f\u5fc5\u987b\u652f\u6301\u5927\u91cf\u5bf9\u8c61\u4e14\u6ca1\u6709\u8db3\u591f\u7684\u5185\u5b58\u5bb9\u91cf\u65f6\u4f7f\u7528\u4eab\u5143\u6a21\u5f0f\u3002"})}),"\n",(0,r.jsx)(n.p,{children:"\u5e94\u7528\u8be5\u6a21\u5f0f\u6240\u83b7\u7684\u6536\u76ca\u5927\u5c0f\u53d6\u51b3\u4e8e\u4f7f\u7528\u5b83\u7684\u65b9\u5f0f\u548c\u60c5\u666f\u3002\u5b83\u5728\u4e0b\u5217\u60c5\u51b5\u4e2d\u6700\u6709\u6548\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7a0b\u5e8f\u9700\u8981\u751f\u6210\u6570\u91cf\u5de8\u5927\u7684\u76f8\u4f3c\u5bf9\u8c61"}),"\n",(0,r.jsx)(n.li,{children:"\u8fd9\u5c06\u8017\u5c3d\u76ee\u6807\u8bbe\u5907\u7684\u6240\u6709\u5185\u5b58"}),"\n",(0,r.jsx)(n.li,{children:"\u5bf9\u8c61\u4e2d\u5305\u542b\u53ef\u62bd\u53d6\u4e14\u80fd\u5728\u591a\u4e2a\u5bf9\u8c61\u95f4\u5171\u4eab\u7684\u91cd\u590d\u72b6\u6001\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u5b9e\u73b0\u65b9\u5f0f"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5c06\u9700\u8981\u6539\u5199\u4e3a\u4eab\u5143\u7684\u7c7b\u6210\u5458\u53d8\u91cf\u62c6\u5206\u4e3a\u4e24\u4e2a\u90e8\u5206\uff1a","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5185\u5728\u72b6\u6001\uff1a\u5305\u542b\u4e0d\u53d8\u7684\u3001\u53ef\u5728\u8bb8\u591a\u5bf9\u8c61\u4e2d\u91cd\u590d\u4f7f\u7528\u7684\u6570\u636e\u7684\u6210\u5458\u53d8\u91cf\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5916\u5728\u72b6\u6001\uff1a\u5305\u542b\u6bcf\u4e2a\u5bf9\u8c61\u5404\u81ea\u4e0d\u540c\u7684\u60c5\u666f\u6570\u636e\u7684\u6210\u5458\u53d8\u91cf"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"\u4fdd\u7559\u7c7b\u4e2d\u8868\u793a\u5185\u5728\u72b6\u6001\u7684\u6210\u5458\u53d8\u91cf\uff0c\u5e76\u5c06\u5176\u5c5e\u6027\u8bbe\u7f6e\u4e3a\u4e0d\u53ef\u4fee\u6539\u3002\u8fd9\u4e9b\u53d8\u91cf\u4ec5\u53ef\u5728\u6784\u9020\u51fd\u6570\u4e2d\u83b7\u5f97\u521d\u59cb\u6570\u503c\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u627e\u5230\u6240\u6709\u4f7f\u7528\u5916\u5728\u72b6\u6001\u6210\u5458\u53d8\u91cf\u7684\u65b9\u6cd5\uff0c\u4e3a\u5728\u65b9\u6cd5\u4e2d\u6240\u7528\u7684\u6bcf\u4e2a\u6210\u5458\u53d8\u91cf\u65b0\u5efa\u4e00\u4e2a\u53c2\u6570\uff0c\u5e76\u4f7f\u7528\u8be5\u53c2\u6570\u4ee3\u66ff\u6210\u5458\u53d8\u91cf\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4f60\u53ef\u4ee5\u6709\u9009\u62e9\u5730\u521b\u5efa\u5de5\u5382\u7c7b\u6765\u7ba1\u7406\u4eab\u5143\u7f13\u5b58\u6c60\uff0c\u5b83\u8d1f\u8d23\u5728\u65b0\u5efa\u4eab\u5143\u65f6\u68c0\u67e5\u5df2\u6709\u7684\u4eab\u5143\u3002\u5982\u679c\u9009\u62e9\u4f7f\u7528\u5de5\u5382\uff0c\u5ba2\u6237\u7aef\u5c31\u53ea\u80fd\u901a\u8fc7\u5de5\u5382\u6765\u8bf7\u6c42\u4eab\u5143\uff0c\u5b83\u4eec\u9700\u8981\u5c06\u4eab\u5143\u7684\u5185\u5728\u72b6\u6001\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u7ed9\u5de5\u5382\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5ba2\u6237\u7aef\u5fc5\u987b\u5b58\u50a8\u548c\u8ba1\u7b97\u5916\u5728\u72b6\u6001 (\u60c5\u666f) \u7684\u6570\u503c\uff0c\u56e0\u4e3a\u53ea\u6709\u8fd9\u6837\u624d\u80fd\u8c03\u7528\u4eab\u5143\u5bf9\u8c61\u7684\u65b9\u6cd5\u3002\u4e3a\u4e86\u4f7f\u7528\u65b9\u4fbf\uff0c\u5916\u5728\u72b6\u6001\u548c\u5f15\u7528\u4eab\u5143\u7684\u6210\u5458\u53d8\u91cf\u53ef\u4ee5\u79fb\u52a8\u5230\u5355\u72ec\u7684\u60c5\u666f\u7c7b\u4e2d\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4eab\u5143\u6a21\u5f0f\u4f18\u7f3a\u70b9",children:(0,r.jsx)(n.strong,{children:"\u4eab\u5143\u6a21\u5f0f\u4f18\u7f3a\u70b9"})}),"\n",(0,r.jsx)(n.p,{children:"\u2714\ufe0f \u5982\u679c\u7a0b\u5e8f\u4e2d\u6709\u5f88\u591a\u76f8\u4f3c\u5bf9\u8c61\uff0c\u90a3\u4e48\u4f60\u5c06\u53ef\u4ee5\u8282\u7701\u5927\u91cf\u5185\u5b58\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u274c \u4f60\u53ef\u80fd\u9700\u8981\u727a\u7272\u6267\u884c\u901f\u5ea6\u6765\u6362\u53d6\u5185\u5b58\uff0c\u56e0\u4e3a\u4ed6\u4eba\u6bcf\u6b21\u8c03\u7528\u4eab\u5143\u65b9\u6cd5\u65f6\u90fd\u9700\u8981\u91cd\u65b0\u8ba1\u7b97\u90e8\u5206\u60c5\u666f\u6570\u636e\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u274c \u4ee3\u7801\u4f1a\u53d8\u5f97\u66f4\u52a0\u590d\u6742\u3002\u56e2\u961f\u4e2d\u7684\u65b0\u6210\u5458\u603b\u662f\u4f1a\u95ee\uff1a\u201c\u4e3a\u4ec0\u4e48\u8981\u50cf\u8fd9\u6837\u62c6\u5206\u4e00\u4e2a\u5b9e\u4f53\u7684\u72b6\u6001\uff1f\u201d\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb",children:(0,r.jsx)(n.strong,{children:"\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,r.jsx)(n.a,{href:"https://www.szdev.com/docs/design-patterns/flyweight",children:(0,r.jsx)(n.strong,{children:"\u4eab\u5143\u6a21\u5f0f"})}),"\u5b9e\u73b0",(0,r.jsx)(n.a,{href:"https://www.szdev.com/docs/design-patterns/composite",children:(0,r.jsx)(n.strong,{children:"\u7ec4\u5408\u6a21\u5f0f"})}),"\u6811\u7684\u5171\u4eab\u53f6\u8282\u70b9\u4ee5\u8282\u7701\u5185\u5b58\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://www.szdev.com/docs/design-patterns/flyweight",children:(0,r.jsx)(n.strong,{children:"\u4eab\u5143"})}),"\u5c55\u793a\u4e86\u5982\u4f55\u751f\u6210\u5927\u91cf\u7684\u5c0f\u578b\u5bf9\u8c61\uff0c",(0,r.jsx)(n.a,{href:"https://www.szdev.com/docs/design-patterns/facade",children:(0,r.jsx)(n.strong,{children:"\u5916\u89c2\u6a21\u5f0f"})}),"\u5219\u5c55\u793a\u4e86\u5982\u4f55\u7528\u4e00\u4e2a\u5bf9\u8c61\u6765\u4ee3\u8868\u6574\u4e2a\u5b50\u7cfb\u7edf\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u4f60\u80fd\u5c06\u5bf9\u8c61\u7684\u6240\u6709\u5171\u4eab\u72b6\u6001\u7b80\u5316\u4e3a\u4e00\u4e2a\u4eab\u5143\u5bf9\u8c61\uff0c\u90a3\u4e48",(0,r.jsx)(n.a,{href:"https://www.szdev.com/docs/design-patterns/flyweight",children:(0,r.jsx)(n.strong,{children:"\u4eab\u5143"})}),"\u5c31\u548c",(0,r.jsx)(n.a,{href:"https://www.szdev.com/docs/design-patterns/singleton",children:(0,r.jsx)(n.strong,{children:"\u5355\u4f8b\u6a21\u5f0f"})}),"\u7c7b\u4f3c\u4e86\u3002\u4f46\u8fd9\u4e24\u4e2a\u6a21\u5f0f\u6709\u4e24\u4e2a\u6839\u672c\u6027\u7684\u4e0d\u540c\u3002","\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u53ea\u4f1a\u6709\u4e00\u4e2a\u5355\u4f8b\u5b9e\u4f53\uff0c\u4f46\u662f",(0,r.jsx)(n.em,{children:"\u4eab\u5143"}),"\u7c7b\u53ef\u4ee5\u6709\u591a\u4e2a\u5b9e\u4f53\uff0c\u5404\u5b9e\u4f53\u7684\u5185\u5728\u72b6\u6001\u4e5f\u53ef\u4ee5\u4e0d\u540c\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"\u5355\u4f8b"}),"\u5bf9\u8c61\u53ef\u4ee5\u662f\u53ef\u53d8\u7684\u3002\u4eab\u5143\u5bf9\u8c61\u662f\u4e0d\u53ef\u53d8\u7684\u3002"]}),"\n"]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var r=s(96540);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);