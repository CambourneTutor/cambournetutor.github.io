import React from 'react'
import BlogImg from '../img/blog.jpg'

import Body from '../component/Body'
import Footer from '../component/Footer'

const Blog = () =>{
    return (
      <div className='container'>
        <Body show='Blog' bgImg={BlogImg} classType="blogimagetext" titleText="BLOG"/>
        <Footer />
      </div>
    )
}

export default Blog
