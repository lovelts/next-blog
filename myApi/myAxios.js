/*
 * @Author: lts
 * @Date: 2020-12-21 17:05:15
 * @LastEditTime: 2021-01-12 09:18:26
 * @FilePath: \react-blog\myblog\myApi\myAxios.js
 */
import axios from 'axios';
import { message } from 'antd';
// Add a request interceptor 阻截器
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  // message.success('加载中...')


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


