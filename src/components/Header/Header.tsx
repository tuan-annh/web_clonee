// import { useContext } from 'react'
// import { AppContext } from '../../contexts/HighApp.context'
import { NavLink } from 'react-router-dom'
import path from '../../constants/path'

function Header() {
  //   const { setisAuthenticated } = useContext(AppContext)
  return (
    <header className=' bg-white-800 text-black border-b h-24 w-screen'>
      <div className='fixed container grid grid-cols-8 items-center mx-auto px-7 py-6 z-10 bg-white'>
        <div className='col-span-1 bg-white font-bold'>High Ecommerce</div>
        <div className='col-span-7 flex justify-between items-center'>
          <div className='flex gap-6'>
            <NavLink to={path.home}>Home</NavLink>
            <NavLink to={path.products}>Products</NavLink>
            <NavLink to={'*'}>About</NavLink>
            <NavLink to={'*'}>Contact Us</NavLink>
          </div>
          <div className='grid grid-cols-4 gap-3 items-center'>
            <div className='mx-auto max-w-md'>
              <form action='' className='relative mx-auto w-max'>
                <input
                  type='search'
                  className='peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent outline-none focus:w-full focus:cursor-text focus:border-gray-300 focus:pl-16 focus:pr-4'
                />
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-black-300 peer-focus:black-lime-500'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                </svg>
              </form>
            </div>
            {/* <NavLink className='' to={path.register}>
              Register
            </NavLink> */}
            <div className='flex items-center gap-1'>
              <svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 448 512'>
                <path d='M144 144c0-44.2 35.8-80 80-80c31.9 0 59.4 18.6 72.3 45.7c7.6 16 26.7 22.8 42.6 15.2s22.8-26.7 15.2-42.6C331 33.7 281.5 0 224 0C144.5 0 80 64.5 80 144v48H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H144V144z' />
              </svg>
              <NavLink to={path.login}>Login</NavLink>
            </div>
            <div className='flex items-center gap-0.5'>
              <svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 576 512'>
                <path d='M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z' />
              </svg>
              <div className='rounded-full bg-hover text-white w-6 h-6 flex justify-center'>0</div>
            </div>
            <div className='flex items-center gap-0.5'>
              <svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 512 512'>
                <path d='M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z' />
              </svg>
              <div className='rounded-full bg-hover text-white w-6 h-6 flex justify-center'>0</div>
            </div>
            {/* <NavLink to={''}>3</NavLink> */}
            {/* <NavLink to={''}>4</NavLink> */}
            {/* <button className='col-span-2 bg-orange-500' onClick={() => setisAuthenticated(false)}>
                  Log out
                </button> */}
          </div>
        </div>
        <div />
      </div>
    </header>
    //  <div>
    //    <NavLink to={path.products}>Products</NavLink>
    //    <NavLink to={path.profile}>Profile</NavLink>
    //    <Button variant='contained' onClick={() => setisAuthenticated(false)}>
    //      Log out
    //    </Button>
    //    <Nav></Nav>
    //  </div>
  )
}

export default Header
