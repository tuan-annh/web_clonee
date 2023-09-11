function Subcribe() {
  return (
    <div className='m-auto my-7 text-center'>
      <div className='my-4'>
        <h2 className='mx-auto pt-10 text-center text-[32px] font-bold'>Let's Stay In Touch</h2>
        <p className='my-10'>
          Subscribe to the Gosto mailing list to receive updates on new arrivals & other discount information.
        </p>
      </div>
      <div className='m-auto flex justify-center'>
        <form className='w-1/2'>
          <div className='flex items-center justify-center border-b border-b-black py-2'>
            <input
              className='mr-3 w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight text-gray-700 focus:outline-none'
              type='text'
              placeholder='Your email address...'
              aria-label='Full name'
            />
            <button
              className='flex-shrink-0 rounded border-4 bg-black px-4 py-3 text-sm text-white hover:bg-hover'
              type='button'
            >
              Subcribe
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Subcribe
