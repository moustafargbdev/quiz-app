import Image from 'next/image';

import googleIcon from '@/assets/googleIcon.svg';
import facebookIcon from '@/assets/facebookIcon.svg';
import twitterIcon from '@/assets/twitterIcon.svg';
import appleIcon from '@/assets/appleIcon.svg';


const SocialMediaAuth = () => {
  return (
    <div className='mt-3'>
      <div className="flex items-center space-x-2 my-4">
        <div className='h-[1px] w-full bg-gray-400'></div>
        <p className='text-light shrink-0'>Or Continue With</p>
        <div className='h-[1px] w-full bg-gray-400'></div>
      </div>
      <div className='flex space-x-4'>
        <div className='w-14 h-14 center-content border rounded-lg shadow hover:bg-primary-light'>
          <Image src={googleIcon} alt='Google icon' />
        </div>
        <div className='w-14 h-14 center-content border rounded-lg shadow hover:bg-primary-light'>
          <Image src={twitterIcon} alt='Twitter icon' />
        </div>
        <div className='w-14 h-14 center-content border rounded-lg shadow hover:bg-primary-light'>
          <Image src={facebookIcon} alt='Facebook icon' />
        </div>
        <div className='w-14 h-14 center-content border rounded-lg shadow hover:bg-primary-light'>
          <Image src={appleIcon} alt='Apple icon' />
        </div>
      </div>
    </div>
  )
}

export default SocialMediaAuth