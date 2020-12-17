/*
 * @Author: lts
 * @Date: 2020-12-15 15:53:01
 * @LastEditTime: 2020-12-17 18:10:30
 * @FilePath: \myblog\components\Advert.js
 */
import styles from '../styles/advert.module.css'

 const Advert = ()=>{
    return (
        <div className={styles.ad_box}>
          <div><img src="/react.jpg" width="100%" /></div>
          <div><img src="/vue.jpg" width="100%" /></div>
          <div><img src="/taro.jpg" width="100%" /></div>
        </div>
    )
 }

 export default Advert