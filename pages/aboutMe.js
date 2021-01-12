/*
 * @Author: lts
 * @Date: 2021-01-10 17:16:45
 * @LastEditTime: 2021-01-12 19:47:37
 * @FilePath: \react-blog\myblog\pages\aboutMe.js
 */
import React, { useState } from 'react';
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {
    Row,
    Col,
    Avatar,
    Divider,
    Tag,
    Popconfirm,
    message,
    Alert,
    Image
} from 'antd'
import {
    HomeOutlined,
    ClusterOutlined,
    ConsoleSqlOutlined,
    GithubOutlined
} from '@ant-design/icons'
import styles from '../styles/aboutMe.module.css'

const AboutMe = () => {

    const confirm = (e) => {
        message.success('成功跳转');
        window.location.href = 'https://github.com/B-A-R-team'
    }

    const cancel = (e) => {
        console.log(e);
        message.error('取消跳转');
    }
    return (
        <div className="my_body">
            <Head>
                <title>关于我</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />

            <Row className="globals_main" type="flex" justify="center">
                <Col className={styles.aboutMe_box} xs={24} sm={24} md={18} lg={18} xl={18}>
                    <Row justify="center">
                        <Col xs={24} sm={24} md={10} lg={10} xl={10} className={styles.person}>
                            <Row justify="center" className={styles.person_row}>
                                <Avatar className={styles.avatar} size={100} src="/me.jpg" />
                                <span className={styles.name}>  lts </span>
                                <span className={styles.desc}>未来我的头会秃么？</span>
                                <div className={styles.person_info}>
                                    <span>  <HomeOutlined style={{ color: '#1e90ff', fontSize: '18px' }} /> &nbsp; 河南省安阳市汤阴县</span>
                                    <span> <ClusterOutlined style={{ color: '#1e90ff', fontSize: '18px' }} /> &nbsp; 安阳师范学院 - 软件学院</span>
                                    <span> <ConsoleSqlOutlined style={{ color: '#1e90ff', fontSize: '18px' }} /> &nbsp; 布拉布拉 - 拉布拉布 - 哼哼哈嘿</span>
                                </div>
                                <Divider />
                                <div className={styles.label}>
                                    <span className={styles.label_name}>标签</span>
                                    <Tag color="#EE82EE">努力</Tag>
                                    <Tag color="#FFC0CB">上进</Tag>
                                    <Tag color="#00FF00">娱乐</Tag>
                                    <Tag color="#00FFFF">学习</Tag>
                                    <Tag color="#9370DB">快乐</Tag>
                                    <Tag color="#f50">成长</Tag>
                                    <Tag color="#2db7f5">疑惑</Tag>
                                    <Tag color="#87d068">收获</Tag>
                                </div>
                                <Divider />
                                <div className={styles.team}>
                                    <span className={styles.team_name}>团队</span>
                                    <Popconfirm
                                        title="你确定要跳转到团队页么？"
                                        onConfirm={confirm}
                                        onCancel={cancel}
                                        okText="确定"
                                        cancelText="取消"
                                    >
                                        <div style={{ cursor: 'pointer', display: 'inline-block' }}>
                                            <Avatar shape="square" className={styles.team_logo} src='/bar.jpg' />
                                            <span>BAR Team</span>
                                        </div>
                                    </Popconfirm>
                                </div>

                            </Row>

                        </Col>
                        <Col xs={0} sm={0} md={13} lg={13} xl={13} className={styles.skills}>
                            <Row>
                                <Col xs={0} sm={0} md={1} lg={3} xl={3}><div className={styles.skills_name}>技能</div></Col>
                                <Col xs={0} sm={0} md={18} lg={18} xl={18}>
                                    <div className={styles.skill_items}>
                                        <Alert className={styles.item} message="HTML5-CSS3-Flex" type="success" />
                                        <Alert className={styles.item} message="JS基础-高级" type="success" />
                                        <Alert className={styles.item} message="jQuery--AJAX-Axios" type="info" />
                                        <Alert className={styles.item} message="Bootstrap-Antd-Antdv-Element-Vant-Antd mobile" type="info" />
                                        <Alert className={styles.item} message="NodeJs-Express-Koa-Egg" type="warning" />
                                        <Alert className={styles.item} message="数据库-SQL server-MySQL-MongoDB-Oracle" type="warning" />
                                        <Alert className={styles.item} message="React基础-进阶-hooks-NextJs" type="error" />
                                        <Alert className={styles.item} message="vue基础-进阶-3.0" type="error" />
                                        <Alert className={styles.item} message="webpack基础-高级" type="error" />
                                        <Alert className={styles.item} message="微信小程序-Taro" type="error" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24} sm={24} md={0} lg={0} xl={0} className={styles.skills}>
                            <Row>
                                <Col xs={24} sm={24} ><div className={styles.skills_name}>技能 <Divider style={{borderLeft:'2px solid #1e90ff',height: '1.3em'}} type="vertical"/></div></Col>
                                <Col xs={24} sm={24} >
                                    <div className={styles.skill_items}>
                                        <Alert className={styles.item} message="HTML5-CSS3-Flex" type="success" />
                                        <Alert className={styles.item} message="JS基础-高级" type="success" />
                                        <Alert className={styles.item} message="jQuery--AJAX-Axios" type="info" />
                                        <Alert className={styles.item} message="Bootstrap-Antd-Antdv-Element-Vant-Antd mobile" type="info" />
                                        <Alert className={styles.item} message="NodeJs-Express-Koa-Egg" type="warning" />
                                        <Alert className={styles.item} message="数据库-SQL server-MySQL-MongoDB-Oracle" type="warning" />
                                        <Alert className={styles.item} message="React基础-进阶-hooks-NextJs" type="error" />
                                        <Alert className={styles.item} message="vue基础-进阶-3.0" type="error" />
                                        <Alert className={styles.item} message="webpack基础-高级" type="error" />
                                        <Alert className={styles.item} message="微信小程序-Taro" type="error" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Divider />
                       
                        <Col xs={24} sm={24} md={22} lg={22} xl={22} className={styles.other}>
                            <div className={styles.other_box}>
                                <span className={styles.other_name}>社交</span>
                                <GithubOutlined onClick={() => window.location.href = 'https://github.com/lovelts'} className={styles.other_icon} style={{ fontSize: '40px' }} />
                                <span onClick={() => window.location.href = 'https://blog.csdn.net/qq_44983621'} className={styles.other_icon}><img className={styles.csdn_img} src="/csdn.png" /></span>
                                <span onClick={() => window.location.href = 'https://gitee.com/ltslyc'} className={styles.other_icon}><img className={styles.csdn_img} src="/gitee.svg" /></span>
                            </div>

                        </Col>
                        <Col xs={0} sm={0} md={1} lg={1} xl={1} className={styles.other2}>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Footer />
        </div>
    )
}
export default AboutMe