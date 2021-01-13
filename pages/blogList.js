/*
 * @Author: lts
 * @Date: 2020-12-15 10:14:35
 * @LastEditTime: 2021-01-13 15:54:10
 * @FilePath: \react-blog\myblog\pages\blogList.js
 */
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { Row, Col, List, Breadcrumb, Spin } from 'antd'
import {
  CalendarOutlined,
  FireOutlined,
  FolderOutlined
} from '@ant-design/icons'
import Header from '../components/Header'
import Author from '../components/Author'
import Footer from '../components/Footer'
import styles from '../styles/list.module.css'
import BlogType from '../components/BlogType'
import MinBlogType from '../components/MinBlogType'
import { reqGetBlogsByTypeId, reqGetBlogTypeName } from '../myApi'
import Link from 'next/link'
import { useRouter } from 'next/router'

const BlogList = (props) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [navName, setNavName] = useState('')
  const [isShowNav, setIsShowNav] = useState(false)
  const [myList, setMyList] = useState([
    {
      id: 'asdasdkal',
      title: '阿萨大大啊实打实的',
      introduce: '大家阿斯利康大家喀什地方卡死安静的卡省的经离开 俺爱',
      create_time: '1608540755045',
      last_edit_time: '1608467752000',
      type_name: '',
      total: 0
    }
  ])
  const [blogTypeList, setBlogTypeList] = useState([
    {
      title: '123132',
      id: '15446',
      order: 0
    }
  ])
  useEffect(() => {
    // console.log(props)
    const { blogList, blogTypeNameList } = props
    setMyList(blogList.data)
    setBlogTypeList(blogTypeNameList.data)
    setIsShowNav(blogList.flag)
  }, [props])

  return (
    <>
      <Head>
        <title>列表 | 家里有蜘蛛-关注web前端技术- 总结学习web技术知识的博客</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="家里有蜘蛛-学习研究web前端开发技术、vue、react、javascript、htm5l+css3等web前端技术" />
        <meta name="keywords" content="家里有蜘蛛,web前端博客,react,vue,微信小程序,taro,html5+css3,webpack" />
      </Head>
      <Header />
      <Row className="globals_main" type="flex" justify="center">
        <Col xs={24} sm={24} md={0} lg={0} xl={0}>
          <MinBlogType
            list={blogTypeList}
            blogList={{ myList, setMyList }}
            setIsShowNav={setIsShowNav}
            setNavName={setNavName}
          />
        </Col>
        <Col className={styles.type_list} xs={24} sm={24} md={18} lg={17} xl={14}>
          <div>
            <div className={styles.bread_box}>
              <Breadcrumb>
                <Breadcrumb.Item><Link href="/"><a>首页</a></Link></Breadcrumb.Item>
                <Breadcrumb.Item>文章分类</Breadcrumb.Item>
                {isShowNav ? <Breadcrumb.Item>{navName}</Breadcrumb.Item> : ''}

              </Breadcrumb>
            </div>
            {/* {console.log(myList)} */}
            <Spin spinning={loading} wrapperClassName="my_spin">
              <List
                itemLayout="vertical"
                dataSource={myList}
                renderItem={item => (
                  <List.Item>
                    <div className={styles.list_title} onClick={() => {
                      setLoading(true)
                      router.push({ pathname: '/blogDetail', query: { id: item.id } })
                    }

                    }>
                      <a>{item && item.title}</a>
                    </div>
                    <div className={styles.list_icon}>
                      <span> <CalendarOutlined /> {item && item.create_time} </span>
                      <span>  <FolderOutlined /> {item && item.type_name || '暂无分类'} </span>
                      <span> <FireOutlined /> {item && item.view_count || '0'}人 </span>
                    </div>
                    <div className={styles.list_context}>{item && item.introduce}</div>
                  </List.Item>
                )}
              />
            </Spin>
          </div>
        </Col>
        <Col className="globals_right" xs={0} sm={0} md={5} lg={4} xl={4}>
          <Author />
          <BlogType
            list={blogTypeList}
            blogList={{ myList, setMyList }}
            setIsShowNav={setIsShowNav}
            setNavName={setNavName}
          />
        </Col>
      </Row>
      <Footer />
    </>
  )

}

export const getServerSideProps = async () => {
  const res = await reqGetBlogsByTypeId()
  res.data.flag = false
  const blogTypeName = await reqGetBlogTypeName()
  // console.log(blogTypeName.data)
  const data = {
    blogList: res.data,
    blogTypeNameList: blogTypeName.data
  }
  return {
    props: data
  }
}




export default BlogList