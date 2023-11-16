import MainLayout from '@/components/layouts/MainLayout'
import React from 'react'

const BlogViewPage = () => {
  return (
    <div>BlogViewPage</div>
  )
}

export default BlogViewPage

BlogViewPage.getLayout = function getLayout(page) {
  return <MainLayout>
    {
      page
    }
  </MainLayout>
}