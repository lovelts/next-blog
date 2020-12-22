/*
 * @Author: lts
 * @Date: 2020-12-14 15:05:44
 * @LastEditTime: 2020-12-21 23:47:09
 * @FilePath: \react-blog\myblog\pages\index.js
 */
import Head from 'next/head'
import Link from 'next/link'
import {
  Row,
  Col,
  List,
  Pagination,
  Spin
} from 'antd'
import React, { useState } from 'react';
import {
  CalendarOutlined,
  FireOutlined,
  FolderOutlined
} from '@ant-design/icons'
import Router from 'next/router'
import axios from 'axios'
import styles from '../styles/index.module.css'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
const pageSize = 6
const Home = (props) => {
  const [myList, setMyList] = useState(props.data)
  const [loading, setLoading] = useState(false)
  const [pageNum, setPageNum] = useState(1)
  const changeCurrentPage = async (e) => {
    setPageNum(e)
    axios.defaults.baseURL = 'http://127.0.0.1:7001/'
    const res = await axios.get('/default/getBlogList', {
      params: {
        pageSize: 6,
        currentPage: e
      }
    })
    console.log(res)
    setMyList(res.data.data)
  }
  return (
    <div >
      <Head>
        <title>博客首页</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Row className="globals_main" type="flex" justify="center">
        <Col className="globals_left" xs={24} sm={24} md={18} lg={17} xl={14}>
          <Spin spinning={loading} wrapperClassName="my_spin">
            <List
              header={<div className={styles.list_header}>最新博客</div>}
              itemLayout="vertical"
              dataSource={myList}
              renderItem={item => (
                <List.Item className={styles.blog_item} >
                  <div className={styles.blog_title} onClick={() => setLoading(true)}>
                    <Link href={{ pathname: '/blogDetail', query: { id: item.id } }}>
                      <a>{item.title}</a>
                    </Link>
                  </div>
                  <div className={styles.blog_icon}>
                    <span> <CalendarOutlined /> {item.create_time} </span>
                    <span>  <FolderOutlined /> {item.type_name} </span>
                    <span> <FireOutlined /> {item.view_count}人 </span>
                    <span> <CalendarOutlined /> {item.last_edit_time} </span>

                  </div>
                  <div className={styles.blog_context}>{item.introduce}</div>
                </List.Item>
              )}
            />
            <Pagination className="my_pagination"
              current={pageNum}
              defaultPageSize={pageSize}
              total={myList[0].total || 1}
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
  axios.defaults.baseURL = 'http://127.0.0.1:7001/'
  const res = await axios.get('/default/getBlogList', {
    params: {
      pageSize,
      currentPage: 1
    }
  })
  return {
    props: res.data
  }
}

export default Home