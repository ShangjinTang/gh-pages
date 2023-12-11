"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6835],{7058:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>P,contentTitle:()=>b,default:()=>k,frontMatter:()=>j,metadata:()=>w,toc:()=>N});var i=t(5893),a=t(1151),s=(t(7294),t(6905)),r=t(3438),o=t(9960),c=t(3919),l=t(5999),d=t(7955);const h={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:n,children:t}=e;return(0,i.jsx)(o.Z,{href:n,className:(0,s.Z)("card padding--lg",h.cardContainer),children:t})}function u(e){let{href:n,icon:t,title:a,description:r}=e;return(0,i.jsxs)(m,{href:n,children:[(0,i.jsxs)(d.Z,{as:"h2",className:(0,s.Z)("text--truncate",h.cardTitle),title:a,children:[t," ",a]}),r&&(0,i.jsx)("p",{className:(0,s.Z)("text--truncate",h.cardDescription),title:r,children:r})]})}function p(e){let{item:n}=e;const t=(0,r.LM)(n);return t?(0,i.jsx)(u,{href:t,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function y(e){let{item:n}=e;const t=(0,c.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,r.xz)(n.docId??void 0);return(0,i.jsx)(u,{href:n.href,icon:t,title:n.label,description:n.description??a?.description})}function f(e){let{item:n}=e;switch(n.type){case"link":return(0,i.jsx)(y,{item:n});case"category":return(0,i.jsx)(p,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function g(e){let{className:n}=e;const t=(0,r.jA)();return(0,i.jsx)(x,{items:t.items,className:n})}function x(e){const{items:n,className:t}=e;if(!n)return(0,i.jsx)(g,{...e});const a=(0,r.MN)(n);return(0,i.jsx)("section",{className:(0,s.Z)("row",t),children:a.map(((e,n)=>(0,i.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,i.jsx)(f,{item:e})},n)))})}const j={},b="NumPy Pandas Matpotlib",w={id:"machine-learning/numpy-pandas-matplotlib/index",title:"NumPy Pandas Matpotlib",description:"This section will cover the following topics:",source:"@site/docs/machine-learning/numpy-pandas-matplotlib/index.mdx",sourceDirName:"machine-learning/numpy-pandas-matplotlib",slug:"/machine-learning/numpy-pandas-matplotlib/",permalink:"/site/docs/machine-learning/numpy-pandas-matplotlib/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"machinelearningSidebar",previous:{title:"Python Anaconda Jupyter",permalink:"/site/docs/machine-learning/python-anaconda-jupyter"},next:{title:"CS231n Numpy Tutorial",permalink:"/site/docs/machine-learning/numpy-pandas-matplotlib/cs231n-numpy-tutorial"}},P={},N=[{value:"What is NumPy?",id:"what-is-numpy",level:2},{value:"Why is NumPy Fast?",id:"why-numpy-fast",level:2}];function v(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"numpy-pandas-matpotlib",children:"NumPy Pandas Matpotlib"}),"\n",(0,i.jsx)(n.p,{children:"This section will cover the following topics:"}),"\n","\n","\n",(0,i.jsx)(x,{}),"\n",(0,i.jsx)(n.h2,{id:"what-is-numpy",children:"What is NumPy?"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(2582).Z+"",width:"2118",height:"969"})}),"\n",(0,i.jsx)(n.p,{children:"NumPy is the fundamental package for scientific computing in Python. It is a Python library that provides a multidimensional array object, various derived objects (such as masked arrays and matrices), and an assortment of routines for fast operations on arrays, including mathematical, logical, shape manipulation, sorting, selecting, I/O, discrete Fourier transforms, basic linear algebra, basic statistical operations, random simulation and much more."}),"\n",(0,i.jsxs)(n.p,{children:["At the core of the NumPy package, is the ",(0,i.jsx)(n.em,{children:"ndarray"})," object. This encapsulates n-dimensional arrays of homogeneous data types, with many operations being performed in compiled code for performance. There are several important differences between NumPy arrays and the standard Python sequences:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"NumPy arrays have a fixed size at creation, unlike Python lists (which can grow dynamically). Changing the size of an ndarray will create a new array and delete the original."}),"\n",(0,i.jsx)(n.li,{children:"The elements in a NumPy array are all required to be of the same data type, and thus will be the same size in memory. The exception: one can have arrays of (Python, including NumPy) objects, thereby allowing for arrays of different sized elements."}),"\n",(0,i.jsx)(n.li,{children:"NumPy arrays facilitate advanced mathematical and other types of operations on large numbers of data. Typically, such operations are executed more efficiently and with less code than is possible using Python\u2019s built-in sequences."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"A growing plethora of scientific and mathematical Python-based packages are using NumPy arrays; though these typically support Python-sequence input, they convert such input to NumPy arrays prior to processing, and they often output NumPy arrays. In other words, in order to efficiently use much (perhaps even most) of today\u2019s scientific/mathematical Python-based software, just knowing how to use Python\u2019s built-in sequence types is insufficient - one also needs to know how to use NumPy arrays."}),"\n",(0,i.jsxs)(n.p,{children:["The points about sequence size and speed are particularly important in scientific computing. As a simple example, consider the case of multiplying each element in a 1-D sequence with the corresponding element in another sequence of the same length. If the data are stored in two Python lists, ",(0,i.jsx)(n.code,{children:"a"})," and ",(0,i.jsx)(n.code,{children:"b"}),", we could iterate over each element:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"c = []\nfor i in range(len(a)):\n    c.append(a[i]*b[i])\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This produces the correct answer, but if ",(0,i.jsx)(n.code,{children:"a"})," and ",(0,i.jsx)(n.code,{children:"b"})," each contain millions of numbers, we will pay the price for the inefficiencies of looping in Python. We could accomplish the same task much more quickly in C by writing (for clarity we neglect variable declarations and initializations, memory allocation, etc.)"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"for (i = 0; i < rows; i++) {\n  c[i] = a[i]*b[i];\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"This saves all the overhead involved in interpreting the Python code and manipulating Python objects, but at the expense of the benefits gained from coding in Python. Furthermore, the coding work required increases with the dimensionality of our data. In the case of a 2-D array, for example, the C code (abridged as before) expands to"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"for (i = 0; i < rows; i++) {\n  for (j = 0; j < columns; j++) {\n    c[i][j] = a[i][j]*b[i][j];\n  }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["NumPy gives us the best of both worlds: element-by-element operations are the \u201cdefault mode\u201d when an ",(0,i.jsx)(n.em,{children:"ndarray"})," is involved, but the element-by-element operation is speedily executed by pre-compiled C code. In NumPy"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"c = a * b\n"})}),"\n",(0,i.jsx)(n.p,{children:"does what the earlier examples do, at near-C speeds, but with the code simplicity we expect from something based on Python."}),"\n",(0,i.jsx)(n.h2,{id:"why-numpy-fast",children:"Why is NumPy Fast?"}),"\n",(0,i.jsx)(n.p,{children:"Vectorization describes the absence of any explicit looping, indexing, etc., in the code - these things are taking place, of course, just \u201cbehind the scenes\u201d in optimized, pre-compiled C code. Vectorized code has many advantages, among which are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"vectorized code is more concise and easier to read"}),"\n",(0,i.jsx)(n.li,{children:"fewer lines of code generally means fewer bugs"}),"\n",(0,i.jsx)(n.li,{children:"the code more closely resembles standard mathematical notation (making it easier, typically, to correctly code mathematical constructs)"}),"\n",(0,i.jsx)(n.li,{children:"vectorization results in more \u201cPythonic\u201d code; without vectorization, our code would be littered with inefficient and difficult to read for loops"}),"\n"]})]})}function k(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(v,{...e})}):v(e)}},2582:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/numpy_features-e11ebf7eafe1f997766625c4c4e34487.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var i=t(7294);const a={},s=i.createContext(a);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);