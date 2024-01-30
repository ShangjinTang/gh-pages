"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8132],{3307:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=t(85893),i=t(11151);const s={},r="Feature Importance",o={id:"machine-learning/feature-selection/feature-importance",title:"Feature Importance",description:"One of the methods to avoid overfitting is called feature selection, which selects the most important features while discarding unimportant features. This article takes the Wine data set as an example to demonstrate the feature importance evaluation and selection method using random forest.",source:"@site/docs/machine-learning/feature-selection/feature-importance.md",sourceDirName:"machine-learning/feature-selection",slug:"/machine-learning/feature-selection/feature-importance",permalink:"/site/docs/machine-learning/feature-selection/feature-importance",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"machinelearningSidebar",previous:{title:"ROC and AUC",permalink:"/site/docs/machine-learning/evaluation-metrics/roc-and-auc"},next:{title:"Principal Component Analysis",permalink:"/site/docs/machine-learning/feature-selection/feature-extraction-pca"}},l={},c=[{value:"Wine Dataset",id:"wine-dataset",level:2},{value:"Feature Importance Using Scikit-learn",id:"feature-importance-using-sklearn",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"feature-importance",children:"Feature Importance"}),"\n",(0,a.jsx)(n.p,{children:"One of the methods to avoid overfitting is called feature selection, which selects the most important features while discarding unimportant features. This article takes the Wine data set as an example to demonstrate the feature importance evaluation and selection method using random forest."}),"\n",(0,a.jsx)(n.h2,{id:"wine-dataset",children:"Wine Dataset"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"http://archive.ics.uci.edu/ml/datasets/Wine",children:"Wine dataset"})," is the result of a chemical analysis of wine grown in the same region of Italy, but originating from three different varieties."]}),"\n",(0,a.jsx)(n.p,{children:"The first column is its classification label (i.e. wine origin), and the remaining 13 columns are characteristics."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import pandas as pd\n\ndf_wine = pd.read_csv(\n    "https://archive.ics.uci.edu/ml/machine-learning-databases/wine/wine.data",\n    header=None,\n)\ndf_wine.columns = [\n    "Class label",\n    "Alcohol",\n    "Malic acid",\n    "Ash",\n    "Alcalinity of ash",\n    "Magnesium",\n    "Total phenols",\n    "Flavanoids",\n    "Nonflavanoid phenols",\n    "Proanthocyanins",\n    "Color intensity",\n    "Hue",\n    "OD280/OD315 of diluted wines",\n    "Proline",\n]\nprint(df_wine.head())\n'})}),"\n",(0,a.jsx)(n.img,{src:"https://image.szdev.com/images/2018/12/03/book-py_ml_2nd-04_03.png",width:"800"}),"\n",(0,a.jsx)(n.p,{children:"Split the data set by class labels into 70% training data set and 30% test data set:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"from sklearn.model_selection import train_test_split\n\nX, y = df_wine.iloc[:, 1:].values, df_wine.iloc[:, 0].values\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.3, random_state=0, stratify=y\n)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"feature-importance-using-sklearn",children:"Feature Importance Using Scikit-learn"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"http://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html",children:"sklearn.ensemble.RandomForestClassifier"})," in scikit-learn has integrated feature importance ranking, and the implementation is as follows:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from sklearn.ensemble import RandomForestClassifier\n\nfeat_labels = df_wine.columns[1:]\nforest = RandomForestClassifier(n_estimators=500, random_state=1)\nforest.fit(X_train, y_train)\nimportances = forest.feature_importances_\nindices = np.argsort(importances)[::-1]\nfor f in range(X_train.shape[1]):\n    print("{:2d}) {:30}{:f} ".format(f + 1, feat_labels[f], importances[f]))\n'})}),"\n",(0,a.jsx)(n.p,{children:"The importance of features is ranked as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plain",children:" 1) Proline                       0.179927\n 2) Color intensity               0.153158\n 3) Flavanoids                    0.146123\n 4) Alcohol                       0.138224\n 5) OD280/OD315 of diluted wines  0.114818\n 6) Hue                           0.077525\n 7) Total phenols                 0.058236\n 8) Malic acid                    0.030856\n 9) Alcalinity of ash             0.030000\n10) Proanthocyanins               0.025713\n11) Magnesium                     0.025135\n12) Nonflavanoid phenols          0.011548\n13) Ash                           0.008738\n"})}),"\n",(0,a.jsx)(n.p,{children:"Plot importance of different features:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import matplotlib.pyplot as plt\n\nplt.title("Feature Importance")\nplt.bar(range(X_train.shape[1]), importances[indices], align="center")\nplt.xticks(range(X_train.shape[1]), feat_labels, rotation=90)\nplt.xlim([-1, X_train.shape[1]])\nplt.tight_layout()\nplt.show()\n'})}),"\n",(0,a.jsx)(n.img,{src:"https://image.szdev.com/images/2018/12/03/book-py_ml_2nd-04_09.png",width:"600"}),"\n",(0,a.jsxs)(n.p,{children:["It should be mentioned that scikit-learn also implements a ",(0,a.jsx)(n.code,{children:"SelectFromModel"})," object, which selects features based on user-specified thresholds after model fitting, and different estimators (Estimators) can be connected to it."]}),"\n",(0,a.jsx)(n.p,{children:"Taking random forest as an example, use the following code to set the feature threshold to 0.1 to filter out the five most important features:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from sklearn.feature_selection import SelectFromModel\n\nsfm = SelectFromModel(forest, threshold=0.1, prefit=True)\nX_selected = sfm.transform(X_train)\nprint("Number of samples that meet this criterion:", X_selected.shape[0])\nfor f in range(X_selected.shape[1]):\n    print(\n        "{:2d}) {:30}{:f} ".format(\n            f + 1, feat_labels[indices[f]], importances[indices[f]]\n        )\n    )\n'})}),"\n",(0,a.jsx)(n.p,{children:"The output is as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plain",children:"Number of samples that meet this criterion: 124\n 1) Proline                       0.179927\n 2) Color intensity               0.153158\n 3) Flavanoids                    0.146123\n 4) Alcohol                       0.138224\n 5) OD280/OD315 of diluted wines  0.114818\n"})})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var a=t(67294);const i={},s=a.createContext(i);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);