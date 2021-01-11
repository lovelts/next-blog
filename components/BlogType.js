/*
 * @Author: lts
 * @Date: 2020-12-23 09:44:53
 * @LastEditTime: 2021-01-10 16:58:14
 * @FilePath: \react-blog\myblog\components\BlogType.js
 */
import React, { useState, useEffect } from 'react';
import styles from '../styles/blogType.module.css'
import {
    Affix,
    Skeleton,
    List
} from 'antd'
import {
    RightOutlined
} from '@ant-design/icons'
const Advert = (props) => {
    console.log(props)
    const { list } = props
    const [loading, setLoading] = useState(true)
    setTimeout(() => {
        setLoading(false)
    }, 2000);

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
                            <List.Item className={styles.blog_type_item} >
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

export default Advert