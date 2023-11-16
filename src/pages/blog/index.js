import MainLayout from '@/components/layouts/MainLayout'
import React from 'react'

const AllBlogPage = () => {
  return (
    <div>AllBlogPage</div>
  )
}

export default AllBlogPage

AllBlogPage.getLayout = function getLayout(page) {
  return <MainLayout>
    {
      page
    }
  </MainLayout>
}