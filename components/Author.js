/*
 * @Author: lts
 * @Date: 2020-12-15 11:35:41
 * @LastEditTime: 2021-01-12 10:44:35
 * @FilePath: \react-blog\myblog\components\Author.js
 */
import React, { useState } from 'react';

import {
    Avatar,
    Divider
} from 'antd'
import {
    GithubOutlined,
    WechatOutlined,
    QqOutlined
} from '@ant-design/icons'
import styles from '../styles/author.module.css'

const Author = () => {
    return (
        <div className={styles.author_box}>
            <div> <Avatar size={100} src=""  /></div>
            <div className={styles.author_introduction}>
              未来我的头会秃么 ？
                <Divider>社交账号</Divider>
                <Avatar size={28} icon={<GithubOutlined />} className={styles.account}  />
                <Avatar size={28} icon={<QqOutlined />}  className={styles.account}   />
                <Avatar size={28} icon={<WechatOutlined />}  className={styles.account} />
            </div>
        </div>
    )
}
export default Author