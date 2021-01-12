/*
 * @Author: lts
 * @Date: 2020-12-15 15:53:01
 * @LastEditTime: 2021-01-12 17:19:25
 * @FilePath: \react-blog\myblog\components\Advert.js
 */
import styles from '../styles/advert.module.css'

const Advert = () => {
  return (
    <div className={styles.ad_box}>
      <div className={styles.ad_height}><img src="/11.jpg" width="100%" /></div>
      <div className={styles.ad_height}><img src="/14.jpg" width="100%" /></div>
      <div className={styles.ad_height}><img src="/9.jpg" width="100%" /></div>
    </div>
  )
}

export default Advert