// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import FastClick from 'fastclick'
import wx from 'weixin-js-sdk'
import App from './App'
import router from './router'
import common from './common/' // 加载公共组件
import { ToastPlugin, ConfirmPlugin } from 'vux'
import myStorage from "./utils/stroe"
import Moment from 'moment'
import { post } from "./utils/axios.js"
import './common/rem'
import './assets/iconFont/iconfont.css'
import "./assets/css/common.css"

FastClick.attach(document.body);
Vue.config.productionTip = false
Object.keys(common).forEach(key => {
  var name = key.replace(/(\w)/, v => v.toUpperCase()); // 首字母大写
  Vue.component(`common${name}`, common[key]);
});
//plugins及全局组件
Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)
//全局变量
Vue.prototype.$myStorage = myStorage

import "./common/reset.css"
//全局函数
//初始化微信sdk及分享功能
Vue.prototype.shareFuncs = async function (_url, _title, _desc, _link, _img) {
  _url = Vue.prototype.$url ? Vue.prototype.$url : _url;
  post('api/auth/jssdk', { url: _url })
    .then((response) => {
      wx.config(JSON.parse(response));
      wx.ready(function () {
        console.log('wx is ready!');
        Vue.prototype.$wx = wx;
        //分享给朋友
        wx.onMenuShareAppMessage({
          title: _title,
          desc: _desc, // 分享描述
          link: _link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: _img, // 分享图标
          type: '', // 分享类型,music、video或link，不填默认为link
          dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
          success: function () {
            // 用户确认分享后执行的回调函数
            console.log(_link);
          },
          cancel: function () {
            // 用户取消分享后执行的回调函数
            console.log(_link);
          }
        });
        //分享到朋友圈
        wx.onMenuShareTimeline({
          title: _title,
          link: _link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: _img, // 分享图标
          success: function () {
            // 用户确认分享后执行的回调函数
            console.log(_link)
          },
          cancel: function () {
            // 用户取消分享后执行的回调函数
            console.log(_link)
          }
        });
      });
    }).catch(function (error) {
      console.log('error', error);
    })
}

//全局过滤器
Vue.filter("timeFormat1", val => {
  return Moment(val).format('MM-DD HH:mm')
});

router.beforeEach((to, from, next) => {
  next();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


//new Vue({ router, store }).$mount('#app')