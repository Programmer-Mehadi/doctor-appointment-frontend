import MainLayout from '@/components/layouts/MainLayout'
import React from 'react'

const BlogSearch = () => {
  return (
    <div>BlogSearch</div>
  )
}

export default BlogSearch

BlogSearch.getLayout = function getLayout(page) {
  return <MainLayout>
    {
      page
    }
  </MainLayout>
}