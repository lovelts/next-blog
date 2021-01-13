/*
 * @Author: lts
 * @Date: 2020-12-15 10:16:27
 * @LastEditTime: 2021-01-13 12:00:54
 * @FilePath: \react-blog\myblog\pages\blogDetail.js
 */
import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Breadcrumb,
  Affix,
  Skeleton
} from 'antd'
import {
  CalendarOutlined,
  FireOutlined,
  FolderOutlined
} from '@ant-design/icons'
import Link from 'next/link'
import marked from 'marked'
import hljs from "highlight.js";
// import 'highlight.js/styles/monokai-sublime.css';
//第三项中的css 高亮主题可以自己更换自己喜欢的

import styles from '../styles/detail.module.css'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import Tocify from '../components/tocify.tsx'
import { reqGetBlogById } from '../myApi';

export default function BlogDetail(props) {
  let blogContent = props.data

  const [loading, setLoading] = useState(true)
  if (blogContent) {
    if (!blogContent.type_name) {
      blogContent.type_name = '暂无类别'
    }
  }
  setTimeout(() => {
    setLoading(false)
  }, 2000);
  const renderer = new marked.Renderer()
  const tocify = new Tocify()
  renderer.heading = function (text, level, raw) {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  };
  marked.setOptions({
    renderer,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    },
    pedantic: false,
    gfm: true,
    tables: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
  }
  );

  let markdown = blogContent.content
  let html = marked(markdown)
  return (
    <div >
      <Head>
        <title>博客详情 | 家里有蜘蛛-关注web前端技术- 总结学习web技术知识的博客</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="家里有蜘蛛-学习研究web前端开发技术、vue、react、javascript、htm5l+css3等web前端技术" />
        <meta name="keywords" content="家里有蜘蛛,web前端博客,react,vue,微信小程序,taro,html5+css3,webpack" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Row className="globals_main" type="flex" justify="center">
        <Col className={styles.blog_detail_left} xs={24} sm={24} md={18} lg={17} xl={14}>
          <div>
            <div className={styles.bread_box}>
              <Breadcrumb>
                <Breadcrumb.Item><Link href="/"><a>首页</a></Link></Breadcrumb.Item>
                <Breadcrumb.Item>{blogContent && blogContent.type_name}</Breadcrumb.Item>
                <Breadcrumb.Item>{blogContent && blogContent.title}</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              <div className={styles.detailed_title}>
                {blogContent && blogContent.title}
              </div>

              <div className={styles.detailed_icon}>
                <span> <CalendarOutlined />{blogContent && blogContent.create_time} </span>
                <span>  <FolderOutlined /> {blogContent && blogContent.type_name} </span>
                <span> <FireOutlined /> {blogContent && blogContent.view_count}人 </span>
              </div>
              <div className={styles.detailed_content} dangerouslySetInnerHTML={{ __html: html }} >
              </div>
            </div>
          </div>
        </Col>
        <Col className="globals_right" xs={0} sm={0} md={5} lg={4} xl={4}>
          <Author />
          <Advert />
          <Affix offsetTop={55}>
            <div className={styles.detailed_nav}>
              <Skeleton active loading={loading}>

                <div className={styles.nav_title}>文章目录</div>
                <div className="toc_list">
                  {tocify && tocify.render()}
                </div>
              </Skeleton>

            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
    </div>
  )
}
export const getServerSideProps = async (context) => {
  const { id } = context.query
  const res = await reqGetBlogById(id)
  return {
    props: res.data
  }
}