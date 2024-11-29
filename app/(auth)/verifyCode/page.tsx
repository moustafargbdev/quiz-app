import Button from '@/components/button'
import Input from '@/components/input'
import Link from 'next/link'
import React from 'react'

const VerifyCodePage = () => {
  return (
    <div>
      <h2 className="h2">Forgot your password?</h2>
      <Input type="email" placeholder="Email" />
      <div className="flex justify-end space-x-1 mt-1">
        <p>Didn’t receive a code?</p>
        <Link href="/resetPassword" className="text-primary">Resend</Link>
      </div>

      <Button className="mt-8 mb-3">Verify</Button>
    </div>
  )
}

export default VerifyCodePage