
// bui.debug 为true时, 如果拿不到数据,请确认是否已经开启跨域的谷歌;
// bui.debug 为false, 会使用原生方法请求,请检查页面有没有引入 Cordova.js 及 bingotouch.js;
bui.debug = true;

// 网站配置
var sitePath = "http://eid.bingosoft.net:82",
	siteDir = sitePath + "/bui/demo/json/";

// 微信初始化需要用到
var weixinConfig = {
    appId : "",
    appSecret : ""
}

/* 旧版 全局配置*/
// dialog 
bui.config.confirm = {
    buttons: ["确定","取消"]
}
// mask 自动触发
bui.config.mask = {
    autoTrigger: true
}
// loading 自动触发
bui.config.loading = {
    autoTrigger: true
}