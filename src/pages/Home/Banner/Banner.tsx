import React from 'react'
import { NavLink } from 'react-router-dom'
import path from '../../../constants/path'
import ArrowRightIcon from '../../../components/Icons/ArrowRightIcon'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'

const BANNERS = [
  {
    url: 'https://ohey-demo.myshopify.com/cdn/shop/files/4_707d2d02-0fe4-4622-a8fc-d15e20ef4993_1950x.jpg?v=1634271377',
    title: 'Soft & Cozy Sweater',
    description: 'Holiday shopping with 3% back rewards',
    linkTo: '/',
    discount: 50
  },
  {
    url: 'https://ohey-demo.myshopify.com/cdn/shop/files/5_b99107af-f0d8-4a57-8266-301f014af374_1950x.jpg?v',
    title: 'Glamorous Men"s Hoodies',
    description: 'New Spring Drop From Over. Shop The Collection',
    linkTo: '/',
    discount: 70
  },
  {
    url: 'https://ohey-demo.myshopify.com/cdn/shop/files/6_f1506ccc-9667-40c5-8ac8-36a0603c5422_1950x.jpg?v=1634272885',
    title: 'Fleece Raglan Tee',
    description: 'Holiday shopping with 3% back rewards',
    linkTo: '/',
    discount: 70
  }
]
const Banner = () => {
  const pagination = {
    clickable: true,
    el: '#banner-pagination',
    renderBullet: function (_, className) {
      return `<div class="${className} rounded" style="width: 20px; height: 20px; background: black;"></div>`
    }
  }
  return (
    <div className='hero-part relative'>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: '#prev-btn',
          nextEl: '#next-btn'
        }}
        pagination={pagination}
      >
        {BANNERS.map(({ url, title, description, discount }, index) => (
          <SwiperSlide key={index.toString()}>
            <div
              className='flex h-screen items-center justify-center bg-slate-300 '
              style={{
                backgroundImage: `url("${url}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                scale: 125,
                transitionDuration: 'initial'
              }}
            >
              <div className='absolute left-28 top-1/3 text-left'>
                <div className='mb-5 flex w-fit items-center border bg-hover px-3 py-2 text-white hover:border hover:border-hover hover:bg-white hover:text-hover'>
                  <h3 className=' hover:text-hover'>SALE UP TO {discount}%</h3>
                </div>
                <p className='mb-5 text-[44px] font-bold'>{title}</p>
                <p className='mb-8 text-lg'>{description}</p>
                <NavLink className='flex items-center gap-4 hover:gap-8 hover:text-hover' to={path.products}>
                  <p>Explore Now</p>
                  <span>
                    <ArrowRightIcon />
                  </span>
                </NavLink>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        id='prev-btn'
        className='user-select-none absolute left-4 top-[40%] z-20 rounded bg-gray-400 opacity-20 hover:bg-hover'
        style={{ background: '' }}
      >
        <svg
          fill='currentColor'
          className='h-16 w-16 rounded p-3 font-extrabold text-white'
          xmlns='http://www.w3.org/2000/svg'
          height='1em'
          viewBox='0 0 320 512'
        >
          <path d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z' />
        </svg>
      </div>
      <div
        id='next-btn'
        className='user-select-none absolute right-4 top-[40%] z-20 bg-gray-400 opacity-20 hover:bg-hover'
        style={{ background: '' }}
      >
        <svg
          fill='currentColor'
          className='h-16 w-16 p-3 font-extrabold text-white opacity-90'
          xmlns='http://www.w3.org/2000/svg'
          height='1em'
          viewBox='0 0 320 512'
        >
          <path d='M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z' />
        </svg>
      </div>

      <div
        id='banner-pagination'
        className='absolute bottom-0 z-30 flex h-[30px] items-center gap-1'
        style={{ left: '50%', width: 'fit-content', transform: 'translateX(-50%)' }}
      />
    </div>
  )
}

export default Banner