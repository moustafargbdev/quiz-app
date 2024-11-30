import { Button, Input } from '@/components'
import Link from 'next/link'
import React from 'react'

const ForgetPasswordPage = () => {
  return (
    <div>
      <h2 className="h2">Forgot your password?</h2>
      <Input type="email" placeholder="Email" />
      <div className="flex justify-end">
        <Link href="/auth/resetPassword" className="text-primary mt-1">Recover Password ?</Link>
      </div>

      <Button className="mt-8 mb-3">Sign in</Button>
    </div>
  )
}

export default ForgetPasswordPage