import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import AsideFilter from '../AsideFilter'

interface Props {
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

function AsideModal({ showModal, setShowModal }: Props) {
  const asideRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (asideRef.current) {
      if (showModal) {
        // Use a setTimeout to ensure the transition is applied after rendering
        setTimeout(() => {
          if (asideRef.current) {
            asideRef.current.style.transform = 'translateX(0)'
            asideRef.current.parentElement?.classList.add('bg-main/50')
          }
          // Add a CSS class to trigger the slide-in animation
        }, 0)
      }
    }
  }, [showModal])

  const handleCloseButton = () => {
    if (asideRef.current) {
      asideRef.current.style.transform = 'translateX(-100%)'
      asideRef.current.parentElement?.classList.remove('bg-main/50')
    }
    setTimeout(() => {
      setShowModal(false)
    }, 300)
  }

  return (
    showModal &&
    createPortal(
      <div
        className={'fixed top-0 z-50 grid h-screen w-screen grid-cols-6 duration-500 ease-in-out'}
        onClick={handleCloseButton}
      >
        <div
          ref={asideRef}
          onClick={(event) => event.stopPropagation()}
          className='col-span-4 -translate-x-full overflow-y-scroll bg-white duration-500 ease-in-out sm:col-span-3 md:col-span-2'
        >
          <div className='flex items-center justify-between bg-main px-6 text-product-bg'>
            <p className='text-sm font-semibold'>Filters</p>
            <button className='cursor-pointer p-4' onClick={handleCloseButton}>
              <svg fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='h-5 w-5'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
          </div>
          <div className='p-4'>
            <AsideFilter />
          </div>
        </div>
      </div>,
      document.body
    )
  )
}

export default AsideModal
