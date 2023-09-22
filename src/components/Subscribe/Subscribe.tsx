import React, { FC, useState } from 'react'
import { toast } from 'react-toastify'

const Subscribe: FC = () => {
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [key, setKey] = useState('')

  const emailSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (emailRegex.test(key)) {
      setIsSubscribed(true)
      toast.success('Subscribed successfully!')
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    } else {
      toast.error('Email is invalid')
    }
  }

  return (
    <>
      {!isSubscribed && (
        <div className='m-auto my-7 text-center'>
          <div className='my-4'>
            <h2 className='mx-auto pt-10 text-center text-[32px] font-bold'>Let's Stay In Touch</h2>
            <p className='my-10'>
              Subscribe to the auto mailing to receive updates on new arrivals & other discount information.
            </p>
          </div>
          <div className='m-auto mx-8 flex justify-center'>
            <form className='w-full md:w-2/3' onSubmit={emailSubscribe}>
              <div className='flex flex-col py-2 md:flex-row md:items-center md:border-b md:border-b-black'>
                <input
                  className='my-3 mr-3 w-full appearance-none border-b border-b-black bg-transparent px-2 py-3 leading-tight text-gray-700 focus:outline-none md:border-none '
                  type='text'
                  placeholder='Your email address...'
                  aria-label='Full name'
                  value={key}
                  onChange={(e) => setKey(e.target.value)}
                />
                <button
                  className=' flex-shrink-0 cursor-pointer rounded-sm bg-main px-4 py-3 text-sm font-bold text-white duration-200 hover:bg-hover'
                  type='submit'
                  disabled={!key.trim()}
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Subscribe
