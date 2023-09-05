import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import AsideFilter from '../AsideFilter'
import classNames from 'classnames'

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
          if (asideRef.current) asideRef.current.style.transform = 'translateX(0)' // Add a CSS class to trigger the slide-in animation
        }, 0)
      }
    }
  }, [showModal])

  const handleCloseButton = () => {
    if (asideRef.current) asideRef.current.style.transform = 'translateX(-100%)'
    setTimeout(() => {
      setShowModal(false)
    }, 200)
  }

  return (
    showModal &&
    createPortal(
      <div
        className={classNames('fixed top-0 z-50 h-screen w-screen bg-main/50 grid-cols-6 grid')}
        onClick={handleCloseButton}
      >
        <div
          ref={asideRef}
          onClick={(event) => event.stopPropagation()}
          className={classNames(
            'bg-white col-span-4 sm:col-span-3 md:col-span-2 overflow-y-scroll -translate-x-full transition-transform duration-300 ease-in-out'
          )}
        >
          <div className='text-product-bg bg-main px-6 flex justify-between items-center'>
            <p className='text-sm font-semibold'>Filters</p>
            <button className='p-4 cursor-pointer' onClick={handleCloseButton}>
              <svg fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-5 h-5'>
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
