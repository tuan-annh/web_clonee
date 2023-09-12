import { Link } from 'react-router-dom'
import path from '../../constants/path'
import LabelBenefits from '../../components/LabelBenefits/LabelBenefits'
import Subscribe from '../../components/Subscribe/Subscribe'
// import { useState } from 'react'

function ContactUs() {
  return (
    <>
      <div
        className='flex min-h-screen w-screen items-center justify-center bg-slate-300 bg-cover bg-no-repeat'
        style={{
          backgroundImage: 'url(https://ohey-demo.myshopify.com/cdn/shop/files/bg-breadcrumb_1920x.jpg?v=1632273468)'
        }}
      >
        <div>
          <h1 className='text-6xl font-semibold text-main'>Contact</h1>
          <div className='mt-5 text-center'>
            <Link to={path.home} className='text-main-text'>
              Home
            </Link>
            <span> / </span>
            <span>Contact</span>
          </div>
        </div>
      </div>

      <div className='my-10 flex px-16'>
        <div className='w-2/3'>
          <h2>Get In Touch</h2>
          <div className=''>
            <form className='mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md'>
              <div className='mb-4'>
                <label className='mb-2 block text-sm font-bold text-gray-700' htmlFor='name'>
                  Name
                </label>
                <input
                  className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none'
                  id='name'
                  type='text'
                  placeholder='Name'
                  name='name'
                />
              </div>
              <div className='mb-4'>
                <label className='mb-2 block text-sm font-bold text-gray-700' htmlFor='email'>
                  Email
                </label>
                <input
                  className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none'
                  id='email'
                  type='email'
                  placeholder='Email'
                  name='email'
                />
              </div>
              <div className='mb-4'>
                <label className='mb-2 block text-sm font-bold text-gray-700' htmlFor='message'>
                  Message
                </label>
                <textarea
                  className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none'
                  id='message'
                  placeholder='Message'
                  name='message'
                ></textarea>
              </div>
              <div className='flex items-center justify-center'>
                <button
                  className=' focus:shadow-outline w-full rounded bg-black px-4 py-2 font-bold text-white hover:bg-main focus:outline-none'
                  type='submit'
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className='w-1/3'>
          <h3>Contact Info</h3>
          <div></div>
        </div>
      </div>

      <LabelBenefits />
      <Subscribe />
    </>
  )
}

export default ContactUs
