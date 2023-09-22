import { useContext } from 'react'
import { AppContext } from '../../contexts/HighApp.context'
import { NavLink, useNavigate } from 'react-router-dom'
import path from '../../constants/path'
import { useSelector } from 'react-redux'
import CartIcon from '../Icons/CartIcon'

import HeaderMobile from './HeaderMobile/HeaderMobile'
import ProfileIcon from '../Icons/ProfileIcon'
import HeartIcon from '../Icons/HeartIcon'
import { allCart } from '../../redux/allCart'
import { NAVIGATION } from '../../constants/common.constant'
import SearchBar from './SearchBar/SearchBar'
import { useAppSelector } from '../../redux/hooks'
import LogOutIcon from '../Icons/LogOutIcon'
import { Tooltip } from '@mui/material'
import { clearLS } from '../../utils/auth.util'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'

function Header() {
  const navigate = useNavigate()
  const allListCart = useSelector(allCart)
  const wishList = useAppSelector((state) => state.wishList.list)
  const { isAuthenticated, setIsAuthenticated: setIsAuthenticated } = useContext(AppContext)

  return (
    <header className='z-10 min-h-full border-b-2 py-2 text-main shadow-md'>
      <div className='mx-auto hidden w-full max-w-[1300px] items-center justify-between gap-40 bg-white px-7 py-4 lg:visible lg:flex'>
        <div className=' bg-white text-xl font-bold '>
          <NavLink to={path.home}>High Ecommerce</NavLink>
        </div>
        <div className='flex grow items-center gap-10'>
          {NAVIGATION.map(({ key, title }) => (
            <div
              key={key}
              className='border-b-[2px] border-b-transparent duration-300 hover:border-b-hover hover:text-hover'
            >
              <NavLink to={path[key]} className='capitalize'>
                <span className={`${location.pathname === path[key] ? 'text-hover' : ''}`}>{title}</span>
              </NavLink>
            </div>
          ))}
        </div>
        <div className='items-center justify-items-end gap-4 lg:flex'>
          <SearchBar />

          <Tooltip title='Shopping Cart'>
            <div
              className={`flex cursor-pointer items-center gap-0.5 ${
                location.pathname === path.paycart ? 'text-hover' : ''
              }`}
              onClick={() => navigate(path.paycart)}
            >
              <CartIcon />
              <div className='flex h-6 w-6 justify-center rounded-full bg-hover text-white'>
                {allListCart.reduce((acc, cur) => acc + cur.count, 0)}
              </div>
            </div>
          </Tooltip>
          <Tooltip title='Wish List'>
            <div
              className={`flex cursor-pointer items-center gap-0.5 hover:text-hover ${
                location.pathname === path.wishList ? 'text-hover' : ''
              }`}
              onClick={() => navigate(path.wishList)}
            >
              <HeartIcon />
              <div className='flex h-6 w-6 justify-center rounded-full bg-hover text-white'>{wishList.length}</div>
            </div>
          </Tooltip>
          {isAuthenticated ? (
            <div className='flex w-full items-center gap-0.5'>
              <Tooltip title='Profile'>
                <div className={`${location.pathname === path.profile ? 'text-hover' : ''}`}>
                  <NavLink to={path.profile}>
                    <ProfileIcon />
                  </NavLink>
                </div>
              </Tooltip>
              <Tooltip title='Log Out'>
                <button
                  className='rotate-180 hover:text-hover'
                  onClick={() => {
                    clearLS()
                    Cookies.remove('access_token')
                    setTimeout(() => {
                      setIsAuthenticated(false)
                      toast.info('Logout successfully')
                    }, 500)
                  }}
                >
                  <LogOutIcon />
                </button>
              </Tooltip>
            </div>
          ) : (
            <Tooltip title='Login'>
              <div className='flex items-center gap-1 hover:text-hover'>
                <NavLink to={path.login}>
                  <LogOutIcon />
                </NavLink>
              </div>
            </Tooltip>
          )}
        </div>
      </div>
      <HeaderMobile />
    </header>
  )
}

export default Header
