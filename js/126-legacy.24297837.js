"use strict";(self["webpackChunkaugest"]=self["webpackChunkaugest"]||[]).push([[126],{69126:function(s,l,a){a.r(l),a.d(l,{default:function(){return C}});var n=a(19812),h=(0,n._)("head",null,null,-1),i=(0,n._)("h3",null,"安装依赖",-1),t=(0,n._)("p",null,[(0,n.Uk)("vue中需要同时安装"),(0,n._)("code",null,"highlight.js"),(0,n.Uk)("和"),(0,n._)("code",null,"@highlightjs/vue-plugin"),(0,n.Uk)("两个依赖")],-1),g=(0,n._)("pre",null,[(0,n._)("code",{"v-pre":"",class:"language-cmd"},"yarn add highlight.js\nyarn add @highlightjs/vue-plugin\n\nnpm install highlight.js\nnpm install @highlightjs/vue-plugin \n")],-1),e=(0,n._)("p",null,[(0,n.Uk)("官方文档:"),(0,n._)("a",{href:"https://highlightjs.org/"},"https://highlightjs.org/")],-1),p=(0,n._)("h3",null,"如何使用",-1),c=(0,n._)("h4",null,"main.js全局申明",-1),r=(0,n._)("p",null,"首先做好如下关键引用",-1),u=(0,n._)("pre",null,[(0,n._)("code",{"v-pre":"",class:"language-javascript"},[(0,n._)("span",{class:"hljs-keyword"},"import"),(0,n.Uk)(" hljs "),(0,n._)("span",{class:"hljs-keyword"},"from"),(0,n.Uk)(),(0,n._)("span",{class:"hljs-string"},'"highlight.js/lib/core"'),(0,n.Uk)(";\n"),(0,n._)("span",{class:"hljs-keyword"},"import"),(0,n.Uk)(" hljsVuePlugin "),(0,n._)("span",{class:"hljs-keyword"},"from"),(0,n.Uk)(),(0,n._)("span",{class:"hljs-string"},'"@highlightjs/vue-plugin"'),(0,n.Uk)(";\n"),(0,n._)("span",{class:"hljs-keyword"},"import"),(0,n.Uk)(),(0,n._)("span",{class:"hljs-string"},'"highlight.js/lib/common"'),(0,n.Uk)(";\n")])],-1),_=(0,n._)("p",null,"引入highlight.js的官方主题，因为我的项目想要动态改变dark和light样式因此把css抄出来做了成了css变量",-1),j=(0,n._)("pre",null,[(0,n._)("code",{"v-pre":"",class:"language-javascript"},[(0,n._)("span",{class:"hljs-keyword"},"import"),(0,n.Uk)(),(0,n._)("span",{class:"hljs-string"},'"highlight.js/styles/atom-one-dark.css"'),(0,n.Uk)("\n\n")])],-1),k=(0,n._)("p",null,[(0,n.Uk)("引入语言，之后就可以在"),(0,n._)("code",null,"<highlightjs>"),(0,n.Uk)("中指定"),(0,n._)("code",null,"language"),(0,n.Uk)("属性来对应不同的语言")],-1),o=(0,n._)("pre",null,[(0,n._)("code",{"v-pre":"",class:"language-javascript"},[(0,n._)("span",{class:"hljs-keyword"},"import"),(0,n.Uk)(" javascript "),(0,n._)("span",{class:"hljs-keyword"},"from"),(0,n.Uk)(),(0,n._)("span",{class:"hljs-string"},'"highlight.js/lib/languages/javascript"'),(0,n.Uk)("; \n"),(0,n._)("span",{class:"hljs-keyword"},"import"),(0,n.Uk)(" html "),(0,n._)("span",{class:"hljs-keyword"},"from"),(0,n.Uk)(),(0,n._)("span",{class:"hljs-string"},'"highlight.js/lib/languages/vbscript-html"'),(0,n.Uk)("\nhljs."),(0,n._)("span",{class:"hljs-title function_"},"registerLanguage"),(0,n.Uk)("("),(0,n._)("span",{class:"hljs-string"},'"javascript"'),(0,n.Uk)(", javascript);\nhljs."),(0,n._)("span",{class:"hljs-title function_"},"registerLanguage"),(0,n.Uk)("("),(0,n._)("span",{class:"hljs-string"},'"html"'),(0,n.Uk)(", html);\n")])],-1),U=(0,n._)("p",null,"最后做好全局引用",-1),d=(0,n._)("pre",null,[(0,n._)("code",{"v-pre":"",class:"language-javascript"},[(0,n.Uk)("app."),(0,n._)("span",{class:"hljs-title function_"},"use"),(0,n.Uk)("(hljsVuePlugin)\n")])],-1),m=(0,n._)("h4",null,"使用<highlightjs>标签",-1),v=(0,n._)("p",null,"使用方式如下：",-1),y=(0,n._)("pre",null,[(0,n._)("code",{"v-pre":"",class:"language-html"},[(0,n._)("span",{class:"hljs-tag"},[(0,n.Uk)("<"),(0,n._)("span",{class:"hljs-name"},"highlightjs"),(0,n.Uk)(),(0,n._)("span",{class:"hljs-attr"},"language"),(0,n.Uk)("="),(0,n._)("span",{class:"hljs-string"},'"html"'),(0,n.Uk)(),(0,n._)("span",{class:"hljs-attr"},"code"),(0,n.Uk)("="),(0,n._)("span",{class:"hljs-string"},[(0,n.Uk)('"<div class='),(0,n._)("span",{class:"hljs-symbol"},"&quot;"),(0,n.Uk)("className"),(0,n._)("span",{class:"hljs-symbol"},"&quot;"),(0,n.Uk)(" id="),(0,n._)("span",{class:"hljs-symbol"},"&quot;"),(0,n.Uk)("id"),(0,n._)("span",{class:"hljs-symbol"},"&quot;"),(0,n.Uk)('></div>"')]),(0,n.Uk)(">")]),(0,n._)("span",{class:"hljs-tag"},[(0,n.Uk)("</"),(0,n._)("span",{class:"hljs-name"},"highlightjs"),(0,n.Uk)(">")]),(0,n.Uk)("\n")])],-1);function f(s,l){var a=(0,n.up)("highlightjs");return(0,n.wg)(),(0,n.iD)("section",null,[(0,n._)("html",null,[h,(0,n._)("body",null,[i,t,g,e,p,c,r,u,_,j,k,o,U,d,m,v,y,(0,n._)("p",null,[(0,n.Uk)("效果： "),(0,n.Wm)(a,{language:"html",code:'<div class="className" id="id"></div>'})])])])])}var w=a(48998);const b={},q=(0,w.Z)(b,[["render",f]]);var C=q}}]);
//# sourceMappingURL=126-legacy.24297837.js.map