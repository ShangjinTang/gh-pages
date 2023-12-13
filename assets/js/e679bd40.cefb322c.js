"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2609],{33350:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var i=t(85893),o=t(11151),s=t(51007),r=t(74866),a=t(85162),d=t(59047);const l={description:"Handling admonitions/callouts in Docusaurus Markdown"},c="Admonitions",u={id:"docusaurus-mdx/mdx-features/admonitions",title:"Admonitions",description:"Handling admonitions/callouts in Docusaurus Markdown",source:"@site/docs/docusaurus-mdx/mdx-features/admonitions.mdx",sourceDirName:"docusaurus-mdx/mdx-features",slug:"/docusaurus-mdx/mdx-features/admonitions",permalink:"/site/docs/docusaurus-mdx/mdx-features/admonitions",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{description:"Handling admonitions/callouts in Docusaurus Markdown"},sidebar:"docusaurusSidebar",previous:{title:"Code blocks",permalink:"/site/docs/docusaurus-mdx/mdx-features/code-blocks"},next:{title:"Headings and Table of contents",permalink:"/site/docs/docusaurus-mdx/mdx-features/toc"}},h={},m=[{value:"Usage with Prettier",id:"usage-with-prettier",level:2},{value:"Specifying title",id:"specifying-title",level:2},{value:"Nested admonitions",id:"nested-admonitions",level:2},{value:"Admonitions with MDX",id:"admonitions-with-mdx",level:2},{value:"Usage in JSX",id:"usage-in-jsx",level:2},{value:"Customizing admonitions",id:"customizing-admonitions",level:2},{value:"Customizing rendering behavior",id:"customizing-rendering-behavior",level:3},{value:"Customizing parsing behavior",id:"customizing-parsing-behavior",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"admonitions",children:"Admonitions"}),"\n","\n","\n",(0,i.jsx)(n.p,{children:"In addition to the basic Markdown syntax, we have a special admonitions syntax by wrapping text with a set of 3 colons, followed by a label denoting its type."}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-md",children:":::note\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::tip\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::info\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::warning\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::danger\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n"})}),"\n",(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Some ",(0,i.jsx)(n.strong,{children:"content"})," with ",(0,i.jsx)(n.em,{children:"Markdown"})," ",(0,i.jsx)(n.code,{children:"syntax"}),". Check ",(0,i.jsxs)(n.a,{href:"#",children:["this ",(0,i.jsx)(n.code,{children:"api"})]}),"."]})}),(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Some ",(0,i.jsx)(n.strong,{children:"content"})," with ",(0,i.jsx)(n.em,{children:"Markdown"})," ",(0,i.jsx)(n.code,{children:"syntax"}),". Check ",(0,i.jsxs)(n.a,{href:"#",children:["this ",(0,i.jsx)(n.code,{children:"api"})]}),"."]})}),(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Some ",(0,i.jsx)(n.strong,{children:"content"})," with ",(0,i.jsx)(n.em,{children:"Markdown"})," ",(0,i.jsx)(n.code,{children:"syntax"}),". Check ",(0,i.jsxs)(n.a,{href:"#",children:["this ",(0,i.jsx)(n.code,{children:"api"})]}),"."]})}),(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["Some ",(0,i.jsx)(n.strong,{children:"content"})," with ",(0,i.jsx)(n.em,{children:"Markdown"})," ",(0,i.jsx)(n.code,{children:"syntax"}),". Check ",(0,i.jsxs)(n.a,{href:"#",children:["this ",(0,i.jsx)(n.code,{children:"api"})]}),"."]})}),(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsxs)(n.p,{children:["Some ",(0,i.jsx)(n.strong,{children:"content"})," with ",(0,i.jsx)(n.em,{children:"Markdown"})," ",(0,i.jsx)(n.code,{children:"syntax"}),". Check ",(0,i.jsxs)(n.a,{href:"#",children:["this ",(0,i.jsx)(n.code,{children:"api"})]}),"."]})})]}),"\n",(0,i.jsx)(n.h2,{id:"usage-with-prettier",children:"Usage with Prettier"}),"\n",(0,i.jsxs)(n.p,{children:["If you use ",(0,i.jsx)(n.a,{href:"https://prettier.io",children:"Prettier"})," to format your Markdown files, Prettier might auto-format your code to invalid admonition syntax. To avoid this problem, add empty lines around the starting and ending directives. This is also why the examples we show here all have empty lines around the content."]}),"\n","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-md",children:"\x3c!-- Prettier doesn't change this --\x3e\n:::note\n\nHello world\n\n:::\n\n\x3c!-- Prettier changes this --\x3e\n:::note\nHello world\n:::\n\n\x3c!-- to this --\x3e\n::: note Hello world:::\n"})}),"\n",(0,i.jsx)(n.h2,{id:"specifying-title",children:"Specifying title"}),"\n",(0,i.jsx)(n.p,{children:"You may also specify an optional title."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-md",children:":::note[Your Title **with** some _Markdown_ `syntax`!]\n\nSome **content** with some _Markdown_ `syntax`.\n\n:::\n"})}),"\n",(0,i.jsx)(s.Z,{children:(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsxs)(n.mdxAdmonitionTitle,{children:["Your Title ",(0,i.jsx)(n.strong,{children:"with"})," some ",(0,i.jsx)(n.em,{children:"Markdown"})," ",(0,i.jsx)(n.code,{children:"syntax"}),"!"]}),(0,i.jsxs)(n.p,{children:["Some ",(0,i.jsx)(n.strong,{children:"content"})," with some ",(0,i.jsx)(n.em,{children:"Markdown"})," ",(0,i.jsx)(n.code,{children:"syntax"}),"."]})]})}),"\n",(0,i.jsx)(n.h2,{id:"nested-admonitions",children:"Nested admonitions"}),"\n",(0,i.jsxs)(n.p,{children:["Admonitions can be nested. Use more colons ",(0,i.jsx)(n.code,{children:":"})," for each parent admonition level."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-md",children:":::::info[Parent]\n\nParent content\n\n::::danger[Child]\n\nChild content\n\n:::tip[Deep Child]\n\nDeep child content\n\n:::\n\n::::\n\n:::::\n"})}),"\n",(0,i.jsx)(s.Z,{children:(0,i.jsxs)(n.admonition,{title:"Parent",type:"info",children:[(0,i.jsx)(n.p,{children:"Parent content"}),(0,i.jsxs)(n.admonition,{title:"Child",type:"danger",children:[(0,i.jsx)(n.p,{children:"Child content"}),(0,i.jsx)(n.admonition,{title:"Deep Child",type:"tip",children:(0,i.jsx)(n.p,{children:"Deep child content"})})]})]})}),"\n",(0,i.jsx)(n.h2,{id:"admonitions-with-mdx",children:"Admonitions with MDX"}),"\n",(0,i.jsx)(n.p,{children:"You can use MDX inside admonitions too!"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:'import Tabs from \'@theme/Tabs\';\n\nimport TabItem from \'@theme/TabItem\';\n\n:::tip[Use tabs in admonitions]\n\n<Tabs>\n  <TabItem value="apple" label="Apple">This is an apple \ud83c\udf4e</TabItem>\n  <TabItem value="orange" label="Orange">This is an orange \ud83c\udf4a</TabItem>\n  <TabItem value="banana" label="Banana">This is a banana \ud83c\udf4c</TabItem>\n</Tabs>\n\n:::\n'})}),"\n",(0,i.jsx)(s.Z,{children:(0,i.jsx)(n.admonition,{title:"Use tabs in admonitions",type:"tip",children:(0,i.jsxs)(r.Z,{children:[(0,i.jsx)(a.Z,{value:"apple",label:"Apple",children:"This is an apple \ud83c\udf4e"}),(0,i.jsx)(a.Z,{value:"orange",label:"Orange",children:"This is an orange \ud83c\udf4a"}),(0,i.jsx)(a.Z,{value:"banana",label:"Banana",children:"This is a banana \ud83c\udf4c"})]})})}),"\n",(0,i.jsx)(n.h2,{id:"usage-in-jsx",children:"Usage in JSX"}),"\n",(0,i.jsxs)(n.p,{children:["Outside of Markdown, you can use the ",(0,i.jsx)(n.code,{children:"@theme/Admonition"})," component to get the same output."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",metastring:'title="MyReactPage.jsx"',children:"import Admonition from '@theme/Admonition';\n\nexport default function MyReactPage() {\n  return (\n    <div>\n      <Admonition type=\"info\">\n        <p>Some information</p>\n      </Admonition>\n    </div>\n  );\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The types that are accepted are the same as above: ",(0,i.jsx)(n.code,{children:"note"}),", ",(0,i.jsx)(n.code,{children:"tip"}),", ",(0,i.jsx)(n.code,{children:"danger"}),", ",(0,i.jsx)(n.code,{children:"info"}),", ",(0,i.jsx)(n.code,{children:"warning"}),". Optionally, you can specify an icon by passing a JSX element or a string, or a title:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",metastring:'title="MyReactPage.jsx"',children:'<Admonition type="tip" icon="\ud83d\udca1" title="Did you know...">\n  Use plugins to introduce shorter syntax for the most commonly used JSX\n  elements in your project.\n</Admonition>\n'})}),"\n",(0,i.jsx)(s.Z,{children:(0,i.jsx)(d.Z,{type:"tip",icon:"\ud83d\udca1",title:"Did you know...",children:(0,i.jsx)(n.p,{children:"Use plugins to introduce shorter syntax for the most commonly used JSX\nelements in your project."})})}),"\n",(0,i.jsx)(n.h2,{id:"customizing-admonitions",children:"Customizing admonitions"}),"\n",(0,i.jsxs)(n.p,{children:["There are two kinds of customizations possible with admonitions: ",(0,i.jsx)(n.strong,{children:"parsing"})," and ",(0,i.jsx)(n.strong,{children:"rendering"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"customizing-rendering-behavior",children:"Customizing rendering behavior"}),"\n",(0,i.jsxs)(n.p,{children:["You can customize how each individual admonition type is rendered through swizzling. You can often achieve your goal through a simple wrapper. For example, in the follow example, we swap out the icon for ",(0,i.jsx)(n.code,{children:"info"})," admonitions only."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",metastring:'title="src/theme/Admonition.js"',children:"import React from 'react';\nimport Admonition from '@theme-original/Admonition';\nimport MyCustomNoteIcon from '@site/static/img/info.svg';\n\nexport default function AdmonitionWrapper(props) {\n  if (props.type !== 'info') {\n    return <Admonition title=\"My Custom Admonition Title\" {...props} />;\n  }\n  return <Admonition icon={<MyCustomNoteIcon />} {...props} />;\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"customizing-parsing-behavior",children:"Customizing parsing behavior"}),"\n",(0,i.jsxs)(n.p,{children:["Admonitions are implemented with a Remark plugin. The plugin is designed to be configurable. To customize the Remark plugin for a specific content plugin (docs, blog, pages), pass the options through the ",(0,i.jsx)(n.code,{children:"admonitions"})," key."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="docusaurus.config.ts"',children:"export default {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          admonitions: {\n            keywords: ['note', 'tip', 'info', 'warning', 'danger'],\n            extendDefaults: true,\n          },\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"The plugin accepts the following options:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"keywords"}),": An array of keywords that can be used as the type for the admonition."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"extendDefaults"}),": Should the provided options (such as ",(0,i.jsx)(n.code,{children:"keywords"}),") be merged into the existing defaults. Defaults to ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"keyword"})," will be passed as the ",(0,i.jsx)(n.code,{children:"type"})," prop of the ",(0,i.jsx)(n.code,{children:"Admonition"})," component."]})]})}function x(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},59047:(e,n,t)=>{t.d(n,{Z:()=>I});var i=t(67294),o=t(85893);function s(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=i.Children.toArray(e),t=n.find((e=>i.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),s=n.filter((e=>e!==t)),r=t?.props.children;return{mdxAdmonitionTitle:r,rest:s.length>0?(0,o.jsx)(o.Fragment,{children:s}):null}}(e.children),s=e.title??n;return{...e,...s&&{title:s},children:t}}var r=t(36905),a=t(95999),d=t(35281);const l={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function c(e){let{type:n,className:t,children:i}=e;return(0,o.jsx)("div",{className:(0,r.Z)(d.k.common.admonition,d.k.common.admonitionType(n),l.admonition,t),children:i})}function u(e){let{icon:n,title:t}=e;return(0,o.jsxs)("div",{className:l.admonitionHeading,children:[(0,o.jsx)("span",{className:l.admonitionIcon,children:n}),t]})}function h(e){let{children:n}=e;return n?(0,o.jsx)("div",{className:l.admonitionContent,children:n}):null}function m(e){const{type:n,icon:t,title:i,children:s,className:r}=e;return(0,o.jsxs)(c,{type:n,className:r,children:[(0,o.jsx)(u,{title:i,icon:t}),(0,o.jsx)(h,{children:s})]})}function p(e){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const x={icon:(0,o.jsx)(p,{}),title:(0,o.jsx)(a.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function j(e){return(0,o.jsx)(m,{...x,...e,className:(0,r.Z)("alert alert--secondary",e.className),children:e.children})}function f(e){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const g={icon:(0,o.jsx)(f,{}),title:(0,o.jsx)(a.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function b(e){return(0,o.jsx)(m,{...g,...e,className:(0,r.Z)("alert alert--success",e.className),children:e.children})}function w(e){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const v={icon:(0,o.jsx)(w,{}),title:(0,o.jsx)(a.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function y(e){return(0,o.jsx)(m,{...v,...e,className:(0,r.Z)("alert alert--info",e.className),children:e.children})}function k(e){return(0,o.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const N={icon:(0,o.jsx)(k,{}),title:(0,o.jsx)(a.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function T(e){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const C={icon:(0,o.jsx)(T,{}),title:(0,o.jsx)(a.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const M={icon:(0,o.jsx)(k,{}),title:(0,o.jsx)(a.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const A={...{note:j,tip:b,info:y,warning:function(e){return(0,o.jsx)(m,{...N,...e,className:(0,r.Z)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,o.jsx)(m,{...C,...e,className:(0,r.Z)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,o.jsx)(j,{title:"secondary",...e}),important:e=>(0,o.jsx)(y,{title:"important",...e}),success:e=>(0,o.jsx)(b,{title:"success",...e}),caution:function(e){return(0,o.jsx)(m,{...M,...e,className:(0,r.Z)("alert alert--warning",e.className),children:e.children})}}};function I(e){const n=s(e),t=(i=n.type,A[i]||(console.warn(`No admonition component found for admonition type "${i}". Using Info as fallback.`),A.info));var i;return(0,o.jsx)(t,{...n})}},85162:(e,n,t)=>{t.d(n,{Z:()=>r});t(67294);var i=t(36905);const o={tabItem:"tabItem_Ymn6"};var s=t(85893);function r(e){let{children:n,hidden:t,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.Z)(o.tabItem,r),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var i=t(67294),o=t(36905),s=t(12466),r=t(16550),a=t(20469),d=t(91980),l=t(67392),c=t(50012);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:o}}=e;return{value:n,label:t,attributes:i,default:o}}))}(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const o=(0,r.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,d._X)(s),(0,i.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(o.location.search);n.set(s,e),o.replace({...o.location,search:n.toString()})}),[s,o])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,s=h(e),[r,d]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:s}))),[l,u]=p({queryString:t,groupId:o}),[x,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,s]=(0,c.Nk)(t);return[o,(0,i.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:o}),f=(()=>{const e=l??x;return m({value:e,tabValues:s})?e:null})();(0,a.Z)((()=>{f&&d(f)}),[f]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),j(e)}),[u,j,s]),tabValues:s}}var j=t(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(85893);function b(e){let{className:n,block:t,selectedValue:i,selectValue:r,tabValues:a}=e;const d=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.o5)(),c=e=>{const n=e.currentTarget,t=d.indexOf(n),o=a[t].value;o!==i&&(l(n),r(o))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>d.push(e),onKeyDown:u,onClick:c,...s,className:(0,o.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:o}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===o));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function v(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,o.Z)("tabs-container",f.tabList),children:[(0,g.jsx)(b,{...e,...n}),(0,g.jsx)(w,{...e,...n})]})}function y(e){const n=(0,j.Z)();return(0,g.jsx)(v,{...e,children:u(e.children)},String(n))}},51007:(e,n,t)=>{t.d(n,{Z:()=>r});t(67294);var i=t(86010);const o={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};var s=t(85893);function r(e){let{children:n,minHeight:t,url:r,style:a,bodyStyle:d}=e;return(0,s.jsxs)("div",{className:o.browserWindow,style:{...a,minHeight:t},children:[(0,s.jsxs)("div",{className:o.browserWindowHeader,children:[(0,s.jsxs)("div",{className:o.buttons,children:[(0,s.jsx)("span",{className:o.dot,style:{background:"#f25f58"}}),(0,s.jsx)("span",{className:o.dot,style:{background:"#fbbe3c"}}),(0,s.jsx)("span",{className:o.dot,style:{background:"#58cb42"}})]}),(0,s.jsx)("div",{className:(0,i.Z)(o.browserWindowAddressBar,"text--truncate"),children:r}),(0,s.jsx)("div",{className:o.browserWindowMenuIcon,children:(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:o.bar}),(0,s.jsx)("span",{className:o.bar}),(0,s.jsx)("span",{className:o.bar})]})})]}),(0,s.jsx)("div",{className:o.browserWindowBody,style:d,children:n})]})}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var i=t(67294);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);