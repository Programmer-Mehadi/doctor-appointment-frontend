import MainLayout from '@/components/layouts/MainLayout'
import React from 'react'

const ViewDoctor = () => {
  return (
    <div>ViewDoctor</div>
  )
}

export default ViewDoctor


ViewDoctor.getLayout = function getLayout(page) {
  return <MainLayout>
    {
      page
    }
  </MainLayout>
}