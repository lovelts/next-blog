/*
 * @Author: lts
 * @Date: 2020-12-14 15:05:44
 * @LastEditTime: 2021-01-13 15:56:06
 * @FilePath: \react-blog\myblog\pages\index.js
 */
import Head from 'next/head'
import Link from 'next/link'
import {
  Row,
  Col,
  List,
  Pagination,
  Spin,
  Carousel,
} from 'antd'
import React, { useState, useEffect } from 'react';
import {
  CalendarOutlined,
  FireOutlined,
  FolderOutlined
} from '@ant-design/icons'
import styles from '../styles/index.module.css'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import { reqGetBlogList } from '../myApi/index'
import NProgress from "nprogress";
import nProgress from 'nprogress';
import { useRouter } from 'next/router'
const pageSize = 6
const Home = (props) => {
  const router = useRouter()
  const [myList, setMyList] = useState([
    {
      id: 'asdasdkal',
      title: '阿萨大大啊实打实的',
      introduce: '大家阿斯利康大家喀什地方卡死安静的卡省的经离开 俺爱',
      create_time: '1608540755045',
      last_edit_time: '1608467752000',
      type_name: null,
      total: 0
    }
  ])
  useEffect(() => {
    setMyList(props.data)
  }, [props])
  const [loading, setLoading] = useState(false)
  const [pageNum, setPageNum] = useState(1)
  const [imgArr, setImgArr] = useState([{ img_url: '/1.jpeg' }, { img_url: '/2.jpg' }, { img_url: '/1.jpg' }])
  const changeCurrentPage = async (e) => {
    NProgress.start()
    setLoading(true)
    setPageNum(e)
    const res = await reqGetBlogList({
      pageSize,
      currentPage: e
    })
    setMyList(res.data.data)
    nProgress.done()
    setLoading(false)
  }
  return (
    <div className="my_body">
      <Head>
        <meta name="baidu-site-verification" content="code-hb8Ju6infh" />
        <title>首页 | 家里有蜘蛛-关注web前端技术- 总结学习web技术知识的博客</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="家里有蜘蛛-学习研究web前端开发技术、vue、react、javascript、htm5l+css3等web前端技术" />
        <meta name="keywords" content="家里有蜘蛛,web前端博客,react,vue,微信小程序,taro,html5+css3,webpack" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Row className="globals_main" type="flex" justify="center">
        <Col className="globals_left" xs={24} sm={24} md={18} lg={17} xl={14}>
          <Row justify="center">
            <Col xs={0} sm={0} md={4} lg={5} xl={6} className={styles.beside_img}>
              <img
                width={160}
                src='/12.jpg'
              />
            </Col>
            <Col xs={24} sm={24} md={16} lg={14} xl={12}>
              <Carousel autoplay className={styles.my_carousel}>
                {
                  imgArr.map((item, index) => {
                    return (
                      <div key={index}>
                        <img
                          className={styles.my_img}
                          width={'100%'}
                          src={item.img_url}
                        />
                      </div>
                    )
                  })
                }
              </Carousel>
            </Col>
            <Col xs={0} sm={0} md={4} lg={5} xl={6} className={styles.beside_img}>
              <img
                width={160}
                src='/10.jpg'
              />
            </Col>
          </Row>

          <Spin spinning={loading} wrapperClassName="my_spin">
            <List
              className={styles.blog_list}
              header={<div className={styles.list_header}>最新博客</div>}
              itemLayout="vertical"
              dataSource={myList}
              renderItem={item => (
                <List.Item className={styles.blog_item} >
                  <div className={styles.blog_title} onClick={() => {
                    setLoading(true)
                    router.push({ pathname: '/blogDetail', query: { id: item.id } })
                  }
                  }>
                    <a>{item && item.title}</a>
                  </div>
                  <div className={styles.blog_icon}>
                    <span> <CalendarOutlined /> {item && item.create_time} </span>
                    <span>  <FolderOutlined /> {item && item.type_name || '暂无分类'} </span>
                    <span> <FireOutlined /> {item && item.view_count || '0'}人 </span>
                    {/* <span> <CalendarOutlined /> {item.last_edit_time} </span> */}

                  </div>
                  <div className={styles.blog_context}>{item && item.introduce}</div>
                </List.Item>
              )}
            />
            <Pagination className="my_pagination"
              current={pageNum}
              defaultPageSize={pageSize}
              total={myList[0] && myList[0].total || 1}
              onChange={(e) => changeCurrentPage(e)}
              showQuickJumper />
          </Spin>

        </Col>
        <Col className="globals_right" xs={0} sm={0} md={5} lg={4} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

export const getServerSideProps = async () => {
  try {
    const res = await reqGetBlogList({
      pageSize,
      currentPage: 1
    })
    return {
      props: res.data
    }
  } catch (error) {
    // console.log(error)
    throw error
  }
}

export default Home