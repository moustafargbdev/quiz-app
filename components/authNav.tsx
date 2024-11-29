import Link from 'next/link'

const AuthNav = () => {
  return (
    <div className="flex w-full justify-between items-center flex-wrap">
      <h2 className='text-2xl font-black md:hidden py-4 text-logo'>ELEVATE</h2>
      <div className="ms-auto">
        <ul className="row space-x-5 text-lg ">
          <li>English</li>
          <li><Link href="/signin" className='text-primary font-bold'>Sign in</Link></li>
          <li><Link href="/register" className='border rounded-lg px-6 py-2 text-primary shadow hover:bg-primary-light'>Register</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default AuthNav