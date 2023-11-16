import MainLayout from '@/components/layouts/MainLayout'
import React from 'react'

const ContactUs = () => {
  return (
    <div>ContactUs</div>
  )
}

export default ContactUs

ContactUs.getLayout = function getLayout(page) {
  return <MainLayout>
    {
      page
    }
  </MainLayout>
}