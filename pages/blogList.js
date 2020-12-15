/*
 * @Author: lts
 * @Date: 2020-12-15 10:14:35
 * @LastEditTime: 2020-12-15 17:16:25
 * @FilePath: \myblog\pages\blogList.js
 */
import React, { useState } from 'react'
import Head from 'next/head'
import { Row, Col, List, Breadcrumb } from 'antd'
import {
  CalendarOutlined,
  FireOutlined,
  FolderOutlined
} from '@ant-design/icons'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import styles from '../styles/list.module.css'


const BlogList = () => {

  const [mylist, setMylist] = useState(
    [
      { title: '学习vue', context: '学习前端计划    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur nisi provident doloribus mollitia at officiis, corporis maiores possimus fugiat aperiam earum quo soluta expedita explicabo laudantium ab tempora porro aut!' },
      { title: '学习js高级', context: '学习前端计划    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur nisi provident doloribus mollitia at officiis, corporis maiores possimus fugiat aperiam earum quo soluta expedita explicabo laudantium ab tempora porro aut!' },
      { title: '学习react', context: '学习前端计划    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur nisi provident doloribus mollitia at officiis, corporis maiores possimus fugiat aperiam earum quo soluta expedita explicabo laudantium ab tempora porro aut!' }
    ]
  );


  return (
    <>
      <Head>
        <title>List</title>
      </Head>
      <Header />
      <Row className="globals_main" type="flex" justify="center">
        <Col className="globals_left" xs={24} sm={24} md={18} lg={17} xl={14}>

          <div>
            <div className={styles.bread_box}>
              <Breadcrumb>
                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                <Breadcrumb.Item>视频列表</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <List
              itemLayout="vertical"
              dataSource={mylist}
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
          <Advert />
        </Col>
      </Row>
      <Footer />

    </>
  )

}

export default BlogList