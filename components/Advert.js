/*
 * @Author: lts
 * @Date: 2020-12-15 15:53:01
 * @LastEditTime: 2020-12-15 16:10:23
 * @FilePath: \myblog\components\Advert.js
 */
import styles from '../styles/advert.module.css'
 const Advert = ()=>{
    return (
        <div className={styles.ad_box}>
          <div><img src="http://blogimages.jspang.com/flutter_ad2.jpg" width="100%" /></div>
          <div><img src="http://blogimages.jspang.com/Vue_koa_ad1.jpg" width="100%" /></div>
          <div><img src="http://blogimages.jspang.com/WechatIMG12.jpeg" width="100%" /></div>
        </div>
    )
 }

 export default Advert