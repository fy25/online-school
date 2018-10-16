/**
 * http配置
 */
// 引入axios以及element ui中的loading和message组件
import axios from 'axios'
import Vue from 'vue';
import Qs from 'qs'
import router from '@/router'
import {Config} from "@/Config/config"
// 超时时间
axios.defaults.timeout = 60000;
axios.defaults.baseURL = Config.serverUrl;
axios.defaults.transformRequest = data => {
  return Qs.stringify(data);
};
//http request 拦截器
axios.interceptors.request.use(
  config => {
    config.headers = {
      'Content-Type':'application/json'
    }
    let {session} = Vue.prototype.$myStorage;
    let token = session.get('token');
    if(token && token.length == 32){
      config.headers['token'] = token
    }
    config.headers['platform'] = 'wechat'
    return config;
  },
  error => {
    return Promise.reject(err);
  }
);


// http响应拦截器
//http response 拦截器
axios.interceptors.response.use(
  response => {
    //Vue.$vux.toast.show({text:'asdfasdf',type:'warn'});
    if(response.data.code != 0 ){
    }
    return response;
  },
  error => {   
    if(error.response.status == 401){
      router.push({
        path:"/pages/auth",
        query:{redirect:router.path}
      })
    }
    return Promise.reject(error)
  }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url,params={}){
  return new Promise((resolve,reject) => {
    axios.get(url,{params:params})
    .then(response => {
      resolve(response.data);
    })
    .catch(err => {
      reject(err)
    })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

 export function post(url,data = {}){
   return new Promise((resolve,reject) => {
     axios.post(url,data)
          .then(response => {
            resolve(response.data);
          },err => {
            reject(err)
          })
   })
 }

 /**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

/*export function patch(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.patch(url,data)
         .then(response => {
           resolve(response.data);
         },err => {
           reject(err)
         })
  })
}*/

 /**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.put(url,data)
         .then(response => {
           resolve(response.data);
         },err => {
           reject(err)
         })
  })
}

export function del(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.delete(url,data)
         .then(response => {
           resolve(response.data);
         },err => {
           reject(err)
         })
  })
}

