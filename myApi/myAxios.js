/*
 * @Author: lts
 * @Date: 2020-12-21 17:05:15
 * @LastEditTime: 2020-12-22 22:18:02
 * @FilePath: \react-blog\myblog\myApi\myAxios.js
 */
import axios from 'axios';
import { message } from 'antd';
// Add a request interceptor 阻截器
axios.interceptors.request.use(function (config) {
  // Do something before request is sent

//   const token = storageUtils.getToken();
//   if (token) {
//     config.headers.Authorization = token;
//   }

  return config;
});
//响应拦截器
// axios.interceptors.response.use(
//   function (response) {
//     console.log(response.data)
//     return response.data;
//   },
//   function (error) {
//     console.log(error);
//     message.error('请求出错' + error.message);
//     return new Promise(() => {});
//   }
// );
export default axios;


