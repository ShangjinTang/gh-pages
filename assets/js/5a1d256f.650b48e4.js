"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2441],{40990:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=i(74848),t=i(28453);const o={},r="Use NVIM",a={id:"modern-linux/nvim/use-nvim",title:"Use NVIM",description:"What is NVIM?",source:"@site/docs/modern-linux/04-nvim/use-nvim.md",sourceDirName:"modern-linux/04-nvim",slug:"/modern-linux/nvim/use-nvim",permalink:"/site/docs/modern-linux/nvim/use-nvim",draft:!1,unlisted:!1,editUrl:"https://github.com/ShangjinTang/docusaurus/edit/master/docs/modern-linux/04-nvim/use-nvim.md",tags:[],version:"current",frontMatter:{},sidebar:"modernlinuxSidebar",previous:{title:"Use ZSH",permalink:"/site/docs/modern-linux/zsh/use-zsh"},next:{title:"Manage Dotfiles",permalink:"/site/docs/modern-linux/dotfiles/manage-dotfiles"}},l={},d=[{value:"What is NVIM?",id:"what-is-nvim",level:2},{value:"Why use NVIM?",id:"why-use-nvim",level:2},{value:"How to install NVIM",id:"how-to-install-nvim",level:2},{value:"NVIM-based configurations",id:"nvim-based-configurations",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"use-nvim",children:"Use NVIM"})}),"\n",(0,s.jsx)(n.h2,{id:"what-is-nvim",children:"What is NVIM?"}),"\n",(0,s.jsx)(n.p,{children:"The Vim editor is a successor to the vi editor found on the original UNIX. As a fork of Vim, Neovim is an editor that aims to improve the quality of life for all developers, better than Vim."}),"\n",(0,s.jsx)(n.h2,{id:"why-use-nvim",children:"Why use NVIM?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Project maintenance and feature improvements: Vim codebase is less maintainable compared to Neovim; and compared to Vim Language, NeoVim uses Lua which is easier to read and write."}),"\n",(0,s.jsx)(n.li,{children:"Code auto-completion (LSP): Neovim ships with out-of-box support for LSP and uses Lua for further configuration."}),"\n",(0,s.jsx)(n.li,{children:"Support for better plugins: With an actual programming language, this configuration is comparatively easier than Vim."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"how-to-install-nvim",children:"How to install NVIM"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If you are using ArchLinux, just run ",(0,s.jsx)(n.code,{children:"sudo pacman -Syu neovim"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["If you are using Ubuntu, follow the steps:\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Download ",(0,s.jsx)(n.a,{href:"https://github.com/neovim/neovim/releases/tag/stable",children:"NVIM appimage"})," with latest version."]}),"\n",(0,s.jsxs)(n.li,{children:["Install ",(0,s.jsx)(n.code,{children:"fuse"})," by ",(0,s.jsx)(n.code,{children:"sudo apt install -y fuse"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Run ",(0,s.jsx)(n.code,{children:"chmod u+x nvim.appimage && mkdir ~/bin && mv nvim.appimage ./bin/nvim"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"nvim-based-configurations",children:"NVIM-based configurations"}),"\n",(0,s.jsx)(n.p,{children:"Pick up one of the top NVIM framework."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.lazyvim.org/",children:"LazyVim"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://nvchad.com/",children:"NvChad"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.lunarvim.org/",children:"LunarVim"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://astronvim.com/",children:"AstroNvim"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["I use ",(0,s.jsx)(n.code,{children:"LunarVim"})," and the configurations are as below, managed by ",(0,s.jsx)(n.code,{children:"dotfiles"})," for syncing. See:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/ShangjinTang/dotfiles/tree/master/configs/nvim",children:"NVIM Plugins and Configurations"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/ShangjinTang/dotfiles/tree/master/submodules_diff/LunarVim",children:"LunarVim Customization Diff Files"})}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var s=i(96540);const t={},o=s.createContext(t);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);