import React from 'react'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'


const MainLayout = ({ children }) => {
  return (
    <div>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default MainLayout