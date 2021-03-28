
// 导入axios
import axios from 'axios';
import Qs from 'qs'

// 进行一些全局配置
// 公共路由(网络请求地址)
axios.defaults.baseURL = 'http://64.202.184.109:8081/WebHandler.ashx';
// 请求响应超时时间
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// 封装自己的get/post方法
export default {
  get: function( data = {}) {
    return new Promise(function(resolve, reject) {
      axios.get('', {
        params: data
      })
        .then(function(response) {
          // 按需求来，这里我需要的是response.data，所以返回response.data，一般直接返回response
          resolve(response.data);
        })
        .catch(function(error) {
          reject(error);
        });
    });
  },
  post: function( data = {}) {
    return new Promise(function(resolve, reject) {
      axios.post('',Qs.stringify(data) )
        .then(function(response) {
          resolve(response.data);
        })
        .catch(function(error) {
          reject(error);
        });
    });
  }
};

