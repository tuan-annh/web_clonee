import { Link } from 'react-router-dom'
import path from '../../constants/path'
import LabelBenefits from '../../components/LabelBenefits/LabelBenefits'
import Subscribe from '../../components/Subscribe/Subscribe'
import PhoneIcon from '../../components/Icons/PhoneIcon'
import LocationIcon from '../../components/Icons/LocationIcon'
import ClockIcon from '../../components/Icons/ClockIcon'
import EmailIcon from '../../components/Icons/EmailIcon'
// import { useState } from 'react'

function ContactUs() {
  return (
    <>
      <div
        className='flex min-h-screen w-full items-center justify-center bg-slate-300 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage:
            'url(https://ohey-demo.myshopify.com/cdn/shop/files/slide1_bd934178-052f-4c25-9f9a-850791039a3a_1950x.jpg?v=1631520338)'
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

      <div className='my-10 flex flex-col gap-8 px-16 md:flex-row'>
        <div className='w-full md:w-2/3'>
          <h3 className='mb-5 w-fit  border-b-[4px] border-b-gray-600 text-[28px] font-bold'>Get In Touch</h3>
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
                  className=' focus:shadow-outline w-full rounded bg-main px-4 py-2 font-bold text-white hover:bg-main focus:outline-none'
                  type='submit'
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className='w-full md:w-1/3'>
          <h3 className='mb-5 w-fit border-b-[5px] border-b-gray-600 text-[28px] font-bold'>Contact Info</h3>
          <div>
            <ul>
              <li className='my-4 flex h-12 items-center gap-7 border-b border-b-gray-400 pb-3'>
                <LocationIcon />
                <span>17 Duy Tan Street, Hanoi, Vietnam</span>
              </li>
              <li className='my-4 flex h-12 items-center gap-7 border-b border-b-gray-400 pb-3'>
                <PhoneIcon /> <span>0333344444</span>
              </li>
              <li className='my-4 flex h-12 items-center gap-7 border-b border-b-gray-400 pb-3'>
                <EmailIcon />
                <span>HighTeam@example.com</span>
              </li>
              <li className='my-4 flex h-12 items-center gap-7 '>
                <ClockIcon />
                <span>Mon - Fri: 9:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <LabelBenefits />
      <Subscribe />
    </>
  )
}

export default ContactUs
