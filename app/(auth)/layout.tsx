import React, { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link';

import authImage from '@/assets/authImage.svg';
import SocialMediaAuth from '@/components/socialMediaAuth';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='row'>
      <div className="w-1/2 bg-primary-light h-screen p-10 center-content">
        <div className="max-w-md">
          <h1 className='text-5xl font-bold'>Welcome to
            <span className='block text-6xl text-primary mt-2'>Elevate</span> </h1>
          <p className='text-lg mt-5 leading-8'>Quidem autem voluptatibus qui quaerat aspernatur architecto natus</p>

          <Image src={authImage} alt='auth image' className='mt-20' />
        </div>
      </div>
      <div className="w-1/2 h-screen p-10 center-content flex-col">
        <div className="ms-auto">
          <ul className="row space-x-5 text-lg ">
            <li>English .</li>
            <li><Link href="/signin" className='text-primary font-bold'>Sign in</Link></li>
            <li><Link href="/register" className='border rounded-lg px-6 py-2 text-primary shadow hover:bg-primary-light'>Register</Link></li>
          </ul>
        </div>
        <div className='flex-grow center-content flex-col w-full'>
          {children}
          <SocialMediaAuth />
        </div>
      </div>
    </div>
  )
}

export default AuthLayout