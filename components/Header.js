/*
 * @Author: lts
 * @Date: 2020-12-14 15:38:29
 * @LastEditTime: 2021-01-12 11:16:24
 * @FilePath: \react-blog\myblog\components\Header.js
 */
import { Row, Col, Menu } from 'antd'
import {
    HomeOutlined,
    BarsOutlined,
    CommentOutlined,
    MenuOutlined
} from '@ant-design/icons';
import styles from '../styles/header.module.css'
import { useRouter } from 'next/router';
import { useState,useEffect } from 'react';
import Link from 'next/link'
const Header = () => {
    const router = useRouter()
    const [selectKey, setSelectKey] = useState([''])
    useEffect(() => {
        if (router.pathname) {
            setSelectKey([router.pathname])
        }
    }, [])

    return (
        <div className={styles.header}>
            <Row justify="center">
                <Col xs={20} sm={20} md={14} lg={15} xl={12}>
                  <Link href='/'><a> <span className={styles.header_logo}>家里有蜘蛛</span> </a></Link> 
                    <span className={styles.header_txt}>学习前端开发</span>
                </Col>
                <Col xs={4} sm={4} md={10} lg={6} xl={6} >
                    <Menu
                        mode="horizontal"
                        overflowedIndicator={<MenuOutlined style={{ fontSize: '19px' }} />}
                        selectedKeys={selectKey}
                    >
                        <Menu.Item key="/" icon={<HomeOutlined />} onClick={() => router.push('/')}>
                            <span className={styles.font_color}>主页</span>
                        </Menu.Item>
                        <Menu.Item key="/blogList" icon={<BarsOutlined />} onClick={() => router.push('/blogList')}>
                            <span className={styles.font_color}>分类</span>
                        </Menu.Item>
                        <Menu.Item key="/aboutMe" icon={<CommentOutlined />}>
                            <span className={styles.font_color} onClick={() => router.push('/aboutMe')}>关于我</span>
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}
export default Header