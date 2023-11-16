import MainLayout from '@/components/layouts/MainLayout'
import React from 'react'

const ProfilePage = () => {
  return (
    <div>ProfilePage</div>
  )
}

export default ProfilePage


ProfilePage.getLayout = function getLayout(page) {
  return <MainLayout>
    {
      page
    }
  </MainLayout>
}