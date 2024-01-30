"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[168],{78683:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var i=s(85893),a=s(11151);const t={},r="\u5165\u95e8\uff1a\u57fa\u4e8e Iris \u6570\u636e\u96c6",l={id:"machine-learning/basics/start-with-iris-dataset",title:"\u5165\u95e8\uff1a\u57fa\u4e8e Iris \u6570\u636e\u96c6",description:"\u673a\u5668\u5b66\u4e60\u4e3b\u8981\u5305\u62ec\u9884\u5904\u7406\u3001\u8bad\u7ec3\u3001\u8bc4\u4f30\u548c\u9884\u6d4b\u9636\u6bb5\u3002 \u672c\u6587\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528 scikit-learn \u8fdb\u884c\u5206\u7c7b\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/machine-learning/basics/start-with-iris-dataset.md",sourceDirName:"machine-learning/basics",slug:"/machine-learning/basics/start-with-iris-dataset",permalink:"/site/zh-CN/docs/machine-learning/basics/start-with-iris-dataset",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"machinelearningSidebar",previous:{title:"Python \u73af\u5883\u5b89\u88c5",permalink:"/site/zh-CN/docs/machine-learning/basics/python-environment-installation"},next:{title:"\u673a\u5668\u5b66\u4e60\u4e09\u5927\u7c7b\u578b",permalink:"/site/zh-CN/docs/machine-learning/basics/machine-learning-major-types"}},c={},d=[{value:"\u9884\u5904\u7406",id:"preprocessing",level:2},{value:"\u52a0\u8f7d\u6570\u636e",id:"load-data",level:3},{value:"\u63a2\u7d22\u6027\u6570\u636e\u5206\u6790",id:"exploratory-data-analysis",level:3},{value:"\u6d4b\u8bd5\u96c6\u8bad\u7ec3\u96c6\u5212\u5206",id:"test-train-split",level:2},{value:"\u8bad\u7ec3",id:"training",level:2},{value:"\u8bc4\u4f30\u548c\u9884\u6d4b",id:"evaluation-and-prediction",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u5165\u95e8\u57fa\u4e8e-iris-\u6570\u636e\u96c6",children:"\u5165\u95e8\uff1a\u57fa\u4e8e Iris \u6570\u636e\u96c6"}),"\n",(0,i.jsxs)(n.p,{children:["\u673a\u5668\u5b66\u4e60\u4e3b\u8981\u5305\u62ec\u9884\u5904\u7406\u3001\u8bad\u7ec3\u3001\u8bc4\u4f30\u548c\u9884\u6d4b\u9636\u6bb5\u3002 \u672c\u6587\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"scikit-learn"})," \u8fdb\u884c\u5206\u7c7b\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"preprocessing",children:"\u9884\u5904\u7406"}),"\n",(0,i.jsx)(n.p,{children:"\u539f\u59cb\u6570\u636e\u5f88\u5c11\u5448\u73b0\u4e3a\u5b66\u4e60\u7b97\u6cd5\u7684\u6700\u4f73\u6027\u80fd\u6240\u9700\u7684\u5f62\u5f0f\u548c\u5f62\u72b6\u3002\u56e0\u6b64\uff0c\u6570\u636e\u7684\u9884\u5904\u7406\u662f\u4efb\u4f55\u673a\u5668\u5b66\u4e60\u5e94\u7528\u7a0b\u5e8f\u4e2d\u6700\u5173\u952e\u7684\u6b65\u9aa4\u4e4b\u4e00\u3002\u4ee5\u9e22\u5c3e\u82b1\u6570\u636e\u96c6\u4e3a\u4f8b\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u539f\u59cb\u6570\u636e\u770b\u4f5c\u4e00\u7cfb\u5217\u82b1\u56fe\uff0c\u4ece\u4e2d\u6211\u4eec\u53ef\u4ee5\u63d0\u53d6\u6709\u610f\u4e49\u7684\u7279\u5f81\uff0c\u5982\u82b1\u7684\u989c\u8272\uff0c\u82b1\u843c\u548c\u82b1\u74e3\u7684\u957f\u5ea6\u548c\u5bbd\u5ea6\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://image.szdev.com/images/2018/12/03/book-py_ml_2nd-01_08.png",alt:""})}),"\n",(0,i.jsx)(n.p,{children:"\u8bb8\u591a\u673a\u5668\u5b66\u4e60\u7b97\u6cd5\u8fd8\u8981\u6c42\u80fd\u591f\u5c06\u6240\u6709\u7279\u5f81\u5728\u540c\u4e00\u6570\u91cf\u7ea7\uff0c\u8fd9\u901a\u5e38\u901a\u8fc7\u5f52\u4e00\u5316\u6216\u8005\u6b63\u6001\u5206\u5e03\u7b49\u7279\u5f81\u53d8\u6362\u65b9\u6cd5\u6765\u5b9e\u73b0\u3002 \u90e8\u5206\u7279\u5f81\u53ef\u80fd\u662f\u9ad8\u5ea6\u76f8\u5173\u7684\uff0c\u7279\u5f81\u53ef\u80fd\u5b58\u5728\u5197\u4f59\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u964d\u7ef4\u53ef\u4ee5\u51cf\u5c11\u6240\u9700\u7684\u5b58\u50a8\u7a7a\u95f4\uff0c\u5e76\u4e14\u7b97\u6cd5\u53ef\u4ee5\u5b66\u4e60\u5f97\u66f4\u5feb\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4e3a\u4e86\u786e\u5b9a\u673a\u5668\u5b66\u4e60\u7b97\u6cd5\u662f\u5426\u4e0d\u4ec5\u5728\u8bad\u7ec3\u96c6\u4e0a\u8868\u73b0\u826f\u597d\u7684\u540c\u65f6\uff0c\u80fd\u5f88\u597d\u5730\u9884\u6d4b\u5230\u65b0\u7684\u6570\u636e\uff0c\u6211\u4eec\u5c06\u6570\u636e\u96c6\u968f\u673a\u5206\u4e3a\u76f8\u4e92\u72ec\u7acb\u7684\u8bad\u7ec3\u96c6\u548c\u6d4b\u8bd5\u96c6\u3002\u8bad\u7ec3\u96c6\u7528\u4e8e\u8bad\u7ec3\u548c\u4f18\u5316\u6211\u4eec\u7684\u673a\u5668\u5b66\u4e60\u6a21\u578b\uff0c\u6d4b\u8bd5\u96c6\u7528\u4e8e\u6700\u7ec8\u8bc4\u4f30\u6700\u7ec8\u6a21\u578b\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u5f00\u59cb\u52a0\u8f7d\u6570\u636e\u4e4b\u524d\uff0c\u6309\u7167\u5e38\u7528\u7ea6\u5b9a\u5bfc\u5165\u8fd9\u4e9b\u5e93\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n"})}),"\n",(0,i.jsx)(n.h3,{id:"load-data",children:"\u52a0\u8f7d\u6570\u636e"}),"\n",(0,i.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u5728 ",(0,i.jsx)(n.a,{target:"_blank",href:s(64095).Z+"",children:"\u6b64\u5904"})," \u4e0b\u8f7d ",(0,i.jsx)(n.code,{children:"iris.csv"}),"\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'names = ["sepal-length", "sepal-width", "petal-length", "petal-width", "class"]\ndataset = read_csv("iris.csv", names=names)\n'})}),"\n",(0,i.jsx)(n.h3,{id:"exploratory-data-analysis",children:"\u63a2\u7d22\u6027\u6570\u636e\u5206\u6790"}),"\n",(0,i.jsxs)(n.p,{children:["\u6253\u5370 ",(0,i.jsx)(n.code,{children:"dataset"})," \u7684\u5f62\u72b6\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"print(dataset.shape)\n\n# (150, 5)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6253\u5370 ",(0,i.jsx)(n.code,{children:"dataset"})," \u7684\u524d\u51e0\u884c\uff08 ",(0,i.jsx)(n.code,{children:"head()"})," \u9ed8\u8ba4\u6253\u5370 5 \u884c\uff09\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"print(dataset.head())\n\n#    sepal-length  sepal-width  petal-length  petal-width        class\n# 0           5.1          3.5           1.4          0.2  Iris-setosa\n# 1           4.9          3.0           1.4          0.2  Iris-setosa\n# 3           4.6          3.1           1.5          0.2  Iris-setosa\n# 2           4.7          3.2           1.3          0.2  Iris-setosa\n# 4           5.0          3.6           1.4          0.2  Iris-setosa\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6253\u5370 ",(0,i.jsx)(n.code,{children:"dataset"})," \u7684 ",(0,i.jsx)(n.code,{children:"class"})," \u548c\u6bcf\u4e2a ",(0,i.jsx)(n.code,{children:"class"})," \u7684\u6570\u91cf\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'print(dataset.groupby("class").size())\n\n# class\n# Iris-setosa        50\n# Iris-versicolor    50\n# Iris-virginica     50\n# dtype: int64\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u6253\u5370 ",(0,i.jsx)(n.code,{children:"dataset"})," \u7684\u7edf\u8ba1\u6570\u636e\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"print(dataset.describe())\n\n#        sepal-length  sepal-width  petal-length  petal-width\n# count    150.000000   150.000000    150.000000   150.000000\n# mean       5.843333     3.054000      3.758667     1.198667\n# std        0.828066     0.433594      1.764420     0.763161\n# min        4.300000     2.000000      1.000000     0.100000\n# 25%        5.100000     2.800000      1.600000     0.300000\n# 50%        5.800000     3.000000      4.350000     1.300000\n# 75%        6.400000     3.300000      5.100000     1.800000\n# max        7.900000     4.400000      6.900000     2.500000\n"})}),"\n",(0,i.jsx)(n.h2,{id:"test-train-split",children:"\u6d4b\u8bd5\u96c6\u8bad\u7ec3\u96c6\u5212\u5206"}),"\n",(0,i.jsxs)(n.p,{children:["\u6709\u4e9b\u6587\u7ae0\u5c06 ",(0,i.jsx)(n.code,{children:"train-test-split"})," \u4f5c\u4e3a\u6570\u636e\u9884\u5904\u7406\u8fc7\u7a0b\uff0c\u6709\u4e9b\u6587\u7ae0\u8ba4\u4e3a\u8fd9\u662f\u4e00\u4e2a\u8bad\u7ec3\u8fc7\u7a0b\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u6211\u770b\u6765\uff0c\u5b83\u662f\u6570\u636e\u9884\u5904\u7406\u548c\u8bad\u7ec3\u4e4b\u95f4\u7684\u6865\u6881\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5c06\u539f\u59cb\u6570\u636e\u968f\u673a\u5206\u6210 80% \u7684\u8bad\u7ec3\u96c6\u548c 20% \u7684\u6d4b\u8bd5\u96c6\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from sklearn.model_selection import train_test_split\n\narray = dataset.values\nX = array[:, 0:4]\ny = array[:, 4]\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.20, shuffle=True, random_state=1\n)\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"random_state"})," \u662f\u7528\u4e8e\u5206\u5272\u7684\u968f\u673a\u79cd\u5b50\u3002 \u8bbe\u7f6e\u540e\uff0c\u5c06\u5728\u4e0d\u540c\u7684\u8ba1\u7b97\u673a\u4e0a\u751f\u6210\u76f8\u540c\u7684\u8bad\u7ec3\u6570\u636e\u96c6\u548c\u6d4b\u8bd5\u6570\u636e\u96c6\uff0c\u4ee5\u4fbf\u91cd\u73b0\u7ed3\u679c\u3002"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"print(X_train.shape, X_test.shape, y_train.shape, y_test.shape)\n# (120, 4) (30, 4) (120,) (30,)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"training",children:"\u8bad\u7ec3"}),"\n",(0,i.jsx)(n.p,{children:"\u76ee\u524d\u5df2\u6709\u8bb8\u591a\u4e0d\u540c\u7684\u673a\u5668\u5b66\u4e60\u7b97\u6cd5\uff0c\u7528\u4e8e\u89e3\u51b3\u4e0d\u540c\u7684\u95ee\u9898\u4efb\u52a1\u3002\u6bcf\u4e2a\u5206\u7c7b\u7b97\u6cd5\u90fd\u6709\u5176\u56fa\u6709\u7684\u504f\u5dee\uff0c\u5728\u5b9e\u8df5\u4e2d\uff0c\u6bd4\u8f83\u51e0\u4e2a\u4e0d\u540c\u7684\u7b97\u6cd5\u7136\u540e\u4ece\u4e2d\u9009\u51fa\u6700\u4f18\u7b97\u6cd5\uff0c\u5bf9\u4e8e\u8bad\u7ec3\u548c\u9009\u62e9\u6700\u4f73\u6027\u80fd\u6a21\u578b\u81f3\u5173\u91cd\u8981\u3002\u4e00\u4e2a\u5e38\u7528\u7684\u7b97\u6cd5\u5ea6\u91cf\u6307\u6807\u662f\u5206\u7c7b\u51c6\u786e\u7387\uff0c\u5373\u6b63\u786e\u5206\u7c7b\u6570\u636e\u7684\u6bd4\u91cd\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u53e6\u5916\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4e0d\u540c\u7684\u4ea4\u53c9\u9a8c\u8bc1\u6280\u672f\uff0c\u5176\u4e2d\u5c06\u8bad\u7ec3\u6570\u636e\u96c6\u8fdb\u4e00\u6b65\u5206\u4e3a\u8bad\u7ec3\u548c\u9a8c\u8bc1\u5b50\u96c6\uff0c\u4ee5\u4f30\u8ba1\u6a21\u578b\u7684\u6cdb\u5316\u6027\u80fd\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u6700\u540e\uff0c\u7b97\u6cd5\u7684\u9ed8\u8ba4\u53c2\u6570\u5bf9\u4e8e\u5b9e\u9645\u95ee\u9898\u5f80\u5f80\u4e0d\u4f1a\u5177\u6709\u6700\u4f73\u8868\u73b0\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u8d85\u53c2\u6570\u4f18\u5316\u6280\u672f\uff0c\u901a\u8fc7\u8c03\u8282\u7b97\u6cd5\u53c2\u6570\uff0c\u6211\u4eec\u53ef\u4ee5\u63d0\u9ad8\u7b97\u6cd5\u7684\u6027\u80fd\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u8bad\u7ec3\u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u77e5\u9053\u6211\u4eec\u9762\u4e34\u4ec0\u4e48\u6837\u7684\u95ee\u9898\uff1a\u8fd9\u662f\u4e00\u4e2a\u591a\u7c7b\u5206\u7c7b\u76d1\u7763\u95ee\u9898\u3002 \u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"DecisionTreeClassifier"})," \u5206\u7c7b\u5668\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from sklearn.tree import DecisionTreeClassifier\n\ntree_model = DecisionTreeClassifier()\ntree_model.fit(X_train, Y_train)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"evaluation-and-prediction",children:"\u8bc4\u4f30\u548c\u9884\u6d4b"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u9009\u62e9\u4e86\u6a21\u578b\u5e76\u4f7f\u7528\u8bad\u7ec3\u96c6\u8fdb\u884c\u8bad\u7ec3\u4e4b\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u6d4b\u8bd5\u96c6\u6765\u6765\u4f30\u8ba1\u6cdb\u5316\u8bef\u5dee\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u6211\u4eec\u5bf9\u5176\u6027\u80fd\u611f\u5230\u6ee1\u610f\uff0c\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u6a21\u578b\u6765\u9884\u6d4b\u65b0\u7684\u672a\u6765\u6570\u636e\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8bad\u7ec3\u7684\u53c2\u6570\uff08\u5982\u7279\u5f81\u7f29\u653e\u548c\u964d\u7ef4\uff09\u4ec5\u4ece\u8bad\u7ec3\u6570\u636e\u96c6\u4e2d\u83b7\u5f97\uff0c\u5728\u6d4b\u8bd5\u6570\u636e\u4e0a\u6d4b\u91cf\u7684\u6027\u80fd\u53ef\u80fd\u662f\u8fc7\u62df\u5408\u7684\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u8fdb\u884c\u8bc4\u4f30:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'print(f"Score of tree_model: {tree_model.score(X_validation, Y_validation)}")\n# Score of tree_model: 0.9666666666666667\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u5bf9\u65b0\u7684\u672a\u77e5\u6570\u636e\u8fdb\u884c\u5206\u7c7b:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'print(\n    f"Prediction of [6.0, 3.1, 5.1, 1.9]: {tree_model.predict([[6.0, 3.1, 5.1, 1.9]])[0]}"\n)\n# Prediction of [6.0, 3.1, 5.1, 1.9]: Iris-virginica\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},64095:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/files/iris-6d6bf27507afd09031e7a67cbd775ad6.csv"},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>r});var i=s(67294);const a={},t=i.createContext(a);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);