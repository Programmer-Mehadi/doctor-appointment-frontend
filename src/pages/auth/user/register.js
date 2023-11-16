import MainLayout from '@/components/layouts/MainLayout'
import React from 'react'

const Register = () => {
  return (
    <div>Register</div>
  )
}

export default Register


Register.getLayout = function getLayout(page) {
  return <MainLayout>
    {
      page
    }
  </MainLayout>
}