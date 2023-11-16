import MainLayout from '@/components/layouts/MainLayout'
import React from 'react'

const GetAppointmentPage = () => {
  return (
    <div>GetAppointmentPage</div>
  )
}

export default GetAppointmentPage


GetAppointmentPage.getLayout = function getLayout(page) {
  return <MainLayout>
    {
      page
    }
  </MainLayout>
}