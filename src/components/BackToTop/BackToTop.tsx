import React, { FC, useEffect, useState } from 'react'

const BackToTop: FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    setIsVisible(scrollTop > 0)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={`fixed bottom-20 right-4 rounded-full bg-gray-500 p-2 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 hover:bg-hover'
      } z-50 cursor-pointer lg:bottom-4`}
      onClick={scrollToTop}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6 text-white'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 10l7-7m0 0l7 7m-7-7v18' />
      </svg>
    </div>
  )
}

export default BackToTop
