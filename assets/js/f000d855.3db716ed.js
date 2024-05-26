"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9067],{95502:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>u});var r=l(74848),t=l(28453),a=l(11470),s=l(19365);const d={},c="\u68c0\u67e5\u5185\u5b58\u5730\u5740\u7684\u6570\u636e",i={id:"modern-cpp/gdb-lldb/check-data-in-memory-address",title:"\u68c0\u67e5\u5185\u5b58\u5730\u5740\u7684\u6570\u636e",description:"\u5f62\u5f0f\uff1ax/count fmt size address",source:"@site/docs/modern-cpp/01-gdb-lldb/06-check-data-in-memory-address.mdx",sourceDirName:"modern-cpp/01-gdb-lldb",slug:"/modern-cpp/gdb-lldb/check-data-in-memory-address",permalink:"/docs/modern-cpp/gdb-lldb/check-data-in-memory-address",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"moderncppSidebar",previous:{title:"\u68c0\u67e5\u53d8\u91cf\u548c\u5bc4\u5b58\u5668",permalink:"/docs/modern-cpp/gdb-lldb/check-variables-and-registers"},next:{title:"\u53ef\u6267\u884c\u6587\u4ef6\u548c\u5171\u4eab\u5e93\u4fe1\u606f\u67e5\u8be2",permalink:"/docs/modern-cpp/gdb-lldb/check-executable-and-libraries"}},o={},u=[{value:"\u8bfb\u53d6\u5185\u5b58",id:"\u8bfb\u53d6\u5185\u5b58",level:3},{value:"\u8bfb\u53d6\u82e5\u5e72\u5341\u516d\u8fdb\u5236\u7684\u5185\u5b58",id:"\u8bfb\u53d6\u82e5\u5e72\u5341\u516d\u8fdb\u5236\u7684\u5185\u5b58",level:3},{value:"\u4ece\u5185\u5b58\u6307\u5b9a\u5730\u5740\u8bfb\u53d6\u82e5\u5e72\u5b57\u8282\uff0c\u5e76\u4fdd\u5b58\u5230\u672c\u5730\u6587\u4ef6",id:"\u4ece\u5185\u5b58\u6307\u5b9a\u5730\u5740\u8bfb\u53d6\u82e5\u5e72\u5b57\u8282\u5e76\u4fdd\u5b58\u5230\u672c\u5730\u6587\u4ef6",level:3},{value:"\u4ece\u5185\u5b58\u6307\u5b9a\u5730\u5740\u8303\u56f4\u8bfb\u53d6\u5b57\u8282\uff0c\u5e76\u4fdd\u5b58\u5230\u672c\u5730\u6587\u4ef6",id:"\u4ece\u5185\u5b58\u6307\u5b9a\u5730\u5740\u8303\u56f4\u8bfb\u53d6\u5b57\u8282\u5e76\u4fdd\u5b58\u5230\u672c\u5730\u6587\u4ef6",level:3}];function b(e){const n={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u68c0\u67e5\u5185\u5b58\u5730\u5740\u7684\u6570\u636e",children:"\u68c0\u67e5\u5185\u5b58\u5730\u5740\u7684\u6570\u636e"}),"\n",(0,r.jsxs)(n.p,{children:["\u5f62\u5f0f\uff1a",(0,r.jsx)(n.code,{children:"x/count fmt size address"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"count"}),": \u6574\u6570\uff0c\u9ed8\u8ba4\u4e3a 1"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"fmt"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"a | Address \u5730\u5740"}),"\n",(0,r.jsx)(n.li,{children:"i | Instruction \u6307\u4ee4"}),"\n",(0,r.jsx)(n.li,{children:"t | Binary \u4e8c\u8fdb\u5236"}),"\n",(0,r.jsx)(n.li,{children:"o | Octal \u516b\u8fdb\u5236"}),"\n",(0,r.jsx)(n.li,{children:"h/x | Hex \u5341\u516d\u8fdb\u5236"}),"\n",(0,r.jsx)(n.li,{children:"z | Hex, zero padded \u5341\u516d\u8fdb\u5236\uff0c\u586b\u5145 0 \u5bf9\u9f50"}),"\n",(0,r.jsx)(n.li,{children:"d | Decimal \u5341\u8fdb\u5236"}),"\n",(0,r.jsx)(n.li,{children:"u | Unsigned decimal \u65e0\u7b26\u53f7\u5341\u8fdb\u5236"}),"\n",(0,r.jsx)(n.li,{children:"f | Float \u6d6e\u70b9"}),"\n",(0,r.jsx)(n.li,{children:"c | Char \u5b57\u7b26"}),"\n",(0,r.jsx)(n.li,{children:"s | String \u5b57\u7b26\u4e32"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"size"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"b | 8 bits  - byte"}),"\n",(0,r.jsx)(n.li,{children:"h | 16 bits - halfword"}),"\n",(0,r.jsx)(n.li,{children:"w | 32 bits - word"}),"\n",(0,r.jsx)(n.li,{children:"g | 64 bits - giant"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u8bfb\u53d6\u5185\u5b58",children:"\u8bfb\u53d6\u5185\u5b58"}),"\n",(0,r.jsxs)(a.A,{groupId:"code-examples",children:[(0,r.jsx)(s.A,{value:"gdb",label:"gdb",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:"(gdb) x [ADDRESS]\n"})})}),(0,r.jsx)(s.A,{value:"lldb",label:"lldb",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) memory read [ADDRESS]\n(lldb) x [ADDRESS]\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"\u8bfb\u53d6\u82e5\u5e72\u5341\u516d\u8fdb\u5236\u7684\u5185\u5b58",children:"\u8bfb\u53d6\u82e5\u5e72\u5341\u516d\u8fdb\u5236\u7684\u5185\u5b58"}),"\n",(0,r.jsxs)(a.A,{groupId:"code-examples",children:[(0,r.jsx)(s.A,{value:"gdb",label:"gdb",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:"(gdb) x/4xw 0xbffff3c0\n"})})}),(0,r.jsx)(s.A,{value:"lldb",label:"lldb",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) memory read --size 4 --format x --count 4 0xbffff3c0\n(lldb) me r -s4 -fx -c4 0xbffff3c0\n(lldb) x -s4 -fx -c4 0xbffff3c0\n\n# LLDB now supports the GDB shorthand format syntax but there can\u2019t be space after the command:\n\n(lldb) memory read/4xw 0xbffff3c0\n(lldb) x/4xw 0xbffff3c0\n(lldb) memory read --gdb-format 4xw 0xbffff3c0\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"\u4ece\u5185\u5b58\u6307\u5b9a\u5730\u5740\u8bfb\u53d6\u82e5\u5e72\u5b57\u8282\u5e76\u4fdd\u5b58\u5230\u672c\u5730\u6587\u4ef6",children:"\u4ece\u5185\u5b58\u6307\u5b9a\u5730\u5740\u8bfb\u53d6\u82e5\u5e72\u5b57\u8282\uff0c\u5e76\u4fdd\u5b58\u5230\u672c\u5730\u6587\u4ef6"}),"\n",(0,r.jsxs)(a.A,{groupId:"code-examples",children:[(0,r.jsx)(s.A,{value:"gdb",label:"gdb",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:"(gdb) set logging on\n(gdb) set logging file /tmp/mem.txt\n(gdb) x/512bx 0xbffff3c0\n(gdb) set logging off\n"})})}),(0,r.jsx)(s.A,{value:"lldb",label:"lldb",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) memory read --outfile /tmp/mem.txt --count 512 0xbffff3c0\n(lldb) me r -o/tmp/mem.txt -c512 0xbffff3c0\n(lldb) x/512bx -o/tmp/mem.txt 0xbffff3c0\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"\u4ece\u5185\u5b58\u6307\u5b9a\u5730\u5740\u8303\u56f4\u8bfb\u53d6\u5b57\u8282\u5e76\u4fdd\u5b58\u5230\u672c\u5730\u6587\u4ef6",children:"\u4ece\u5185\u5b58\u6307\u5b9a\u5730\u5740\u8303\u56f4\u8bfb\u53d6\u5b57\u8282\uff0c\u5e76\u4fdd\u5b58\u5230\u672c\u5730\u6587\u4ef6"}),"\n",(0,r.jsxs)(a.A,{groupId:"code-examples",children:[(0,r.jsx)(s.A,{value:"gdb",label:"gdb",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'tab={"label":"gdb"}',children:"(gdb) dump memory /tmp/mem.bin 0x1000 0x2000\n"})})}),(0,r.jsx)(s.A,{value:"lldb",label:"lldb",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'tab={"label":"lldb"}',children:"(lldb) memory read --outfile /tmp/mem.bin --binary 0x1000 0x2000\n(lldb) me r -o /tmp/mem.bin -b 0x1000 0x2000\n"})})})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(b,{...e})}):b(e)}},19365:(e,n,l)=>{l.d(n,{A:()=>s});l(96540);var r=l(18215);const t={tabItem:"tabItem_Ymn6"};var a=l(74848);function s(e){let{children:n,hidden:l,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(t.tabItem,s),hidden:l,children:n})}},11470:(e,n,l)=>{l.d(n,{A:()=>w});var r=l(96540),t=l(18215),a=l(23104),s=l(56347),d=l(205),c=l(57485),i=l(31682),o=l(89466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:n,children:l}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:l,attributes:r,default:t}}=e;return{value:n,label:l,attributes:r,default:t}}))}(l);return function(e){const n=(0,i.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,l])}function h(e){let{value:n,tabValues:l}=e;return l.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:l}=e;const t=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:l}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:n,groupId:l});return[(0,c.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(t.location.search);n.set(a,e),t.replace({...t.location,search:n.toString()})}),[a,t])]}function f(e){const{defaultValue:n,queryString:l=!1,groupId:t}=e,a=b(e),[s,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=l.find((e=>e.default))??l[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[i,u]=m({queryString:l,groupId:t}),[f,x]=function(e){let{groupId:n}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,a]=(0,o.Dv)(l);return[t,(0,r.useCallback)((e=>{l&&a.set(e)}),[l,a])]}({groupId:t}),p=(()=>{const e=i??f;return h({value:e,tabValues:a})?e:null})();(0,d.A)((()=>{p&&c(p)}),[p]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),x(e)}),[u,x,a]),tabValues:a}}var x=l(92303);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=l(74848);function j(e){let{className:n,block:l,selectedValue:r,selectValue:s,tabValues:d}=e;const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,a.a_)(),o=e=>{const n=e.currentTarget,l=c.indexOf(n),t=d[l].value;t!==r&&(i(n),s(t))},u=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const l=c.indexOf(e.currentTarget)+1;n=c[l]??c[0];break}case"ArrowLeft":{const l=c.indexOf(e.currentTarget)-1;n=c[l]??c[c.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":l},n),children:d.map((e=>{let{value:n,label:l,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:u,onClick:o,...a,className:(0,t.A)("tabs__item",p.tabItem,a?.className,{"tabs__item--active":r===n}),children:l??n},n)}))})}function v(e){let{lazy:n,children:l,selectedValue:t}=e;const a=(Array.isArray(l)?l:[l]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,t.A)("tabs-container",p.tabList),children:[(0,g.jsx)(j,{...n,...e}),(0,g.jsx)(v,{...n,...e})]})}function w(e){const n=(0,x.A)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,l)=>{l.d(n,{R:()=>s,x:()=>d});var r=l(96540);const t={},a=r.createContext(t);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);