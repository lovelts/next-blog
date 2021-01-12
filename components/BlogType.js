/*
 * @Author: lts
 * @Date: 2020-12-23 09:44:53
 * @LastEditTime: 2021-01-12 14:31:58
 * @FilePath: \react-blog\myblog\components\BlogType.js
 */
import React, { useState, useRef } from 'react';
import styles from '../styles/blogType.module.css'
import {
    Affix,
    Skeleton,
    List
} from 'antd'
import {
    RightOutlined
} from '@ant-design/icons'
import { reqGetBlogsByTypeId } from '../myApi'
const BlogType = (props) => {
    const { list } = props
    const { setMyList } = props.blogList
    const { setIsShowNav } = props
    const { setNavName } = props
    const [loading, setLoading] = useState(true)
    setTimeout(() => {
        setLoading(false)
    }, 800);
    const findBlog = async (item) => {
        const res = await reqGetBlogsByTypeId(item.id)
        setMyList(res.data.data)
        setIsShowNav(true)
        setNavName(item.type_name)
    }
    const listRef = useRef(null)
    return (
        <Affix offsetTop={5}>
            <div className={styles.type_box}>
                <Skeleton active loading={loading}>
                    <List
                        className={styles.blog_type_content}
                        header={<div className={styles.blog_type_title}>分类目录</div>}
                        itemLayout="vertical"
                        dataSource={list}
                        renderItem={item => (
                            <List.Item
                                className={[styles.blog_type_item, styles.test]}
                                onClick={(e) => {
                                    // console.log(e.target.parentNode)
                                    findBlog(item)
                                    // e.target.className += ' click_add'
                                    // console.log(e.target.parentNode.className + ' click_add')
                                    }
                                }
                            >
                                <div className={styles.blog_type_name} key={item.id}>{item.type_name} </div>
                                <RightOutlined className={styles.blog_type_icon} />
                            </List.Item>

                        )}
                    />
                </Skeleton>
            </div>
        </Affix>
    )
}

export default BlogType