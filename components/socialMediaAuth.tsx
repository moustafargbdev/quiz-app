import Image from 'next/image';

import googleIcon from '@/assets/googleIcon.svg';
import facebookIcon from '@/assets/facebookIcon.svg';
import twitterIcon from '@/assets/twitterIcon.svg';
import appleIcon from '@/assets/appleIcon.svg';


const SocialMediaAuth = () => {
  return (
    <>
      <div className="flex items-center w-full space-x-2 my-6">
        <div className='h-[1px] w-full bg-gray-300'></div>
        <p className='text-light shrink-0'>Or Continue With</p>
        <div className='h-[1px] w-full bg-gray-300'></div>
      </div>
      <div className='flex space-x-6'>
        <div className='w-14 h-14 center-content border rounded-lg shadow-lg cursor-pointer hover:bg-primary-light'>
          <Image src={googleIcon} alt='Google icon' />
        </div>
        <div className='w-14 h-14 center-content border rounded-lg shadow-lg cursor-pointer hover:bg-primary-light'>
          <Image src={twitterIcon} alt='Twitter icon' />
        </div>
        <div className='w-14 h-14 center-content border rounded-lg shadow-lg cursor-pointer hover:bg-primary-light'>
          <Image src={facebookIcon} alt='Facebook icon' />
        </div>
        <div className='w-14 h-14 center-content border rounded-lg shadow-lg cursor-pointer hover:bg-primary-light'>
          <Image src={appleIcon} alt='Apple icon' />
        </div>
      </div>
    </>
  )
}

export default SocialMediaAuth