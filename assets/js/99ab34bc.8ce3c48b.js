"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9820],{59751:(e,l,a)=>{a.r(l),a.d(l,{assets:()=>b,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>u});var n=a(74848),r=a(28453),s=a(11470),t=a(19365);const d={},c="\u56de\u6eaf\u548c\u53cd\u6c47\u7f16",i={id:"modern-cpp/gdb-lldb/backtrace-and-disassemble",title:"\u56de\u6eaf\u548c\u53cd\u6c47\u7f16",description:"\u56de\u6eaf\uff08backtrace\uff09",source:"@site/docs/modern-cpp/01-gdb-lldb/04-backtrace-and-disassemble.mdx",sourceDirName:"modern-cpp/01-gdb-lldb",slug:"/modern-cpp/gdb-lldb/backtrace-and-disassemble",permalink:"/docs/modern-cpp/gdb-lldb/backtrace-and-disassemble",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"moderncppSidebar",previous:{title:"\u5728\u8c03\u8bd5\u5668\u5185\u8df3\u8f6c",permalink:"/docs/modern-cpp/gdb-lldb/jump-in-debuggers"},next:{title:"\u68c0\u67e5\u53d8\u91cf\u548c\u5bc4\u5b58\u5668",permalink:"/docs/modern-cpp/gdb-lldb/check-variables-and-registers"}},b={},u=[{value:"\u56de\u6eaf\uff08backtrace\uff09",id:"\u56de\u6eafbacktrace",level:2},{value:"\u56de\u6eaf\u5f53\u524d\u7ebf\u7a0b\u8c03\u7528\u6808",id:"\u56de\u6eaf\u5f53\u524d\u7ebf\u7a0b\u8c03\u7528\u6808",level:3},{value:"\u56de\u6eaf\u6240\u6709\u7ebf\u7a0b\u8c03\u7528\u6808",id:"\u56de\u6eaf\u6240\u6709\u7ebf\u7a0b\u8c03\u7528\u6808",level:3},{value:"\u56de\u6eaf\u5f53\u524d\u7ebf\u7a0b\u8c03\u7528\u6808\u7684 backtrace \u7684\u524d\u51e0\u5e27",id:"\u56de\u6eaf\u5f53\u524d\u7ebf\u7a0b\u8c03\u7528\u6808\u7684-backtrace-\u7684\u524d\u51e0\u5e27",level:3},{value:"\u53cd\u6c47\u7f16\uff08disassemble\uff09",id:"\u53cd\u6c47\u7f16disassemble",level:2},{value:"\u53cd\u6c47\u7f16\u5f53\u524d\u6808\u5e27\u51fd\u6570",id:"\u53cd\u6c47\u7f16\u5f53\u524d\u6808\u5e27\u51fd\u6570",level:3},{value:"\u53cd\u6c47\u7f16\u4efb\u4f55\u540d\u4e3a main \u7684\u51fd\u6570",id:"\u53cd\u6c47\u7f16\u4efb\u4f55\u540d\u4e3a-main-\u7684\u51fd\u6570",level:3},{value:"\u53cd\u6c47\u7f16\u67d0\u4e2a\u5730\u5740\u8303\u56f4",id:"\u53cd\u6c47\u7f16\u67d0\u4e2a\u5730\u5740\u8303\u56f4",level:3},{value:"\u4ece\u7ed9\u5b9a\u5730\u5740\u53cd\u6c47\u7f16\u82e5\u5e72\u6761\u6307\u4ee4",id:"\u4ece\u7ed9\u5b9a\u5730\u5740\u53cd\u6c47\u7f16\u82e5\u5e72\u6761\u6307\u4ee4",level:3},{value:"\u540c\u65f6\u663e\u793a\u5f53\u524d\u51fd\u6570\u7684\u6e90\u4ee3\u7801\u548c\u53cd\u6c47\u7f16\u4ee3\u7801",id:"\u540c\u65f6\u663e\u793a\u5f53\u524d\u51fd\u6570\u7684\u6e90\u4ee3\u7801\u548c\u53cd\u6c47\u7f16\u4ee3\u7801",level:3},{value:"\u53cd\u6c47\u7f16\u5f53\u524d\u51fd\u6570",id:"\u53cd\u6c47\u7f16\u5f53\u524d\u51fd\u6570",level:3}];function o(e){const l={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.h1,{id:"\u56de\u6eaf\u548c\u53cd\u6c47\u7f16",children:"\u56de\u6eaf\u548c\u53cd\u6c47\u7f16"}),"\n",(0,n.jsx)(l.h2,{id:"\u56de\u6eafbacktrace",children:"\u56de\u6eaf\uff08backtrace\uff09"}),"\n",(0,n.jsx)(l.h3,{id:"\u56de\u6eaf\u5f53\u524d\u7ebf\u7a0b\u8c03\u7528\u6808",children:"\u56de\u6eaf\u5f53\u524d\u7ebf\u7a0b\u8c03\u7528\u6808"}),"\n",(0,n.jsxs)(s.A,{groupId:"code-examples",children:[(0,n.jsx)(t.A,{value:"gdb",label:"gdb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:"(gdb) backtrace\n(gdb) bt\n"})})}),(0,n.jsx)(t.A,{value:"lldb",label:"lldb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) thread backtrace\n(lldb) bt\n"})})})]}),"\n",(0,n.jsx)(l.h3,{id:"\u56de\u6eaf\u6240\u6709\u7ebf\u7a0b\u8c03\u7528\u6808",children:"\u56de\u6eaf\u6240\u6709\u7ebf\u7a0b\u8c03\u7528\u6808"}),"\n",(0,n.jsxs)(s.A,{groupId:"code-examples",children:[(0,n.jsx)(t.A,{value:"gdb",label:"gdb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:"(gdb) thread apply all bt\n"})})}),(0,n.jsx)(t.A,{value:"lldb",label:"lldb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) thread backtrace all\n(lldb) bt all\n"})})})]}),"\n",(0,n.jsx)(l.h3,{id:"\u56de\u6eaf\u5f53\u524d\u7ebf\u7a0b\u8c03\u7528\u6808\u7684-backtrace-\u7684\u524d\u51e0\u5e27",children:"\u56de\u6eaf\u5f53\u524d\u7ebf\u7a0b\u8c03\u7528\u6808\u7684 backtrace \u7684\u524d\u51e0\u5e27"}),"\n",(0,n.jsxs)(s.A,{groupId:"code-examples",children:[(0,n.jsx)(t.A,{value:"gdb",label:"gdb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:"(gdb) bt 5\n"})})}),(0,n.jsx)(t.A,{value:"lldb",label:"lldb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) thread backtrace -c 5\n(lldb) bt 5\n"})})})]}),"\n",(0,n.jsx)(l.h2,{id:"\u53cd\u6c47\u7f16disassemble",children:"\u53cd\u6c47\u7f16\uff08disassemble\uff09"}),"\n",(0,n.jsx)(l.h3,{id:"\u53cd\u6c47\u7f16\u5f53\u524d\u6808\u5e27\u51fd\u6570",children:"\u53cd\u6c47\u7f16\u5f53\u524d\u6808\u5e27\u51fd\u6570"}),"\n",(0,n.jsxs)(s.A,{groupId:"code-examples",children:[(0,n.jsx)(t.A,{value:"gdb",label:"gdb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:"(gdb) disassemble\n(gdb) disas\n"})})}),(0,n.jsx)(t.A,{value:"lldb",label:"lldb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) disassemble --frame\n(lldb) di -f\n"})})})]}),"\n",(0,n.jsx)(l.h3,{id:"\u53cd\u6c47\u7f16\u4efb\u4f55\u540d\u4e3a-main-\u7684\u51fd\u6570",children:"\u53cd\u6c47\u7f16\u4efb\u4f55\u540d\u4e3a main \u7684\u51fd\u6570"}),"\n",(0,n.jsxs)(s.A,{groupId:"code-examples",children:[(0,n.jsx)(t.A,{value:"gdb",label:"gdb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:"(gdb) disassemble main\n"})})}),(0,n.jsx)(t.A,{value:"lldb",label:"lldb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) disassemble --name main\n(lldb) di -n main\n"})})})]}),"\n",(0,n.jsx)(l.h3,{id:"\u53cd\u6c47\u7f16\u67d0\u4e2a\u5730\u5740\u8303\u56f4",children:"\u53cd\u6c47\u7f16\u67d0\u4e2a\u5730\u5740\u8303\u56f4"}),"\n",(0,n.jsxs)(s.A,{groupId:"code-examples",children:[(0,n.jsx)(t.A,{value:"gdb",label:"gdb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:"(gdb) disassemble 0x1eb8 0x1ec3\n"})})}),(0,n.jsx)(t.A,{value:"lldb",label:"lldb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) disassemble --start-address 0x1eb8 --end-address 0x1ec3\n(lldb) di -s 0x1eb8 -e 0x1ec3\n"})})})]}),"\n",(0,n.jsx)(l.h3,{id:"\u4ece\u7ed9\u5b9a\u5730\u5740\u53cd\u6c47\u7f16\u82e5\u5e72\u6761\u6307\u4ee4",children:"\u4ece\u7ed9\u5b9a\u5730\u5740\u53cd\u6c47\u7f16\u82e5\u5e72\u6761\u6307\u4ee4"}),"\n",(0,n.jsxs)(s.A,{groupId:"code-examples",children:[(0,n.jsx)(t.A,{value:"gdb",label:"gdb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:"(gdb) x/20i 0x1eb8\n"})})}),(0,n.jsx)(t.A,{value:"lldb",label:"lldb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) disassemble --start-address 0x1eb8 --count 20\n(lldb) di -s 0x1eb8 -c 20\n"})})})]}),"\n",(0,n.jsx)(l.h3,{id:"\u540c\u65f6\u663e\u793a\u5f53\u524d\u51fd\u6570\u7684\u6e90\u4ee3\u7801\u548c\u53cd\u6c47\u7f16\u4ee3\u7801",children:"\u540c\u65f6\u663e\u793a\u5f53\u524d\u51fd\u6570\u7684\u6e90\u4ee3\u7801\u548c\u53cd\u6c47\u7f16\u4ee3\u7801"}),"\n",(0,n.jsxs)(s.A,{groupId:"code-examples",children:[(0,n.jsx)(t.A,{value:"gdb",label:"gdb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}'})})}),(0,n.jsx)(t.A,{value:"lldb",label:"lldb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) disassemble --frame --mixed\n(lldb) di -f -m\n"})})})]}),"\n",(0,n.jsx)(l.h3,{id:"\u53cd\u6c47\u7f16\u5f53\u524d\u51fd\u6570",children:"\u53cd\u6c47\u7f16\u5f53\u524d\u51fd\u6570"}),"\n",(0,n.jsxs)(s.A,{groupId:"code-examples",children:[(0,n.jsx)(t.A,{value:"gdb",label:"gdb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"gdb"}'})})}),(0,n.jsx)(t.A,{value:"lldb",label:"lldb",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) disassemble --frame --bytes\n(lldb) di -f -b\n"})})})]})]})}function h(e={}){const{wrapper:l}={...(0,r.R)(),...e.components};return l?(0,n.jsx)(l,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},19365:(e,l,a)=>{a.d(l,{A:()=>t});a(96540);var n=a(18215);const r={tabItem:"tabItem_Ymn6"};var s=a(74848);function t(e){let{children:l,hidden:a,className:t}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,t),hidden:a,children:l})}},11470:(e,l,a)=>{a.d(l,{A:()=>k});var n=a(96540),r=a(18215),s=a(23104),t=a(56347),d=a(205),c=a(57485),i=a(31682),b=a(89466);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:l}=e;return!!l&&"object"==typeof l&&"value"in l}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function o(e){const{values:l,children:a}=e;return(0,n.useMemo)((()=>{const e=l??function(e){return u(e).map((e=>{let{props:{value:l,label:a,attributes:n,default:r}}=e;return{value:l,label:a,attributes:n,default:r}}))}(a);return function(e){const l=(0,i.X)(e,((e,l)=>e.value===l.value));if(l.length>0)throw new Error(`Docusaurus error: Duplicate values "${l.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[l,a])}function h(e){let{value:l,tabValues:a}=e;return a.some((e=>e.value===l))}function m(e){let{queryString:l=!1,groupId:a}=e;const r=(0,t.W6)(),s=function(e){let{queryString:l=!1,groupId:a}=e;if("string"==typeof l)return l;if(!1===l)return null;if(!0===l&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:l,groupId:a});return[(0,c.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const l=new URLSearchParams(r.location.search);l.set(s,e),r.replace({...r.location,search:l.toString()})}),[s,r])]}function g(e){const{defaultValue:l,queryString:a=!1,groupId:r}=e,s=o(e),[t,c]=(0,n.useState)((()=>function(e){let{defaultValue:l,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(l){if(!h({value:l,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${l}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return l}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:l,tabValues:s}))),[i,u]=m({queryString:a,groupId:r}),[g,p]=function(e){let{groupId:l}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(l),[r,s]=(0,b.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),x=(()=>{const e=i??g;return h({value:e,tabValues:s})?e:null})();(0,d.A)((()=>{x&&c(x)}),[x]);return{selectedValue:t,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),p(e)}),[u,p,s]),tabValues:s}}var p=a(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=a(74848);function v(e){let{className:l,block:a,selectedValue:n,selectValue:t,tabValues:d}=e;const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.a_)(),b=e=>{const l=e.currentTarget,a=c.indexOf(l),r=d[a].value;r!==n&&(i(l),t(r))},u=e=>{let l=null;switch(e.key){case"Enter":b(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;l=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;l=c[a]??c[c.length-1];break}}l?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},l),children:d.map((e=>{let{value:l,label:a,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:n===l?0:-1,"aria-selected":n===l,ref:e=>c.push(e),onKeyDown:u,onClick:b,...s,className:(0,r.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":n===l}),children:a??l},l)}))})}function f(e){let{lazy:l,children:a,selectedValue:r}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(l){const e=s.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,l)=>(0,n.cloneElement)(e,{key:l,hidden:e.props.value!==r})))})}function A(e){const l=g(e);return(0,j.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,j.jsx)(v,{...l,...e}),(0,j.jsx)(f,{...l,...e})]})}function k(e){const l=(0,p.A)();return(0,j.jsx)(A,{...e,children:u(e.children)},String(l))}},28453:(e,l,a)=>{a.d(l,{R:()=>t,x:()=>d});var n=a(96540);const r={},s=n.createContext(r);function t(e){const l=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function d(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),n.createElement(s.Provider,{value:l},e.children)}}}]);