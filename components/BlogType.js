/*
 * @Author: lts
 * @Date: 2020-12-23 09:44:53
 * @LastEditTime: 2020-12-23 13:46:19
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
    const {list} = props
    // useEffect(() => {
    //     console.log(props)
    // }, [props])
    const [loading, setLoading] = useState(false)

    return (
        <Affix offsetTop={5}>
            {/* <div className={styles.blog_type_content}>
            <Skeleton active loading={loading}>

              <div className={styles.blog_type_title}>分类目录</div>
              <div >文章列表</div>
            </Skeleton>

            </div> */}

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
        </Affix>
    )
}

export default Advert