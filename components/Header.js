/*
 * @Author: lts
 * @Date: 2020-12-14 15:38:29
 * @LastEditTime: 2020-12-14 21:36:20
 * @FilePath: \myblog\components\Header.js
 */
import { Row, Col, Menu } from 'antd'
import {
    HomeOutlined,
    BarsOutlined,
    CommentOutlined
} from '@ant-design/icons';
import styles from  '../styles/header.module.css'
const Header = () => {
    return (
        <div className={styles.header}>
            <Row justify="center">
                <Col xs={20} sm={20} md={14} lg={15} xl={12}>
                    <span className={styles.header_logo}>家里有蜘蛛</span>
                    <span className={styles.header_txt}>学习前端开发</span>
                </Col>
                <Col  xs={4} sm={4} md={10} lg={6} xl={6}>
                    <Menu mode="horizontal">
                        <Menu.Item key="home" icon={<HomeOutlined />}>
                            <span className={styles.font_color}>主页</span>
                        </Menu.Item>
                        <Menu.Item key="page" icon={<BarsOutlined />}>
                            <span  className={styles.font_color}>分类</span>
                        </Menu.Item>
                        <Menu.Item key="about" icon={<CommentOutlined />}>
                            <span className={styles.font_color}>关于我</span>
                        </Menu.Item>
                    </Menu>
                </Col>


            </Row>
        </div>
    )
}
export default Header