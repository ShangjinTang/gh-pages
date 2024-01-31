"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9521],{41331:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var r=t(85893),i=t(11151);const s={},a="Scikit-learn \u7b80\u4ecb\uff1a\u4f7f\u7528\u611f\u77e5\u5668",l={id:"machine-learning/neural-network/introduction-to-sklearn-with-perceptron",title:"Scikit-learn \u7b80\u4ecb\uff1a\u4f7f\u7528\u611f\u77e5\u5668",description:"Scikit-learn \u7684\u540d\u5b57\u6e90\u4e8e SciKit\uff08SciPy Toolkit\uff09\uff0c\u5373 SciPy \u7684\u7b2c\u4e09\u65b9\u6269\u5c55\u5de5\u5177\u5305\u3002\u7ecf\u8fc7\u5386\u5e74\u7684\u53d1\u5c55\uff0cScikit-learn \u5df2\u6210\u4e3a\u6700\u6d41\u884c\u7684\u673a\u5668\u5b66\u4e60\u5e93\u4e4b\u4e00\u3002\u672c\u6587\u4ee5 Iris \u6570\u636e\u96c6\u7684\u5206\u7c7b\u4e3a\u4f8b\uff0c\u5bf9\u5176\u8fdb\u884c\u7b80\u4ecb\u3002",source:"@site/docs/machine-learning/02-neural-network/introduction-to-sklearn-with-perceptron.md",sourceDirName:"machine-learning/02-neural-network",slug:"/machine-learning/neural-network/introduction-to-sklearn-with-perceptron",permalink:"/site/docs/machine-learning/neural-network/introduction-to-sklearn-with-perceptron",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"machinelearningSidebar",previous:{title:"Adaline \u548c\u68af\u5ea6\u4e0b\u964d\u6cd5",permalink:"/site/docs/machine-learning/neural-network/adaline-and-gradient-descent"},next:{title:"\u903b\u8f91\u56de\u5f52",permalink:"/site/docs/machine-learning/neural-network/logistic-regression-implementation"}},c={},o=[{value:"\u6570\u636e\u5bfc\u5165",id:"load-data",level:2},{value:"\u9884\u5904\u7406",id:"preprocessing",level:2},{value:"\u6a21\u578b\u8bad\u7ec3",id:"model-training",level:2},{value:"\u6a21\u578b\u8bc4\u4f30",id:"model-evaluation",level:2},{value:"\u7ed8\u5236\u5206\u7c7b\u8fb9\u754c",id:"plot-decistion-boundary",level:2}];function d(n){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"scikit-learn-\u7b80\u4ecb\u4f7f\u7528\u611f\u77e5\u5668",children:"Scikit-learn \u7b80\u4ecb\uff1a\u4f7f\u7528\u611f\u77e5\u5668"}),"\n",(0,r.jsx)(e.p,{children:"Scikit-learn \u7684\u540d\u5b57\u6e90\u4e8e SciKit\uff08SciPy Toolkit\uff09\uff0c\u5373 SciPy \u7684\u7b2c\u4e09\u65b9\u6269\u5c55\u5de5\u5177\u5305\u3002\u7ecf\u8fc7\u5386\u5e74\u7684\u53d1\u5c55\uff0cScikit-learn \u5df2\u6210\u4e3a\u6700\u6d41\u884c\u7684\u673a\u5668\u5b66\u4e60\u5e93\u4e4b\u4e00\u3002\u672c\u6587\u4ee5 Iris \u6570\u636e\u96c6\u7684\u5206\u7c7b\u4e3a\u4f8b\uff0c\u5bf9\u5176\u8fdb\u884c\u7b80\u4ecb\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["\u5982 ",(0,r.jsx)(e.a,{href:"http://scikit-learn.org/",children:"\u5b98\u65b9\u7f51\u7ad9"})," \u6240\u4ecb\u7ecd\uff0c\u4ee5\u4e0b\u662f scikit-learn \u7684\u7279\u5f81\uff1a"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7b80\u5355\u9ad8\u6548\u7684\u6570\u636e\u6316\u6398\u548c\u6570\u636e\u5206\u6790\u5de5\u5177"}),"\n",(0,r.jsx)(e.li,{children:"\u53ef\u4f9b\u4efb\u4f55\u4eba\u4f7f\u7528\uff0c\u53ef\u5728\u4efb\u4f55\u73af\u5883\u4e2d\u91cd\u590d\u4f7f\u7528"}),"\n",(0,r.jsx)(e.li,{children:"\u57fa\u4e8e NumPy, SciPy, \u4ee5\u53ca matplotlib"}),"\n",(0,r.jsx)(e.li,{children:"\u5f00\u653e\u6e90\u7801\uff0c\u53ef\u7528\u4f5c\u5546\u4e1a\u7528\u9014\uff08\u9700\u9075\u5faa BSD \u8bb8\u53ef\u8bc1\uff09"}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u5173\u4e8e scikit-learn \u7684\u5b89\u88c5\uff0c\u8bf7\u53c2\u7167 ",(0,r.jsx)(e.a,{href:"http://scikit-learn.org/stable/install.html",children:"\u8fd9\u4efd\u6587\u6863"})," \u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"load-data",children:"\u6570\u636e\u5bfc\u5165"}),"\n",(0,r.jsxs)(e.p,{children:["\u4ece scikit-learn \u52a0\u8f7d Iris \u6570\u636e\u96c6\uff0c\u5176\u4e2d\u7b2c\u4e09\u5217\u8868\u793a\u82b1\u74e3\u957f\u5ea6 ",(0,r.jsx)(e.em,{children:"petal length"}),"\uff0c\u7b2c\u56db\u5217\u8868\u793a\u82b1\u74e3\u5bbd\u5ea6 ",(0,r.jsx)(e.em,{children:"petal width"}),"\u3002\u8fd9\u4e9b\u7c7b\u5df2\u7ecf\u8f6c\u6362\u4e3a\u6574\u6570\u6807\u7b7e\uff0c\u5176\u4e2d 0 = \u5c71\u9e22\u5c3e ",(0,r.jsx)(e.em,{children:"Iris-Setosa"}),"\uff0c1 = \u53d8\u8272\u9e22\u5c3e ",(0,r.jsx)(e.em,{children:"Iris-Versicolor"}),"\uff0c2 = \u7ef4\u5409\u5c3c\u4e9a\u9e22\u5c3e ",(0,r.jsx)(e.em,{children:"Iris-Verginica"}),"\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'from sklearn import datasets\nimport numpy as np\n\niris = datasets.load_iris()\nX = iris.data[:, [2, 3]]\ny = iris.target\n\nprint("Class labels:", np.unique(y))  # output: Class labels: [0 1 2]\n'})}),"\n",(0,r.jsx)(e.h2,{id:"preprocessing",children:"\u9884\u5904\u7406"}),"\n",(0,r.jsxs)(e.p,{children:["\u901a\u8fc7\u51fd\u6570 ",(0,r.jsx)(e.a,{href:"http://scikit-learn.org/stable/modules/generated/sklearn.model_selection.train_test_split.html",children:"sklearn.model_selection.train_test_split"})," \u5c06 150 \u4e2a\u6570\u636e\u96c6\u5206\u4e3a 70% \u7684\u8bad\u7ec3\u96c6\u548c 30% \u7684\u6d4b\u8bd5\u96c6\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"from sklearn.model_selection import train_test_split\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.3, random_state=1, stratify=y\n)\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u8fd9\u91cc ",(0,r.jsx)(e.code,{children:"stratify=y"})," \u8868\u793a\u6309\u7167\u6807\u7b7e\u503c\u5c06\u6570\u636e\u96c6\u5212\u5206\uff0c\u5212\u5206\u540e\u8bad\u7ec3\u96c6\u548c\u6d4b\u8bd5\u96c6\u7684\u6807\u7b7e\u5177\u6709\u76f8\u540c\u7684\u6bd4\u4f8b\uff0c\u53ef\u4ee5\u7528 ",(0,r.jsx)(e.code,{children:"np.bincount"})," \u6253\u5370\u5176\u4e2d\u6bcf\u7c7b\u6807\u7b7e\u7684\u4e2a\u6570\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'print("Labels counts in y:", np.bincount(y))  # output: Labels counts in y: [50 50 50]\nprint(\n    "Labels counts in y_train:", np.bincount(y_train)\n)  # output: Labels counts in y_train: [35 35 35]\nprint(\n    "Labels counts in y_test:", np.bincount(y_test)\n)  # output: Labels counts in y_test: [15 15 15]\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u901a\u8fc7\u51fd\u6570 ",(0,r.jsx)(e.a,{href:"http://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.StandardScaler.html",children:"sklearn.preprocessing.StandardScaler"})," \u5bf9\u7279\u5f81\u8fdb\u884c\u6807\u51c6\u5316\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"from sklearn.preprocessing import StandardScaler\n\nsc = StandardScaler()\nsc.fit(X_train)\nX_train_std = sc.transform(X_train)\nX_test_std = sc.transform(X_test)\n"})}),"\n",(0,r.jsx)(e.h2,{id:"model-training",children:"\u6a21\u578b\u8bad\u7ec3"}),"\n",(0,r.jsxs)(e.p,{children:["\u4f7f\u7528\u795e\u7ecf\u5143\u6a21\u578b ",(0,r.jsx)(e.a,{href:"http://scikit-learn.org/stable/modules/generated/sklearn.linear_model.Perceptron.html",children:"sklearn.linear_model.Perceptron"})," \uff0c\u5bf9\u8bad\u7ec3\u96c6\u8fdb\u884c\u8bad\u7ec3 ",(0,r.jsx)(e.code,{children:"fit"}),"\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"from sklearn.linear_model import Perceptron\n\nppn = Perceptron(max_iter=40, eta0=0.1, random_state=0)\nppn.fit(X_train_std, y_train)\n"})}),"\n",(0,r.jsx)(e.h2,{id:"model-evaluation",children:"\u6a21\u578b\u8bc4\u4f30"}),"\n",(0,r.jsxs)(e.p,{children:["\u8bad\u7ec3\u5b8c\u6210\u540e\uff0c\u5bf9\u6d4b\u8bd5\u96c6\u8fdb\u884c\u9884\u6d4b ",(0,r.jsx)(e.code,{children:"predict"}),"\uff0c\u5e76\u6253\u5370\u51fa\u5176\u4e2d\u9519\u8bef\u9884\u6d4b\u7684\u6837\u672c\u6570\u91cf\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'y_pred = ppn.predict(X_test_std)\nprint(\n    "Misclassified samples: %d" % (y_test != y_pred).sum()\n)  # output: Misclassified samples: 3\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u8bad\u7ec3\u51c6\u786e\u7387\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(e.a,{href:"http://scikit-learn.org/stable/modules/generated/sklearn.metrics.accuracy_score.html",children:"sklearn.metrics.accuracy_score"})," \u5f97\u5230\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'from sklearn.metrics import accuracy_score\n\nprint("Accuracy: %.2f" % accuracy_score(y_test, y_pred))  # output: Accuracy: 0.93\n'})}),"\n",(0,r.jsxs)(e.p,{children:["scikit-learn \u4e2d\u7684\u6bcf\u79cd\u5206\u7c7b\u51fd\u6570\u90fd\u6709\u8ba1\u7b97\u51c6\u786e\u7387\u7684\u65b9\u6cd5 ",(0,r.jsx)(e.code,{children:"score"})," \uff0c\u6267\u884c\u65f6\u4f1a\u8ba1\u7b97 ",(0,r.jsx)(e.code,{children:"accuracy_score"})," \u5e76\u8fd4\u56de\uff0c\u8f93\u51fa\u7ed3\u679c\u76f8\u540c\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'print("Accuracy: %.2f" % ppn.score(X_test_std, y_test))  # output: Accuracy: 0.93\n'})}),"\n",(0,r.jsx)(e.h2,{id:"plot-decistion-boundary",children:"\u7ed8\u5236\u5206\u7c7b\u8fb9\u754c"}),"\n",(0,r.jsx)(e.p,{children:"\u5bf9\u7b97\u6cd5\u8bad\u7ec3\u8fc7\u7a0b\u8fdb\u884c\u7ed8\u56fe\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'from matplotlib.colors import ListedColormap\nimport matplotlib.pyplot as plt\n\n\ndef plot_decision_regions(X, y, classifier, test_idx=None, resolution=0.02):\n    markers = ("s", "x", "o", "^", "v")\n    colors = ("red", "blue", "lightgreen", "gray", "cyan")\n    cmap = ListedColormap(colors[: len(np.unique(y))])\n\n    x1_min, x1_max = X[:, 0].min() - 1, X[:, 0].max() + 1\n    x2_min, x2_max = X[:, 1].min() - 1, X[:, 1].max() + 1\n    xx1, xx2 = np.meshgrid(\n        np.arange(x1_min, x1_max, resolution), np.arange(x2_min, x2_max, resolution)\n    )\n    Z = classifier.predict(np.array([xx1.ravel(), xx2.ravel()]).T)\n    Z = Z.reshape(xx1.shape)\n    plt.contourf(xx1, xx2, Z, alpha=0.3, cmap=cmap)\n    plt.xlim(xx1.min(), xx1.max())\n    plt.ylim(xx2.min(), xx2.max())\n    for idx, cl in enumerate(np.unique(y)):\n        plt.scatter(\n            x=X[y == cl, 0],\n            y=X[y == cl, 1],\n            alpha=0.8,\n            c=colors[idx],\n            marker=markers[idx],\n            label=cl,\n            edgecolor="black",\n        )\n\n    if test_idx:\n        X_test, y_test = X[test_idx, :], y[test_idx]\n        plt.scatter(\n            X_test[:, 0],\n            X_test[:, 1],\n            c="",\n            edgecolor="black",\n            alpha=1.0,\n            linewidth=1,\n            marker="o",\n            s=100,\n            label="test set",\n        )\n\n\nX_combined_std = np.vstack((X_train_std, X_test_std))\ny_combined = np.hstack((y_train, y_test))\nplot_decision_regions(\n    X=X_combined_std, y=y_combined, classifier=ppn, test_idx=range(105, 150)\n)\nplt.xlabel("petal length [standardized]")\nplt.ylabel("petal width [standardized]")\nplt.legend(loc="upper left")\nplt.show()\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u7ed8\u5236\u8fb9\u754c\u5982\u4e0b\uff0c\u5176\u4e2d\u6d4b\u8bd5\u96c6\u7528\u9ed1\u8272\u5706\u5708\u6807\u51fa\uff1a"}),"\n",(0,r.jsx)(e.img,{src:"https://image.szdev.com/images/2018/12/03/book-py_ml_2nd-03_01.png",width:"600"})]})}function p(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>l,a:()=>a});var r=t(67294);const i={},s=r.createContext(i);function a(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);