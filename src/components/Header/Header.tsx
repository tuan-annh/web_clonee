import { useContext } from 'react'
import { AppContext } from '../../contexts/HighApp.context'
import { NavLink, useNavigate } from 'react-router-dom'
import path from '../../constants/path'
import { useSelector } from 'react-redux'
import CartIcon from '../Icons/CartIcon'

import SearchBar from './SearchBar/SearchBar'
import HeaderMobile from './HeaderMobile/HeaderMobile'
import ProfileIcon from '../Icons/ProfileIcon'
import HeartIcon from '../Icons/HeartIcon'
import { allCart } from '../../redux/allCart'

function Header() {
  const navigate = useNavigate()
  const allListCart = useSelector(allCart)
  const { isAuthenticated } = useContext(AppContext)

  //   const [isMenuOpen, setIsMenuOpen] = useState(false)
  //   const toggleMenu = () => {
  //     setIsMenuOpen(!isMenuOpen)
  //   }
  return (
    <header className='header header-sticky no-prepend-box-sticky  h-24  overflow-hidden border-b text-black'>
      <div className='z-10 mx-auto hidden w-full max-w-[1300px] items-center justify-between gap-40 overflow-hidden bg-white px-7 py-6 lg:visible lg:flex'>
        <div className=' bg-white  font-bold '>
          <NavLink to={path.home}>High Ecommerce</NavLink>
        </div>
        {/* <div className='order-1 sm:block lg:hidden'>
          <svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 448 512'>
            <path d='M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z' />
          </svg>
        </div> */}

        <div className='flex grow items-center gap-10'>
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
          <div className='border-b-[2px] border-b-transparent hover:border-b-hover hover:text-hover'>
            <NavLink to={path.home}>Home</NavLink>
          </div>
          <div className='border-b-[2px] border-b-transparent hover:border-b-hover hover:text-hover'>
            <NavLink to={path.products}>Products</NavLink>
          </div>
          <div className='border-b-[2px] border-b-transparent hover:border-b-hover hover:text-hover'>
            <NavLink to={path.about}>About</NavLink>
          </div>
          <div className='border-b-[2px] border-b-transparent hover:border-b-hover hover:text-hover'>
            <NavLink to={path.contact}>Contact Us</NavLink>
          </div>
        </div>

        {/* <div className='relative order-3 mx-auto max-w-md sm:block md:hidden'>
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
        </div> */}
        <div className='items-center justify-items-end gap-3 lg:flex'>
          <SearchBar />

          {isAuthenticated ? (
            <div className='relative'>
              <div className='flex w-full items-center gap-1 '>
                <NavLink to={path.profile}>
                  <ProfileIcon />
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
            <CartIcon />
            <div className='flex h-6 w-6 justify-center rounded-full bg-hover text-white'>
              {allListCart.reduce((acc, cur) => acc + cur.count, 0)}
            </div>
          </div>
          <div className='flex cursor-pointer items-center gap-0.5 hover:text-hover'>
            <HeartIcon />
            <div className='flex h-6 w-6 justify-center rounded-full bg-hover text-white'>0</div>
          </div>
        </div>
      </div>
      <HeaderMobile />
    </header>
  )
}

export default Header
