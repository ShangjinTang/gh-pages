"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1892],{36214:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=i(85893),a=i(11151);const r={tags:["machine-learning","scikit-learn","model-selection","bias-variance"]},s="Learning Curve and Validation Curve",l={id:"machine-learning/model-selection/learning-and-validation-curve",title:"Learning Curve and Validation Curve",description:"Drawing the learning curve and validation curve of the model is a commonly used debugging method. From it, you can intuitively see the performance of the model on the test set and verification set, and determine whether there are over-fitting or under-fitting problems. .",source:"@site/docs/machine-learning/model-selection/learning-and-validation-curve.md",sourceDirName:"machine-learning/model-selection",slug:"/machine-learning/model-selection/learning-and-validation-curve",permalink:"/site/docs/machine-learning/model-selection/learning-and-validation-curve",draft:!1,unlisted:!1,tags:[{label:"machine-learning",permalink:"/site/docs/tags/machine-learning"},{label:"scikit-learn",permalink:"/site/docs/tags/scikit-learn"},{label:"model-selection",permalink:"/site/docs/tags/model-selection"},{label:"bias-variance",permalink:"/site/docs/tags/bias-variance"}],version:"current",frontMatter:{tags:["machine-learning","scikit-learn","model-selection","bias-variance"]},sidebar:"machinelearningSidebar",previous:{title:"Grid Search",permalink:"/site/docs/machine-learning/model-selection/grid-search"}},o={},c=[{value:"Variance-Bias Tradeoff",id:"variance-bias-tradeoff",level:2},{value:"Learning Curve",id:"learning-curve",level:2},{value:"Verification Curve",id:"validation-curve",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"learning-curve-and-validation-curve",children:"Learning Curve and Validation Curve"}),"\n",(0,t.jsx)(n.p,{children:"Drawing the learning curve and validation curve of the model is a commonly used debugging method. From it, you can intuitively see the performance of the model on the test set and verification set, and determine whether there are over-fitting or under-fitting problems. ."}),"\n",(0,t.jsx)(n.h2,{id:"variance-bias-tradeoff",children:"Variance-Bias Tradeoff"}),"\n",(0,t.jsx)(n.p,{children:"Through the curve, it is easy to see whether the model has high bias or high deviation, and whether these problems can be solved by increasing the number of samples."}),"\n",(0,t.jsx)(n.p,{children:"A common learning curve is shown below:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Upper left subgraph: Both the learning curve and the validation curve are poor, with high deviation and underfitting."}),"\n",(0,t.jsx)(n.li,{children:"Upper right subgraph: The learning curve is very good but the validation curve is very poor, with high variance and overfitting."}),"\n",(0,t.jsx)(n.li,{children:"Lower right subgraph: With a certain number of samples, it has good bias-variance tradeoff and degree of fitting."}),"\n"]}),"\n",(0,t.jsx)(n.img,{src:"https://image.szdev.com/images/2018/12/03/book-py_ml_2nd-06_04.png",width:"600"}),"\n",(0,t.jsx)(n.h2,{id:"learning-curve",children:"Learning Curve"}),"\n",(0,t.jsx)(n.p,{children:"When drawing a learning curve, the independent variable is the number of samples and the dependent variable is the evaluation index."}),"\n",(0,t.jsx)(n.p,{children:"Read the wdbc data set and split it into 80% training set and 20% test set:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import pandas as pd\nfrom sklearn.preprocessing import LabelEncoder\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.decomposition import PCA\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.pipeline import make_pipeline\n\ndf = pd.read_csv('https://archive.ics.uci.edu/ml/machine-learning-databases/breast-cancer-wisconsin/wdbc.data',\n                  header=None)\nX = df.loc[:, 2:].values\ny = df.loc[:, 1].values\nle = LabelEncoder()\ny = le.fit_transform(y)\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.20, stratify=y, random_state=1)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.a,{href:"http://scikit-learn.org/stable/modules/generated/sklearn.model_selection.learning_curve.html",children:"sklearn.model_selection.learning_curve"})," to generate the value of the learning curve, and then draw the model for the training set and validation set through pyplot The accuracy of:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"pipe_lr"}),": scikit-learn pipeline object"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"train_sizes"}),": The test set is the proportion of the data set ",(0,t.jsx)(n.code,{children:"X_train"})," (here 10%, 20%, ..., 100%)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"cv"}),": Number of folds K for stratified cross-validation"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"n_jobs"}),": Number of CPU cores used"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"train_scores"})," and ",(0,t.jsx)(n.code,{children:"test_scores"}),": There are ",(0,t.jsx)(n.code,{children:"len(train_sizes)"})," rows, each row has ",(0,t.jsx)(n.code,{children:"cv"})," cross-validation scores, so the mean standard deviation is calculated row by row ",(0,t.jsx)(n.code,{children:"axis=1"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"plt.fill_between"}),": Plots the dispersion of data by standard deviation"]}),"\n",(0,t.jsx)(n.li,{}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import numpy as np\nimport matplotlib.pyplot as plt\nfrom sklearn.model_selection import learning_curve\n\npipe_lr = make_pipeline(StandardScaler(),\n                         LogisticRegression(random_state=1))\ntrain_sizes, train_scores, test_scores = learning_curve(estimator=pipe_lr, X=X_train, y=y_train,\n                                                         train_sizes=np.linspace(0.1, 1.0, 10), cv=10, n_jobs=1)\ntrain_mean = np.mean(train_scores, axis=1)\ntrain_std = np.std(train_scores, axis=1)\ntest_mean = np.mean(test_scores, axis=1)\ntest_std = np.std(test_scores, axis=1)\n\nplt.plot(train_sizes, train_mean, color='blue', marker='o', markersize=5, label='training accuracy')\nplt.fill_between(train_sizes, train_mean + train_std, train_mean - train_std, alpha=0.15, color='blue')\nplt.plot(train_sizes, test_mean, color='green', linestyle='--', marker='s', markersize=5, label='validation accuracy')\nplt.fill_between(train_sizes, test_mean + test_std, test_mean - test_std, alpha=0.15, color='green')\nplt.grid()\nplt.xlabel('Number of training samples')\nplt.ylabel('Accuracy')\nplt.legend(loc='lower right')\nplt.ylim([0.8, 1.03])\nplt.show()\n"})}),"\n",(0,t.jsx)(n.p,{children:"Get the curve of the accuracy of the model changing with the number of samples:"}),"\n",(0,t.jsx)(n.img,{src:"https://image.szdev.com/images/2018/12/03/book-py_ml_2nd-06_05.png",width:"600"}),"\n",(0,t.jsx)(n.p,{children:"If the number of samples in the training set is less than 250, the accuracy of the training set is very high, but the accuracy of the test set is relatively low, and the model has an overfitting problem. If the number of samples in the training set is greater than 250, the model performs very well on both the training set and the validation set."}),"\n",(0,t.jsx)(n.h2,{id:"validation-curve",children:"Verification Curve"}),"\n",(0,t.jsxs)(n.p,{children:["Unlike the learning curve, the dependent variable of the validation curve is often the parameter value of the model, such as the parameter ",(0,t.jsx)(n.code,{children:"C"})," in logistic regression."]}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.a,{href:"http://scikit-learn.org/stable/modules/generated/sklearn.model_selection.validation_curve.html",children:"sklearn.model_selection.validation_curve"})," to generate the value of the learning curve, and then draw the model for the training set and validation set through pyplot The accuracy of:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"pipe_lr"}),": scikit-learn pipeline object"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"logisticregression__C"}),": hyperparameter ",(0,t.jsx)(n.code,{children:"C"})," of logistic regression, the reciprocal of the regularization coefficient"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"param_range"}),": the value range of the hyperparameter"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from sklearn.model_selection import validation_curve\n\nparam_range = [0.001, 0.01, 0.1, 1.0, 10.0, 100.0]\ntrain_scores, test_scores = validation_curve(estimator=pipe_lr, X=X_train, y=y_train,\n                                              param_name='logisticregression__C', param_range=param_range, cv=10)\ntrain_mean = np.mean(train_scores, axis=1)\ntrain_std = np.std(train_scores, axis=1)\ntest_mean = np.mean(test_scores, axis=1)\ntest_std = np.std(test_scores, axis=1)\nplt.plot(param_range, train_mean, color='blue', marker='o', markersize=5, label='training accuracy')\nplt.fill_between(param_range, train_mean + train_std, train_mean - train_std, alpha=0.15, color='blue')\nplt.plot(param_range, test_mean, color='green', linestyle='--', marker='s', markersize=5, label='validation accuracy')\nplt.fill_between(param_range, test_mean + test_std, test_mean - test_std, alpha=0.15, color='green')\nplt.grid()\nplt.xscale('log')\nplt.legend(loc='lower right')\nplt.xlabel('Parameter C')\nplt.ylabel('Accuracy')\nplt.ylim([0.8, 1.03])\nplt.show()\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Get the curve of the accuracy of the model changing with the logistic regression parameter ",(0,t.jsx)(n.code,{children:"C"}),":"]}),"\n",(0,t.jsx)(n.img,{src:"https://image.szdev.com/images/2018/12/03/book-py_ml_2nd-06_05.png",width:"600"}),"\n",(0,t.jsxs)(n.p,{children:["When the regularization intensity is large (",(0,t.jsx)(n.code,{children:"C"})," is less than 0.01), the model is underfitted (high deviation) to a certain extent, but when the regularization intensity is small (",(0,t.jsx)(n.code,{children:"C"})," is greater than 10), the model will be overfitted. combined (high variance). The model performs optimally when the value of the hyperparameter ",(0,t.jsx)(n.code,{children:"C"})," is between 0.01 and 0.1."]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>s});var t=i(67294);const a={},r=t.createContext(a);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);