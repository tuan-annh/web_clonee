import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import path from '../../../constants/path'
import ArrowRightIcon from '../../../components/Icons/ArrowRightIcon'
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
// eslint-disable-next-line import/no-unresolved
import 'swiper/css'
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/pagination'
// eslint-disable-next-line import/no-unresolved
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

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
    title: "Glamorous Men's Hoodies",
    description: 'New Spring. Shop The Collection',
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
  const [isFirstSlide, setIsFirstSlide] = useState(true)
  const [isLastSlide, setIsLastSlide] = useState(false)
  const pagination = {
    clickable: true,
    el: '#banner-pagination',
    renderBullet: function (_: number, className: string) {
      return `<div class="${className} rounded" style="width: 16px; height: 16px; background: black;"></div>`
    }
  }

  const handleSlideChange = (swiper: SwiperClass) => {
    setIsFirstSlide(swiper.isBeginning)
    setIsLastSlide(swiper.isEnd)
  }

  return (
    <div className='hero-part relative '>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          prevEl: '#prev-btn',
          nextEl: '#next-btn'
        }}
        pagination={pagination}
        onSlideChange={handleSlideChange}
        autoplay={{ disableOnInteraction: true, delay: 4000 }}
      >
        {BANNERS.map(({ url, title, description, discount }, index) => (
          <SwiperSlide key={index.toString()}>
            <div
              className='flex aspect-[1.6] items-center justify-center bg-slate-300'
              style={{
                backgroundImage: `url("${url}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                scale: 125,
                transitionDuration: 'initial'
              }}
            >
              <div className=' top-20% absolute text-left md:left-32'>
                <div className='mb-5 flex w-fit cursor-pointer items-center rounded-sm border bg-hover px-3 py-2 text-white duration-300 hover:border hover:border-hover hover:bg-white hover:text-hover'>
                  <h3 className=' hover:text-hover'>SALE UP TO {discount}%</h3>
                </div>
                <p className='mb-5 text-[28px] font-bold lg:text-[40px]'>{title}</p>
                <p className='mb-6 text-lg lg:mb-8'>{description}</p>
                <NavLink
                  className='flex items-center gap-4 duration-300 hover:gap-8 hover:text-hover'
                  to={path.products}
                >
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
        className={`user-select-none absolute left-4 top-[40%] z-20 hidden cursor-pointer bg-gray-300 md:block ${
          isFirstSlide ? 'opacity-20' : 'opacity-60 hover:bg-hover'
        }`}
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
        className={`user-select-none absolute right-4 top-[40%] z-20 hidden cursor-pointer bg-gray-300 md:block ${
          isLastSlide ? 'opacity-20' : 'opacity-60 hover:bg-hover'
        }`}
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
