import MainLayout from '@/components/layouts/MainLayout'
import React from 'react'

const Login = () => {
  return (
    <div>Login</div>
  )
}

export default Login


Login.getLayout = function getLayout(page) {
  return <MainLayout>
    {
      page
    }
  </MainLayout>
}