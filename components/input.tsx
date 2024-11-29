"use client";
import Image from 'next/image';
import React, { useState } from 'react'
import showPasswordIcon from '@/assets/showPasswordIcon.svg'

type InputProps = React.HTMLProps<HTMLInputElement> & {
  errorMsg?: string
}

const Input = ({ errorMsg, className, type, ...props }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='mb-6'>
      <div className="relative">
        <input type={type === 'password' ? showPassword ? "text" : "password" : type} className={`p-3 rounded-lg border shadow-md  w-full focus:outline-primary bg-primary-light/20 focus:shadow-none ${errorMsg ? "border-danger focus:outline-danger shadow-none" : ""} ${className}`} {...props} />

        {type === 'password' &&
          <div className="w-6 h-6 center-content absolute top-1/2 cursor-pointer right-4 -translate-y-1/2" onClick={() => setShowPassword(!showPassword)}>
            <Image src={showPasswordIcon} alt='Show password icon' />
          </div>
        }
      </div>
      {errorMsg && <p className='text-danger mt-0.5 ms-2 text-sm' >{errorMsg}</p>}
    </div>
  )
}

export default Input