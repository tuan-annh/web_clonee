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
import { NAVIGATION } from '../../constants/common.constant'

function Header() {
  const navigate = useNavigate()
  const allListCart = useSelector(allCart)
  const { isAuthenticated } = useContext(AppContext)
  return (
    <header className='z-10 h-[100vh-24px] border-b-2 py-2 text-black shadow-md'>
      <div className='mx-auto hidden w-full max-w-[1300px] items-center justify-between gap-40 bg-white px-7 py-6 lg:visible lg:flex'>
        <div className=' bg-white  font-bold '>
          <NavLink to={path.home}>High Ecommerce</NavLink>
        </div>
        <div className='flex grow items-center gap-10'>
          {NAVIGATION.map(({ key, title }) => (
            <div
              key={key}
              className='border-b-[2px] border-b-transparent duration-300 hover:border-b-hover hover:text-hover'
            >
              <NavLink to={path[key]} className='capitalize'>
                {title}
              </NavLink>
            </div>
          ))}
        </div>
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
