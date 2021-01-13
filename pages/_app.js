/*
 * @Author: lts
 * @Date: 2020-12-14 15:05:44
 * @LastEditTime: 2021-01-13 11:12:57
 * @FilePath: \react-blog\myblog\pages\_app.js
 */
import { useEffect } from 'react'
import NProgress from "nprogress";
import { useRouter } from 'next/router'
import '../styles/nprogress.css'
import 'antd/dist/antd.css'
import '../styles/globals.css'
import '../styles/detail.css'
import 'highlight.js/styles/monokai-sublime.css';
import '../styles/blogType.css'

function MyApp({ Component, pageProps }) {
    const router = useRouter()
    useEffect(() => {
        router.events.on("routeChangeStart", () => {
            NProgress.start();
        });
        router.events.on("routeChangeComplete", () => {
            NProgress.done();
        });
        router.events.on("routeChangeError", () => {
            NProgress.done();
        });
       
    },[])
    return <Component {...pageProps} />
}

export default MyApp