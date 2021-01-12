/*
 * @Author: lts
 * @Date: 2020-12-21 17:05:02
 * @LastEditTime: 2021-01-12 21:16:21
 * @FilePath: \react-blog\myblog\myApi\index.js
 */
import myAxios from './myAxios'
myAxios.defaults.baseURL = 'http://zxyc.xyz:3255/'

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

