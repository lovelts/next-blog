/*
 * @Author: lts
 * @Date: 2020-12-14 15:05:44
 * @LastEditTime: 2020-12-14 22:21:23
 * @FilePath: \myblog\pages\index.js
 */
import Head from 'next/head'
import {
  Button,
  Row,
  Col
} from 'antd'

import Header from '../components/Header'
export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Row className="globals_main" type="flex" justify="center">
        <Col className="globals_left" xs={24} sm={24} md={18} lg={17} xl={14}>
          左侧
      </Col>

        <Col className="globals_right" xs={0} sm={0} md={5} lg={4} xl={4}>
          右侧
      </Col>
      </Row>
    </div>
  )
}
