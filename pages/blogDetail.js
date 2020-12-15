/*
 * @Author: lts
 * @Date: 2020-12-15 10:16:27
 * @LastEditTime: 2020-12-15 17:53:12
 * @FilePath: \myblog\pages\blogDetail.js
 */
import Head from 'next/head'
import {
  Row,
  Col,
  List,
  Button,
  Breadcrumb
} from 'antd'
import React, { useState } from 'react';
import {
  CalendarOutlined,
  FireOutlined,
  FolderOutlined
} from '@ant-design/icons'
import styles from '../styles/detail.module.css'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'

export default function Home() {

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
                React学习blog
                </div>

              <div className={styles.detailed_icon}>
                <span> <CalendarOutlined /> 2020-12-15 </span>
                <span>  <FolderOutlined /> 博客教程 </span>
                <span> <FireOutlined /> 500人 </span>
              </div>

              <div className={styles.detailed_content} >
                lallalla
                </div>

            </div>


          </div>
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
