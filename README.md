<!--
 * @Author: lts
 * @Date: 2020-12-14 15:05:44
 * @LastEditTime: 2020-12-21 17:22:05
 * @FilePath: \react-blog\myblog\README.md
-->

# 基于next.js搭建的个人博客

## Getting Started

+ FROM_UNIXTIME(blog.create_time,'%Y-%m-%d %H:%i:%s' ) as create_time  规定时间类型

```sql
    let sql = `SELECT blog.id as id,
               blog.title as title,
               blog.introduce as introduce,
               blog.content as content,
               FROM_UNIXTIME(blog.create_time/1000,'%Y-%m-%d %H:%i:%s' ) as create_time,
               blog.view_count as view_count ,
               blog_type.type_name as type_name ,
               blog_type.id as typeId 
               FROM blog LEFT JOIN blog_type ON blog.type_id = blog_type.Id 
               WHERE blog.id='${id}'`
```
这个sql语句中的where 后面id比较要用引号引住