"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3838],{28750:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=s(74848),t=s(28453);const i={description:"\u80fd\u4e3a\u7a0b\u5e8f\u5e93\u3001 \u6846\u67b6\u6216\u5176\u4ed6\u590d\u6742\u7c7b\u63d0\u4f9b\u4e00\u4e2a\u7b80\u5355\u7684\u63a5\u53e3\u3002",slug:"/design-patterns/facade"},d="\u5916\u89c2\u6a21\u5f0f",c={id:"design-patterns/structural-patterns/facade",title:"\u5916\u89c2\u6a21\u5f0f",description:"\u80fd\u4e3a\u7a0b\u5e8f\u5e93\u3001 \u6846\u67b6\u6216\u5176\u4ed6\u590d\u6742\u7c7b\u63d0\u4f9b\u4e00\u4e2a\u7b80\u5355\u7684\u63a5\u53e3\u3002",source:"@site/docs/design-patterns/02-structural-patterns/05-facade.mdx",sourceDirName:"design-patterns/02-structural-patterns",slug:"/design-patterns/facade",permalink:"/docs/design-patterns/facade",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"\u80fd\u4e3a\u7a0b\u5e8f\u5e93\u3001 \u6846\u67b6\u6216\u5176\u4ed6\u590d\u6742\u7c7b\u63d0\u4f9b\u4e00\u4e2a\u7b80\u5355\u7684\u63a5\u53e3\u3002",slug:"/design-patterns/facade"},sidebar:"designpatternsSidebar",previous:{title:"\u88c5\u9970\u6a21\u5f0f",permalink:"/docs/design-patterns/decorator"},next:{title:"\u4eab\u5143\u6a21\u5f0f",permalink:"/docs/design-patterns/flyweight"}},l={},o=[{value:"<strong>\u610f\u56fe</strong>",id:"\u610f\u56fe",level:2},{value:"<strong>\u95ee\u9898</strong>",id:"\u95ee\u9898",level:2},{value:"<strong>\u89e3\u51b3\u65b9\u6848</strong>",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"<strong>\u771f\u5b9e\u4e16\u754c\u7c7b\u6bd4</strong>",id:"\u771f\u5b9e\u4e16\u754c\u7c7b\u6bd4",level:2},{value:"<strong>\u5916\u89c2\u6a21\u5f0f\u7ed3\u6784</strong>",id:"\u5916\u89c2\u6a21\u5f0f\u7ed3\u6784",level:2},{value:"<strong>\u4f2a\u4ee3\u7801</strong>",id:"\u4f2a\u4ee3\u7801",level:2},{value:"<strong>\u5916\u89c2\u6a21\u5f0f\u9002\u5408\u5e94\u7528\u573a\u666f</strong>",id:"\u5916\u89c2\u6a21\u5f0f\u9002\u5408\u5e94\u7528\u573a\u666f",level:2},{value:"<strong>\u5916\u89c2\u6a21\u5f0f\u4f18\u7f3a\u70b9</strong>",id:"\u5916\u89c2\u6a21\u5f0f\u4f18\u7f3a\u70b9",level:2},{value:"<strong>\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb</strong>",id:"\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb",level:2}];function a(n){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"\u5916\u89c2\u6a21\u5f0f",children:"\u5916\u89c2\u6a21\u5f0f"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u4ea6\u79f0\uff1a\xa0Facade"})}),"\n",(0,r.jsx)(e.h2,{id:"\u610f\u56fe",children:(0,r.jsx)(e.strong,{children:"\u610f\u56fe"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u5916\u89c2\u6a21\u5f0f"}),"\u662f\u4e00\u79cd\u7ed3\u6784\u578b\u8bbe\u8ba1\u6a21\u5f0f\uff0c\xa0\u80fd\u4e3a\u7a0b\u5e8f\u5e93\u3001\xa0\u6846\u67b6\u6216\u5176\u4ed6\u590d\u6742\u7c7b\u63d0\u4f9b\u4e00\u4e2a\u7b80\u5355\u7684\u63a5\u53e3\u3002"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://refactoringguru.cn/images/patterns/content/facade/facade-2x.png",alt:""})}),"\n",(0,r.jsx)(e.h2,{id:"\u95ee\u9898",children:(0,r.jsx)(e.strong,{children:"\u95ee\u9898"})}),"\n",(0,r.jsx)(e.p,{children:"\u5047\u8bbe\u4f60\u5fc5\u987b\u5728\u4ee3\u7801\u4e2d\u4f7f\u7528\u67d0\u4e2a\u590d\u6742\u7684\u5e93\u6216\u6846\u67b6\u4e2d\u7684\u4f17\u591a\u5bf9\u8c61\u3002\xa0\u6b63\u5e38\u60c5\u51b5\u4e0b\uff0c\xa0\u4f60\u9700\u8981\u8d1f\u8d23\u6240\u6709\u5bf9\u8c61\u7684\u521d\u59cb\u5316\u5de5\u4f5c\u3001\xa0\u7ba1\u7406\u5176\u4f9d\u8d56\u5173\u7cfb\u5e76\u6309\u6b63\u786e\u7684\u987a\u5e8f\u6267\u884c\u65b9\u6cd5\u7b49\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u6700\u7ec8\uff0c\xa0\u7a0b\u5e8f\u4e2d\u7c7b\u7684\u4e1a\u52a1\u903b\u8f91\u5c06\u4e0e\u7b2c\u4e09\u65b9\u7c7b\u7684\u5b9e\u73b0\u7ec6\u8282\u7d27\u5bc6\u8026\u5408\uff0c\xa0\u4f7f\u5f97\u7406\u89e3\u548c\u7ef4\u62a4\u4ee3\u7801\u7684\u5de5\u4f5c\u5f88\u96be\u8fdb\u884c\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:(0,r.jsx)(e.strong,{children:"\u89e3\u51b3\u65b9\u6848"})}),"\n",(0,r.jsx)(e.p,{children:"\u5916\u89c2\u7c7b\u4e3a\u5305\u542b\u8bb8\u591a\u6d3b\u52a8\u90e8\u4ef6\u7684\u590d\u6742\u5b50\u7cfb\u7edf\u63d0\u4f9b\u4e00\u4e2a\u7b80\u5355\u7684\u63a5\u53e3\u3002\xa0\u4e0e\u76f4\u63a5\u8c03\u7528\u5b50\u7cfb\u7edf\u76f8\u6bd4\uff0c\xa0\u5916\u89c2\u63d0\u4f9b\u7684\u529f\u80fd\u53ef\u80fd\u6bd4\u8f83\u6709\u9650\uff0c\xa0\u4f46\u5b83\u5374\u5305\u542b\u4e86\u5ba2\u6237\u7aef\u771f\u6b63\u5173\u5fc3\u7684\u529f\u80fd\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u5982\u679c\u4f60\u7684\u7a0b\u5e8f\u9700\u8981\u4e0e\u5305\u542b\u51e0\u5341\u79cd\u529f\u80fd\u7684\u590d\u6742\u5e93\u6574\u5408\uff0c\xa0\u4f46\u53ea\u9700\u4f7f\u7528\u5176\u4e2d\u975e\u5e38\u5c11\u7684\u529f\u80fd\uff0c\xa0\u90a3\u4e48\u4f7f\u7528\u5916\u89c2\u6a21\u5f0f\u4f1a\u975e\u5e38\u65b9\u4fbf\uff0c"}),"\n",(0,r.jsxs)(e.p,{children:["\u4f8b\u5982\uff0c\xa0\u4e0a\u4f20\u732b\u54aa\u641e\u7b11\u77ed\u89c6\u9891\u5230\u793e\u4ea4\u5a92\u4f53\u7f51\u7ad9\u7684\u5e94\u7528\u53ef\u80fd\u4f1a\u7528\u5230\u4e13\u4e1a\u7684\u89c6\u9891\u8f6c\u6362\u5e93\uff0c\xa0\u4f46\u5b83\u53ea\u9700\u4f7f\u7528\u4e00\u4e2a\u5305\u542b\xa0",(0,r.jsx)(e.code,{children:"encode\xad(filename, format)"}),"\u65b9\u6cd5\xa0\uff08\u4ee5\u6587\u4ef6\u540d\u4e0e\u6587\u4ef6\u683c\u5f0f\u4e3a\u53c2\u6570\u8fdb\u884c\u7f16\u7801\u7684\u65b9\u6cd5\uff09\xa0\u7684\u7c7b\u5373\u53ef\u3002\xa0\u5728\u521b\u5efa\u8fd9\u4e2a\u7c7b\u5e76\u5c06\u5176\u8fde\u63a5\u5230\u89c6\u9891\u8f6c\u6362\u5e93\u540e\uff0c\xa0\u4f60\u5c31\u62e5\u6709\u4e86\u81ea\u5df1\u7684\u7b2c\u4e00\u4e2a\u5916\u89c2\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u771f\u5b9e\u4e16\u754c\u7c7b\u6bd4",children:(0,r.jsx)(e.strong,{children:"\u771f\u5b9e\u4e16\u754c\u7c7b\u6bd4"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://refactoringguru.cn/images/patterns/diagrams/facade/live-example-zh-2x.png",alt:""})}),"\n",(0,r.jsx)(e.p,{children:"\u7535\u8bdd\u8d2d\u7269\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u5f53\u4f60\u901a\u8fc7\u7535\u8bdd\u7ed9\u5546\u5e97\u4e0b\u8fbe\u8ba2\u5355\u65f6\uff0c\xa0\u63a5\u7ebf\u5458\u5c31\u662f\u8be5\u5546\u5e97\u7684\u6240\u6709\u670d\u52a1\u548c\u90e8\u95e8\u7684\u5916\u89c2\u3002\xa0\u63a5\u7ebf\u5458\u4e3a\u4f60\u63d0\u4f9b\u4e86\u4e00\u4e2a\u540c\u8d2d\u7269\u7cfb\u7edf\u3001\xa0\u652f\u4ed8\u7f51\u5173\u548c\u5404\u79cd\u9001\u8d27\u670d\u52a1\u8fdb\u884c\u4e92\u52a8\u7684\u7b80\u5355\u8bed\u97f3\u63a5\u53e3\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u5916\u89c2\u6a21\u5f0f\u7ed3\u6784",children:(0,r.jsx)(e.strong,{children:"\u5916\u89c2\u6a21\u5f0f\u7ed3\u6784"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://refactoringguru.cn/images/patterns/diagrams/facade/structure-2x.png",alt:""})}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u5916\u89c2"}),"\xa0\uff08Facade\uff09\xa0\u63d0\u4f9b\u4e86\u4e00\u79cd\u8bbf\u95ee\u7279\u5b9a\u5b50\u7cfb\u7edf\u529f\u80fd\u7684\u4fbf\u6377\u65b9\u5f0f\uff0c\xa0\u5176\u4e86\u89e3\u5982\u4f55\u91cd\u5b9a\u5411\u5ba2\u6237\u7aef\u8bf7\u6c42\uff0c\xa0\u77e5\u6653\u5982\u4f55\u64cd\u4f5c\u4e00\u5207\u6d3b\u52a8\u90e8\u4ef6\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u521b\u5efa",(0,r.jsx)(e.strong,{children:"\u9644\u52a0\u5916\u89c2"}),"\xa0\uff08Additional Facade\uff09\xa0\u7c7b\u53ef\u4ee5\u907f\u514d\u591a\u79cd\u4e0d\u76f8\u5173\u7684\u529f\u80fd\u6c61\u67d3\u5355\u4e00\u5916\u89c2\uff0c\xa0\u4f7f\u5176\u53d8\u6210\u53c8\u4e00\u4e2a\u590d\u6742\u7ed3\u6784\u3002\xa0\u5ba2\u6237\u7aef\u548c\u5176\u4ed6\u5916\u89c2\u90fd\u53ef\u4f7f\u7528\u9644\u52a0\u5916\u89c2\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u590d\u6742\u5b50\u7cfb\u7edf"}),"\xa0\uff08Complex Subsystem\uff09\xa0\u7531\u6570\u5341\u4e2a\u4e0d\u540c\u5bf9\u8c61\u6784\u6210\u3002\xa0\u5982\u679c\u8981\u7528\u8fd9\u4e9b\u5bf9\u8c61\u5b8c\u6210\u6709\u610f\u4e49\u7684\u5de5\u4f5c\uff0c\xa0\u4f60\u5fc5\u987b\u6df1\u5165\u4e86\u89e3\u5b50\u7cfb\u7edf\u7684\u5b9e\u73b0\u7ec6\u8282\uff0c\xa0\u6bd4\u5982\u6309\u7167\u6b63\u786e\u987a\u5e8f\u521d\u59cb\u5316\u5bf9\u8c61\u548c\u4e3a\u5176\u63d0\u4f9b\u6b63\u786e\u683c\u5f0f\u7684\u6570\u636e\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u5b50\u7cfb\u7edf\u7c7b\u4e0d\u4f1a\u610f\u8bc6\u5230\u5916\u89c2\u7684\u5b58\u5728\uff0c\xa0\u5b83\u4eec\u5728\u7cfb\u7edf\u5185\u8fd0\u4f5c\u5e76\u4e14\u76f8\u4e92\u4e4b\u95f4\u53ef\u76f4\u63a5\u8fdb\u884c\u4ea4\u4e92\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u5ba2\u6237\u7aef"}),"\xa0\uff08Client\uff09\xa0\u4f7f\u7528\u5916\u89c2\u4ee3\u66ff\u5bf9\u5b50\u7cfb\u7edf\u5bf9\u8c61\u7684\u76f4\u63a5\u8c03\u7528\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u4f2a\u4ee3\u7801",children:(0,r.jsx)(e.strong,{children:"\u4f2a\u4ee3\u7801"})}),"\n",(0,r.jsxs)(e.p,{children:["\u5728\u672c\u4f8b\u4e2d\uff0c\xa0",(0,r.jsx)(e.strong,{children:"\u5916\u89c2"}),"\u6a21\u5f0f\u7b80\u5316\u4e86\u5ba2\u6237\u7aef\u4e0e\u590d\u6742\u89c6\u9891\u8f6c\u6362\u6846\u67b6\u4e4b\u95f4\u7684\u4ea4\u4e92\u3002"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://refactoringguru.cn/images/patterns/diagrams/facade/example-2x.png",alt:""})}),"\n",(0,r.jsx)(e.p,{children:"\u4f7f\u7528\u5355\u4e2a\u5916\u89c2\u7c7b\u9694\u79bb\u591a\u91cd\u4f9d\u8d56\u7684\u793a\u4f8b"}),"\n",(0,r.jsx)(e.p,{children:"\u4f60\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u5c01\u88c5\u6240\u9700\u529f\u80fd\u5e76\u9690\u85cf\u5176\u4ed6\u4ee3\u7801\u7684\u5916\u89c2\u7c7b\uff0c\xa0\u4ece\u800c\u65e0\u9700\u4f7f\u5168\u90e8\u4ee3\u7801\u76f4\u63a5\u4e0e\u6570\u5341\u4e2a\u6846\u67b6\u7c7b\u8fdb\u884c\u4ea4\u4e92\u3002\xa0\u8be5\u7ed3\u6784\u8fd8\u80fd\u5c06\u672a\u6765\u6846\u67b6\u5347\u7ea7\u6216\u66f4\u6362\u6240\u9020\u6210\u7684\u5f71\u54cd\u6700\u5c0f\u5316\uff0c\xa0\u56e0\u4e3a\u4f60\u53ea\u9700\u4fee\u6539\u7a0b\u5e8f\u4e2d\u5916\u89c2\u65b9\u6cd5\u7684\u5b9e\u73b0\u5373\u53ef\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:'// \u8fd9\u91cc\u6709\u590d\u6742\u7b2c\u4e09\u65b9\u89c6\u9891\u8f6c\u6362\u6846\u67b6\u4e2d\u7684\u4e00\u4e9b\u7c7b\u3002\u6211\u4eec\u4e0d\u77e5\u6653\u5176\u4e2d\u7684\u4ee3\u7801\uff0c\u56e0\u6b64\u65e0\u6cd5\n// \u5bf9\u5176\u8fdb\u884c\u7b80\u5316\u3002\n\nclass VideoFile\n// \u2026\u2026\n\nclass OggCompressionCodec\n// \u2026\u2026\n\nclass MPEG4CompressionCodec\n// \u2026\u2026\n\nclass CodecFactory\n// \u2026\u2026\n\nclass BitrateReader\n// \u2026\u2026\n\nclass AudioMixer\n// \u2026\u2026\n\n\n// \u4e3a\u4e86\u5c06\u6846\u67b6\u7684\u590d\u6742\u6027\u9690\u85cf\u5728\u4e00\u4e2a\u7b80\u5355\u63a5\u53e3\u80cc\u540e\uff0c\u6211\u4eec\u521b\u5efa\u4e86\u4e00\u4e2a\u5916\u89c2\u7c7b\u3002\u5b83\u662f\u5728\n// \u529f\u80fd\u6027\u548c\u7b80\u6d01\u6027\u4e4b\u95f4\u505a\u51fa\u7684\u6743\u8861\u3002\nclass VideoConverter is\n    method convert(filename, format):File is\n        file = new VideoFile(filename)\n        sourceCodec = (new CodecFactory).extract(file)\n        if (format == "mp4")\n            destinationCodec = new MPEG4CompressionCodec()\n        else\n            destinationCodec = new OggCompressionCodec()\n        buffer = BitrateReader.read(filename, sourceCodec)\n        result = BitrateReader.convert(buffer, destinationCodec)\n        result = (new AudioMixer()).fix(result)\n        return new File(result)\n\n// \u5e94\u7528\u7a0b\u5e8f\u7684\u7c7b\u5e76\u4e0d\u4f9d\u8d56\u4e8e\u590d\u6742\u6846\u67b6\u4e2d\u6210\u5343\u4e0a\u4e07\u7684\u7c7b\u3002\u540c\u6837\uff0c\u5982\u679c\u4f60\u51b3\u5b9a\u66f4\u6362\u6846\u67b6\uff0c\n// \u90a3\u53ea\u9700\u91cd\u5199\u5916\u89c2\u7c7b\u5373\u53ef\u3002\nclass Application is\n    method main() is\n        convertor = new VideoConverter()\n        mp4 = convertor.convert("funny-cats-video.ogg", "mp4")\n        mp4.save()\n'})}),"\n",(0,r.jsx)(e.h2,{id:"\u5916\u89c2\u6a21\u5f0f\u9002\u5408\u5e94\u7528\u573a\u666f",children:(0,r.jsx)(e.strong,{children:"\u5916\u89c2\u6a21\u5f0f\u9002\u5408\u5e94\u7528\u573a\u666f"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u5982\u679c\u4f60\u9700\u8981\u4e00\u4e2a\u6307\u5411\u590d\u6742\u5b50\u7cfb\u7edf\u7684\u76f4\u63a5\u63a5\u53e3\uff0c\xa0\u4e14\u8be5\u63a5\u53e3\u7684\u529f\u80fd\u6709\u9650\uff0c\xa0\u5219\u53ef\u4ee5\u4f7f\u7528\u5916\u89c2\u6a21\u5f0f\u3002"})}),"\n",(0,r.jsx)(e.p,{children:"\u5b50\u7cfb\u7edf\u901a\u5e38\u4f1a\u968f\u7740\u65f6\u95f4\u7684\u63a8\u8fdb\u53d8\u5f97\u8d8a\u6765\u8d8a\u590d\u6742\u3002\xa0\u5373\u4fbf\u662f\u5e94\u7528\u4e86\u8bbe\u8ba1\u6a21\u5f0f\uff0c\xa0\u901a\u5e38\u4f60\u4e5f\u4f1a\u521b\u5efa\u66f4\u591a\u7684\u7c7b\u3002\xa0\u5c3d\u7ba1\u5728\u591a\u79cd\u60c5\u5f62\u4e2d\u5b50\u7cfb\u7edf\u53ef\u80fd\u662f\u66f4\u7075\u6d3b\u6216\u6613\u4e8e\u590d\u7528\u7684\uff0c\xa0\u4f46\u5176\u6240\u9700\u7684\u914d\u7f6e\u548c\u6837\u677f\u4ee3\u7801\u6570\u91cf\u5c06\u4f1a\u589e\u957f\u5f97\u66f4\u5feb\u3002\xa0\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\xa0\u5916\u89c2\u5c06\u4f1a\u63d0\u4f9b\u6307\u5411\u5b50\u7cfb\u7edf\u4e2d\u6700\u5e38\u7528\u529f\u80fd\u7684\u5feb\u6377\u65b9\u5f0f\uff0c\xa0\u80fd\u591f\u6ee1\u8db3\u5ba2\u6237\u7aef\u7684\u5927\u90e8\u5206\u9700\u6c42\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u5982\u679c\u9700\u8981\u5c06\u5b50\u7cfb\u7edf\u7ec4\u7ec7\u4e3a\u591a\u5c42\u7ed3\u6784\uff0c\xa0\u53ef\u4ee5\u4f7f\u7528\u5916\u89c2\u3002"})}),"\n",(0,r.jsx)(e.p,{children:"\u521b\u5efa\u5916\u89c2\u6765\u5b9a\u4e49\u5b50\u7cfb\u7edf\u4e2d\u5404\u5c42\u6b21\u7684\u5165\u53e3\u3002\xa0\u4f60\u53ef\u4ee5\u8981\u6c42\u5b50\u7cfb\u7edf\u4ec5\u4f7f\u7528\u5916\u89c2\u6765\u8fdb\u884c\u4ea4\u4e92\uff0c\xa0\u4ee5\u51cf\u5c11\u5b50\u7cfb\u7edf\u4e4b\u95f4\u7684\u8026\u5408\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["\u8ba9\u6211\u4eec\u56de\u5230\u89c6\u9891\u8f6c\u6362\u6846\u67b6\u7684\u4f8b\u5b50\u3002\xa0\u8be5\u6846\u67b6\u53ef\u4ee5\u62c6\u5206\u4e3a\u4e24\u4e2a\u5c42\u6b21\uff1a\xa0\u97f3\u9891\u76f8\u5173\u548c\u89c6\u9891\u76f8\u5173\u3002\xa0\u4f60\u53ef\u4ee5\u4e3a\u6bcf\u4e2a\u5c42\u6b21\u521b\u5efa\u4e00\u4e2a\u5916\u89c2\uff0c\xa0\u7136\u540e\u8981\u6c42\u5404\u5c42\u7684\u7c7b\u5fc5\u987b\u901a\u8fc7\u8fd9\u4e9b\u5916\u89c2\u8fdb\u884c\u4ea4\u4e92\u3002\xa0\u8fd9\u79cd\u65b9\u5f0f\u770b\u4e0a\u53bb\u4e0e",(0,r.jsx)(e.a,{href:"https://www.szdev.com/docs/design-patterns/mediator",children:(0,r.jsx)(e.strong,{children:"\u4e2d\u4ecb\u8005"})}),"\u6a21\u5f0f\u975e\u5e38\u76f8\u4f3c\u3002"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u5b9e\u73b0\u65b9\u5f0f"})}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u8003\u8651\u80fd\u5426\u5728\u73b0\u6709\u5b50\u7cfb\u7edf\u7684\u57fa\u7840\u4e0a\u63d0\u4f9b\u4e00\u4e2a\u66f4\u7b80\u5355\u7684\u63a5\u53e3\u3002\xa0\u5982\u679c\u8be5\u63a5\u53e3\u80fd\u8ba9\u5ba2\u6237\u7aef\u4ee3\u7801\u72ec\u7acb\u4e8e\u4f17\u591a\u5b50\u7cfb\u7edf\u7c7b\uff0c\xa0\u90a3\u4e48\u4f60\u7684\u65b9\u5411\u5c31\u662f\u6b63\u786e\u7684\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u5728\u4e00\u4e2a\u65b0\u7684\u5916\u89c2\u7c7b\u4e2d\u58f0\u660e\u5e76\u5b9e\u73b0\u8be5\u63a5\u53e3\u3002\xa0\u5916\u89c2\u5e94\u5c06\u5ba2\u6237\u7aef\u4ee3\u7801\u7684\u8c03\u7528\u91cd\u5b9a\u5411\u5230\u5b50\u7cfb\u7edf\u4e2d\u7684\u76f8\u5e94\u5bf9\u8c61\u5904\u3002\xa0\u5982\u679c\u5ba2\u6237\u7aef\u4ee3\u7801\u6ca1\u6709\u5bf9\u5b50\u7cfb\u7edf\u8fdb\u884c\u521d\u59cb\u5316\uff0c\xa0\u4e5f\u6ca1\u6709\u5bf9\u5176\u540e\u7eed\u751f\u547d\u5468\u671f\u8fdb\u884c\u7ba1\u7406\uff0c\xa0\u90a3\u4e48\u5916\u89c2\u5fc5\u987b\u5b8c\u6210\u6b64\u7c7b\u5de5\u4f5c\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u5982\u679c\u8981\u5145\u5206\u53d1\u6325\u8fd9\u4e00\u6a21\u5f0f\u7684\u4f18\u52bf\uff0c\xa0\u4f60\u5fc5\u987b\u786e\u4fdd\u6240\u6709\u5ba2\u6237\u7aef\u4ee3\u7801\u4ec5\u901a\u8fc7\u5916\u89c2\u6765\u4e0e\u5b50\u7cfb\u7edf\u8fdb\u884c\u4ea4\u4e92\u3002\xa0\u6b64\u540e\u5ba2\u6237\u7aef\u4ee3\u7801\u5c06\u4e0d\u4f1a\u53d7\u5230\u4efb\u4f55\u7531\u5b50\u7cfb\u7edf\u4ee3\u7801\u4fee\u6539\u800c\u9020\u6210\u7684\u5f71\u54cd\uff0c\xa0\u6bd4\u5982\u5b50\u7cfb\u7edf\u5347\u7ea7\u540e\uff0c\xa0\u4f60\u53ea\u9700\u4fee\u6539\u5916\u89c2\u4e2d\u7684\u4ee3\u7801\u5373\u53ef\u3002"}),"\n",(0,r.jsxs)(e.li,{children:["\u5982\u679c\u5916\u89c2\u53d8\u5f97",(0,r.jsx)(e.a,{href:"https://refactoringguru.cn/smells/large-class",children:(0,r.jsx)(e.strong,{children:"\u8fc7\u4e8e\u81c3\u80bf"})}),"\uff0c\xa0\u4f60\u53ef\u4ee5\u8003\u8651\u5c06\u5176\u90e8\u5206\u884c\u4e3a\u62bd\u53d6\u4e3a\u4e00\u4e2a\u65b0\u7684\u4e13\u7528\u5916\u89c2\u7c7b\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u5916\u89c2\u6a21\u5f0f\u4f18\u7f3a\u70b9",children:(0,r.jsx)(e.strong,{children:"\u5916\u89c2\u6a21\u5f0f\u4f18\u7f3a\u70b9"})}),"\n",(0,r.jsx)(e.p,{children:"\u2714\ufe0f \u4f60\u53ef\u4ee5\u8ba9\u81ea\u5df1\u7684\u4ee3\u7801\u72ec\u7acb\u4e8e\u590d\u6742\u5b50\u7cfb\u7edf\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["\u274c \u5916\u89c2\u53ef\u80fd\u6210\u4e3a\u4e0e\u7a0b\u5e8f\u4e2d\u6240\u6709\u7c7b\u90fd\u8026\u5408\u7684",(0,r.jsx)(e.a,{href:"https://refactoringguru.cn/antipatterns/god-object",children:(0,r.jsx)(e.strong,{children:"\u4e0a\u5e1d\u5bf9\u8c61"})}),"\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb",children:(0,r.jsx)(e.strong,{children:"\u4e0e\u5176\u4ed6\u6a21\u5f0f\u7684\u5173\u7cfb"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://www.szdev.com/docs/design-patterns/facade",children:(0,r.jsx)(e.strong,{children:"\u5916\u89c2\u6a21\u5f0f"})}),"\u4e3a\u73b0\u6709\u5bf9\u8c61\u5b9a\u4e49\u4e86\u4e00\u4e2a\u65b0\u63a5\u53e3\uff0c\xa0",(0,r.jsx)(e.a,{href:"https://www.szdev.com/docs/design-patterns/adapter",children:(0,r.jsx)(e.strong,{children:"\u9002\u914d\u5668\u6a21\u5f0f"})}),"\u5219\u4f1a\u8bd5\u56fe\u8fd0\u7528\u5df2\u6709\u7684\u63a5\u53e3\u3002\xa0",(0,r.jsx)(e.em,{children:"\u9002\u914d\u5668"}),"\u901a\u5e38\u53ea\u5c01\u88c5\u4e00\u4e2a\u5bf9\u8c61\uff0c\xa0",(0,r.jsx)(e.em,{children:"\u5916\u89c2"}),"\u901a\u5e38\u4f1a\u4f5c\u7528\u4e8e\u6574\u4e2a\u5bf9\u8c61\u5b50\u7cfb\u7edf\u4e0a\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:["\u5f53\u53ea\u9700\u5bf9\u5ba2\u6237\u7aef\u4ee3\u7801\u9690\u85cf\u5b50\u7cfb\u7edf\u521b\u5efa\u5bf9\u8c61\u7684\u65b9\u5f0f\u65f6\uff0c\xa0\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,r.jsx)(e.a,{href:"https://www.szdev.com/docs/design-patterns/abstract-factory",children:(0,r.jsx)(e.strong,{children:"\u62bd\u8c61\u5de5\u5382\u6a21\u5f0f"})}),"\u6765\u4ee3\u66ff",(0,r.jsx)(e.a,{href:"https://www.szdev.com/docs/design-patterns/facade",children:(0,r.jsx)(e.strong,{children:"\u5916\u89c2"})}),"\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://www.szdev.com/docs/design-patterns/flyweight",children:(0,r.jsx)(e.strong,{children:"\u4eab\u5143\u6a21\u5f0f"})}),"\u5c55\u793a\u4e86\u5982\u4f55\u751f\u6210\u5927\u91cf\u7684\u5c0f\u578b\u5bf9\u8c61\uff0c\xa0",(0,r.jsx)(e.a,{href:"https://www.szdev.com/docs/design-patterns/facade",children:(0,r.jsx)(e.strong,{children:"\u5916\u89c2"})}),"\u5219\u5c55\u793a\u4e86\u5982\u4f55\u7528\u4e00\u4e2a\u5bf9\u8c61\u6765\u4ee3\u8868\u6574\u4e2a\u5b50\u7cfb\u7edf\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://www.szdev.com/docs/design-patterns/facade",children:(0,r.jsx)(e.strong,{children:"\u5916\u89c2"})}),"\u548c",(0,r.jsx)(e.a,{href:"https://www.szdev.com/docs/design-patterns/mediator",children:(0,r.jsx)(e.strong,{children:"\u4e2d\u4ecb\u8005\u6a21\u5f0f"})}),"\u7684\u804c\u8d23\u7c7b\u4f3c\uff1a\xa0\u5b83\u4eec\u90fd\u5c1d\u8bd5\u5728\u5927\u91cf\u7d27\u5bc6\u8026\u5408\u7684\u7c7b\u4e2d\u7ec4\u7ec7\u8d77\u5408\u4f5c\u3002","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.em,{children:"\u5916\u89c2"}),"\u4e3a\u5b50\u7cfb\u7edf\u4e2d\u7684\u6240\u6709\u5bf9\u8c61\u5b9a\u4e49\u4e86\u4e00\u4e2a\u7b80\u5355\u63a5\u53e3\uff0c\xa0\u4f46\u662f\u5b83\u4e0d\u63d0\u4f9b\u4efb\u4f55\u65b0\u529f\u80fd\u3002\xa0\u5b50\u7cfb\u7edf\u672c\u8eab\u4e0d\u4f1a\u610f\u8bc6\u5230\u5916\u89c2\u7684\u5b58\u5728\u3002\xa0\u5b50\u7cfb\u7edf\u4e2d\u7684\u5bf9\u8c61\u53ef\u4ee5\u76f4\u63a5\u8fdb\u884c\u4ea4\u6d41\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.em,{children:"\u4e2d\u4ecb\u8005"}),"\u5c06\u7cfb\u7edf\u4e2d\u7ec4\u4ef6\u7684\u6c9f\u901a\u884c\u4e3a\u4e2d\u5fc3\u5316\u3002\xa0\u5404\u7ec4\u4ef6\u53ea\u77e5\u9053\u4e2d\u4ecb\u8005\u5bf9\u8c61\uff0c\xa0\u65e0\u6cd5\u76f4\u63a5\u76f8\u4e92\u4ea4\u6d41\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://www.szdev.com/docs/design-patterns/facade",children:(0,r.jsx)(e.strong,{children:"\u5916\u89c2"})}),"\u7c7b\u901a\u5e38\u53ef\u4ee5\u8f6c\u6362\u4e3a",(0,r.jsx)(e.a,{href:"https://www.szdev.com/docs/design-patterns/singleton",children:(0,r.jsx)(e.strong,{children:"\u5355\u4f8b\u6a21\u5f0f"})}),"\u7c7b\uff0c\xa0\u56e0\u4e3a\u5728\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\u4e00\u4e2a\u5916\u89c2\u5bf9\u8c61\u5c31\u8db3\u591f\u4e86\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://www.szdev.com/docs/design-patterns/facade",children:(0,r.jsx)(e.strong,{children:"\u5916\u89c2"})}),"\u4e0e",(0,r.jsx)(e.a,{href:"https://www.szdev.com/docs/design-patterns/proxy",children:(0,r.jsx)(e.strong,{children:"\u4ee3\u7406\u6a21\u5f0f"})}),"\u7684\u76f8\u4f3c\u4e4b\u5904\u5728\u4e8e\u5b83\u4eec\u90fd\u7f13\u5b58\u4e86\u4e00\u4e2a\u590d\u6742\u5b9e\u4f53\u5e76\u81ea\u884c\u5bf9\u5176\u8fdb\u884c\u521d\u59cb\u5316\u3002\xa0",(0,r.jsx)(e.em,{children:"\u4ee3\u7406"}),"\u4e0e\u5176\u670d\u52a1\u5bf9\u8c61\u9075\u5faa\u540c\u4e00\u63a5\u53e3\uff0c\xa0\u4f7f\u5f97\u81ea\u5df1\u548c\u670d\u52a1\u5bf9\u8c61\u53ef\u4ee5\u4e92\u6362\uff0c\xa0\u5728\u8fd9\u4e00\u70b9\u4e0a\u5b83\u4e0e",(0,r.jsx)(e.em,{children:"\u5916\u89c2"}),"\u4e0d\u540c\u3002"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>d,x:()=>c});var r=s(96540);const t={},i=r.createContext(t);function d(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:d(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);