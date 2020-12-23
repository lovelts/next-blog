/*
 * @Author: lts
 * @Date: 2020-12-15 10:14:35
 * @LastEditTime: 2020-12-23 11:13:25
 * @FilePath: \react-blog\myblog\pages\blogList.js
 */
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { Row, Col, List, Breadcrumb } from 'antd'
import {
  CalendarOutlined,
  FireOutlined,
  FolderOutlined
} from '@ant-design/icons'
import Header from '../components/Header'
import Author from '../components/Author'
import Footer from '../components/Footer'
import styles from '../styles/list.module.css'
import BlogType from '../components/BlogType'
import { reqGetBlogList, reqGetBlogTypeName } from '../myApi'

const BlogList = (props) => {
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
  const [blogTypeList, setBlogTypeList] = useState([
    {
      title: '123132',
      id: '15446',
      order: 0
    }
  ])
  useEffect(() => {
    console.log(props)
    const { blogList, blogTypeNameList } = props

    setMyList(blogList.data)
    setBlogTypeList(blogTypeNameList.data)
  }, [props])

  return (
    <>
      <Head>
        <title>List</title>
      </Head>
      <Header />
      <Row className="globals_main" type="flex" justify="center">
        <Col className={styles.type_list} xs={24} sm={24} md={18} lg={17} xl={14}>

          <div>
            <div className={styles.bread_box}>
              <Breadcrumb>
                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                <Breadcrumb.Item>文章分类</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <List
              itemLayout="vertical"
              dataSource={myList}
              renderItem={item => (
                <List.Item>
                  <div className={styles.list_title}>{item.title}</div>
                  <div className={styles.list_icon}>
                    <span> <CalendarOutlined /> 2020-12-15 </span>
                    <span>  <FolderOutlined /> 博客教程 </span>
                    <span> <FireOutlined /> 500人 </span>
                  </div>
                  <div className={styles.list_context}>{item.context}</div>
                </List.Item>
              )}
            />

          </div>
        </Col>

        <Col className="globals_right" xs={0} sm={0} md={5} lg={4} xl={4}>
          <Author />
          <BlogType list={blogTypeList} />
        </Col>
      </Row>
      <Footer />

    </>
  )

}

export const getServerSideProps = async () => {
  const res = await reqGetBlogList({
    pageSize: 6,
    currentPage: 1
  })
  // console.log(res)
  const blogTypeName = await reqGetBlogTypeName()
  console.log(blogTypeName.data)
  const data = {
    blogList: res.data,
    blogTypeNameList: blogTypeName.data
  }
  return {
    props: data
  }
}




export default BlogList