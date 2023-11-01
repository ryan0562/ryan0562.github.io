(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{509:function(t,n,e){"use strict";e.r(n);var a=e(2),s=Object(a.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"【教你白嫖github-actions】每日给女盆友定时发邮件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#【教你白嫖github-actions】每日给女盆友定时发邮件"}},[t._v("#")]),t._v(" 【教你白嫖github actions】每日给女盆友定时发邮件")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/77c92b5402d745809a635c56de28c2e6~tplv-k3u1fbpfcp-zoom-1.image",alt:"【教你白嫖github actions】每日给女盆友定时发邮件"}})]),t._v(" "),n("p",[t._v("地址戳这里"),n("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fchenchunyang123%2FautoSendEmail",title:"https://github.com/chenchunyang123/autoSendEmail",target:"_blank",rel:"noopener noreferrer"}},[t._v("github地址"),n("OutboundLink")],1),t._v("，欢迎star")]),t._v(" "),n("h2",{attrs:{id:"演示图"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#演示图"}},[t._v("#")]),t._v(" 演示图")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/714650b6b0b44eed8112047873325f29~tplv-k3u1fbpfcp-zoom-1.image",alt:"WechatIMG3409.png"}})]),t._v(" "),n("p",[n("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a4d124b802b14eb2b14eff1b3f01bd4a~tplv-k3u1fbpfcp-zoom-1.image",alt:"WechatIMG1047.png"}})]),t._v(" "),n("h2",{attrs:{id:"背景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),n("p",[t._v("一直考虑做一个每天定时给对象发信息的小工具，但是一直没舍得买服务器。某天，正当我热火朝天地摸鱼时，发现了github上的一个功能"),n("code",[t._v("github actions")]),t._v("，相当于一个自带服务器的持续构建功能，并且既可以发布定时任务，每个月又有白嫖的分钟数，岂不是正和我意？起飞~")]),t._v(" "),n("h2",{attrs:{id:"思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),n("p",[t._v("整体基于node开发，并且引入三个npm库：")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("nodemailer")]),t._v("发送邮件")]),t._v(" "),n("li",[n("code",[t._v("node-fetch")]),t._v("请求接口数据")]),t._v(" "),n("li",[n("code",[t._v("dayjs")]),t._v("计算日期")])]),t._v(" "),n("p",[t._v("主要逻辑代码如下：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// index.js\nconst fetch = require('node-fetch');\nconst dayjs = require('dayjs');\nconst utc = require('dayjs/plugin/utc');\nconst timezone = require('dayjs/plugin/timezone');\n\nconst sendEmail = require('./sendEmail');\nconst emailHtml = require('./emailHtml');\n\n// 给dayjs添加时区选项\ndayjs.extend(utc);\ndayjs.extend(timezone);\n\nconst {\n  fromDisplayText,\n  fromDisplaySubText,\n  user,\n  to,\n  weatherKey,\n  location,\n  type,\n  tianXingKey,\n  startDay,\n} = require('./config');\n\nasync function init() {\n  try {\n    // 获取天气信息\n    const weatherRes = await fetch(\n      `https://devapi.qweather.com/v7/weather/3d?key=${weatherKey}&location=${location}`\n    );\n    const weatherData = await weatherRes.json();\n\n    // 获取天气生活指数\n    const lifeRes = await fetch(\n      `https://devapi.qweather.com/v7/indices/1d?key=${weatherKey}&location=${location}&type=${type}`\n    );\n    const lifeData = await lifeRes.json();\n\n    // 获取one一个文案及图片\n    const oneRes = await fetch(\n      `http://api.tianapi.com/txapi/one/index?key=${tianXingKey}`\n    );\n    const oneData = await oneRes.json();\n    const { word, imgurl } = oneData.newslist[0];\n\n    // 计算日期\n    const lovingDays = dayjs(dayjs().tz('Asia/Shanghai')).diff(\n      startDay,\n      'days'\n    );\n\n    // 用邮件模版生成字符串\n    const htmlStr = emailHtml(weatherData, lifeData, word, imgurl, lovingDays);\n\n    // 发送邮件;\n    sendEmail({\n      from: fromDisplayText,\n      to,\n      subject: fromDisplaySubText,\n      html: htmlStr,\n    });\n  } catch (e) {\n    // 发送邮件给自己提示\n    sendEmail({\n      from: '报错啦',\n      to: user,\n      subject: '定时邮件-报错提醒',\n      html: '请查看github actions',\n    });\n  }\n}\n\ninit();\n复制代码\n")])])]),n("p",[t._v("主要就是请求接口数据，然后用接口数据生成需要的html，最后发送邮件。")]),t._v(" "),n("h4",{attrs:{id:"_1、生成需要的邮件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、生成需要的邮件"}},[t._v("#")]),t._v(" 1、生成需要的邮件")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('function fn(weatherData, lifeData, word, imgurl, lovingDays) {\n  const { daily: weatherDataDaily } = weatherData;\n  const { daily } = lifeData;\n\n  return `<!DOCTYPE html>\n  <html lang="en">\n    <head>\n      <meta charset="UTF-8" />\n      <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n      <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    </head>\n    <body>\n      <div>\n        \x3c!-- 天数 --\x3e\n        <div>\n          <p>今天是在一起的第${lovingDays}天！</p>\n        </div>\n        \x3c!-- 图片 --\x3e\n        <div>\n          <img\n            style="width: 100%; max-width: 768px"\n            src="${imgurl}"\n            alt="图片"\n          />\n        </div>\n        \x3c!-- 每日一句 --\x3e\n        <div>\n          <p style="font-size: 14px; text-indent: 2em; font-style: italic;">\n            ${word}\n          </p>\n        </div>\n        \x3c!-- 天气 --\x3e\n        <div>\n          <p>\n            <b>今日气温:</b>\n            <span>${weatherDataDaily[0].tempMin}°C - ${weatherDataDaily[0].tempMax}°C</span>\n          </p>\n          <ul>\n            <li style="margin-bottom: 10px">\n              ${daily[1].name}(${daily[1].category}):\n              ${daily[1].text}\n            </li>\n            <li style="margin-bottom: 10px">\n              ${daily[2].name}(${daily[2].category}):\n              ${daily[2].text}\n            </li>\n            <li style="margin-bottom: 10px">\n              ${daily[0].name}(${daily[0].category}):\n              ${daily[0].text}\n            </li>\n          </ul>\n        </div>\n      </div>\n    </body>\n  </html>\n  `;\n}\n\nmodule.exports = fn;\n复制代码\n')])])]),n("h4",{attrs:{id:"_2、发送邮件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、发送邮件"}},[t._v("#")]),t._v(" 2、发送邮件")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("const nodemailer = require('nodemailer');\nconst { user, pass } = require('./config');\n\nconst sendMail = async (data) => {\n  let transporter = nodemailer.createTransport({\n    host: 'smtp.qq.com',\n    port: '465',\n    secureConnection: true,\n    auth: {\n      user,\n      pass,\n    }\n  });\n\n  data.from = `\"${data.from}\" ${user}`;\n\n  await transporter.sendMail(data);\n};\n\nmodule.exports = sendMail;\n复制代码\n")])])]),n("h4",{attrs:{id:"_3、指定定时任务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、指定定时任务"}},[t._v("#")]),t._v(" 3、指定定时任务")]),t._v(" "),n("p",[t._v("需要在根目录创建一个"),n("code",[t._v(".github")]),t._v("文件夹，然后在"),n("code",[t._v(".github")]),t._v("文件夹中再新建一个"),n("code",[t._v("workflows")]),t._v("文件夹，然后在里面任意创建一个"),n("code",[t._v("yml")]),t._v("格式的文件，文件内容如下：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('name: ccy-helper\n\non:\n  schedule:\n    - cron: "00 23 * * *" # 该时间为UTC时间，比北京时间晚8个小时，每天早上7点自动执行（需要注意该时间不准时，会有不同程度的分钟数的延迟）\n\njobs:\n  send:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n      - uses: actions/setup-node@v1\n      - name: Run Project\n        run: npm install && npm run server # 安装依赖并执行server\n复制代码\n')])])]),n("h2",{attrs:{id:"如何使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何使用"}},[t._v("#")]),t._v(" 如何使用")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("把"),n("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fchenchunyang123%2FautoSendEmail",title:"https://github.com/chenchunyang123/autoSendEmail",target:"_blank",rel:"noopener noreferrer"}},[t._v("完整代码"),n("OutboundLink")],1),t._v("拉下来")])]),t._v(" "),n("li",[n("p",[t._v("修改其中的config.js配置文件")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// 配置信息\nmodule.exports = {\n  fromDisplayText: '阳哥', // 收件箱展示的来件人名字\n  fromDisplaySubText: '每日提醒', // 收件箱展示的次级标题\n  user: 'xxx', // 发送者邮箱\n  pass: 'xxx', // 发送者邮箱MTP协议密码(很简单，进邮箱设置下就有了)\n  to: 'xxx', // 发送到谁，填邮箱\n  weatherKey: '33369e365fe84eb68876f52a2ae51cca', // 和风天气key\n  location: 'xxx',  // 和风天气-地区的id，如：101270119\n  type: '1,3,9', // 和风天气-生活指数type\n  tianXingKey: 'eb75297818f2413f24e1f1f76662bccd', // 天行数据的key\n  startDay: '2015-09-29', // 在一起的日期\n}\n复制代码\n")])])]),n("p",[n("code",[t._v("和风天气key")]),t._v("和"),n("code",[t._v("天行数据的key")]),t._v("可以直接用我的，也可以自己申请个账号，每天都有免费的额度。")]),t._v(" "),n("p",[t._v("和风天气查询地区的id可以看该文档："),n("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fdev.qweather.com%2Fdocs%2Fapi%2Fgeo%2Fcity-lookup%2F",title:"https://dev.qweather.com/docs/api/geo/city-lookup/",target:"_blank",rel:"noopener noreferrer"}},[t._v("dev.qweather.com/docs/api/ge…"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("例如查询北京的："),n("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fgeoapi.qweather.com%2Fv2%2Fcity%2Flookup%3Fkey%3D33369e365fe84eb68876f52a2ae51cca%26location%3D%25E5%258C%2597%25E4%25BA%25AC",title:"https://geoapi.qweather.com/v2/city/lookup?key=33369e365fe84eb68876f52a2ae51cca&location=%E5%8C%97%E4%BA%AC",target:"_blank",rel:"noopener noreferrer"}},[t._v("geoapi.qweather.com/v2/city/loo…"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("查其他地区的话，替换后面的location就好")])]),t._v(" "),n("li",[n("p",[t._v("将配置好的代码提交到自己的仓库就好了")])])]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("Tips：本地测试的时候直接执行npm run server就可以看邮件效果，记得让对象打开"),n("code",[t._v("微信")]),t._v("里的"),n("code",[t._v("QQ邮箱提醒功能")]),t._v("。基于此思路你也可以开发一些其他的小工具，要是你有好的想法，欢迎一起交流~")])])}),[],!1,null,null,null);n.default=s.exports}}]);