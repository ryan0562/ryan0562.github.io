(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{551:function(s,t,a){"use strict";a.r(t);var r=a(2),e=Object(r.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"git换源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git换源"}},[s._v("#")]),s._v(" git换源")]),s._v(" "),t("p",[s._v("国内镜像地址：http://npmmirror.com")]),s._v(" "),t("p",[s._v("http://npm.taobao.org 和 http://registry.npm.taobao.org 将在 2022.06.30 号正式下线和停止 DNS 解析。")]),s._v(" "),t("h2",{attrs:{id:"包管理器换源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#包管理器换源"}},[s._v("#")]),s._v(" 包管理器换源")]),s._v(" "),t("blockquote",[t("p",[s._v("npm默认源地址 http://registry.npmjs.org\n淘宝镜像地址 https://registry.npmmirror.com")])]),s._v(" "),t("ul",[t("li",[s._v("npm config : npm config set registry https://registry.npmmirror.com")]),s._v(" "),t("li",[s._v("yarn config : yarn config set registry https://registry.npmmirror.com")])]),s._v(" "),t("h2",{attrs:{id:"npm全局换源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm全局换源"}},[s._v("#")]),s._v(" npm全局换源")]),s._v(" "),t("p",[s._v("全局npm配置文件地址：C:\\Users${用户名}.npmrc")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("npm install "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g mirror"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("config"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("china "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("registry"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("registry.npmmirror.com")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),s._v("\nnpm install node"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("sass\n")])])]),t("h2",{attrs:{id:"单个依赖包换源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单个依赖包换源"}},[s._v("#")]),s._v(" 单个依赖包换源")]),s._v(" "),t("p",[s._v("在项目根目录新建 .npmrc文件，写入")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npm install --save xxx --registry http://10.168.4.75:8081/repository/mti-npm/\n")])])]),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// .npmrc")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// node-sass换源")]),s._v("\nsass"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("binary"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("site"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("www"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("npmmirror"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("node"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("sass\n")])])]),t("h2",{attrs:{id:"修改npm依赖包的源码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改npm依赖包的源码"}},[s._v("#")]),s._v(" 修改npm依赖包的源码")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npm i patch-package\n")])])]),t("p",[s._v("详细信息查看patch-package的用法")]),s._v(" "),t("h2",{attrs:{id:"修改发布源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改发布源"}},[s._v("#")]),s._v(" 修改发布源")]),s._v(" "),t("p",[s._v("在package.json文件中，添加publishConfig属性，这样可以指定npm源发布仓库（可以用于公司的npm私库）需要提前登录")]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// package.json文件配置")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"publishConfig"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"registry"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://xxxxx/"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);