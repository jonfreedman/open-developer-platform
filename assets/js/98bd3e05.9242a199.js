(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{102:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return y}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=u(n),d=r,y=l["".concat(a,".").concat(d)]||l[d]||h[d]||i;return n?o.a.createElement(y,p(p({ref:t},s),{},{components:n})):o.a.createElement(y,p({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),i=(n(0),n(102)),a={id:"python",title:"Python"},p={unversionedId:"development-infrastructure/continuous-integration/python",id:"development-infrastructure/continuous-integration/python",isDocsHomePage:!1,title:"Python",description:"Python is an interpreted, object-oriented, high-level programming language with dynamic semantics.  Packages are published on the Python Package Index (pypi), however the FINOS account is still empty, see pypi.org/user/finos .",source:"@site/../docs/development-infrastructure/continuous-integration/python.md",sourceDirName:"development-infrastructure/continuous-integration",slug:"/development-infrastructure/continuous-integration/python",permalink:"/docs/development-infrastructure/continuous-integration/python",editUrl:"https://github.com/finos/open-developer-platform/edit/master/website/../docs/development-infrastructure/continuous-integration/python.md",version:"current",frontMatter:{id:"python",title:"Python"},sidebar:"mainSidebar",previous:{title:"Javascript",permalink:"/docs/development-infrastructure/continuous-integration/javascript"},next:{title:"Code Validation",permalink:"/docs/development-infrastructure/code-validation/intro"}},c=[{value:"Publishing on Pypi",id:"publishing-on-pypi",children:[]},{value:"Links",id:"links",children:[]}],s={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.python.org/"},Object(i.b)("strong",{parentName:"a"},"Python"))," is an interpreted, object-oriented, high-level programming language with dynamic semantics.  Packages are published on the ",Object(i.b)("a",{parentName:"p",href:"https://pypi.python.org/pypi"},"Python Package Index (pypi)"),", however the FINOS account is still empty, see ",Object(i.b)("a",{parentName:"p",href:"https://pypi.org/user/finos/"},"pypi.org/user/finos")," ."),Object(i.b)("h2",{id:"publishing-on-pypi"},"Publishing on Pypi"),Object(i.b)("p",null,"Python packages can be easily installed using ",Object(i.b)("a",{parentName:"p",href:"https://packaging.python.org/pip_easy_install/"},"pip or easy_install"),"; in order to publish a Python package to the Python Package Index, follow the ",Object(i.b)("a",{parentName:"p",href:"https://peterdowns.com/posts/first-time-with-pypi.html"},"simple steps described on this blogpost"),"."),Object(i.b)("p",null,"That said, the Foundation is still working on a centralised, automated way to publish (and sign) Python packages so that they can be managed by Foundation Staff."),Object(i.b)("h2",{id:"links"},"Links"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/symphonyoss/python-symphony/blob/master/HACKING.rst"},"Python Hacking style guide")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://python-semantic-release.readthedocs.io/"},"Python semantic release"),", automatic semantic versioning for python projects, including ",Object(i.b)("a",{parentName:"li",href:"https://python-semantic-release.readthedocs.io/en/latest/automatic-releases/travis.html"},"Travis CI integration"))))}u.isMDXComponent=!0}}]);