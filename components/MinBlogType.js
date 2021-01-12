/*
 * @Author: lts
 * @Date: 2020-12-23 09:44:53
 * @LastEditTime: 2021-01-12 16:18:19
 * @FilePath: \react-blog\myblog\components\MinBlogType.js
 */
import React, { useState } from 'react';
import styles from '../styles/blogType.module.css'
import {
    List,
    Button,
    Drawer
} from 'antd'
import {
    RightOutlined,
    SyncOutlined
} from '@ant-design/icons'
import {useRouter} from 'next/router'
import { reqGetBlogsByTypeId } from '../myApi'
const MinBlogType = (props) => {
    const { list } = props
    const { setMyList } = props.blogList
    const { setIsShowNav } = props
    const { setNavName } = props
    const findBlog = async (item) => {
        const res = await reqGetBlogsByTypeId(item.id)
        setMyList(res.data.data)
        setIsShowNav(true)
        setNavName(item.type_name)
    }
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    const router = useRouter()
    return (

        <div className={styles.type_box}>
            <div className={styles.min_h_box}>
                {/* <Button type="primary" onClick={showDrawer}>点击 </Button> */}
                <div className={styles.min_click} onClick={showDrawer}>点击</div>
                <div className={styles.min_icon_box}>
                    <SyncOutlined className={styles.min_my_icon} spin />
                </div></div>

            <Drawer

                title="分类目录"
                placement="left"
                closable={false}
                onClose={onClose}
                visible={visible}
                headerStyle={{ padding: '13px 8px' }}
                className="min_drawer_header"
                footer={
                    <Button onClick={() => setVisible(false)}>取消</Button>}
            >
                <div className={styles.min_all}>
                    <div onClick={() => {router.push('/blogList');setVisible(false)}}> 显示全部 </div>
                    <RightOutlined className={styles.min_back_icon} />
                </div>
                <List
                    className={styles.blog_type_content}
                    dataSource={list}
                    renderItem={item => (
                        <List.Item
                            className={styles.min_blog_type_item}
                            onClick={(e) => {
                                findBlog(item)
                                setVisible(false)
                            }
                            }
                        >
                            <div className={styles.blog_type_name} key={item.id}>{item.type_name} </div>
                            <RightOutlined className={styles.blog_type_icon} />
                        </List.Item>

                    )}
                />
            </Drawer>
        </div>

    )
}

export default MinBlogType