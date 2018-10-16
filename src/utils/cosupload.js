import {
    Config
  } from "./config.js";
  import {token, Token} from "./token.js";
  import {
    Cache
  } from "./cache.js";
  var config = {
    Bucket: 'hdll-1257143824', //replace with yours
    Region: 'ap-shanghai', //replace with yours
  }
  class CosUpload {
    constructor() {
      this.url = Config.serverUrl + "v1/security/sign";
      //this.prefix = 'https://' + config.Bucket + '.cos.' + config.Region + '.myqcloud.com/';
      this.prefix = 'https://res.2b3.cn/';
      this.count = 0;
      this.successArr = [];
      this.failArr = [];
      this.cache = new Cache();
      this.token = this.cache.getCache("token");
    }
    getAuthorization (options, callback) {
      var that = this;
      if(this.token == '' || !this.token ){
        var token = new Token();
        token.getUesrInfo().then(res => {
          let { encryptedData, iv } = res;
          token.getTokenFromServer(encryptedData, iv).then((token) => {
            that._auth(options, callback);
          });
        });
      }else{
        that._auth(options, callback);
      }
    };
    _auth(options, callback){
      var that = this;
      this.token =  this.cache.getCache("token");
      wx.request({
        method: 'GET',
        url: that.url , // 服务端签名，参考 server 目录下的两个签名例子
        data: {
          method: options.method,
          pathname: options.pathname
        },
        header: {
          'content-type': 'application/json',
          'token': this.token ? this.token : '',
          'platform': 'app'
        },
        success: function (result) {
          callback(result.data.data);
        }
      });
    }
    _upload(filePath,type ,storeId){
      
      var that = this;
      var sId = "";
      if(storeId == undefined ){
        var store = getApp().globalData.store;
        if(store){
          sId = store.id;
        }
      }else{
        sId = storeId;
      }
      var Key =  (sId == '' ?'':'store-'+sId+'/')+(type == undefined ? "" : type + "/") +filePath.substr(filePath.lastIndexOf('/') + 1); // 这里指定上传的文件名
      return new Promise((resolve,reject)=>{
        that.getAuthorization({
          method: 'post',
          pathname: Key
        }, function (AuthData) {
          var requestTask = wx.uploadFile({
            url: that.prefix + Key,
            name: 'file',
            filePath: filePath,
            formData: {
              'key': Key,
              'success_action_status': 200,
              'Signature': AuthData.Authorization,
              'x-cos-security-token': AuthData.XCosSecurityToken,
              'Content-Type': '',
            },
            success: function (res) {
              if (res.statusCode === 200) {
                that.successArr.push(Key);
                resolve(Key);
              } else {
                that.failArr.push(Key);
                reject(Key);
              }
            },
            fail: function (res) {
              that.failArr.push(Key);
              reject(Key);
            }
          });
          requestTask.onProgressUpdate(function (res) {
            console.log('正在进度:', res);
          });
        });
      });
  
    }
    /**
     * 单个图片上传
     * res  是微信选择的临时地址数组
     */
    upload(res,type,storeId) {
      var filePath = res.tempFilePaths[0]
      this.successArr.length = 0;
      this.failArr.length = 0;
      return this._upload(filePath,type,storeId);
    }
    /**
     * promise 递归上传图片
     */
    _uploading(files, type ,storeId) {
      var that = this;
      that.count++;
      return new Promise((resolve, reject) => {
        if (that.count > files.length) {
          return resolve({ isValid: true, data: "upload finish" });
        } else {
          return resolve({ isValid: false });
        }
      })
        .then(res => {
          // debugger;
          // console.log(res.isValid);
          if (res.isValid) {
            // console.log("上传完成");
            that.count = 0;
            return Promise.resolve({ success: that.successArr, fail: that.failArr });
          } else {
            // console.log("上传第" + that.count + "个");
            return that._upload(files[that.count - 1],type,storeId)
              .then(() => that._uploading(files, type,storeId))
              .catch(() => {
                that._uploading(files,type,storeId)
              });
          }
        });
    }
    /**
     * 多张图片上传
     * res  是微信选择的临时地址数组
     */
    uploads(res, type,storeId) {
      this.successArr.length = 0;
      this.failArr.length = 0;
      return this._uploading(res, type,storeId);
    }
  }
  
  export {
    CosUpload
  };
  