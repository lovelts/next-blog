/*
 * @Author: lts
 * @Date: 2020-12-14 15:05:44
 * @LastEditTime: 2020-12-17 17:52:43
 * @FilePath: \myblog\pages\index.js
 */
import Head from 'next/head'
import {
  Row,
  Col,
  List,
  Button
} from 'antd'
import React, { useState } from 'react';
import {
  CalendarOutlined,
  FireOutlined,
  FolderOutlined
} from '@ant-design/icons'
import Router from 'next/router'
import styles from '../styles/index.module.css'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'

export default function Home() {
  const [myList, setMyList] = useState([
    { title: '学习vue', context: '学习前端计划    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur nisi provident doloribus mollitia at officiis, corporis maiores possimus fugiat aperiam earum quo soluta expedita explicabo laudantium ab tempora porro aut!' },
    { title: '学习js高级', context: '学习前端计划    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur nisi provident doloribus mollitia at officiis, corporis maiores possimus fugiat aperiam earum quo soluta expedita explicabo laudantium ab tempora porro aut!' },
    { title: '学习react', context: '学习前端计划    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur nisi provident doloribus mollitia at officiis, corporis maiores possimus fugiat aperiam earum quo soluta expedita explicabo laudantium ab tempora porro aut!' }
  ])

  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Row className="globals_main" type="flex" justify="center">
        <Col className="globals_left" xs={24} sm={24} md={18} lg={17} xl={14}>
          <List
            header={<div className={styles.list_header}>最新博客</div>}
            itemLayout="vertical"
            dataSource={myList}
            renderItem={item => (
              <List.Item >
                <div className={styles.blog_title} onClick={() => Router.push('/blogDetail')}>{item.title}</div>
                <div className={styles.blog_icon}>
                    <span> <CalendarOutlined /> 2020-12-15 </span>
                    <span>  <FolderOutlined/> 博客教程 </span>
                    <span> <FireOutlined /> 500人 </span>
                </div>
                <div className={styles.blog_context}>{item.context}</div>
              </List.Item>
            )}
          />
        </Col>
        <Col className="globals_right" xs={0} sm={0} md={5} lg={4} xl={4}>
          <Author/>
          <Advert/>
      </Col>
      </Row>
      <Footer/>
    </div>
  )
}
