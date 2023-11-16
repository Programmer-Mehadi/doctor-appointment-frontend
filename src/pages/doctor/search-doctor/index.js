import MainLayout from '@/components/layouts/MainLayout'
import React from 'react'

const SearchDoctor = () => {
  return (
    <div>SearchDoctor</div>
  )
}

export default SearchDoctor

SearchDoctor.getLayout = function getLayout(page) {
  return <MainLayout>
    {
      page
    }
  </MainLayout>
}