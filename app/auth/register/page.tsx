import { Button, Input } from '@/components'
import Link from 'next/link'
import React from 'react'

const RegisterPage = () => {
  return (
    <div>
      <h2 className="h2">Sign up</h2>
      <Input type="text" placeholder="First Name" />
      <Input type="text" placeholder="Last Name" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Input type="password" placeholder="Confirm Password" />
      <div className="flex justify-center items-center space-x-1 mt-2">
        <p>Already have an account?</p>
        <Link href="/auth/signin" className="text-primary">Login</Link>
      </div>

      <Button className="mt-8 mb-3">Create Account</Button>
    </div>
  )
}

export default RegisterPage