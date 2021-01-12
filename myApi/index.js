/*
 * @Author: lts
 * @Date: 2020-12-21 17:05:02
 * @LastEditTime: 2021-01-11 19:49:32
 * @FilePath: \react-blog\myblog\myApi\index.js
 */
import myAxios from './myAxios'
myAxios.defaults.baseURL = 'http://127.0.0.1:7001/'

export const reqGetBlogList = ({
    pageSize,
    currentPage
}) => myAxios('/default/getBlogList', {
    params: {
        pageSize,
        currentPage
    }
})

export const reqGetBlogById = (id) => myAxios('/default/getBlogById', {
    params: {
        id
    }
})

export const reqGetBlogTypeName = () => myAxios('/default/getBlogTypeName')

export const reqGetBlogsByTypeId = (id) => myAxios('/default/getBlogsByTypeId', {
    params: {
        id
    }
})

