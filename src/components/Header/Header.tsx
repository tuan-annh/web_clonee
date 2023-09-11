import { useContext } from 'react'
import { AppContext } from '../../contexts/HighApp.context'
import { NavLink, useNavigate } from 'react-router-dom'
import path from '../../constants/path'
import { useSelector } from 'react-redux'
import { allCard } from '../../redux/allCart'

function Header() {
  const navigate = useNavigate()
  const allListCard = useSelector(allCard)
  const { isAuthenticated } = useContext(AppContext)

  //   const [isMenuOpen, setIsMenuOpen] = useState(false)
  //   const toggleMenu = () => {
  //     setIsMenuOpen(!isMenuOpen)
  //   }
  return (
    <header className='header header-sticky no-prepend-box-sticky bg-white-800 h-24 border-b text-black '>
      <div className='z-10 mx-auto flex w-full items-center justify-between gap-40 bg-white px-7 py-6 shadow-md'>
        <div className='  bg-white font-bold sm:col-start-2 lg:col-start-1'>
          <NavLink to={path.home}>High Ecommerce</NavLink>
        </div>
        <div className='flex grow items-center justify-between'>
          <div className='flex gap-6'>
            {/* <div className='' onClick={toggleMenu}>
              <svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 448 512'>
                <path d='M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z' />
              </svg>
            </div> */}
            {/* {isMenuOpen && (
              <div className='absolute right-0 top-0 mr-4 mt-14 rounded-md bg-white text-black shadow-lg'>
                <div className='flex flex-col gap-2 p-4 hover:text-hover'>
                  <NavLink to={path.home}>Home</NavLink>
                  <NavLink to={path.products}>Products</NavLink>
                  <NavLink to={path.about}>About</NavLink>
                  <NavLink to={path.contact}>Contact Us</NavLink>
                </div>
              </div>
            )} */}
            <div className='hover:text-hover'>
              <NavLink to={path.home}>Home</NavLink>
            </div>
            <div className='hover:text-hover'>
              <NavLink to={path.products}>Products</NavLink>
            </div>
            <div className='hover:text-hover'>
              <NavLink to={path.about}>About</NavLink>
            </div>
            <div className='hover:text-hover'>
              <NavLink to={path.contact}>Contact Us</NavLink>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-items-end gap-3'>
          <div className=' mx-auto flex max-w-md justify-end'>
            <form action='' className='relative mx-auto w-max'>
              <input
                type='search'
                className='peer relative z-10 h-12 w-12 cursor-pointer rounded-full border bg-transparent outline-none focus:w-full focus:cursor-text focus:border-gray-300 focus:pl-16 focus:pr-4'
              />
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='peer-focus:border-black-300 peer-focus:black-lime-500 absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
              </svg>
            </form>
          </div>

          {isAuthenticated ? (
            <div className='relative'>
              <div className='flex w-full items-center gap-1 '>
                <NavLink to={path.profile}>
                  <svg
                    fill='currentColor'
                    className='hover:text-hover'
                    xmlns='http://www.w3.org/2000/svg'
                    height='1em'
                    viewBox='0 0 448 512'
                  >
                    <path d='M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z' />
                  </svg>
                </NavLink>
                <button>
                  <svg
                    fill='currentColor'
                    className='hover:text-hover'
                    xmlns='http://www.w3.org/2000/svg'
                    height='1em'
                    viewBox='0 0 448 512'
                  >
                    <path d='M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z' />
                  </svg>
                </button>
              </div>
              <div className='absolute right-0 z-10 mt-2 hidden w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                <div className='py-1' role='none'>
                  <NavLink to={'/'}>Log out</NavLink>
                </div>
              </div>
            </div>
          ) : (
            <div className='flex items-center gap-1 hover:text-hover'>
              <NavLink to={path.login}>Login</NavLink>
            </div>
          )}
          <div
            className='flex cursor-pointer items-center gap-0.5 hover:text-hover'
            onClick={() => navigate(path.paycart)}
          >
            <svg
              fill='currentColor'
              className='hover:text:hover'
              xmlns='http://www.w3.org/2000/svg'
              height='1em'
              viewBox='0 0 576 512'
            >
              <path d='M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z' />
            </svg>
            <div className='flex h-6 w-6 justify-center rounded-full bg-hover text-white'>
              {allListCard.reduce((acc, cur) => acc + cur.count, 0)}
            </div>
          </div>
          <div className='flex cursor-pointer items-center gap-0.5 hover:text-hover'>
            <svg
              fill='currentColor'
              className='hover:text:hover'
              xmlns='http://www.w3.org/2000/svg'
              height='1em'
              viewBox='0 0 512 512'
            >
              <path d='M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z' />
            </svg>
            <div className='flex h-6 w-6 justify-center rounded-full bg-hover text-white'>0</div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
