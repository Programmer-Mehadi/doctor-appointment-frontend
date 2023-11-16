import MainLayout from '@/components/layouts/MainLayout'
import React from 'react'

const ProfileAppointmentPage = () => {
  return (
    <div>ProfileAppointmentPage</div>
  )
}

export default ProfileAppointmentPage


ProfileAppointmentPage.getLayout = function getLayout(page) {
  return <MainLayout>
    {
      page
    }
  </MainLayout>
}