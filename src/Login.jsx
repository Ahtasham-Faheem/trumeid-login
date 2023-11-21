import React, { useState } from 'react'
import Face from './images/face.png'
import Logo from './images/Logo.png'
import Main from './images/main.png'

const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState('')

  return (
    <div className='grid grid-cols-2 h-screen'>
      <div className='relative bg-white '>
        <div className='absolute top-0 left-10 h-32 bg-gradient-to-b from-[#c694fc] to-purple-800 w-24 rounded-b-full flex items-center justify-center'>
          <img src={Face} alt='img..' className='w-20 h-28' />
        </div>
        <div className='flex items-center justify-center h-full'>
          <div className='mb-5 w-2/4'>
            <div className='flex flex-col gap-1 mb-3'>
              <span className='text-sm'>Email or Username</span>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} className='px-2 py-2 border-purple-600 border-[3px] w-full rounded-md outline-none' />
            </div>
            <div className='flex flex-col gap-1 mb-5'>
              <span className='text-sm'>Password</span>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} className='px-2 py-2 border-purple-600 border-[3px] w-full rounded-md outline-none' />
            </div>
            <div className='flex flex-col'>
              <button className='bg-purple-600 text-white mb-3 py-2 rounded-md text-sm'>Login</button>
              <span className='text-center cursor-pointer'>Forgot Password?</span>
            </div>
          </div>
        </div>
        <div className='absolute bottom-5 flex flex-col justify-center w-full'>
          <p className='text-purple-500 text-center text-sm'>If you are having trouble or for having assistance, please contact</p>
          <p className='text-center font-semibold text-sm'>support@trumeid.com</p>
        </div>
      </div>
      <div className='bg-gradient-to-b from-[#cdacf0] to-purple-800 flex items-center justify-center flex-col gap-4 py-5'>
        <img src={Logo} alt="Logo.." />
        <img src={Main} alt="Main Image.." className='w-full' />
      </div>
    </div>
  )
}

export default Login