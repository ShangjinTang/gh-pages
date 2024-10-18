"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5334],{27947:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>d,default:()=>t,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var l=s(74848),c=s(28453);const r={description:""},d="Bash \u51fd\u6570",i={id:"modern-linux/bash-tutorial/function",title:"Bash \u51fd\u6570",description:"",source:"@site/docs/modern-linux/99-bash-tutorial/14-function.md",sourceDirName:"modern-linux/99-bash-tutorial",slug:"/modern-linux/bash-tutorial/function",permalink:"/docs/modern-linux/bash-tutorial/function",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{description:""},sidebar:"modernlinuxSidebar",previous:{title:"\u5faa\u73af",permalink:"/docs/modern-linux/bash-tutorial/loop"},next:{title:"\u6570\u7ec4",permalink:"/docs/modern-linux/bash-tutorial/array"}},a={},o=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u53c2\u6570\u53d8\u91cf",id:"\u53c2\u6570\u53d8\u91cf",level:2},{value:"return \u547d\u4ee4",id:"return-\u547d\u4ee4",level:2},{value:"\u5168\u5c40\u53d8\u91cf\u548c\u5c40\u90e8\u53d8\u91cf\uff0clocal \u547d\u4ee4",id:"\u5168\u5c40\u53d8\u91cf\u548c\u5c40\u90e8\u53d8\u91cflocal-\u547d\u4ee4",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}];function h(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"bash-\u51fd\u6570",children:"Bash \u51fd\u6570"})}),"\n",(0,l.jsx)(e.p,{children:"\u672c\u7ae0\u4ecb\u7ecd Bash \u51fd\u6570\u7684\u7528\u6cd5\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u7b80\u4ecb",children:"\u7b80\u4ecb"}),"\n",(0,l.jsx)(e.p,{children:"\u51fd\u6570\uff08function\uff09\u662f\u53ef\u4ee5\u91cd\u590d\u4f7f\u7528\u7684\u4ee3\u7801\u7247\u6bb5\uff0c\u6709\u5229\u4e8e\u4ee3\u7801\u7684\u590d\u7528\u3002\u5b83\u4e0e\u522b\u540d\uff08alias\uff09\u7684\u533a\u522b\u662f\uff0c\u522b\u540d\u53ea\u9002\u5408\u5c01\u88c5\u7b80\u5355\u7684\u5355\u4e2a\u547d\u4ee4\uff0c\u51fd\u6570\u5219\u53ef\u4ee5\u5c01\u88c5\u590d\u6742\u7684\u591a\u884c\u547d\u4ee4\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u51fd\u6570\u603b\u662f\u5728\u5f53\u524d Shell \u6267\u884c\uff0c\u8fd9\u662f\u8ddf\u811a\u672c\u7684\u4e00\u4e2a\u91cd\u5927\u533a\u522b\uff0cBash \u4f1a\u65b0\u5efa\u4e00\u4e2a\u5b50 Shell \u6267\u884c\u811a\u672c\u3002\u5982\u679c\u51fd\u6570\u4e0e\u811a\u672c\u540c\u540d\uff0c\u51fd\u6570\u4f1a\u4f18\u5148\u6267\u884c\u3002\u4f46\u662f\uff0c\u51fd\u6570\u7684\u4f18\u5148\u7ea7\u4e0d\u5982\u522b\u540d\uff0c\u5373\u5982\u679c\u51fd\u6570\u4e0e\u522b\u540d\u540c\u540d\uff0c\u90a3\u4e48\u522b\u540d\u4f18\u5148\u6267\u884c\u3002"}),"\n",(0,l.jsx)(e.p,{children:"Bash \u51fd\u6570\u5b9a\u4e49\u7684\u8bed\u6cd5\u6709\u4e24\u79cd\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"# \u7b2c\u4e00\u79cd\nfn() {\n    # codes\n}\n\n# \u7b2c\u4e8c\u79cd\nfunction fn() {\n    # codes\n}\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c",(0,l.jsx)(e.code,{children:"fn"}),"\u662f\u81ea\u5b9a\u4e49\u7684\u51fd\u6570\u540d\uff0c\u51fd\u6570\u4ee3\u7801\u5c31\u5199\u5728\u5927\u62ec\u53f7\u4e4b\u4e2d\u3002\u8fd9\u4e24\u79cd\u5199\u6cd5\u662f\u7b49\u4ef7\u7684\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"\u4e0b\u9762\u662f\u4e00\u4e2a\u7b80\u5355\u51fd\u6570\u7684\u4f8b\u5b50\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:'hello() {\n    echo "Hello $1"\n}\n'})}),"\n",(0,l.jsxs)(e.p,{children:["\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c\u51fd\u6570\u4f53\u91cc\u9762\u7684",(0,l.jsx)(e.code,{children:"$1"}),"\u8868\u793a\u51fd\u6570\u8c03\u7528\u65f6\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"\u8c03\u7528\u65f6\uff0c\u5c31\u76f4\u63a5\u5199\u51fd\u6570\u540d\uff0c\u53c2\u6570\u8ddf\u5728\u51fd\u6570\u540d\u540e\u9762\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"$ hello world\nHello world\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u4e0b\u9762\u662f\u4e00\u4e2a\u591a\u884c\u51fd\u6570\u7684\u4f8b\u5b50\uff0c\u663e\u793a\u5f53\u524d\u65e5\u671f\u65f6\u95f4\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:'today() {\n    echo -n "Today\'s date is: "\n    date +"%A, %B %-d, %Y"\n}\n'})}),"\n",(0,l.jsxs)(e.p,{children:["\u5220\u9664\u4e00\u4e2a\u51fd\u6570\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,l.jsx)(e.code,{children:"unset"}),"\u547d\u4ee4\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"unset -f functionName\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u67e5\u770b\u5f53\u524d Shell \u5df2\u7ecf\u5b9a\u4e49\u7684\u6240\u6709\u51fd\u6570\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,l.jsx)(e.code,{children:"declare"}),"\u547d\u4ee4\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"$ declare -f\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u4e0a\u9762\u7684",(0,l.jsx)(e.code,{children:"declare"}),"\u547d\u4ee4\u4e0d\u4ec5\u4f1a\u8f93\u51fa\u51fd\u6570\u540d\uff0c\u8fd8\u4f1a\u8f93\u51fa\u6240\u6709\u5b9a\u4e49\u3002\u8f93\u51fa\u987a\u5e8f\u662f\u6309\u7167\u51fd\u6570\u540d\u7684\u5b57\u6bcd\u8868\u987a\u5e8f\u3002\u7531\u4e8e\u4f1a\u8f93\u51fa\u5f88\u591a\u5185\u5bb9\uff0c\u6700\u597d\u901a\u8fc7\u7ba1\u9053\u547d\u4ee4\u914d\u5408",(0,l.jsx)(e.code,{children:"more"}),"\u6216",(0,l.jsx)(e.code,{children:"less"}),"\u4f7f\u7528\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"declare"}),"\u547d\u4ee4\u8fd8\u652f\u6301\u67e5\u770b\u5355\u4e2a\u51fd\u6570\u7684\u5b9a\u4e49\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"$ declare -f functionName\n"})}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"declare -F"}),"\u53ef\u4ee5\u8f93\u51fa\u6240\u6709\u5df2\u7ecf\u5b9a\u4e49\u7684\u51fd\u6570\u540d\uff0c\u4e0d\u542b\u51fd\u6570\u4f53\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"$ declare -F\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u53c2\u6570\u53d8\u91cf",children:"\u53c2\u6570\u53d8\u91cf"}),"\n",(0,l.jsx)(e.p,{children:"\u51fd\u6570\u4f53\u5185\u53ef\u4ee5\u4f7f\u7528\u53c2\u6570\u53d8\u91cf\uff0c\u83b7\u53d6\u51fd\u6570\u53c2\u6570\u3002\u51fd\u6570\u7684\u53c2\u6570\u53d8\u91cf\uff0c\u4e0e\u811a\u672c\u53c2\u6570\u53d8\u91cf\u662f\u4e00\u81f4\u7684\u3002"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"$1"}),"~",(0,l.jsx)(e.code,{children:"$9"}),"\uff1a\u51fd\u6570\u7684\u7b2c\u4e00\u4e2a\u5230\u7b2c 9 \u4e2a\u7684\u53c2\u6570\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"$0"}),"\uff1a\u51fd\u6570\u6240\u5728\u7684\u811a\u672c\u540d\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"$#"}),"\uff1a\u51fd\u6570\u7684\u53c2\u6570\u603b\u6570\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"$@"}),"\uff1a\u51fd\u6570\u7684\u5168\u90e8\u53c2\u6570\uff0c\u53c2\u6570\u4e4b\u95f4\u4f7f\u7528\u7a7a\u683c\u5206\u9694\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"$*"}),"\uff1a\u51fd\u6570\u7684\u5168\u90e8\u53c2\u6570\uff0c\u53c2\u6570\u4e4b\u95f4\u4f7f\u7528\u53d8\u91cf",(0,l.jsx)(e.code,{children:"$IFS"}),"\u503c\u7684\u7b2c\u4e00\u4e2a\u5b57\u7b26\u5206\u9694\uff0c\u9ed8\u8ba4\u4e3a\u7a7a\u683c\uff0c\u4f46\u662f\u53ef\u4ee5\u81ea\u5b9a\u4e49\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["\u5982\u679c\u51fd\u6570\u7684\u53c2\u6570\u591a\u4e8e 9 \u4e2a\uff0c\u90a3\u4e48\u7b2c 10 \u4e2a\u53c2\u6570\u53ef\u4ee5\u7528",(0,l.jsx)(e.code,{children:"${10}"}),"\u7684\u5f62\u5f0f\u5f15\u7528\uff0c\u4ee5\u6b64\u7c7b\u63a8\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b\u811a\u672c",(0,l.jsx)(e.code,{children:"test.sh"}),"\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:'#!/bin/bash\n# test.sh\n\nfunction alice {\n    echo "alice: $@"\n    echo "$0: $1 $2 $3 $4"\n    echo "$# arguments"\n\n}\n\nalice in wonderland\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u8fd0\u884c\u8be5\u811a\u672c\uff0c\u7ed3\u679c\u5982\u4e0b\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"$ bash test.sh\nalice: in wonderland\ntest.sh: in wonderland\n2 arguments\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u7531\u4e8e\u51fd\u6570",(0,l.jsx)(e.code,{children:"alice"}),"\u53ea\u6709\u7b2c\u4e00\u4e2a\u548c\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u6240\u4ee5\u7b2c\u4e09\u4e2a\u548c\u7b2c\u56db\u4e2a\u53c2\u6570\u4e3a\u7a7a\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"\u4e0b\u9762\u662f\u4e00\u4e2a\u65e5\u5fd7\u51fd\u6570\u7684\u4f8b\u5b50\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"function log_msg {\n    echo \"[$(date '+ %F %T') ]: $@\"\n}\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u4f7f\u7528\u65b9\u6cd5\u5982\u4e0b\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:'$ log_msg "This is sample log message"\n[ 2018-08-16 19:56:34 ]: This is sample log message\n'})}),"\n",(0,l.jsx)(e.h2,{id:"return-\u547d\u4ee4",children:"return \u547d\u4ee4"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"return"}),"\u547d\u4ee4\u7528\u4e8e\u4ece\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u503c\u3002\u51fd\u6570\u6267\u884c\u5230\u8fd9\u6761\u547d\u4ee4\uff0c\u5c31\u4e0d\u518d\u5f80\u4e0b\u6267\u884c\u4e86\uff0c\u76f4\u63a5\u8fd4\u56de\u4e86\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"function func_return_value {\n    return 10\n}\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u51fd\u6570\u5c06\u8fd4\u56de\u503c\u8fd4\u56de\u7ed9\u8c03\u7528\u8005\u3002\u5982\u679c\u547d\u4ee4\u884c\u76f4\u63a5\u6267\u884c\u51fd\u6570\uff0c\u4e0b\u4e00\u4e2a\u547d\u4ee4\u53ef\u4ee5\u7528",(0,l.jsx)(e.code,{children:"$?"}),"\u62ff\u5230\u8fd4\u56de\u503c\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:'$ func_return_value\n$ echo "Value returned by function is: $?"\nValue returned by function is: 10\n'})}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"return"}),"\u540e\u9762\u4e0d\u8ddf\u53c2\u6570\uff0c\u53ea\u7528\u4e8e\u8fd4\u56de\u4e5f\u662f\u53ef\u4ee5\u7684\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"function name {\n    commands\n    return\n}\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u5168\u5c40\u53d8\u91cf\u548c\u5c40\u90e8\u53d8\u91cflocal-\u547d\u4ee4",children:"\u5168\u5c40\u53d8\u91cf\u548c\u5c40\u90e8\u53d8\u91cf\uff0clocal \u547d\u4ee4"}),"\n",(0,l.jsx)(e.p,{children:"Bash \u51fd\u6570\u4f53\u5185\u76f4\u63a5\u58f0\u660e\u7684\u53d8\u91cf\uff0c\u5c5e\u4e8e\u5168\u5c40\u53d8\u91cf\uff0c\u6574\u4e2a\u811a\u672c\u90fd\u53ef\u4ee5\u8bfb\u53d6\u3002\u8fd9\u4e00\u70b9\u9700\u8981\u7279\u522b\u5c0f\u5fc3\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:'# \u811a\u672c test.sh\nfn() {\n    foo=1\n    echo "fn: foo = $foo"\n}\n\nfn\necho "global: foo = $foo"\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u4e0a\u9762\u811a\u672c\u7684\u8fd0\u884c\u7ed3\u679c\u5982\u4e0b\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"$ bash test.sh\nfn: foo = 1\nglobal: foo = 1\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c\u53d8\u91cf",(0,l.jsx)(e.code,{children:"$foo"}),"\u662f\u5728\u51fd\u6570",(0,l.jsx)(e.code,{children:"fn"}),"\u5185\u90e8\u58f0\u660e\u7684\uff0c\u51fd\u6570\u4f53\u5916\u4e5f\u53ef\u4ee5\u8bfb\u53d6\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"\u51fd\u6570\u4f53\u5185\u4e0d\u4ec5\u53ef\u4ee5\u58f0\u660e\u5168\u5c40\u53d8\u91cf\uff0c\u8fd8\u53ef\u4ee5\u4fee\u6539\u5168\u5c40\u53d8\u91cf\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"#! /bin/bash\nfoo=1\n\nfn() {\n    foo=2\n}\n\nfn\n\necho $foo\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u4e0a\u9762\u4ee3\u7801\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7684\u53d8\u91cf",(0,l.jsx)(e.code,{children:"$foo"}),"\u503c\u4e3a 2\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u51fd\u6570\u91cc\u9762\u53ef\u4ee5\u7528",(0,l.jsx)(e.code,{children:"local"}),"\u547d\u4ee4\u58f0\u660e\u5c40\u90e8\u53d8\u91cf\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:'#! /bin/bash\n# \u811a\u672c test.sh\nfn() {\n    local foo\n    foo=1\n    echo "fn: foo = $foo"\n}\n\nfn\necho "global: foo = $foo"\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u4e0a\u9762\u811a\u672c\u7684\u8fd0\u884c\u7ed3\u679c\u5982\u4e0b\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"$ bash test.sh\nfn: foo = 1\nglobal: foo =\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0c",(0,l.jsx)(e.code,{children:"local"}),"\u547d\u4ee4\u58f0\u660e\u7684",(0,l.jsx)(e.code,{children:"$foo"}),"\u53d8\u91cf\uff0c\u53ea\u5728\u51fd\u6570\u4f53\u5185\u6709\u6548\uff0c\u51fd\u6570\u4f53\u5916\u6ca1\u6709\u5b9a\u4e49\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u53c2\u8003\u94fe\u63a5",children:"\u53c2\u8003\u94fe\u63a5"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"https://www.linuxtechi.com/define-use-functions-linux-shell-script/",children:"How to define and use functions in Linux Shell Script"}),", by Pradeep Kumar"]}),"\n"]})]})}function t(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(h,{...n})}):h(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>d,x:()=>i});var l=s(96540);const c={},r=l.createContext(c);function d(n){const e=l.useContext(r);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:d(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);