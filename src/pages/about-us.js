import MainLayout from '@/components/layouts/MainLayout'
import React from 'react'

const AboutUsPage = () => {
  return (
    <div>AboutUsPage</div>
  )
}

export default AboutUsPage

AboutUsPage.getLayout = function getLayout(page) {
  return <MainLayout>
    {
      page
    }
  </MainLayout>
}