import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    //  <footer className='bg-gray-800 text-white'>
    //    <div className='container mx-auto px-auto py-6'>
    //      <div className='flex flex-wrap'>
    //        <div className='w-full sm:w-1/3 px-4'>
    //          <h2 className='text-lg font-bold mb-2'>High Ecommerce</h2>
    //          <p className='text-white/50'>
    //
    //          </p>
    //          <h3 className='font-bold'>Follow Us</h3>
    //          <div></div>
    //        </div>
    //        <div className='w-full sm:w-1/3 px-4'>
    //          <h3 className='text-lg font-bold mb-2'>Column 2</h3>
    //          <p>Content for column 2</p>
    //        </div>
    //        <div className='w-full sm:w-1/3 px-4'>
    //          <h3 className='text-lg font-bold mb-2'>Column 3</h3>
    //          <p>Content for column 3</p>
    //        </div>
    //      </div>
    //    </div>
    //  </footer>
    <footer className='bg-black text-white'>
      <div className='container mx-auto px-9 py-8'>
        <div className='flex flex-wrap'>
          <div className='w-full sm:w-1/3 px-4'>
            <h2 className='text-lg font-bold mb-2'>High Ecommerce</h2>
            <p className='text-white/50'>
              Since 2013 we"ve been creating industrial design, residential architecture, commercial interiors. Chase mice attack feet but rub face on
              everything cepteur sint occaecat cupidatat proident.
            </p>
            <h3 className='font-bold'>Follow Us</h3>
            <div className='grid grid-cols-4'>
              <Link className='px-' to={''}>
                1
              </Link>
              <Link className='px-' to={''}>
                1
              </Link>
              <Link className='px-' to={''}>
                1
              </Link>
              <Link className='px-' to={''}>
                1
              </Link>
            </div>
          </div>
          <div className='w-full sm:w-1/3 px-4'>
            <h3 className=' font-bold mb-2'>HERE TO HELP</h3>
            <p className='text-white/50'>Have a question? You may find an answer in our FAQs. But you can also contact us:</p>
            <div className='py-3'>
              <h3 className='font-bold'>Order by Phone</h3>
              <p className='text-white/50'>Available everyday</p>
            </div>
            <div className='py-3'>
              <h3 className='font-bold'>Email Us</h3>
              <p className='text-white/50'>Get in touch by email</p>
            </div>
          </div>
          <div className='w-full sm:w-1/3 sm:flex sm:justify-between px-4 mt-4 sm:mt-0'>
            <div className='w-1/2'>
              <h3 className=' font-bold mb-2'>CUSTOMER SERVICE</h3>
              <Link className='text-white/50 block py-2' to={''}>
                Help & Constact Us
              </Link>
              <Link className='text-white/50 block py-2' to={''}>
                COVID-19 Information
              </Link>
              <Link className='text-white/50 block py-2' to={''}>
                Orders & Shipping
              </Link>
              <Link className='text-white/50 block py-2' to={''}>
                Payment& Pricing
              </Link>
              <Link className='text-white/50 block py-2' to={''}>
                Returns & Refund
              </Link>
              <Link className='text-white/50 block py-2' to={''}>
                FAQs
              </Link>
            </div>
            <div className='w-1/2'>
              <h3 className='font-bold mb-2'>ABOUT OHEY</h3>
              <Link className='text-white/50 block py-2' to={''}>
                My Account
              </Link>
              <Link className='text-white/50 block py-2' to={''}>
                Investors
              </Link>
              <Link className='text-white/50 block py-2' to={''}>
                Boutique Partners
              </Link>
              <Link className='text-white/50 block py-2' to={''}>
                Affiliate Programme
              </Link>
              <Link className='text-white/50 block py-2' to={''}>
                Career
              </Link>
              <Link className='text-white/50 block py-2' to={''}>
                Customer Promise
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto px-4 py-6'>
        <div className='flex flex-wrap'>
          <div className='w-full sm:w-1/2 px-4'>
            <p className='text-white/50'>© Copyright 2021 Ohey Limited. All Rights Reserved. Design By Bily</p>
          </div>
          <div className='w-full sm:w-1/2 sm:flex sm:justify-between px-4 mt-4 sm:mt-0'>
            <div className='w-1/6'>
              <h3 className='text-lg font-bold mb-2'> 1</h3>
            </div>
            <div className='w-1/6'>
              <h3 className='text-lg font-bold mb-2'> 2</h3>
            </div>
            <div className='w-1/6'>
              <h3 className='text-lg font-bold mb-2'> 3</h3>
            </div>
            <div className='w-1/6'>
              <h3 className='text-lg font-bold mb-2'> 4</h3>
            </div>
            <div className='w-1/6'>
              <h3 className='text-lg font-bold mb-2'> 5</h3>
            </div>
            <div className='w-1/6'>
              <h3 className='text-lg font-bold mb-2'> 6</h3>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
