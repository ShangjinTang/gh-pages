"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5853],{73861:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var i=e(74848),r=e(28453);const t={description:"\u5c06\u7b97\u6cd5\u4e0e\u5176\u6240\u4f5c\u7528\u7684\u5bf9\u8c61\u9694\u79bb\u5f00\u6765\u3002",slug:"/design-patterns/visitor"},c="\u8bbf\u95ee\u8005\u6a21\u5f0f",o={id:"design-patterns/behavioral-patterns/visitor",title:"\u8bbf\u95ee\u8005\u6a21\u5f0f",description:"\u5c06\u7b97\u6cd5\u4e0e\u5176\u6240\u4f5c\u7528\u7684\u5bf9\u8c61\u9694\u79bb\u5f00\u6765\u3002",source:"@site/docs/design-patterns/03-behavioral-patterns/10-visitor.mdx",sourceDirName:"design-patterns/03-behavioral-patterns",slug:"/design-patterns/visitor",permalink:"/docs/design-patterns/visitor",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{description:"\u5c06\u7b97\u6cd5\u4e0e\u5176\u6240\u4f5c\u7528\u7684\u5bf9\u8c61\u9694\u79bb\u5f00\u6765\u3002",slug:"/design-patterns/visitor"},sidebar:"designpatternsSidebar",previous:{title:"\u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f",permalink:"/docs/design-patterns/template-method"}},d={},l=[{value:"<strong>\u610f\u56fe</strong>",id:"\u610f\u56fe",level:2},{value:"<strong>\u95ee\u9898</strong>",id:"\u95ee\u9898",level:2},{value:"<strong>\u89e3\u51b3\u65b9\u6848</strong>",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"<strong>\u771f\u5b9e\u4e16\u754c\u7c7b\u6bd4</strong>",id:"\u771f\u5b9e\u4e16\u754c\u7c7b\u6bd4",level:2},{value:"<strong>\u8bbf\u95ee\u8005\u6a21\u5f0f\u7ed3\u6784</strong>",id:"\u8bbf\u95ee\u8005\u6a21\u5f0f\u7ed3\u6784",level:2},{value:"<strong>\u4f2a\u4ee3\u7801</strong>",id:"\u4f2a\u4ee3\u7801",level:2},{value:"<strong>\u8bbf\u95ee\u8005\u6a21\u5f0f\u9002\u5408\u5e94\u7528\u573a\u666f</strong>",id:"\u8bbf\u95ee\u8005\u6a21\u5f0f\u9002\u5408\u5e94\u7528\u573a\u666f",level:2},{value:"<strong>\u8bbf\u95ee\u8005\u6a21\u5f0f\u4f18\u7f3a\u70b9</strong>",id:"\u8bbf\u95ee\u8005\u6a21\u5f0f\u4f18\u7f3a\u70b9",level:2},{value:"<strong>\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb</strong>",id:"\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb",level:2}];function h(n){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"\u8bbf\u95ee\u8005\u6a21\u5f0f",children:"\u8bbf\u95ee\u8005\u6a21\u5f0f"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u4ea6\u79f0\uff1aVisitor"})}),"\n",(0,i.jsx)(s.h2,{id:"\u610f\u56fe",children:(0,i.jsx)(s.strong,{children:"\u610f\u56fe"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u8bbf\u95ee\u8005\u6a21\u5f0f"}),"\u662f\u4e00\u79cd\u884c\u4e3a\u8bbe\u8ba1\u6a21\u5f0f\uff0c\u5b83\u80fd\u5c06\u7b97\u6cd5\u4e0e\u5176\u6240\u4f5c\u7528\u7684\u5bf9\u8c61\u9694\u79bb\u5f00\u6765\u3002"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://refactoringguru.cn/images/patterns/content/visitor/visitor-2x.png",alt:""})}),"\n",(0,i.jsx)(s.h2,{id:"\u95ee\u9898",children:(0,i.jsx)(s.strong,{children:"\u95ee\u9898"})}),"\n",(0,i.jsx)(s.p,{children:"\u5047\u5982\u4f60\u7684\u56e2\u961f\u5f00\u53d1\u4e86\u4e00\u6b3e\u80fd\u591f\u4f7f\u7528\u5de8\u578b\u56fe\u50cf\u4e2d\u5730\u7406\u4fe1\u606f\u7684\u5e94\u7528\u7a0b\u5e8f\u3002\u56fe\u50cf\u4e2d\u7684\u6bcf\u4e2a\u8282\u70b9\u65e2\u80fd\u4ee3\u8868\u590d\u6742\u5b9e\u4f53 (\u4f8b\u5982\u4e00\u5ea7\u57ce\u5e02)\uff0c\u4e5f\u80fd\u4ee3\u8868\u66f4\u7cbe\u7ec6\u7684\u5bf9\u8c61 (\u4f8b\u5982\u5de5\u4e1a\u533a\u548c\u65c5\u6e38\u666f\u70b9\u7b49)\u3002\u5982\u679c\u8282\u70b9\u4ee3\u8868\u7684\u771f\u5b9e\u5bf9\u8c61\u4e4b\u95f4\u5b58\u5728\u516c\u8def\uff0c\u90a3\u4e48\u8fd9\u4e9b\u8282\u70b9\u5c31\u4f1a\u76f8\u4e92\u8fde\u63a5\u3002\u5728\u7a0b\u5e8f\u5185\u90e8\uff0c\u6bcf\u4e2a\u8282\u70b9\u7684\u7c7b\u578b\u90fd\u7531\u5176\u6240\u5c5e\u7684\u7c7b\u6765\u8868\u793a\uff0c\u6bcf\u4e2a\u7279\u5b9a\u7684\u8282\u70b9\u5219\u662f\u4e00\u4e2a\u5bf9\u8c61\u3002"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://refactoringguru.cn/images/patterns/diagrams/visitor/problem1-2x.png",alt:""})}),"\n",(0,i.jsx)(s.p,{children:"\u5c06\u56fe\u50cf\u5bfc\u51fa\u4e3a XML\u3002"}),"\n",(0,i.jsx)(s.p,{children:"\u4e00\u6bb5\u65f6\u95f4\u540e\uff0c\u4f60\u63a5\u5230\u4e86\u5b9e\u73b0\u5c06\u56fe\u50cf\u5bfc\u51fa\u5230 XML \u6587\u4ef6\u4e2d\u7684\u4efb\u52a1\u3002\u8fd9\u4e9b\u5de5\u4f5c\u6700\u521d\u770b\u4e0a\u53bb\u975e\u5e38\u7b80\u5355\u3002\u4f60\u8ba1\u5212\u4e3a\u6bcf\u4e2a\u8282\u70b9\u7c7b\u6dfb\u52a0\u5bfc\u51fa\u51fd\u6570\uff0c\u7136\u540e\u9012\u5f52\u6267\u884c\u56fe\u50cf\u4e2d\u6bcf\u4e2a\u8282\u70b9\u7684\u5bfc\u51fa\u51fd\u6570\u3002\u89e3\u51b3\u65b9\u6848\u7b80\u5355\u4e14\u4f18\u96c5\uff1a\u4f7f\u7528\u591a\u6001\u673a\u5236\u53ef\u4ee5\u8ba9\u5bfc\u51fa\u65b9\u6cd5\u7684\u8c03\u7528\u4ee3\u7801\u4e0d\u4f1a\u548c\u5177\u4f53\u7684\u8282\u70b9\u7c7b\u76f8\u8026\u5408\u3002"}),"\n",(0,i.jsx)(s.p,{children:"\u4f46\u4f60\u4e0d\u592a\u8d70\u8fd0\uff0c\u7cfb\u7edf\u67b6\u6784\u5e08\u62d2\u7edd\u6279\u51c6\u5bf9\u5df2\u6709\u8282\u70b9\u7c7b\u8fdb\u884c\u4fee\u6539\u3002\u4ed6\u8ba4\u4e3a\u8fd9\u4e9b\u4ee3\u7801\u5df2\u7ecf\u662f\u4ea7\u54c1\u4e86\uff0c\u4e0d\u60f3\u5192\u9669\u5bf9\u5176\u8fdb\u884c\u4fee\u6539\uff0c\u56e0\u4e3a\u4fee\u6539\u53ef\u80fd\u4f1a\u5f15\u5165\u6f5c\u5728\u7684\u7f3a\u9677\u3002"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://refactoringguru.cn/images/patterns/diagrams/visitor/problem2-zh-2x.png",alt:""})}),"\n",(0,i.jsx)(s.p,{children:"\u6240\u6709\u8282\u70b9\u7684\u7c7b\u4e2d\u90fd\u5fc5\u987b\u6dfb\u52a0\u5bfc\u51fa\u81f3 XML \u6587\u4ef6\u7684\u65b9\u6cd5\uff0c\u4f46\u5982\u679c\u5728\u4fee\u6539\u4ee3\u7801\u7684\u8fc7\u7a0b\u4e2d\u5f15\u5165\u4e86\u4efb\u4f55\u7f3a\u9677\uff0c\u90a3\u4e48\u6574\u4e2a\u7a0b\u5e8f\u90fd\u4f1a\u9762\u4e34\u98ce\u9669\u3002"}),"\n",(0,i.jsx)(s.p,{children:"\u6b64\u5916\uff0c\u4ed6\u8fd8\u8d28\u7591\u5728\u8282\u70b9\u7c7b\u4e2d\u5305\u542b\u5bfc\u51fa XML \u6587\u4ef6\u7684\u4ee3\u7801\u662f\u5426\u6709\u610f\u4e49\u3002\u8fd9\u4e9b\u7c7b\u7684\u4e3b\u8981\u5de5\u4f5c\u662f\u5904\u7406\u5730\u7406\u6570\u636e\u3002\u5bfc\u51fa XML \u6587\u4ef6\u7684\u4ee3\u7801\u653e\u5728\u8fd9\u91cc\u5e76\u4e0d\u5408\u9002\u3002"}),"\n",(0,i.jsx)(s.p,{children:"\u8fd8\u6709\u53e6\u4e00\u4e2a\u539f\u56e0\uff0c\u90a3\u5c31\u662f\u5728\u6b64\u9879\u4efb\u52a1\u5b8c\u6210\u540e\uff0c\u8425\u9500\u90e8\u95e8\u5f88\u6709\u53ef\u80fd\u4f1a\u8981\u6c42\u7a0b\u5e8f\u63d0\u4f9b\u5bfc\u51fa\u5176\u4ed6\u7c7b\u578b\u6587\u4ef6\u7684\u529f\u80fd\uff0c\u6216\u8005\u63d0\u51fa\u5176\u4ed6\u5947\u602a\u7684\u8981\u6c42\u3002\u8fd9\u6837\u4f60\u5f88\u53ef\u80fd\u4f1a\u88ab\u8feb\u518d\u6b21\u4fee\u6539\u8fd9\u4e9b\u91cd\u8981\u4f46\u8106\u5f31\u7684\u7c7b\u3002"}),"\n",(0,i.jsx)(s.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:(0,i.jsx)(s.strong,{children:"\u89e3\u51b3\u65b9\u6848"})}),"\n",(0,i.jsxs)(s.p,{children:["\u8bbf\u95ee\u8005\u6a21\u5f0f\u5efa\u8bae\u5c06\u65b0\u884c\u4e3a\u653e\u5165\u4e00\u4e2a\u540d\u4e3a",(0,i.jsx)(s.em,{children:"\u8bbf\u95ee\u8005"}),"\u7684\u72ec\u7acb\u7c7b\u4e2d\uff0c\u800c\u4e0d\u662f\u8bd5\u56fe\u5c06\u5176\u6574\u5408\u5230\u5df2\u6709\u7c7b\u4e2d\u3002\u73b0\u5728\uff0c\u9700\u8981\u6267\u884c\u64cd\u4f5c\u7684\u539f\u59cb\u5bf9\u8c61\u5c06\u4f5c\u4e3a\u53c2\u6570\u88ab\u4f20\u9012\u7ed9\u8bbf\u95ee\u8005\u4e2d\u7684\u65b9\u6cd5\uff0c\u8ba9\u65b9\u6cd5\u80fd\u8bbf\u95ee\u5bf9\u8c61\u6240\u5305\u542b\u7684\u4e00\u5207\u5fc5\u8981\u6570\u636e\u3002"]}),"\n",(0,i.jsx)(s.p,{children:"\u5982\u679c\u73b0\u5728\u8be5\u64cd\u4f5c\u80fd\u5728\u4e0d\u540c\u7c7b\u7684\u5bf9\u8c61\u4e0a\u6267\u884c\u4f1a\u600e\u4e48\u6837\u5462\uff1f\u6bd4\u5982\u5728\u6211\u4eec\u7684\u793a\u4f8b\u4e2d\uff0c\u5404\u8282\u70b9\u7c7b\u5bfc\u51fa XML \u6587\u4ef6\u7684\u5b9e\u9645\u5b9e\u73b0\u5f88\u53ef\u80fd\u4f1a\u7a0d\u6709\u4e0d\u540c\u3002\u56e0\u6b64\uff0c\u8bbf\u95ee\u8005\u7c7b\u53ef\u4ee5\u5b9a\u4e49\u4e00\u7ec4 (\u800c\u4e0d\u662f\u4e00\u4e2a) \u65b9\u6cd5\uff0c\u4e14\u6bcf\u4e2a\u65b9\u6cd5\u53ef\u63a5\u6536\u4e0d\u540c\u7c7b\u578b\u7684\u53c2\u6570\uff0c\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-java",children:"class ExportVisitor implements Visitor is\n    method doForCity(City c) { \u2026\u2026 }\n    method doForIndustry(Industry f) { \u2026\u2026 }\n    method doForSightSeeing(SightSeeing ss) { \u2026\u2026 }\n    // \u2026\u2026\n"})}),"\n",(0,i.jsx)(s.p,{children:"\u4f46\u6211\u4eec\u7a76\u7adf\u5e94\u8be5\u5982\u4f55\u8c03\u7528\u8fd9\u4e9b\u65b9\u6cd5 (\u5c24\u5176\u662f\u5728\u5904\u7406\u6574\u4e2a\u56fe\u50cf\u65b9\u9762) \u5462\uff1f\u8fd9\u4e9b\u65b9\u6cd5\u7684\u7b7e\u540d\u5404\u4e0d\u76f8\u540c\uff0c\u56e0\u6b64\u6211\u4eec\u4e0d\u80fd\u4f7f\u7528\u591a\u6001\u673a\u5236\u3002\u4e3a\u4e86\u53ef\u4ee5\u6311\u9009\u51fa\u80fd\u591f\u5904\u7406\u7279\u5b9a\u5bf9\u8c61\u7684\u8bbf\u95ee\u8005\u65b9\u6cd5\uff0c\u6211\u4eec\u9700\u8981\u5bf9\u5b83\u7684\u7c7b\u8fdb\u884c\u68c0\u67e5\u3002\u8fd9\u662f\u4e0d\u662f\u542c\u4e0a\u53bb\u50cf\u4e2a\u5669\u68a6\u5462\uff1f"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-java",children:"foreach (Node node in graph)\n    if (node instanceof City)\n        exportVisitor.doForCity((City) node)\n    if (node instanceof Industry)\n        exportVisitor.doForIndustry((Industry) node)\n    // \u2026\u2026\n}\n"})}),"\n",(0,i.jsxs)(s.p,{children:["\u4f60\u53ef\u80fd\u4f1a\u95ee\uff0c\u6211\u4eec\u4e3a\u4ec0\u4e48\u4e0d\u4f7f\u7528\u65b9\u6cd5\u91cd\u8f7d\u5462\uff1f\u5c31\u662f\u4f7f\u7528\u76f8\u540c\u7684\u65b9\u6cd5\u540d\u79f0\uff0c\u4f46\u5b83\u4eec\u7684\u53c2\u6570\u4e0d\u540c\u3002\u4e0d\u5e78\u7684\u662f\uff0c\u5373\u4f7f\u6211\u4eec\u7684\u7f16\u7a0b\u8bed\u8a00 (\u4f8b\u5982 Java \u548c C#) \u652f\u6301\u91cd\u8f7d\u4e5f\u4e0d\u884c\u3002\u7531\u4e8e\u6211\u4eec\u65e0\u6cd5\u63d0\u524d\u77e5\u6653\u8282\u70b9\u5bf9\u8c61\u6240\u5c5e\u7684\u7c7b\uff0c\u6240\u4ee5\u91cd\u8f7d\u673a\u5236\u65e0\u6cd5\u6267\u884c\u6b63\u786e\u7684\u65b9\u6cd5\u3002\u65b9\u6cd5\u4f1a\u5c06 ",(0,i.jsx)(s.code,{children:"\u8282\u70b9"})," \u57fa\u7c7b\u4f5c\u4e3a\u8f93\u5165\u53c2\u6570\u7684\u9ed8\u8ba4\u7c7b\u578b\u3002"]}),"\n",(0,i.jsxs)(s.p,{children:["\u4f46\u662f\uff0c\u8bbf\u95ee\u8005\u6a21\u5f0f\u53ef\u4ee5\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002\u5b83\u4f7f\u7528\u4e86\u4e00\u79cd\u540d\u4e3a",(0,i.jsx)(s.a,{href:"https://www.szdev.com/docs/design-patterns/visitor-double-dispatch",children:(0,i.jsx)(s.strong,{children:"\u53cc\u5206\u6d3e"})}),"\u7684\u6280\u5de7\uff0c\u4e0d\u4f7f\u7528\u7d2f\u8d58\u7684\u6761\u4ef6\u8bed\u53e5\u4e5f\u53ef\u4e0b\u6267\u884c\u6b63\u786e\u7684\u65b9\u6cd5\u3002\u4e0e\u5176\u8ba9\u5ba2\u6237\u7aef\u6765\u9009\u62e9\u8c03\u7528\u6b63\u786e\u7248\u672c\u7684\u65b9\u6cd5\uff0c\u4e0d\u5982\u5c06\u9009\u62e9\u6743\u59d4\u6d3e\u7ed9\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u7ed9\u8bbf\u95ee\u8005\u7684\u5bf9\u8c61\u3002\u7531\u4e8e\u8be5\u5bf9\u8c61\u77e5\u6653\u5176\u81ea\u8eab\u7684\u7c7b\uff0c\u56e0\u6b64\u80fd\u66f4\u81ea\u7136\u5730\u5728\u8bbf\u95ee\u8005\u4e2d\u9009\u51fa\u6b63\u786e\u7684\u65b9\u6cd5\u3002\u5b83\u4eec\u4f1a \u201c\u63a5\u6536\u201d \u4e00\u4e2a\u8bbf\u95ee\u8005\u5e76\u544a\u8bc9\u5176\u5e94\u6267\u884c\u7684\u8bbf\u95ee\u8005\u65b9\u6cd5\u3002"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-java",children:"// \u5ba2\u6237\u7aef\u4ee3\u7801\nforeach (Node node in graph)\n    node.accept(exportVisitor)\n\n// \u57ce\u5e02\nclass City is\n    method accept(Visitor v) is\n        v.doForCity(this)\n    // \u2026\u2026\n\n// \u5de5\u4e1a\u533a\nclass Industry is\n    method accept(Visitor v) is\n        v.doForIndustry(this)\n    // \u2026\u2026\n"})}),"\n",(0,i.jsx)(s.p,{children:"\u6211\u627f\u8ba4\u6700\u7ec8\u8fd8\u662f\u4fee\u6539\u4e86\u8282\u70b9\u7c7b\uff0c\u4f46\u6bd5\u7adf\u6539\u52a8\u5f88\u5c0f\uff0c\u4e14\u4f7f\u5f97\u6211\u4eec\u80fd\u591f\u5728\u540e\u7eed\u8fdb\u4e00\u6b65\u6dfb\u52a0\u884c\u4e3a\u65f6\u65e0\u9700\u518d\u6b21\u4fee\u6539\u4ee3\u7801\u3002"}),"\n",(0,i.jsx)(s.p,{children:"\u73b0\u5728\uff0c\u5982\u679c\u6211\u4eec\u62bd\u53d6\u51fa\u6240\u6709\u8bbf\u95ee\u8005\u7684\u901a\u7528\u63a5\u53e3\uff0c\u6240\u6709\u5df2\u6709\u7684\u8282\u70b9\u90fd\u80fd\u4e0e\u6211\u4eec\u5728\u7a0b\u5e8f\u4e2d\u5f15\u5165\u7684\u4efb\u4f55\u8bbf\u95ee\u8005\u4ea4\u4e92\u3002\u5982\u679c\u9700\u8981\u5f15\u5165\u4e0e\u8282\u70b9\u76f8\u5173\u7684\u67d0\u4e2a\u884c\u4e3a\uff0c\u4f60\u53ea\u9700\u8981\u5b9e\u73b0\u4e00\u4e2a\u65b0\u7684\u8bbf\u95ee\u8005\u7c7b\u5373\u53ef\u3002"}),"\n",(0,i.jsx)(s.h2,{id:"\u771f\u5b9e\u4e16\u754c\u7c7b\u6bd4",children:(0,i.jsx)(s.strong,{children:"\u771f\u5b9e\u4e16\u754c\u7c7b\u6bd4"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://refactoringguru.cn/images/patterns/content/visitor/visitor-comic-1-2x.png",alt:""})}),"\n",(0,i.jsx)(s.p,{children:"\u4f18\u79c0\u7684\u4fdd\u9669\u4ee3\u7406\u4eba\u603b\u80fd\u4e3a\u4e0d\u540c\u7c7b\u578b\u7684\u56e2\u4f53\u63d0\u4f9b\u4e0d\u540c\u7684\u4fdd\u5355\u3002"}),"\n",(0,i.jsx)(s.p,{children:"\u5047\u5982\u6709\u8fd9\u6837\u4e00\u4f4d\u975e\u5e38\u5e0c\u671b\u8d62\u5f97\u65b0\u5ba2\u6237\u7684\u8d44\u6df1\u4fdd\u9669\u4ee3\u7406\u4eba\u3002\u4ed6\u53ef\u4ee5\u62dc\u8bbf\u8857\u533a\u4e2d\u7684\u6bcf\u680b\u697c\uff0c\u5c1d\u8bd5\u5411\u6bcf\u4e2a\u8def\u4eba\u63a8\u9500\u4fdd\u9669\u3002\u6240\u4ee5\uff0c\u6839\u636e\u5927\u697c\u5185\u7ec4\u7ec7\u7c7b\u578b\u7684\u4e0d\u540c\uff0c\u4ed6\u53ef\u4ee5\u63d0\u4f9b\u4e13\u95e8\u7684\u4fdd\u5355\uff1a"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"\u5982\u679c\u5efa\u7b51\u662f\u5c45\u6c11\u697c\uff0c\u4ed6\u4f1a\u63a8\u9500\u533b\u7597\u4fdd\u9669\u3002"}),"\n",(0,i.jsx)(s.li,{children:"\u5982\u679c\u5efa\u7b51\u662f\u94f6\u884c\uff0c\u4ed6\u4f1a\u63a8\u9500\u5931\u7a83\u4fdd\u9669\u3002"}),"\n",(0,i.jsx)(s.li,{children:"\u5982\u679c\u5efa\u7b51\u662f\u5496\u5561\u5385\uff0c\u4ed6\u4f1a\u63a8\u9500\u706b\u707e\u548c\u6d2a\u6c34\u4fdd\u9669\u3002"}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"\u8bbf\u95ee\u8005\u6a21\u5f0f\u7ed3\u6784",children:(0,i.jsx)(s.strong,{children:"\u8bbf\u95ee\u8005\u6a21\u5f0f\u7ed3\u6784"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://refactoringguru.cn/images/patterns/diagrams/visitor/structure-zh-2x.png",alt:""})}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"\u8bbf\u95ee\u8005"})," (Visitor) \u63a5\u53e3\u58f0\u660e\u4e86\u4e00\u7cfb\u5217\u4ee5\u5bf9\u8c61\u7ed3\u6784\u7684\u5177\u4f53\u5143\u7d20\u4e3a\u53c2\u6570\u7684\u8bbf\u95ee\u8005\u65b9\u6cd5\u3002\u5982\u679c\u7f16\u7a0b\u8bed\u8a00\u652f\u6301\u91cd\u8f7d\uff0c\u8fd9\u4e9b\u65b9\u6cd5\u7684\u540d\u79f0\u53ef\u4ee5\u662f\u76f8\u540c\u7684\uff0c\u4f46\u662f\u5176\u53c2\u6570\u4e00\u5b9a\u662f\u4e0d\u540c\u7684\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"\u5177\u4f53\u8bbf\u95ee\u8005"})," (Concrete Visitor) \u4f1a\u4e3a\u4e0d\u540c\u7684\u5177\u4f53\u5143\u7d20\u7c7b\u5b9e\u73b0\u76f8\u540c\u884c\u4e3a\u7684\u51e0\u4e2a\u4e0d\u540c\u7248\u672c\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"\u5143\u7d20"})," (Element) \u63a5\u53e3\u58f0\u660e\u4e86\u4e00\u4e2a\u65b9\u6cd5\u6765 \u201c\u63a5\u6536\u201d \u8bbf\u95ee\u8005\u3002\u8be5\u65b9\u6cd5\u5fc5\u987b\u6709\u4e00\u4e2a\u53c2\u6570\u88ab\u58f0\u660e\u4e3a\u8bbf\u95ee\u8005\u63a5\u53e3\u7c7b\u578b\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"\u5177\u4f53\u5143\u7d20"})," (Concrete Element) \u5fc5\u987b\u5b9e\u73b0\u63a5\u6536\u65b9\u6cd5\u3002\u8be5\u65b9\u6cd5\u7684\u76ee\u7684\u662f\u6839\u636e\u5f53\u524d\u5143\u7d20\u7c7b\u5c06\u5176\u8c03\u7528\u91cd\u5b9a\u5411\u5230\u76f8\u5e94\u8bbf\u95ee\u8005\u7684\u65b9\u6cd5\u3002\u8bf7\u6ce8\u610f\uff0c\u5373\u4f7f\u5143\u7d20\u57fa\u7c7b\u5b9e\u73b0\u4e86\u8be5\u65b9\u6cd5\uff0c\u6240\u6709\u5b50\u7c7b\u90fd\u5fc5\u987b\u5bf9\u5176\u8fdb\u884c\u91cd\u5199\u5e76\u8c03\u7528\u8bbf\u95ee\u8005\u5bf9\u8c61\u4e2d\u7684\u5408\u9002\u65b9\u6cd5\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"\u5ba2\u6237\u7aef"})," (Client) \u901a\u5e38\u4f1a\u4f5c\u4e3a\u96c6\u5408\u6216\u5176\u4ed6\u590d\u6742\u5bf9\u8c61 (\u4f8b\u5982\u4e00\u4e2a",(0,i.jsx)(s.a,{href:"https://www.szdev.com/docs/design-patterns/composite",children:(0,i.jsx)(s.strong,{children:"\u7ec4\u5408"})}),"\u6811) \u7684\u4ee3\u8868\u3002\u5ba2\u6237\u7aef\u901a\u5e38\u4e0d\u77e5\u6653\u6240\u6709\u7684\u5177\u4f53\u5143\u7d20\u7c7b\uff0c\u56e0\u4e3a\u5b83\u4eec\u4f1a\u901a\u8fc7\u62bd\u8c61\u63a5\u53e3\u4e0e\u96c6\u5408\u4e2d\u7684\u5bf9\u8c61\u8fdb\u884c\u4ea4\u4e92\u3002"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"\u4f2a\u4ee3\u7801",children:(0,i.jsx)(s.strong,{children:"\u4f2a\u4ee3\u7801"})}),"\n",(0,i.jsxs)(s.p,{children:["\u5728\u672c\u4f8b\u4e2d\uff0c",(0,i.jsx)(s.strong,{children:"\u8bbf\u95ee\u8005"}),"\u6a21\u5f0f\u4e3a\u51e0\u4f55\u56fe\u50cf\u5c42\u6b21\u7ed3\u6784\u6dfb\u52a0\u4e86\u5bf9\u4e8e XML \u6587\u4ef6\u5bfc\u51fa\u529f\u80fd\u7684\u652f\u6301\u3002"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://refactoringguru.cn/images/patterns/diagrams/visitor/example-2x.png",alt:""})}),"\n",(0,i.jsx)(s.p,{children:"\u901a\u8fc7\u8bbf\u95ee\u8005\u5bf9\u8c61\u5c06\u5404\u79cd\u7c7b\u578b\u7684\u5bf9\u8c61\u5bfc\u51fa\u4e3a XML \u683c\u5f0f\u6587\u4ef6\u3002"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-java",children:"// \u5143\u7d20\u63a5\u53e3\u58f0\u660e\u4e86\u4e00\u4e2a`accept\uff08\u63a5\u6536\uff09`\u65b9\u6cd5\uff0c\u5b83\u4f1a\u5c06\u8bbf\u95ee\u8005\u57fa\u7840\u63a5\u53e3\u4f5c\u4e3a\u4e00\u4e2a\u53c2\n// \u6570\u3002\ninterface Shape is\n    method move(x, y)\n    method draw()\n    method accept(v: Visitor)\n\n// \u6bcf\u4e2a\u5177\u4f53\u5143\u7d20\u7c7b\u90fd\u5fc5\u987b\u4ee5\u7279\u5b9a\u65b9\u5f0f\u5b9e\u73b0`accept`\u65b9\u6cd5\uff0c\u4f7f\u5176\u80fd\u8c03\u7528\u76f8\u5e94\u5143\u7d20\u7c7b\u7684\n// \u8bbf\u95ee\u8005\u65b9\u6cd5\u3002\nclass Dot implements Shape is\n    // \u2026\u2026\n\n    // \u6ce8\u610f\u6211\u4eec\u6b63\u5728\u8c03\u7528\u7684`visitDot\uff08\u8bbf\u95ee\u70b9\uff09`\u65b9\u6cd5\u4e0e\u5f53\u524d\u7c7b\u7684\u540d\u79f0\u76f8\u5339\u914d\u3002\n    // \u8fd9\u6837\u6211\u4eec\u80fd\u8ba9\u8bbf\u95ee\u8005\u77e5\u6653\u4e0e\u5176\u4ea4\u4e92\u7684\u5143\u7d20\u7c7b\u3002\n    method accept(v: Visitor) is\n        v.visitDot(this)\n\nclass Circle implements Shape is\n    // \u2026\u2026\n    method accept(v: Visitor) is\n        v.visitCircle(this)\n\nclass Rectangle implements Shape is\n    // \u2026\u2026\n    method accept(v: Visitor) is\n        v.visitRectangle(this)\n\nclass CompoundShape implements Shape is\n    // \u2026\u2026\n    method accept(v: Visitor) is\n        v.visitCompoundShape(this)\n\n\n// \u8bbf\u95ee\u8005\u63a5\u53e3\u58f0\u660e\u4e86\u4e00\u7ec4\u4e0e\u5143\u7d20\u7c7b\u5bf9\u5e94\u7684\u8bbf\u95ee\u65b9\u6cd5\u3002\u8bbf\u95ee\u65b9\u6cd5\u7684\u7b7e\u540d\u80fd\u8ba9\u8bbf\u95ee\u8005\u51c6\n// \u786e\u8fa8\u522b\u51fa\u4e0e\u5176\u4ea4\u4e92\u7684\u5143\u7d20\u6240\u5c5e\u7684\u7c7b\u3002\ninterface Visitor is\n    method visitDot(d: Dot)\n    method visitCircle(c: Circle)\n    method visitRectangle(r: Rectangle)\n    method visitCompoundShape(cs: CompoundShape)\n\n// \u5177\u4f53\u8bbf\u95ee\u8005\u5b9e\u73b0\u4e86\u540c\u4e00\u7b97\u6cd5\u7684\u591a\u4e2a\u7248\u672c\uff0c\u800c\u4e14\u8be5\u7b97\u6cd5\u80fd\u4e0e\u6240\u6709\u5177\u4f53\u7c7b\u8fdb\u884c\u4ea4\u4e92\u3002\n//\n// \u8bbf\u95ee\u8005\u6a21\u5f0f\u5728\u590d\u6742\u5bf9\u8c61\u7ed3\u6784\uff08\u4f8b\u5982\u7ec4\u5408\u6811\uff09\u4e0a\u4f7f\u7528\u65f6\u80fd\u53d1\u6325\u6700\u5927\u4f5c\u7528\u3002\u5728\u8fd9\u79cd\u60c5\n// \u51b5\u4e0b\uff0c\u5b83\u53ef\u4ee5\u5b58\u50a8\u7b97\u6cd5\u7684\u4e00\u4e9b\u4e2d\u95f4\u72b6\u6001\uff0c\u5e76\u540c\u65f6\u5728\u7ed3\u6784\u4e2d\u7684\u4e0d\u540c\u5bf9\u8c61\u4e0a\u6267\u884c\u8bbf\u95ee\n// \u8005\u65b9\u6cd5\u3002\u8fd9\u53ef\u80fd\u4f1a\u975e\u5e38\u6709\u5e2e\u52a9\u3002\nclass XMLExportVisitor implements Visitor is\n    method visitDot(d: Dot) is\n        // \u5bfc\u51fa\u70b9\uff08dot\uff09\u7684 ID \u548c\u4e2d\u5fc3\u5750\u6807\u3002\n\n    method visitCircle(c: Circle) is\n        // \u5bfc\u51fa\u5706\uff08circle\uff09\u7684 ID \u3001\u4e2d\u5fc3\u5750\u6807\u548c\u534a\u5f84\u3002\n\n    method visitRectangle(r: Rectangle) is\n        // \u5bfc\u51fa\u957f\u65b9\u5f62\uff08rectangle\uff09\u7684 ID \u3001\u5de6\u4e0a\u89d2\u5750\u6807\u3001\u5bbd\u548c\u957f\u3002\n\n    method visitCompoundShape(cs: CompoundShape) is\n        // \u5bfc\u51fa\u56fe\u5f62\uff08shape\uff09\u7684 ID \u548c\u5176\u5b50\u9879\u76ee\u7684 ID \u5217\u8868\u3002\n\n\n// \u5ba2\u6237\u7aef\u4ee3\u7801\u53ef\u5728\u4e0d\u77e5\u6653\u5177\u4f53\u7c7b\u7684\u60c5\u51b5\u4e0b\u5728\u4e00\u7ec4\u5143\u7d20\u4e0a\u8fd0\u884c\u8bbf\u95ee\u8005\u64cd\u4f5c\u3002\u201c\u63a5\u6536\u201d\u64cd\n// \u4f5c\u4f1a\u5c06\u8c03\u7528\u5b9a\u4f4d\u5230\u8bbf\u95ee\u8005\u5bf9\u8c61\u7684\u76f8\u5e94\u64cd\u4f5c\u4e0a\u3002\nclass Application is\n    field allShapes: array of Shapes\n\n    method export() is\n        exportVisitor = new XMLExportVisitor()\n\n        foreach (shape in allShapes) do\n            shape.accept(exportVisitor)\n"})}),"\n",(0,i.jsxs)(s.p,{children:["\u5982\u679c\u4f60\u5e76\u4e0d\u5341\u5206\u7406\u89e3\u4e3a\u4f55\u672c\u4f8b\u4e2d\u9700\u8981\u4f7f\u7528 ",(0,i.jsx)(s.code,{children:"accept"})," \u63a5\u6536\u65b9\u6cd5\uff0c\u6211\u7684\u4e00\u7bc7\u6587\u7ae0 ",(0,i.jsx)(s.a,{href:"https://www.szdev.com/docs/design-patterns/visitor-double-dispatch",children:(0,i.jsx)(s.strong,{children:"Visitor and Double Dispatch"})})," \u8be6\u7ec6\u89e3\u91ca\u4e86\u8fd9\u4e2a\u95ee\u9898\u3002"]}),"\n",(0,i.jsx)(s.h2,{id:"\u8bbf\u95ee\u8005\u6a21\u5f0f\u9002\u5408\u5e94\u7528\u573a\u666f",children:(0,i.jsx)(s.strong,{children:"\u8bbf\u95ee\u8005\u6a21\u5f0f\u9002\u5408\u5e94\u7528\u573a\u666f"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u5982\u679c\u4f60\u9700\u8981\u5bf9\u4e00\u4e2a\u590d\u6742\u5bf9\u8c61\u7ed3\u6784 (\u4f8b\u5982\u5bf9\u8c61\u6811) \u4e2d\u7684\u6240\u6709\u5143\u7d20\u6267\u884c\u67d0\u4e9b\u64cd\u4f5c\uff0c\u53ef\u4f7f\u7528\u8bbf\u95ee\u8005\u6a21\u5f0f\u3002"})}),"\n",(0,i.jsx)(s.p,{children:"\u8bbf\u95ee\u8005\u6a21\u5f0f\u901a\u8fc7\u5728\u8bbf\u95ee\u8005\u5bf9\u8c61\u4e2d\u4e3a\u591a\u4e2a\u76ee\u6807\u7c7b\u63d0\u4f9b\u76f8\u540c\u64cd\u4f5c\u7684\u53d8\u4f53\uff0c\u8ba9\u4f60\u80fd\u5728\u5c5e\u4e8e\u4e0d\u540c\u7c7b\u7684\u4e00\u7ec4\u5bf9\u8c61\u4e0a\u6267\u884c\u540c\u4e00\u64cd\u4f5c\u3002"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u53ef\u4f7f\u7528\u8bbf\u95ee\u8005\u6a21\u5f0f\u6765\u6e05\u7406\u8f85\u52a9\u884c\u4e3a\u7684\u4e1a\u52a1\u903b\u8f91\u3002"})}),"\n",(0,i.jsx)(s.p,{children:"\u8be5\u6a21\u5f0f\u4f1a\u5c06\u6240\u6709\u975e\u4e3b\u8981\u7684\u884c\u4e3a\u62bd\u53d6\u5230\u4e00\u7ec4\u8bbf\u95ee\u8005\u7c7b\u4e2d\uff0c\u4f7f\u5f97\u7a0b\u5e8f\u7684\u4e3b\u8981\u7c7b\u80fd\u66f4\u4e13\u6ce8\u4e8e\u4e3b\u8981\u7684\u5de5\u4f5c\u3002"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u5f53\u67d0\u4e2a\u884c\u4e3a\u4ec5\u5728\u7c7b\u5c42\u6b21\u7ed3\u6784\u4e2d\u7684\u4e00\u4e9b\u7c7b\u4e2d\u6709\u610f\u4e49\uff0c\u800c\u5728\u5176\u4ed6\u7c7b\u4e2d\u6ca1\u6709\u610f\u4e49\u65f6\uff0c\u53ef\u4f7f\u7528\u8be5\u6a21\u5f0f\u3002"})}),"\n",(0,i.jsx)(s.p,{children:"\u4f60\u53ef\u5c06\u8be5\u884c\u4e3a\u62bd\u53d6\u5230\u5355\u72ec\u7684\u8bbf\u95ee\u8005\u7c7b\u4e2d\uff0c\u53ea\u9700\u5b9e\u73b0\u63a5\u6536\u76f8\u5173\u7c7b\u7684\u5bf9\u8c61\u4f5c\u4e3a\u53c2\u6570\u7684\u8bbf\u95ee\u8005\u65b9\u6cd5\u5e76\u5c06\u5176\u4ed6\u65b9\u6cd5\u7559\u7a7a\u5373\u53ef\u3002"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u5b9e\u73b0\u65b9\u5f0f"})}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"\u5728\u8bbf\u95ee\u8005\u63a5\u53e3\u4e2d\u58f0\u660e\u4e00\u7ec4 \u201c\u8bbf\u95ee\u201d \u65b9\u6cd5\uff0c\u5206\u522b\u5bf9\u5e94\u7a0b\u5e8f\u4e2d\u7684\u6bcf\u4e2a\u5177\u4f53\u5143\u7d20\u7c7b\u3002"}),"\n",(0,i.jsx)(s.li,{children:"\u58f0\u660e\u5143\u7d20\u63a5\u53e3\u3002\u5982\u679c\u7a0b\u5e8f\u4e2d\u5df2\u6709\u5143\u7d20\u7c7b\u5c42\u6b21\u63a5\u53e3\uff0c\u53ef\u5728\u5c42\u6b21\u7ed3\u6784\u57fa\u7c7b\u4e2d\u6dfb\u52a0\u62bd\u8c61\u7684 \u201c\u63a5\u6536\u201d \u65b9\u6cd5\u3002\u8be5\u65b9\u6cd5\u5fc5\u987b\u63a5\u53d7\u8bbf\u95ee\u8005\u5bf9\u8c61\u4f5c\u4e3a\u53c2\u6570\u3002"}),"\n",(0,i.jsx)(s.li,{children:"\u5728\u6240\u6709\u5177\u4f53\u5143\u7d20\u7c7b\u4e2d\u5b9e\u73b0\u63a5\u6536\u65b9\u6cd5\u3002\u8fd9\u4e9b\u65b9\u6cd5\u5fc5\u987b\u5c06\u8c03\u7528\u91cd\u5b9a\u5411\u5230\u5f53\u524d\u5143\u7d20\u5bf9\u5e94\u7684\u8bbf\u95ee\u8005\u5bf9\u8c61\u4e2d\u7684\u8bbf\u95ee\u8005\u65b9\u6cd5\u4e0a\u3002"}),"\n",(0,i.jsx)(s.li,{children:"\u5143\u7d20\u7c7b\u53ea\u80fd\u901a\u8fc7\u8bbf\u95ee\u8005\u63a5\u53e3\u4e0e\u8bbf\u95ee\u8005\u8fdb\u884c\u4ea4\u4e92\u3002\u4e0d\u8fc7\u8bbf\u95ee\u8005\u5fc5\u987b\u77e5\u6653\u6240\u6709\u7684\u5177\u4f53\u5143\u7d20\u7c7b\uff0c\u56e0\u4e3a\u8fd9\u4e9b\u7c7b\u5728\u8bbf\u95ee\u8005\u65b9\u6cd5\u4e2d\u90fd\u88ab\u4f5c\u4e3a\u53c2\u6570\u7c7b\u578b\u5f15\u7528\u3002"}),"\n",(0,i.jsx)(s.li,{children:"\u4e3a\u6bcf\u4e2a\u65e0\u6cd5\u5728\u5143\u7d20\u5c42\u6b21\u7ed3\u6784\u4e2d\u5b9e\u73b0\u7684\u884c\u4e3a\u521b\u5efa\u4e00\u4e2a\u5177\u4f53\u8bbf\u95ee\u8005\u7c7b\u5e76\u5b9e\u73b0\u6240\u6709\u7684\u8bbf\u95ee\u8005\u65b9\u6cd5\u3002\n\u4f60\u53ef\u80fd\u4f1a\u9047\u5230\u8bbf\u95ee\u8005\u9700\u8981\u8bbf\u95ee\u5143\u7d20\u7c7b\u7684\u90e8\u5206\u79c1\u6709\u6210\u5458\u53d8\u91cf\u7684\u60c5\u51b5\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f60\u8981\u4e48\u5c06\u8fd9\u4e9b\u53d8\u91cf\u6216\u65b9\u6cd5\u8bbe\u4e3a\u516c\u6709\uff0c\u8fd9\u5c06\u7834\u574f\u5143\u7d20\u7684\u5c01\u88c5\uff1b\u8981\u4e48\u5c06\u8bbf\u95ee\u8005\u7c7b\u5d4c\u5165\u5230\u5143\u7d20\u7c7b\u4e2d\u3002\u540e\u4e00\u79cd\u65b9\u5f0f\u53ea\u6709\u5728\u652f\u6301\u5d4c\u5957\u7c7b\u7684\u7f16\u7a0b\u8bed\u8a00\u4e2d\u624d\u53ef\u80fd\u5b9e\u73b0\u3002"}),"\n",(0,i.jsx)(s.li,{children:"\u5ba2\u6237\u7aef\u5fc5\u987b\u521b\u5efa\u8bbf\u95ee\u8005\u5bf9\u8c61\u5e76\u901a\u8fc7 \u201c\u63a5\u6536\u201d \u65b9\u6cd5\u5c06\u5176\u4f20\u9012\u7ed9\u5143\u7d20\u3002"}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"\u8bbf\u95ee\u8005\u6a21\u5f0f\u4f18\u7f3a\u70b9",children:(0,i.jsx)(s.strong,{children:"\u8bbf\u95ee\u8005\u6a21\u5f0f\u4f18\u7f3a\u70b9"})}),"\n",(0,i.jsxs)(s.p,{children:["\u2714\ufe0f ",(0,i.jsx)(s.em,{children:"\u5f00\u95ed\u539f\u5219"}),"\u3002\u4f60\u53ef\u4ee5\u5f15\u5165\u5728\u4e0d\u540c\u7c7b\u5bf9\u8c61\u4e0a\u6267\u884c\u7684\u65b0\u884c\u4e3a\uff0c\u4e14\u65e0\u9700\u5bf9\u8fd9\u4e9b\u7c7b\u505a\u51fa\u4fee\u6539\u3002"]}),"\n",(0,i.jsxs)(s.p,{children:["\u2714\ufe0f ",(0,i.jsx)(s.em,{children:"\u5355\u4e00\u804c\u8d23\u539f\u5219"}),"\u3002\u53ef\u5c06\u540c\u4e00\u884c\u4e3a\u7684\u4e0d\u540c\u7248\u672c\u79fb\u5230\u540c\u4e00\u4e2a\u7c7b\u4e2d\u3002"]}),"\n",(0,i.jsx)(s.p,{children:"\u2714\ufe0f \u8bbf\u95ee\u8005\u5bf9\u8c61\u53ef\u4ee5\u5728\u4e0e\u5404\u79cd\u5bf9\u8c61\u4ea4\u4e92\u65f6\u6536\u96c6\u4e00\u4e9b\u6709\u7528\u7684\u4fe1\u606f\u3002\u5f53\u4f60\u60f3\u8981\u904d\u5386\u4e00\u4e9b\u590d\u6742\u7684\u5bf9\u8c61\u7ed3\u6784 (\u4f8b\u5982\u5bf9\u8c61\u6811)\uff0c\u5e76\u5728\u7ed3\u6784\u4e2d\u7684\u6bcf\u4e2a\u5bf9\u8c61\u4e0a\u5e94\u7528\u8bbf\u95ee\u8005\u65f6\uff0c\u8fd9\u4e9b\u4fe1\u606f\u53ef\u80fd\u4f1a\u6709\u6240\u5e2e\u52a9\u3002"}),"\n",(0,i.jsx)(s.p,{children:"\u274c \u6bcf\u6b21\u5728\u5143\u7d20\u5c42\u6b21\u7ed3\u6784\u4e2d\u6dfb\u52a0\u6216\u79fb\u9664\u4e00\u4e2a\u7c7b\u65f6\uff0c\u4f60\u90fd\u8981\u66f4\u65b0\u6240\u6709\u7684\u8bbf\u95ee\u8005\u3002"}),"\n",(0,i.jsx)(s.p,{children:"\u274c \u5728\u8bbf\u95ee\u8005\u540c\u67d0\u4e2a\u5143\u7d20\u8fdb\u884c\u4ea4\u4e92\u65f6\uff0c\u5b83\u4eec\u53ef\u80fd\u6ca1\u6709\u8bbf\u95ee\u5143\u7d20\u79c1\u6709\u6210\u5458\u53d8\u91cf\u548c\u65b9\u6cd5\u7684\u5fc5\u8981\u6743\u9650\u3002"}),"\n",(0,i.jsx)(s.h2,{id:"\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb",children:(0,i.jsx)(s.strong,{children:"\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\u4f60\u53ef\u4ee5\u5c06",(0,i.jsx)(s.a,{href:"https://www.szdev.com/docs/design-patterns/visitor",children:(0,i.jsx)(s.strong,{children:"\u8bbf\u95ee\u8005\u6a21\u5f0f"})}),"\u89c6\u4e3a",(0,i.jsx)(s.a,{href:"https://www.szdev.com/docs/design-patterns/command",children:(0,i.jsx)(s.strong,{children:"\u547d\u4ee4\u6a21\u5f0f"})}),"\u7684\u52a0\u5f3a\u7248\u672c\uff0c\u5176\u5bf9\u8c61\u53ef\u5bf9\u4e0d\u540c\u7c7b\u7684\u591a\u79cd\u5bf9\u8c61\u6267\u884c\u64cd\u4f5c\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,i.jsx)(s.a,{href:"https://www.szdev.com/docs/design-patterns/visitor",children:(0,i.jsx)(s.strong,{children:"\u8bbf\u95ee\u8005"})}),"\u5bf9\u6574\u4e2a",(0,i.jsx)(s.a,{href:"https://www.szdev.com/docs/design-patterns/composite",children:(0,i.jsx)(s.strong,{children:"\u7ec4\u5408\u6a21\u5f0f"})}),"\u6811\u6267\u884c\u64cd\u4f5c\u3002"]}),"\n",(0,i.jsxs)(s.li,{children:["\u53ef\u4ee5\u540c\u65f6\u4f7f\u7528",(0,i.jsx)(s.a,{href:"https://www.szdev.com/docs/design-patterns/visitor",children:(0,i.jsx)(s.strong,{children:"\u8bbf\u95ee\u8005"})}),"\u548c",(0,i.jsx)(s.a,{href:"https://www.szdev.com/docs/design-patterns/iterator",children:(0,i.jsx)(s.strong,{children:"\u8fed\u4ee3\u5668\u6a21\u5f0f"})}),"\u6765\u904d\u5386\u590d\u6742\u6570\u636e\u7ed3\u6784\uff0c\u5e76\u5bf9\u5176\u4e2d\u7684\u5143\u7d20\u6267\u884c\u6240\u9700\u64cd\u4f5c\uff0c\u5373\u4f7f\u8fd9\u4e9b\u5143\u7d20\u6240\u5c5e\u7684\u7c7b\u5b8c\u5168\u4e0d\u540c\u3002"]}),"\n"]})]})}function a(n={}){const{wrapper:s}={...(0,r.R)(),...n.components};return s?(0,i.jsx)(s,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},28453:(n,s,e)=>{e.d(s,{R:()=>c,x:()=>o});var i=e(96540);const r={},t=i.createContext(r);function c(n){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function o(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),i.createElement(t.Provider,{value:s},n.children)}}}]);