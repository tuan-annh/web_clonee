import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ChevronDownIcon from '../Icons/ChevronDownIcon'
import { Collapse } from '@mui/material'
import path from '../../constants/path'
import useMediaQuery from '@mui/material/useMediaQuery'

function Footer() {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen_2, setIsOpen_2] = useState(false)
  const [isOpen_3, setIsOpen_3] = useState(false)
  const [isOpen_4, setIsOpen_4] = useState(false)

  const isMd = useMediaQuery('(min-width:768px)')

  return (
    <footer className='footer mb-[52px] mt-16 bg-main text-white lg:mb-0'>
      <div className='container mx-auto px-9 pb-8 pt-11'>
        <div className='flex flex-wrap'>
          <div className='w-full px-4 py-4 md:w-1/2 lg:w-1/3'>
            <h2 className='mb-2 text-lg font-bold'>High Ecommerce</h2>
            <p className='my-7 text-white/50'>
              Since 2023 we have been creating industrial design, residential architecture, commercial interiors. Chase
              mice attack feet but rub face on everything cepteur sint occaecat cupidatat proident.
            </p>
            <h3
              className='mb-2 flex cursor-pointer items-center justify-between font-bold lg:cursor-default'
              onClick={() => setIsOpen((value) => !value)}
            >
              <span>Follow Us</span>
              <span>
                <ChevronDownIcon />
              </span>
            </h3>

            <Collapse className='transition-all duration-300' in={isMd || isOpen}>
              <div className='mt-2 flex gap-5'>
                <Link className='' to={''}>
                  <svg
                    fill='currentColor'
                    className='h-7 w-7 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    height='1em'
                    viewBox='0 0 512 512'
                  >
                    <path d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z' />
                  </svg>
                </Link>
                <Link className='px-' to={''}>
                  <svg
                    fill='currentColor'
                    className='h-7 w-7 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    height='1em'
                    viewBox='0 0 512 512'
                  >
                    <path d='M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z' />
                  </svg>
                </Link>
                <Link className='px-' to={''}>
                  <svg
                    fill='currentColor'
                    className='h-7 w-7 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    height='1em'
                    viewBox='0 0 448 512'
                  >
                    <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z' />
                  </svg>
                </Link>
              </div>
            </Collapse>
          </div>
          <div className='here-to-help w-full px-4 py-4 md:w-1/2 lg:w-1/3'>
            <h3
              className='mb-2 flex cursor-pointer items-center justify-between font-bold lg:cursor-default'
              onClick={() => setIsOpen_2((value) => !value)}
            >
              <span>HERE TO HELP</span>
              <span>
                <ChevronDownIcon />
              </span>
            </h3>

            <Collapse className='transition-all duration-300' in={isMd || isOpen_2}>
              <div className='md:block'>
                <p className='text-white/50'>
                  Have a question? You may find an answer in our FAQs. But you can also contact us:
                </p>
                <div className='py-3'>
                  <h3 className='font-bold'>Order by Phone</h3>
                  <p className='text-white/50'>Available everyday</p>
                  <p className='text-sm text-white/50 underline'>
                    <a className='link-underline-opacity-50-hover ' href='0333344444'>
                      0333344444
                    </a>
                  </p>
                </div>
                <div className='py-3'>
                  <h3 className='font-bold'>Email Us</h3>
                  <p className='text-white/50'>Get in touch by email</p>
                  <p className='text-sm text-white/50 underline'>
                    <a href='mailto:example@example.com'>HighTeam@example.com</a>
                  </p>
                </div>
              </div>
            </Collapse>
          </div>
          <div className='customer-service w-full px-4 py-4 md:w-1/2 lg:w-1/6'>
            <h3
              className='mb-2 flex cursor-pointer items-center justify-between font-bold lg:cursor-default'
              onClick={() => setIsOpen_3((value) => !value)}
            >
              <span>CUSTOMER SERVICE</span>
              <span>
                <ChevronDownIcon />
              </span>
            </h3>
            <Collapse className='transition-all duration-300' in={isMd || isOpen_3}>
              <ul className='md:block'>
                <Link className='block py-2 text-white/50' to={''}>
                  Help & Contact Us
                </Link>
                <Link className='block py-2 text-white/50' to={''}>
                  COVID-19 Information
                </Link>
                <Link className='block py-2 text-white/50' to={''}>
                  Orders & Shipping
                </Link>
                <Link className='block py-2 text-white/50' to={''}>
                  Payment& Pricing
                </Link>
                <Link className='block py-2 text-white/50' to={''}>
                  Returns & Refund
                </Link>
                <Link className='block py-2 text-white/50' to={''}>
                  FAQs
                </Link>
                <Link className='block py-2 text-white/50' to={''}>
                  Terms & Conditions
                </Link>
                <Link className='block py-2 text-white/50' to={''}>
                  Privacy Policy
                </Link>
                <Link className='block py-2 text-white/50' to={''}>
                  Accessibility
                </Link>
                <Link className='block py-2 text-white/50' to={''}>
                  Documentations
                </Link>
              </ul>
            </Collapse>
          </div>
          <div className='about-footer w-full px-4 py-4 md:w-1/2 lg:w-1/6'>
            <h3
              className='lg: mb-2 flex cursor-pointer items-center justify-between font-bold'
              onClick={() => setIsOpen_4((value) => !value)}
            >
              <span>ABOUT HIGH TEAM</span>
              <span>
                <ChevronDownIcon />
              </span>
            </h3>

            <Collapse className='transition-all duration-300' in={isMd || isOpen_4}>
              <ul className=' md:block'>
                <Link className='block py-2 text-white/50' to={path.profile}>
                  My Account
                </Link>
                <Link className='block py-2 text-white/50' to={''}>
                  Investors
                </Link>
                <Link className='block py-2 text-white/50' to={''}>
                  Boutique Partners
                </Link>
                <Link className='block py-2 text-white/50' to={''}>
                  Affiliate Programme
                </Link>
                <Link className='block py-2 text-white/50' to={''}>
                  Careers
                </Link>
                <Link className='block py-2 text-white/50' to={''}>
                  Customer Promise
                </Link>
                <Link className='block py-2 text-white/50' to={''}>
                  High Team App
                </Link>
                <Link className='block py-2 text-white/50' to={''}>
                  Site Map
                </Link>
                <Link className='block py-2 text-white/50' to={''}>
                  Positively High Team
                </Link>
              </ul>
            </Collapse>
          </div>
        </div>
      </div>
      <div className='container mx-auto px-4 py-6'>
        <div className='flex flex-wrap'>
          <div className='w-full px-4 py-4 md:w-1/2'>
            <p className='m-auto text-white/50'>
              © Copyright 2023 High team Limited. All Rights Reserved. Designed By High team
            </p>
          </div>
          <div className='m-auto mt-4 flex w-full flex-nowrap items-center justify-center gap-3 px-4 sm:mt-0 md:w-1/2'>
            <h3 className=''>SECURE PAYMENTS</h3>
            <div className=''>
              <img src='//ohey-demo.myshopify.com/cdn/shop/files/payment_429x36.png?v=1630860014' alt='Payment'></img>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
