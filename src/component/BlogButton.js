import React from 'react'

const BlogButton =  ({ onClick }) => {
  return (
    <>
      <button className="button" onClick={onClick}>Blog</button>
    </>
  )
}

export default BlogButton;