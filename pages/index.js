/*
 * @Author: lts
 * @Date: 2020-12-14 15:05:44
 * @LastEditTime: 2020-12-14 15:59:44
 * @FilePath: \myblog\pages\index.js
 */
import Head from 'next/head'
import { Button } from 'antd'

import Header from '../components/Header'
export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
    </div>
  )
}
