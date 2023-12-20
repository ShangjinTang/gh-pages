"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9628],{633:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(85893),i=t(11151);const a={tags:["Machine Learning","Scikit-learn","Python","Perceptron"]},s="Scikit-learn Intro: Using Perceptron",l={id:"machine-learning/neural-network/introduction-to-sklearn-with-perceptron",title:"Scikit-learn Intro: Using Perceptron",description:"The name Scikit-learn comes from SciKit (SciPy Toolkit), a third-party extension toolkit for SciPy. After years of development, Scikit-learn has become one of the most popular machine learning libraries. This article takes the classification of the Iris data set as an example to introduce it.",source:"@site/docs/machine-learning/neural-network/introduction-to-sklearn-with-perceptron.md",sourceDirName:"machine-learning/neural-network",slug:"/machine-learning/neural-network/introduction-to-sklearn-with-perceptron",permalink:"/site/docs/machine-learning/neural-network/introduction-to-sklearn-with-perceptron",draft:!1,unlisted:!1,tags:[{label:"Machine Learning",permalink:"/site/docs/tags/machine-learning"},{label:"Scikit-learn",permalink:"/site/docs/tags/scikit-learn"},{label:"Python",permalink:"/site/docs/tags/python"},{label:"Perceptron",permalink:"/site/docs/tags/perceptron"}],version:"current",frontMatter:{tags:["Machine Learning","Scikit-learn","Python","Perceptron"]},sidebar:"machinelearningSidebar",previous:{title:"MCP Neurons and Perceptrons",permalink:"/site/docs/machine-learning/neural-network/mcp-neuron-and-perceptron"},next:{title:"Adaline and Gradient Descent",permalink:"/site/docs/machine-learning/neural-network/adaline-and-gradient-descent"}},o={},c=[{value:"Load Data",id:"load-data",level:2},{value:"Preprocessing",id:"preprocessing",level:2},{value:"Model Training",id:"model-training",level:2},{value:"Model Evaluation",id:"model-evaluation",level:2},{value:"Plot classification boundary",id:"plot-decistion-boundary",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"scikit-learn-intro-using-perceptron",children:"Scikit-learn Intro: Using Perceptron"}),"\n",(0,r.jsx)(n.p,{children:"The name Scikit-learn comes from SciKit (SciPy Toolkit), a third-party extension toolkit for SciPy. After years of development, Scikit-learn has become one of the most popular machine learning libraries. This article takes the classification of the Iris data set as an example to introduce it."}),"\n",(0,r.jsxs)(n.p,{children:["As introduced on the ",(0,r.jsx)(n.a,{href:"http://scikit-learn.org/",children:"official website"}),", the following are the features of scikit-learn:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Simple and efficient data mining and data analysis tools"}),"\n",(0,r.jsx)(n.li,{children:"Can be used by anyone and reused in any environment"}),"\n",(0,r.jsx)(n.li,{children:"Based on NumPy, SciPy, and matplotlib"}),"\n",(0,r.jsx)(n.li,{children:"Open source, available for commercial use (BSD license required)"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For the installation of scikit-learn, please refer to ",(0,r.jsx)(n.a,{href:"http://scikit-learn.org/stable/install.html",children:"this document"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"load-data",children:"Load Data"}),"\n",(0,r.jsx)(n.p,{children:"Load the Iris dataset from scikit-learn, where the third column represents petal length* and the fourth column represents petal width*. The classes have been converted to integer labels, where 0 = Iris-Setosa*, 1 = Iris-Versicolor*, 2 = Iris-Verginica_."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from sklearn import datasets\nimport numpy as np\n\niris = datasets.load_iris()\nX = iris.data[:, [2, 3]]\ny = iris.target\n\nprint('Class labels:', np.unique(y)) # output: Class labels: [0 1 2]\n"})}),"\n",(0,r.jsx)(n.h2,{id:"preprocessing",children:"Preprocessing"}),"\n",(0,r.jsxs)(n.p,{children:["The 150 data sets are divided into 70% training set and 30% through the function ",(0,r.jsx)(n.a,{href:"http://scikit-learn.org/stable/modules/generated/sklearn.model_selection.train_test_split.html",children:"sklearn.model_selection.train_test_split"})," Test set:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from sklearn.model_selection import train_test_split\n\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=1, stratify=y)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Here ",(0,r.jsx)(n.code,{children:"stratify=y"})," means to divide the data set according to the label value. After the division, the labels of the training set and the test set have the same proportion. You can use ",(0,r.jsx)(n.code,{children:"np.bincount"})," to print the number of each type of labels:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"print('Labels counts in y:', np.bincount(y)) # output: Labels counts in y: [50 50 50]\nprint('Labels counts in y_train:', np.bincount(y_train)) # output: Labels counts in y_train: [35 35 35]\nprint('Labels counts in y_test:', np.bincount(y_test)) # output: Labels counts in y_test: [15 15 15]\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Standardize features through the function ",(0,r.jsx)(n.a,{href:"http://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.StandardScaler.html",children:"sklearn.preprocessing.StandardScaler"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"from sklearn.preprocessing import StandardScaler\n\nsc = StandardScaler()\nsc.fit(X_train)\nX_train_std = sc.transform(X_train)\nX_test_std = sc.transform(X_test)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"model-training",children:"Model Training"}),"\n",(0,r.jsxs)(n.p,{children:["Use the neuron model ",(0,r.jsx)(n.a,{href:"http://scikit-learn.org/stable/modules/generated/sklearn.linear_model.Perceptron.html",children:"sklearn.linear_model.Perceptron"})," to train ",(0,r.jsx)(n.code,{children:"fit"})," on the training set:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from sklearn.linear_model import Perceptron\n\nppn = Perceptron(max_iter=40, eta0=0.1, random_state=0)\nppn.fit(X_train_std, y_train)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"model-evaluation",children:"Model Evaluation"}),"\n",(0,r.jsxs)(n.p,{children:["After training is completed, predict ",(0,r.jsx)(n.code,{children:"predict"})," on the test set and print out the number of incorrectly predicted samples:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"y_pred = ppn.predict(X_test_std)\nprint('Misclassified samples: %d' % (y_test != y_pred).sum()) # output: Misclassified samples: 3\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The training accuracy can be obtained through ",(0,r.jsx)(n.a,{href:"http://scikit-learn.org/stable/modules/generated/sklearn.metrics.accuracy_score.html",children:"sklearn.metrics.accuracy_score"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from sklearn.metrics import accuracy_score\n\nprint('Accuracy: %.2f' % accuracy_score(y_test, y_pred)) # output: Accuracy: 0.93\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Each classification function in scikit-learn has a method ",(0,r.jsx)(n.code,{children:"score"})," for calculating accuracy. When executed, ",(0,r.jsx)(n.code,{children:"accuracy_score"})," will be calculated and returned. The output results are the same:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"print('Accuracy: %.2f' % ppn.score(X_test_std, y_test)) # output: Accuracy: 0.93\n"})}),"\n",(0,r.jsx)(n.h2,{id:"plot-decistion-boundary",children:"Plot classification boundary"}),"\n",(0,r.jsx)(n.p,{children:"Plot the algorithm training process:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from matplotlib.colors import ListedColormap\nimport matplotlib.pyplot as plt\n\n\ndef plot_decision_regions(X, y, classifier, test_idx=None, resolution=0.02):\n     markers = ('s', 'x', 'o', '^', 'v')\n     colors = ('red', 'blue', 'lightgreen', 'gray', 'cyan')\n     cmap = ListedColormap(colors[:len(np.unique(y))])\n\n     x1_min, x1_max = X[:, 0].min() - 1, X[:, 0].max() + 1\n     x2_min, x2_max = X[:, 1].min() - 1, X[:, 1].max() + 1\n     xx1, xx2 = np.meshgrid(np.arange(x1_min, x1_max, resolution),\n                            np.arange(x2_min, x2_max, resolution))\n     Z = classifier.predict(np.array([xx1.ravel(), xx2.ravel()]).T)\n     Z = Z.reshape(xx1.shape)\n     plt.contourf(xx1, xx2, Z, alpha=0.3, cmap=cmap)\n     plt.xlim(xx1.min(), xx1.max())\n     plt.ylim(xx2.min(), xx2.max())\n     for idx, cl in enumerate(np.unique(y)):\n         plt.scatter(x=X[y == cl, 0], y=X[y == cl, 1],\n                     alpha=0.8, c=colors[idx],\n                     marker=markers[idx], label=cl,\n                     edgecolor='black')\n\n     if test_idx:\n         X_test, y_test = X[test_idx, :], y[test_idx]\n         plt.scatter(X_test[:, 0], X_test[:, 1],\n                     c='', edgecolor='black', alpha=1.0,\n                     linewidth=1, marker='o',\n                     s=100, label='test set')\n\n\nX_combined_std = np.vstack((X_train_std, X_test_std))\ny_combined = np.hstack((y_train, y_test))\nplot_decision_regions(X=X_combined_std,\n                       y=y_combined,\n                       classifier=ppn,\n                       test_idx=range(105, 150))\nplt.xlabel('petal length [standardized]')\nplt.ylabel('petal width [standardized]')\nplt.legend(loc='upper left')\nplt.show()\n"})}),"\n",(0,r.jsx)(n.p,{children:"The boundaries are drawn as follows, with the test set marked with a black circle:"}),"\n",(0,r.jsx)(n.img,{src:"https://image.szdev.com/images/2018/12/03/book-py_ml_2nd-03_01.png",width:"600"})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var r=t(67294);const i={},a=r.createContext(i);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);