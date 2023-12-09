"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[859],{7136:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>j,frontMatter:()=>c,metadata:()=>h,toc:()=>u});var s=t(5893),d=t(1151),r=t(4866),i=t(5162),l=t(869);const c={sidebar_position:2,id:"blog"},o="\ud83d\udce6 plugin-content-blog",h={id:"docusaurus-mdx/plugin-contents/blog",title:"\ud83d\udce6 plugin-content-blog",description:"Provides the Blog feature and is the default blog plugin for Docusaurus.",source:"@site/docs/docusaurus-mdx/plugin-contents/blog.mdx",sourceDirName:"docusaurus-mdx/plugin-contents",slug:"/docusaurus-mdx/plugin-contents/blog",permalink:"/site/zh-CN/docs/docusaurus-mdx/plugin-contents/blog",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"blog"},sidebar:"docusaurusSidebar",previous:{title:"\ud83d\udce6 plugin-content-docs",permalink:"/site/zh-CN/docs/docusaurus-mdx/plugin-contents/docs"},next:{title:"\ud83d\udce6 plugin-content-pages",permalink:"/site/zh-CN/docs/docusaurus-mdx/plugin-contents/pages"}},a={},u=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Types",id:"types",level:3},{value:"<code>EditUrlFn</code>",id:"EditUrlFn",level:4},{value:"<code>ReadingTimeFn</code>",id:"ReadingTimeFn",level:4},{value:"<code>FeedType</code>",id:"FeedType",level:4},{value:"<code>CreateFeedItemsFn</code>",id:"CreateFeedItemsFn",level:4},{value:"Example configuration",id:"ex-config",level:3},{value:"Markdown front matter",id:"markdown-front-matter",level:2},{value:"i18n",id:"i18n",level:2},{value:"Translation files location",id:"translation-files-location",level:3},{value:"Example file-system structure",id:"example-file-system-structure",level:3}];function x(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"-plugin-content-blog",children:"\ud83d\udce6 plugin-content-blog"}),"\n","\n","\n",(0,s.jsxs)(n.p,{children:["Provides the ",(0,s.jsx)(n.a,{href:"/site/zh-CN/docs/docusaurus-mdx/plugin-contents/blog",children:"Blog"})," feature and is the default blog plugin for Docusaurus."]}),"\n",(0,s.jsx)(n.admonition,{title:"some features production only",type:"warning",children:(0,s.jsxs)(n.p,{children:["The feed feature works by extracting the build output, and is ",(0,s.jsx)(n.strong,{children:"only active in production"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(r.Z,{children:[(0,s.jsx)(i.Z,{value:"npm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install --save @docusaurus/plugin-content-blog\n"})})}),(0,s.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn add @docusaurus/plugin-content-blog\n"})})}),(0,s.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm add @docusaurus/plugin-content-blog\n"})})})]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["If you use the preset ",(0,s.jsx)(n.code,{children:"@docusaurus/preset-classic"}),", you don't need to install this plugin as a dependency."]}),(0,s.jsxs)(n.p,{children:["You can configure this plugin through the ",(0,s.jsx)(n.a,{href:"#ex-config-preset",children:"preset options"}),"."]})]}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.p,{children:"Accepted fields:"}),"\n",(0,s.jsx)(l.Z,{children:(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"path"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'blog'"})}),(0,s.jsx)(n.td,{children:"Path to the blog content directory on the file system, relative to site dir."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"editUrl"})}),(0,s.jsx)(n.td,{children:(0,s.jsxs)("code",{children:["string | ",(0,s.jsx)("a",{href:"#EditUrlFn",children:"EditUrlFn"})]})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})}),(0,s.jsxs)(n.td,{children:["Base URL to edit your site. The final URL is computed by ",(0,s.jsx)(n.code,{children:"editUrl + relativePostPath"}),". Using a function allows more nuanced control for each file. Omitting this variable entirely will disable edit links."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"editLocalizedFiles"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsxs)(n.td,{children:["The edit URL will target the localized file, instead of the original unlocalized file. Ignored when ",(0,s.jsx)(n.code,{children:"editUrl"})," is a function."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"blogTitle"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'Blog'"})}),(0,s.jsx)(n.td,{children:"Blog page title for better SEO."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"blogDescription"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'Blog'"})}),(0,s.jsx)(n.td,{children:"Blog page meta description for better SEO."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"blogSidebarCount"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"number | 'ALL'"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"5"})}),(0,s.jsxs)(n.td,{children:["Number of blog post elements to show in the blog sidebar. ",(0,s.jsx)(n.code,{children:"'ALL'"})," to show all blog posts; ",(0,s.jsx)(n.code,{children:"0"})," to disable."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"blogSidebarTitle"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'Recent posts'"})}),(0,s.jsx)(n.td,{children:"Title of the blog sidebar."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"routeBasePath"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'blog'"})}),(0,s.jsxs)(n.td,{children:["URL route for the blog section of your site. ",(0,s.jsx)(n.strong,{children:"DO NOT"})," include a trailing slash. Use ",(0,s.jsx)(n.code,{children:"/"})," to put the blog at root path."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"tagsBasePath"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'tags'"})}),(0,s.jsxs)(n.td,{children:["URL route for the tags section of your blog. Will be appended to ",(0,s.jsx)(n.code,{children:"routeBasePath"}),". ",(0,s.jsx)(n.strong,{children:"DO NOT"})," include a trailing slash."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"archiveBasePath"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"string | null"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'archive'"})}),(0,s.jsxs)(n.td,{children:["URL route for the archive section of your blog. Will be appended to ",(0,s.jsx)(n.code,{children:"routeBasePath"}),". ",(0,s.jsx)(n.strong,{children:"DO NOT"})," include a trailing slash. Use ",(0,s.jsx)(n.code,{children:"null"})," to disable generation of archive."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"include"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string[]"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"['**/*.{md,mdx}']"})}),(0,s.jsx)(n.td,{children:"Array of glob patterns matching Markdown files to be built, relative to the content path."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"exclude"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string[]"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:"See example configuration"})}),(0,s.jsxs)(n.td,{children:["Array of glob patterns matching Markdown files to be excluded. Serves as refinement based on the ",(0,s.jsx)(n.code,{children:"include"})," option."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"postsPerPage"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"number | 'ALL'"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"10"})}),(0,s.jsxs)(n.td,{children:["Number of posts to show per page in the listing page. Use ",(0,s.jsx)(n.code,{children:"'ALL'"})," to display all posts on one listing page."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"blogListComponent"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'@theme/BlogListPage'"})}),(0,s.jsx)(n.td,{children:"Root component of the blog listing page."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"blogPostComponent"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'@theme/BlogPostPage'"})}),(0,s.jsx)(n.td,{children:"Root component of each blog post page."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"blogTagsListComponent"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'@theme/BlogTagsListPage'"})}),(0,s.jsx)(n.td,{children:"Root component of the tags list page."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"blogTagsPostsComponent"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'@theme/BlogTagsPostsPage'"})}),(0,s.jsx)(n.td,{children:'Root component of the "posts containing tag" page.'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"blogArchiveComponent"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'@theme/BlogArchivePage'"})}),(0,s.jsx)(n.td,{children:"Root component of the blog archive page."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"remarkPlugins"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"any[]"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"[]"})}),(0,s.jsx)(n.td,{children:"Remark plugins passed to MDX."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"rehypePlugins"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"any[]"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"[]"})}),(0,s.jsx)(n.td,{children:"Rehype plugins passed to MDX."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"beforeDefaultRemarkPlugins"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"any[]"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"[]"})}),(0,s.jsx)(n.td,{children:"Custom Remark plugins passed to MDX before the default Docusaurus Remark plugins."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"beforeDefaultRehypePlugins"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"any[]"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"[]"})}),(0,s.jsx)(n.td,{children:"Custom Rehype plugins passed to MDX before the default Docusaurus Rehype plugins."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"truncateMarker"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"RegExp"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"/\x3c!--\\s*truncate\\s*--\x3e/"})," | ",(0,s.jsx)(n.code,{children:"\\{\\/\\*\\s*truncate\\s*\\*\\/\\}/"})]}),(0,s.jsx)(n.td,{children:"Truncate marker marking where the summary ends."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"showReadingTime"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"true"})}),(0,s.jsx)(n.td,{children:"Show estimated reading time for the blog post."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"readingTime"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ReadingTimeFn"})}),(0,s.jsx)(n.td,{children:"The default reading time"}),(0,s.jsx)(n.td,{children:"A callback to customize the reading time number displayed."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"authorsMapPath"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'authors.yml'"})}),(0,s.jsx)(n.td,{children:"Path to the authors map file, relative to the blog content directory."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"feedOptions"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:"See below"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"{type: ['rss', 'atom']}"})}),(0,s.jsx)(n.td,{children:"Blog feed."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"feedOptions.type"})}),(0,s.jsx)(n.td,{children:(0,s.jsxs)("code",{children:[(0,s.jsx)("a",{href:"#FeedType",children:"FeedType"})," | ",(0,s.jsx)("a",{href:"#FeedType",children:"FeedType"}),"[] | 'all' | null"]})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Required"})}),(0,s.jsxs)(n.td,{children:["Type of feed to be generated. Use ",(0,s.jsx)(n.code,{children:"null"})," to disable generation."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"feedOptions.createFeedItems"})}),(0,s.jsx)(n.td,{children:(0,s.jsxs)("code",{children:[(0,s.jsx)("a",{href:"#CreateFeedItemsFn",children:"CreateFeedItemsFn"})," | undefined"]})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})}),(0,s.jsx)(n.td,{children:"An optional function which can be used to transform and / or filter the items in the feed."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"feedOptions.limit"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"number | null | false"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"20"})}),(0,s.jsxs)(n.td,{children:["Limits the feed to the specified number of posts, ",(0,s.jsx)(n.code,{children:"false"})," or ",(0,s.jsx)(n.code,{children:"null"})," for all entries. Defaults to ",(0,s.jsx)(n.code,{children:"20"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"feedOptions.title"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"siteConfig.title"})}),(0,s.jsx)(n.td,{children:"Title of the feed."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"feedOptions.description"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"`${siteConfig.title} Blog`"})}),(0,s.jsx)(n.td,{children:"Description of the feed."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"feedOptions.copyright"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})}),(0,s.jsx)(n.td,{children:"Copyright message."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"feedOptions.language"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"string"})," (See ",(0,s.jsx)(n.a,{href:"http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes",children:"documentation"})," for possible values)"]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})}),(0,s.jsx)(n.td,{children:"Language metadata of the feed."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"sortPosts"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"'descending' | 'ascending' "})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'descending'"})}),(0,s.jsx)(n.td,{children:"Governs the direction of blog post sorting."})]})]})]})}),"\n",(0,s.jsx)(n.h3,{id:"types",children:"Types"}),"\n",(0,s.jsx)(n.h4,{id:"EditUrlFn",children:(0,s.jsx)(n.code,{children:"EditUrlFn"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type EditUrlFunction = (params: {\n  blogDirPath: string;\n  blogPath: string;\n  permalink: string;\n  locale: string;\n}) => string | undefined;\n"})}),"\n",(0,s.jsx)(n.h4,{id:"ReadingTimeFn",children:(0,s.jsx)(n.code,{children:"ReadingTimeFn"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type ReadingTimeOptions = {\n  wordsPerMinute: number;\n  wordBound: (char: string) => boolean;\n};\n\ntype ReadingTimeCalculator = (params: {\n  content: string;\n  frontMatter?: BlogPostFrontMatter & Record<string, unknown>;\n  options?: ReadingTimeOptions;\n}) => number;\n\ntype ReadingTimeFn = (params: {\n  content: string;\n  frontMatter: BlogPostFrontMatter & Record<string, unknown>;\n  defaultReadingTime: ReadingTimeCalculator;\n}) => number | undefined;\n"})}),"\n",(0,s.jsx)(n.h4,{id:"FeedType",children:(0,s.jsx)(n.code,{children:"FeedType"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type FeedType = 'rss' | 'atom' | 'json';\n"})}),"\n",(0,s.jsx)(n.h4,{id:"CreateFeedItemsFn",children:(0,s.jsx)(n.code,{children:"CreateFeedItemsFn"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type CreateFeedItemsFn = (params: {\n  blogPosts: BlogPost[];\n  siteConfig: DocusaurusConfig;\n  outDir: string;\n  defaultCreateFeedItemsFn: CreateFeedItemsFn;\n}) => Promise<BlogFeedItem[]>;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"ex-config",children:"Example configuration"}),"\n",(0,s.jsx)(n.p,{children:"You can configure this plugin through preset options or plugin options."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Most Docusaurus users configure this plugin through the preset options."})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:"config-tabs",children:"// Preset Options: blog\n// Plugin Options: @docusaurus/plugin-content-blog\n\nconst config = {\n  path: 'blog',\n  // Simple use-case: string editUrl\n  // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',\n  // Advanced use-case: functional editUrl\n  editUrl: ({locale, blogDirPath, blogPath, permalink}) =>\n    `https://github.com/facebook/docusaurus/edit/main/website/${blogDirPath}/${blogPath}`,\n  editLocalizedFiles: false,\n  blogTitle: 'Blog title',\n  blogDescription: 'Blog',\n  blogSidebarCount: 5,\n  blogSidebarTitle: 'All our posts',\n  routeBasePath: 'blog',\n  include: ['**/*.{md,mdx}'],\n  exclude: [\n    '**/_*.{js,jsx,ts,tsx,md,mdx}',\n    '**/_*/**',\n    '**/*.test.{js,jsx,ts,tsx}',\n    '**/__tests__/**',\n  ],\n  postsPerPage: 10,\n  blogListComponent: '@theme/BlogListPage',\n  blogPostComponent: '@theme/BlogPostPage',\n  blogTagsListComponent: '@theme/BlogTagsListPage',\n  blogTagsPostsComponent: '@theme/BlogTagsPostsPage',\n  remarkPlugins: [require('./my-remark-plugin')],\n  rehypePlugins: [],\n  beforeDefaultRemarkPlugins: [],\n  beforeDefaultRehypePlugins: [],\n  truncateMarker: /\x3c!--\\s*(truncate)\\s*--\x3e/,\n  showReadingTime: true,\n  feedOptions: {\n    type: '',\n    title: '',\n    description: '',\n    copyright: '',\n    language: undefined,\n    createFeedItems: async (params) => {\n      const {blogPosts, defaultCreateFeedItems, ...rest} = params;\n      return defaultCreateFeedItems({\n        // keep only the 10 most recent blog posts in the feed\n        blogPosts: blogPosts.filter((item, index) => index < 10),\n        ...rest,\n      });\n    },\n  },\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"markdown-front-matter",children:"Markdown front matter"}),"\n",(0,s.jsxs)(n.p,{children:["Markdown documents can use the following Markdown front matter metadata fields, enclosed by a line ",(0,s.jsx)(n.code,{children:"---"})," on either side."]}),"\n",(0,s.jsx)(n.p,{children:"Accepted fields:"}),"\n",(0,s.jsx)(l.Z,{children:(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"authors"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Authors"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})}),(0,s.jsxs)(n.td,{children:["List of blog post authors (or unique author). Read the ",(0,s.jsx)(n.code,{children:"authors"})," guide for more explanations. Prefer ",(0,s.jsx)(n.code,{children:"authors"})," over the ",(0,s.jsx)(n.code,{children:"author_*"})," front matter fields, even for single author blog posts."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"author"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})}),(0,s.jsxs)(n.td,{children:["\u26a0\ufe0f Prefer using ",(0,s.jsx)(n.code,{children:"authors"}),". The blog post author's name."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"author_url"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})}),(0,s.jsxs)(n.td,{children:["\u26a0\ufe0f Prefer using ",(0,s.jsx)(n.code,{children:"authors"}),". The URL that the author's name will be linked to. This could be a GitHub, Twitter, Facebook profile URL, etc."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"author_image_url"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})}),(0,s.jsxs)(n.td,{children:["\u26a0\ufe0f Prefer using ",(0,s.jsx)(n.code,{children:"authors"}),". The URL to the author's thumbnail image."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"author_title"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})}),(0,s.jsxs)(n.td,{children:["\u26a0\ufe0f Prefer using ",(0,s.jsx)(n.code,{children:"authors"}),". A description of the author."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"title"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"Markdown title"}),(0,s.jsx)(n.td,{children:"The blog post title."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"date"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"File name or file creation time"}),(0,s.jsxs)(n.td,{children:["The blog post creation date. If not specified, this can be extracted from the file or folder name, e.g, ",(0,s.jsx)(n.code,{children:"2021-04-15-blog-post.mdx"}),", ",(0,s.jsx)(n.code,{children:"2021-04-15-blog-post/index.mdx"}),", ",(0,s.jsx)(n.code,{children:"2021/04/15/blog-post.mdx"}),". Otherwise, it is the Markdown file creation time."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"tags"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Tag[]"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})}),(0,s.jsxs)(n.td,{children:["A list of strings or objects of two string fields ",(0,s.jsx)(n.code,{children:"label"})," and ",(0,s.jsx)(n.code,{children:"permalink"})," to tag to your post."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"draft"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsx)(n.td,{children:"Draft blog posts will only be available during development."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"unlisted"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsx)(n.td,{children:'Unlisted blog posts will be available in both development and production. They will be "hidden" in production, not indexed, excluded from sitemaps, and can only be accessed by users having a direct link.'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"hide_table_of_contents"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsx)(n.td,{children:"Whether to hide the table of contents to the right."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"toc_min_heading_level"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"number"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"2"})}),(0,s.jsx)(n.td,{children:"The minimum heading level shown in the table of contents. Must be between 2 and 6 and lower or equal to the max value."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"toc_max_heading_level"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"number"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"3"})}),(0,s.jsx)(n.td,{children:"The max heading level shown in the table of contents. Must be between 2 and 6."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"keywords"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string[]"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})}),(0,s.jsxs)(n.td,{children:["Keywords meta tag, which will become the ",(0,s.jsx)(n.code,{children:'<meta name="keywords" content="keyword1,keyword2,..."/>'})," in ",(0,s.jsx)(n.code,{children:"<head>"}),", used by search engines."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"description"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"The first line of Markdown content"}),(0,s.jsxs)(n.td,{children:["The description of your document, which will become the ",(0,s.jsx)(n.code,{children:'<meta name="description" content="..."/>'})," and ",(0,s.jsx)(n.code,{children:'<meta property="og:description" content="..."/>'})," in ",(0,s.jsx)(n.code,{children:"<head>"}),", used by search engines."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"image"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})}),(0,s.jsx)(n.td,{children:"Cover or thumbnail image that will be used when displaying the link to your post."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"slug"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"File path"}),(0,s.jsxs)(n.td,{children:["Allows to customize the blog post URL (",(0,s.jsx)(n.code,{children:"/<routeBasePath>/<slug>"}),"). Support multiple patterns: ",(0,s.jsx)(n.code,{children:"slug: my-blog-post"}),", ",(0,s.jsx)(n.code,{children:"slug: /my/path/to/blog/post"}),", slug: ",(0,s.jsx)(n.code,{children:"/"}),"."]})]})]})]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type Tag = string | {label: string; permalink: string};\n\n// An author key references an author from the global plugin authors.yml file\ntype AuthorKey = string;\n\ntype Author = {\n  key?: AuthorKey;\n  name: string;\n  title?: string;\n  url?: string;\n  image_url?: string;\n};\n\n// The front matter authors field allows various possible shapes\ntype Authors = AuthorKey | Author | (AuthorKey | Author)[];\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"---\ntitle: Welcome Docusaurus\nauthors:\n  - slorber\n  - yangshun\n  - name: Joel Marcey\n    title: Co-creator of Docusaurus 1\n    url: https://github.com/JoelMarcey\n    image_url: https://github.com/JoelMarcey.png\ntags: [hello, docusaurus-v2]\ndescription: This is my first post on Docusaurus.\nimage: https://i.imgur.com/mErPwqL.png\nhide_table_of_contents: false\n---\n\nA Markdown blog post\n"})}),"\n",(0,s.jsx)(n.h2,{id:"i18n",children:"i18n"}),"\n",(0,s.jsx)(n.p,{children:"Read the i18n introduction first."}),"\n",(0,s.jsx)(n.h3,{id:"translation-files-location",children:"Translation files location"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Base path"}),": ",(0,s.jsx)(n.code,{children:"website/i18n/[locale]/docusaurus-plugin-content-blog"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Multi-instance path"}),": ",(0,s.jsx)(n.code,{children:"website/i18n/[locale]/docusaurus-plugin-content-blog-[pluginId]"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"JSON files"}),": extracted with ",(0,s.jsx)(n.code,{children:"docusaurus write-translations"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Markdown files"}),": ",(0,s.jsx)(n.code,{children:"website/i18n/[locale]/docusaurus-plugin-content-blog"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example-file-system-structure",children:"Example file-system structure"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"website/i18n/[locale]/docusaurus-plugin-content-blog\n\u2502\n\u2502 # translations for website/blog\n\u251c\u2500\u2500 authors.yml\n\u251c\u2500\u2500 first-blog-post.md\n\u251c\u2500\u2500 second-blog-post.md\n\u2502\n\u2502 # translations for the plugin options that will be rendered\n\u2514\u2500\u2500 options.json\n"})})]})}function j(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>i});t(7294);var s=t(6905);const d={tabItem:"tabItem_Ymn6"};var r=t(5893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(d.tabItem,i),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var s=t(7294),d=t(6905),r=t(2466),i=t(6550),l=t(469),c=t(1980),o=t(7392),h=t(12);function a(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return a(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:d}}=e;return{value:n,label:t,attributes:s,default:d}}))}(t);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function x(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:t}=e;const d=(0,i.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(d.location.search);n.set(r,e),d.replace({...d.location,search:n.toString()})}),[r,d])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:d}=e,r=u(e),[i,c]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[o,a]=j({queryString:t,groupId:d}),[g,p]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[d,r]=(0,h.Nk)(t);return[d,(0,s.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:d}),m=(()=>{const e=o??g;return x({value:e,tabValues:r})?e:null})();(0,l.Z)((()=>{m&&c(m)}),[m]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!x({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),a(e),p(e)}),[a,p,r]),tabValues:r}}var p=t(2389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(5893);function b(e){let{className:n,block:t,selectedValue:s,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.o5)(),h=e=>{const n=e.currentTarget,t=c.indexOf(n),d=l[t].value;d!==s&&(o(n),i(d))},a=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>c.push(e),onKeyDown:a,onClick:h,...r,className:(0,d.Z)("tabs__item",m.tabItem,r?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:d}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===d));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==d})))})}function v(e){const n=g(e);return(0,f.jsxs)("div",{className:(0,d.Z)("tabs-container",m.tabList),children:[(0,f.jsx)(b,{...e,...n}),(0,f.jsx)(y,{...e,...n})]})}function w(e){const n=(0,p.Z)();return(0,f.jsx)(v,{...e,children:a(e.children)},String(n))}},869:(e,n,t)=>{t.d(n,{Z:()=>o});var s=t(7294),d=t(6550);const r={apiTable:"apiTable_e8hp"};var i=t(5893);function l(e,n){let{name:t,children:r}=e;const l=function(e){let n=e;for(;(0,s.isValidElement)(n);)[n]=s.Children.toArray(n.props.children);return n}(r),c=t?`${t}-${l}`:l,o=`#${c}`,h=(0,d.k6)();return(0,i.jsx)("tr",{id:c,tabIndex:0,ref:h.location.hash===o?n:void 0,onClick:e=>{"A"===e.target.tagName.toUpperCase()||h.push(o)},onKeyDown:e=>{"Enter"===e.key&&h.push(o)},children:r.props.children})}const c=s.forwardRef(l);function o(e){let{children:n,name:t}=e;const[d,l]=s.Children.toArray(n.props.children),o=(0,s.useRef)(null);(0,s.useEffect)((()=>{o.current?.focus()}),[o]);const h=s.Children.map(l.props.children,(e=>(0,i.jsx)(c,{name:t,ref:o,children:e})));return(0,i.jsxs)("table",{className:r.apiTable,children:[d,(0,i.jsx)("tbody",{children:h})]})}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var s=t(7294);const d={},r=s.createContext(d);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);