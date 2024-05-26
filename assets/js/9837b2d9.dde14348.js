"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2101],{36515:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>u,toc:()=>b});var i=s(85893),l=s(11151),a=s(51007),t=s(66279),o=s(3901);const c={description:"Customizing headings and table-of-contents in Markdown"},d="Headings and Table of contents",u={id:"docusaurus-mdx/mdx-features/toc",title:"Headings and Table of contents",description:"Customizing headings and table-of-contents in Markdown",source:"@site/docs/docusaurus-mdx/mdx-features/toc.mdx",sourceDirName:"docusaurus-mdx/mdx-features",slug:"/docusaurus-mdx/mdx-features/toc",permalink:"/docs/docusaurus-mdx/mdx-features/toc",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{description:"Customizing headings and table-of-contents in Markdown"},sidebar:"docusaurusSidebar",previous:{title:"Admonitions",permalink:"/docs/docusaurus-mdx/mdx-features/admonitions"},next:{title:"Assets",permalink:"/docs/docusaurus-mdx/mdx-features/assets"}},r={},b=[{value:"Markdown headings",id:"markdown-headings",level:2},{value:"Heading IDs",id:"heading-ids",level:3},{value:"Table of contents heading level",id:"table-of-contents-heading-level",level:2},{value:"Inline table of contents",id:"inline-table-of-contents",level:2},{value:"Customizing table of contents generation",id:"customizing-table-of-contents-generation",level:2},{value:"Example Section 1",id:"example-section-1",level:2},{value:"Example Subsection 1 a",id:"example-subsection-1-a",level:3},{value:"Example subsubsection 1 a I",id:"example-subsubsection-1-a-i",level:4},{value:"Example subsubsection 1 a II",id:"example-subsubsection-1-a-ii",level:4},{value:"Example subsubsection 1 a III",id:"example-subsubsection-1-a-iii",level:4},{value:"Example Subsection 1 b",id:"example-subsection-1-b",level:3},{value:"Example subsubsection 1 b I",id:"example-subsubsection-1-b-i",level:4},{value:"Example subsubsection 1 b II",id:"example-subsubsection-1-b-ii",level:4},{value:"Example subsubsection 1 b III",id:"example-subsubsection-1-b-iii",level:4},{value:"Example Subsection 1 c",id:"example-subsection-1-c",level:3},{value:"Example subsubsection 1 c I",id:"example-subsubsection-1-c-i",level:4},{value:"Example subsubsection 1 c II",id:"example-subsubsection-1-c-ii",level:4},{value:"Example subsubsection 1 c III",id:"example-subsubsection-1-c-iii",level:4},{value:"Example Section 2",id:"example-section-2",level:2},{value:"Example Subsection 2 a",id:"example-subsection-2-a",level:3},{value:"Example subsubsection 2 a I",id:"example-subsubsection-2-a-i",level:4},{value:"Example subsubsection 2 a II",id:"example-subsubsection-2-a-ii",level:4},{value:"Example subsubsection 2 a III",id:"example-subsubsection-2-a-iii",level:4},{value:"Example Subsection 2 b",id:"example-subsection-2-b",level:3},{value:"Example subsubsection 2 b I",id:"example-subsubsection-2-b-i",level:4},{value:"Example subsubsection 2 b II",id:"example-subsubsection-2-b-ii",level:4},{value:"Example subsubsection 2 b III",id:"example-subsubsection-2-b-iii",level:4},{value:"Example Subsection 2 c",id:"example-subsection-2-c",level:3},{value:"Example subsubsection 2 c I",id:"example-subsubsection-2-c-i",level:4},{value:"Example subsubsection 2 c II",id:"example-subsubsection-2-c-ii",level:4},{value:"Example subsubsection 2 c III",id:"example-subsubsection-2-c-iii",level:4},{value:"Example Section 3",id:"example-section-3",level:2},{value:"Example Subsection 3 a",id:"example-subsection-3-a",level:3},{value:"Example subsubsection 3 a I",id:"example-subsubsection-3-a-i",level:4},{value:"Example subsubsection 3 a II",id:"example-subsubsection-3-a-ii",level:4},{value:"Example subsubsection 3 a III",id:"example-subsubsection-3-a-iii",level:4},{value:"Example Subsection 3 b",id:"example-subsection-3-b",level:3},{value:"Example subsubsection 3 b I",id:"example-subsubsection-3-b-i",level:4},{value:"Example subsubsection 3 b II",id:"example-subsubsection-3-b-ii",level:4},{value:"Example subsubsection 3 b III",id:"example-subsubsection-3-b-iii",level:4},{value:"Example Subsection 3 c",id:"example-subsection-3-c",level:3},{value:"Example subsubsection 3 c I",id:"example-subsubsection-3-c-i",level:4},{value:"Example subsubsection 3 c II",id:"example-subsubsection-3-c-ii",level:4},{value:"Example subsubsection 3 c III",id:"example-subsubsection-3-c-iii",level:4}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"headings-and-table-of-contents",children:"Headings and Table of contents"}),"\n",(0,i.jsx)(n.h2,{id:"markdown-headings",children:"Markdown headings"}),"\n",(0,i.jsx)(n.p,{children:"You can use regular Markdown headings."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-md",children:"## Level 2 title\n\n### Level 3 title\n\n#### Level 4 title\n"})}),"\n",(0,i.jsx)(n.p,{children:"Each Markdown heading will appear as a table of contents entry."}),"\n",(0,i.jsx)(n.h3,{id:"heading-ids",children:"Heading IDs"}),"\n",(0,i.jsx)(n.p,{children:"Each heading has an ID that can be automatically generated or explicitly specified. Heading IDs allow you to link to a specific document heading in Markdown or JSX:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-md",children:"[link](#heading-id)\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:'<Link to="#heading-id">link</Link>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["By default, Docusaurus will generate heading IDs for you, based on the heading text. For example, ",(0,i.jsx)(n.code,{children:"### Hello World"})," will have ID ",(0,i.jsx)(n.code,{children:"hello-world"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Generated IDs have ",(0,i.jsx)(n.strong,{children:"some limitations"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The ID might not look good"}),"\n",(0,i.jsxs)(n.li,{children:["You might want to ",(0,i.jsx)(n.strong,{children:"change or translate"})," the text without updating the existing ID"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["A special Markdown syntax lets you set an ",(0,i.jsx)(n.strong,{children:"explicit heading id"}),":"]}),"\n",(0,i.jsx)(t.Z,{language:"md",children:"### Hello World {#my-explicit-id}\n"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"write-heading-ids"})})," CLI command to add explicit IDs to all your Markdown documents."]})}),"\n",(0,i.jsx)(n.admonition,{title:"Avoid colliding IDs",type:"warning",children:(0,i.jsx)(n.p,{children:"Generated heading IDs will be guaranteed to be unique on each page, but if you use custom IDs, make sure each one appears exactly once on each page, or there will be two DOM elements with the same ID, which is invalid HTML semantics, and will lead to one heading being unlinkable."})}),"\n",(0,i.jsx)(n.h2,{id:"table-of-contents-heading-level",children:"Table of contents heading level"}),"\n",(0,i.jsx)(n.p,{children:"Each Markdown document displays a table of contents on the top-right corner. By default, this table only shows h2 and h3 headings, which should be sufficient for an overview of the page structure. In case you need to change the range of headings displayed, you can customize the minimum and maximum heading level \u2014 either per page or globally."}),"\n",(0,i.jsxs)(n.p,{children:["To set the heading level for a particular page, use the ",(0,i.jsx)(n.code,{children:"toc_min_heading_level"})," and ",(0,i.jsx)(n.code,{children:"toc_max_heading_level"})," front matter."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-md",metastring:'title="myDoc.md"',children:"---\n# Display h2 to h5 headings\ntoc_min_heading_level: 2\ntoc_max_heading_level: 5\n---\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To set the heading level for ",(0,i.jsx)(n.em,{children:"all"})," pages, use the ",(0,i.jsx)(n.code,{children:"themeConfig.tableOfContents"})," option."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="docusaurus.config.ts"',children:"export default {\n  themeConfig: {\n    tableOfContents: {\n      // highlight-start\n      minHeadingLevel: 2,\n      maxHeadingLevel: 5,\n      // highlight-end\n    },\n  },\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"If you've set the options globally, you can still override them locally via front matter."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"themeConfig"})," option would apply to all TOC on the site, including ",(0,i.jsx)(n.a,{href:"#inline-table-of-contents",children:"inline TOC"}),", but front matter options only affect the top-right TOC. You need to use the ",(0,i.jsx)(n.code,{children:"minHeadingLevel"})," and ",(0,i.jsx)(n.code,{children:"maxHeadingLevel"})," props to customize each ",(0,i.jsx)(n.code,{children:"<TOCInline />"})," component."]})}),"\n",(0,i.jsx)(n.h2,{id:"inline-table-of-contents",children:"Inline table of contents"}),"\n",(0,i.jsx)(n.p,{children:"It is also possible to display an inline table of contents directly inside a Markdown document, thanks to MDX."}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"toc"})," variable is available in any MDX document and contains all the headings of an MDX document. By default, only ",(0,i.jsx)(n.code,{children:"h2"})," and ",(0,i.jsx)(n.code,{children:"h3"})," headings are displayed in the TOC. You can change which heading levels are visible by setting ",(0,i.jsx)(n.code,{children:"minHeadingLevel"})," or ",(0,i.jsx)(n.code,{children:"maxHeadingLevel"})," for individual ",(0,i.jsx)(n.code,{children:"TOCInline"})," components."]}),"\n","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"import TOCInline from '@theme/TOCInline';\n\n<TOCInline toc={toc} />\n"})}),"\n","\n",(0,i.jsx)(a.Z,{children:(0,i.jsx)(o.Z,{toc:b})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"toc"})," global is just a list of heading items:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"declare const toc: {\n  value: string;\n  id: string;\n  level: number;\n}[];\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note that the ",(0,i.jsx)(n.code,{children:"toc"})," global is a flat array, so you can easily cut out unwanted nodes or insert extra nodes, and create a new TOC tree."]}),"\n","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"import TOCInline from '@theme/TOCInline';\n\n<TOCInline\n  // Only show h2 and h4 headings\n  toc={toc.filter((node) => node.level === 2 || node.level === 4)}\n  minHeadingLevel={2}\n  // Show h4 headings in addition to the default h2 and h3 headings\n  maxHeadingLevel={4}\n/>\n"})}),"\n",(0,i.jsx)(a.Z,{children:(0,i.jsx)(o.Z,{toc:b.filter((e=>2===e.level||4===e.level)),minHeadingLevel:2,maxHeadingLevel:4})}),"\n",(0,i.jsx)(n.h2,{id:"customizing-table-of-contents-generation",children:"Customizing table of contents generation"}),"\n",(0,i.jsx)(n.p,{children:"The table-of-contents is generated by parsing the Markdown source with a Remark plugin. There are known edge-cases where it generates false-positives and false-negatives."}),"\n",(0,i.jsxs)(n.p,{children:["Markdown headings within hideable areas will still show up in the TOC. For example, headings within ",(0,i.jsx)(n.code,{children:"Tabs"})," and ",(0,i.jsx)(n.code,{children:"details"})," will not be excluded."]}),"\n",(0,i.jsx)(n.p,{children:"Non-Markdown headings will not show up in the TOC. This can be used to your advantage to tackle the aforementioned issue."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-md",children:'<details>\n<summary>Some details containing headings</summary>\n<h2 id="#heading-id">I\'m a heading that will not show up in the TOC</h2>\n\nSome content...\n\n</details>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ability to ergonomically insert extra headings or ignore certain headings is a work-in-progress. If this feature is important to you, please report your use-case in ",(0,i.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/issues/6201",children:"this issue"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Below is just some dummy content to have more table of contents items available on the current page."})}),"\n",(0,i.jsx)(n.h2,{id:"example-section-1",children:"Example Section 1"}),"\n",(0,i.jsx)(n.p,{children:"Lorem ipsum"}),"\n",(0,i.jsx)(n.h3,{id:"example-subsection-1-a",children:"Example Subsection 1 a"}),"\n",(0,i.jsx)(n.p,{children:"Lorem ipsum"}),"\n",(0,i.jsx)(n.h4,{id:"example-subsubsection-1-a-i",children:"Example subsubsection 1 a I"}),"\n",(0,i.jsx)(n.h4,{id:"example-subsubsection-1-a-ii",children:"Example subsubsection 1 a II"}),"\n",(0,i.jsx)(n.h4,{id:"example-subsubsection-1-a-iii",children:"Example subsubsection 1 a III"}),"\n",(0,i.jsx)(n.h3,{id:"example-subsection-1-b",children:"Example Subsection 1 b"}),"\n",(0,i.jsx)(n.p,{children:"Lorem ipsum"}),"\n",(0,i.jsx)(n.h4,{id:"example-subsubsection-1-b-i",children:"Example subsubsection 1 b I"}),"\n",(0,i.jsx)(n.h4,{id:"example-subsubsection-1-b-ii",children:"Example subsubsection 1 b II"}),"\n",(0,i.jsx)(n.h4,{id:"example-subsubsection-1-b-iii",children:"Example subsubsection 1 b III"}),"\n",(0,i.jsx)(n.h3,{id:"example-subsection-1-c",children:"Example Subsection 1 c"}),"\n",(0,i.jsx)(n.p,{children:"Lorem ipsum"}),"\n",(0,i.jsx)(n.h4,{id:"example-subsubsection-1-c-i",children:"Example subsubsection 1 c I"}),"\n",(0,i.jsx)(n.h4,{id:"example-subsubsection-1-c-ii",children:"Example subsubsection 1 c II"}),"\n",(0,i.jsx)(n.h4,{id:"example-subsubsection-1-c-iii",children:"Example subsubsection 1 c III"}),"\n",(0,i.jsx)(n.h2,{id:"example-section-2",children:"Example Section 2"}),"\n",(0,i.jsx)(n.p,{children:"Lorem ipsum"}),"\n",(0,i.jsx)(n.h3,{id:"example-subsection-2-a",children:"Example Subsection 2 a"}),"\n",(0,i.jsx)(n.p,{children:"Lorem ipsum"}),"\n",(0,i.jsx)(n.h4,{id:"example-subsubsection-2-a-i",children:"Example subsubsection 2 a I"}),"\n",(0,i.jsx)(n.h4,{id:"example-subsubsection-2-a-ii",children:"Example subsubsection 2 a II"}),"\n",(0,i.jsx)(n.h4,{id:"example-subsubsection-2-a-iii",children:"Example subsubsection 2 a III"}),"\n",(0,i.jsx)(n.h3,{id:"example-subsection-2-b",children:"Example Subsection 2 b"}),"\n",(0,i.jsx)(n.p,{children:"Lorem ipsum"}),"\n",(0,i.jsx)(n.h4,{id:"example-subsubsection-2-b-i",children:"Example subsubsection 2 b I"}),"\n",(0,i.jsx)(n.h4,{id:"example-subsubsection-2-b-ii",children:"Example subsubsection 2 b II"}),"\n",(0,i.jsx)(n.h4,{id:"example-subsubsection-2-b-iii",children:"Example subsubsection 2 b III"}),"\n",(0,i.jsx)(n.h3,{id:"example-subsection-2-c",children:"Example Subsection 2 c"}),"\n",(0,i.jsx)(n.p,{children:"Lorem ipsum"}),"\n",(0,i.jsx)(n.h4,{id:"example-subsubsection-2-c-i",children:"Example subsubsection 2 c I"}),"\n",(0,i.jsx)(n.h4,{id:"example-subsubsection-2-c-ii",children:"Example subsubsection 2 c II"}),"\n",(0,i.jsx)(n.h4,{id:"example-subsubsection-2-c-iii",children:"Example subsubsection 2 c III"}),"\n",(0,i.jsx)(n.h2,{id:"example-section-3",children:"Example Section 3"}),"\n",(0,i.jsx)(n.p,{children:"Lorem ipsum"}),"\n",(0,i.jsx)(n.h3,{id:"example-subsection-3-a",children:"Example Subsection 3 a"}),"\n",(0,i.jsx)(n.p,{children:"Lorem ipsum"}),"\n",(0,i.jsx)(n.h4,{id:"example-subsubsection-3-a-i",children:"Example subsubsection 3 a I"}),"\n",(0,i.jsx)(n.h4,{id:"example-subsubsection-3-a-ii",children:"Example subsubsection 3 a II"}),"\n",(0,i.jsx)(n.h4,{id:"example-subsubsection-3-a-iii",children:"Example subsubsection 3 a III"}),"\n",(0,i.jsx)(n.h3,{id:"example-subsection-3-b",children:"Example Subsection 3 b"}),"\n",(0,i.jsx)(n.p,{children:"Lorem ipsum"}),"\n",(0,i.jsx)(n.h4,{id:"example-subsubsection-3-b-i",children:"Example subsubsection 3 b I"}),"\n",(0,i.jsx)(n.h4,{id:"example-subsubsection-3-b-ii",children:"Example subsubsection 3 b II"}),"\n",(0,i.jsx)(n.h4,{id:"example-subsubsection-3-b-iii",children:"Example subsubsection 3 b III"}),"\n",(0,i.jsx)(n.h3,{id:"example-subsection-3-c",children:"Example Subsection 3 c"}),"\n",(0,i.jsx)(n.p,{children:"Lorem ipsum"}),"\n",(0,i.jsx)(n.h4,{id:"example-subsubsection-3-c-i",children:"Example subsubsection 3 c I"}),"\n",(0,i.jsx)(n.h4,{id:"example-subsubsection-3-c-ii",children:"Example subsubsection 3 c II"}),"\n",(0,i.jsx)(n.h4,{id:"example-subsubsection-3-c-iii",children:"Example subsubsection 3 c III"})]})}function m(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},66279:(e,n,s)=>{s.d(n,{Z:()=>o});var i=s(67294),l=s(79057),a=s(85893);function t(e){return(0,a.jsx)("code",{...e})}function o(e){return function(e){return void 0!==e.children&&i.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,a.jsx)(t,{...e}):(0,a.jsx)(l.Z,{...e})}},3901:(e,n,s)=>{s.d(n,{Z:()=>t});s(67294);var i=s(93743);const l={tableOfContentsInline:"tableOfContentsInline_prmo"};var a=s(85893);function t(e){let{toc:n,minHeadingLevel:s,maxHeadingLevel:t}=e;return(0,a.jsx)("div",{className:l.tableOfContentsInline,children:(0,a.jsx)(i.Z,{toc:n,minHeadingLevel:s,maxHeadingLevel:t,className:"table-of-contents",linkClassName:null})})}},93743:(e,n,s)=>{s.d(n,{Z:()=>x});var i=s(67294),l=s(86668);function a(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),s=Array(7).fill(-1);n.forEach(((e,n)=>{const i=s.slice(2,e.level);e.parentIndex=Math.max(...i),s[e.level]=n}));const i=[];return n.forEach((e=>{const{parentIndex:s,...l}=e;s>=0?n[s].children.push(l):i.push(l)})),i}function t(e){let{toc:n,minHeadingLevel:s,maxHeadingLevel:i}=e;return n.flatMap((e=>{const n=t({toc:e.children,minHeadingLevel:s,maxHeadingLevel:i});return function(e){return e.level>=s&&e.level<=i}(e)?[{...e,children:n}]:n}))}function o(e){const n=e.getBoundingClientRect();return n.top===n.bottom?o(e.parentNode):n}function c(e,n){let{anchorTopOffset:s}=n;const i=e.find((e=>o(e).top>=s));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function d(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,l.L)();return(0,i.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function u(e){const n=(0,i.useRef)(void 0),s=d();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:l,minHeadingLevel:a,maxHeadingLevel:t}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),o=function(e){let{minHeadingLevel:n,maxHeadingLevel:s}=e;const i=[];for(let l=n;l<=s;l+=1)i.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:a,maxHeadingLevel:t}),d=c(o,{anchorTopOffset:s.current}),u=e.find((e=>d&&d.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,s){s?(n.current&&n.current!==e&&n.current.classList.remove(l),e.classList.add(l),n.current=e):e.classList.remove(l)}(e,e===u)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,s])}var r=s(33692),b=s(85893);function h(e){let{toc:n,className:s,linkClassName:i,isChild:l}=e;return n.length?(0,b.jsx)("ul",{className:l?void 0:s,children:n.map((e=>(0,b.jsxs)("li",{children:[(0,b.jsx)(r.Z,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,b.jsx)(h,{isChild:!0,toc:e.children,className:s,linkClassName:i})]},e.id)))}):null}const m=i.memo(h);function x(e){let{toc:n,className:s="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:d,maxHeadingLevel:r,...h}=e;const x=(0,l.L)(),p=d??x.tableOfContents.minHeadingLevel,g=r??x.tableOfContents.maxHeadingLevel,v=function(e){let{toc:n,minHeadingLevel:s,maxHeadingLevel:l}=e;return(0,i.useMemo)((()=>t({toc:a(n),minHeadingLevel:s,maxHeadingLevel:l})),[n,s,l])}({toc:n,minHeadingLevel:p,maxHeadingLevel:g});return u((0,i.useMemo)((()=>{if(o&&c)return{linkClassName:o,linkActiveClassName:c,minHeadingLevel:p,maxHeadingLevel:g}}),[o,c,p,g])),(0,b.jsx)(m,{toc:v,className:s,linkClassName:o,...h})}},51007:(e,n,s)=>{s.d(n,{Z:()=>t});s(67294);var i=s(86010);const l={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};var a=s(85893);function t(e){let{children:n,minHeight:s,url:t,style:o,bodyStyle:c}=e;return(0,a.jsxs)("div",{className:l.browserWindow,style:{...o,minHeight:s},children:[(0,a.jsxs)("div",{className:l.browserWindowHeader,children:[(0,a.jsxs)("div",{className:l.buttons,children:[(0,a.jsx)("span",{className:l.dot,style:{background:"#f25f58"}}),(0,a.jsx)("span",{className:l.dot,style:{background:"#fbbe3c"}}),(0,a.jsx)("span",{className:l.dot,style:{background:"#58cb42"}})]}),(0,a.jsx)("div",{className:(0,i.Z)(l.browserWindowAddressBar,"text--truncate"),children:t}),(0,a.jsx)("div",{className:l.browserWindowMenuIcon,children:(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:l.bar}),(0,a.jsx)("span",{className:l.bar}),(0,a.jsx)("span",{className:l.bar})]})})]}),(0,a.jsx)("div",{className:l.browserWindowBody,style:c,children:n})]})}},28996:(e,n,s)=>{s.d(n,{Z:()=>o});var i={};s.r(i),s.d(i,{ButtonExample:()=>t});var l=s(67294),a=s(85893);function t(e){return(0,a.jsx)("button",{type:"button",...e,style:{backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer",...e.style}})}const o={React:l,...l,...i}}}]);