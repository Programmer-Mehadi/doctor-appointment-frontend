import MainLayout from '@/components/layouts/MainLayout'
import React from 'react'

const EditProfile = () => {
  return (
    <div>EditProfile</div>
  )
}

export default EditProfile

EditProfile.getLayout = function getLayout(page) {
  return <MainLayout>
    {
      page
    }
  </MainLayout>
}