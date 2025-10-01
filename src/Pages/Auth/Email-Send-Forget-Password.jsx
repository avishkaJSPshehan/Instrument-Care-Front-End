import React from 'react'
import Navbar from '../../Components/Common/Navbar'
import EmailEntry_ForgotPassword from '../../Components/auth/Email-Entry-Forget-Password';
import EmailSend_ForgotPassword from '../../Components/auth/Email-Send-Forget-Password';

export default function Login() {
  return (
    <>
      <Navbar />
      <EmailSend_ForgotPassword />
    </>
  )
}
