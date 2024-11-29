import React, { ReactNode } from 'react'
import Image from 'next/image'

import authImage from '@/assets/authImage.svg';
import SocialMediaAuth from '@/components/socialMediaAuth';
import AuthNav from '@/components/authNav';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='row'>
      <div className="w-1/2 bg-primary-light h-screen hidden md:block p-10 center-content">
        <div className="max-w-md">
          <h1 className='text-5xl font-bold'>Welcome to
            <span className='block text-6xl text-logo mt-2'>Elevate</span> </h1>
          <p className='text-lg mt-5 leading-8'>Quidem autem voluptatibus qui quaerat aspernatur architecto natus</p>

          <Image src={authImage} alt='auth image' className='mt-20' />
        </div>
      </div>
      <div className="md:w-1/2 w-full h-screen sm:p-10 p-5  center-content flex-col">
        <AuthNav />
        <div className='flex-grow max-w-[410px] center-content flex-col w-full'>
          <div className="w-full">
            {children}
          </div>
          <SocialMediaAuth />
        </div>
      </div>
    </div>
  )
}

export default AuthLayout