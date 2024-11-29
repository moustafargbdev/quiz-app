import Button from '@/components/button'
import Input from '@/components/input'
import React from 'react'

const ResetPasswordPage = () => {
  return (
    <div>
      <h2 className="h2">Set a Password</h2>
      <Input type="password" placeholder="Create Password" />
      <Input type="password" placeholder="Re-enter Password" />

      <Button className="mt-8 mb-3">Sign in</Button>
    </div>
  )
}

export default ResetPasswordPage