/*
 * @Author: lts
 * @Date: 2020-12-15 10:16:27
 * @LastEditTime: 2020-12-21 17:45:32
 * @FilePath: \react-blog\myblog\pages\blogDetail.js
 */
import Head from 'next/head'
import {
  Row,
  Col,
  Breadcrumb,
  Affix
} from 'antd'
import {
  CalendarOutlined,
  FireOutlined,
  FolderOutlined
} from '@ant-design/icons'
import axios from 'axios'
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


export default function BlogDetail(props) {
  const blogContent = props.data
  console.log(blogContent)
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
        <title>博客详情</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Row className="globals_main" type="flex" justify="center">
        <Col className="globals_left" xs={24} sm={24} md={18} lg={17} xl={14}>
          <div>
            <div className={styles.bread_box}>
              <Breadcrumb>
                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                <Breadcrumb.Item>博客详情</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              <div className={styles.detailed_title}>
                {blogContent.title}
                </div>

              <div className={styles.detailed_icon}>
                <span> <CalendarOutlined />{blogContent.create_time} </span>
                <span>  <FolderOutlined /> {blogContent.type_name || '暂无类别'} </span>
                <span> <FireOutlined /> {blogContent.view_count}人 </span>
              </div>

              <div className={styles.detailed_content} dangerouslySetInnerHTML={{ __html: html }} >

              </div>

            </div>


          </div>
        </Col>

        <Col className="globals_right" xs={0} sm={0} md={5} lg={4} xl={4}>
          <Author />
          <Advert />
          <Affix offsetTop={5}>
            <div className={styles.detailed_nav}>
              <div className={styles.nav_title}>文章目录</div>
              <div className="toc_list">
                {tocify && tocify.render()}
              </div>
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
  axios.defaults.baseURL = 'http://127.0.0.1:7001/'
  const res = await axios.get('/default/getBlogById', {
    params: {
      id
    }
  })
  return {
    props: res.data
  }
}