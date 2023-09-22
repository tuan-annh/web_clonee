import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import path from '../../../constants/path'
import SearchBar from '../SearchBar/SearchBar'
import MenuIcon from '../../Icons/MenuIcon'
import { Drawer } from '@mui/material'
import { NAVIGATION } from '../../../constants/common.constant'
import { AppContext } from '../../../contexts/HighApp.context'
import LogOutIcon from '../../Icons/LogOutIcon'
import { clearLS } from '../../../utils/auth.util'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'

const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { isAuthenticated, setIsAuthenticated: setIsAuthenticated } = useContext(AppContext)

  const onChangeRoute = () => {
    setIsOpen(false)
  }

  return (
    <div className='mx-auto flex items-center justify-between gap-3 px-4 lg:hidden'>
      <div className='menu' onClick={() => setIsOpen((value) => !value)}>
        <MenuIcon />
      </div>
      <div className='z-[1] bg-white font-bold'>
        <NavLink to={path.home}>High Ecommerce</NavLink>
      </div>
      <div>
        <SearchBar />
      </div>
      <Drawer
        anchor='left'
        ModalProps={{ disableScrollLock: true }}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        transitionDuration={{
          enter: 400,
          exit: 300
        }}
      >
        <div className='flex flex-col gap-3 py-10'>
          {NAVIGATION.map(({ key, title }) => (
            <Link
              key={key}
              to={path[key]}
              onClick={onChangeRoute}
              className='text-md w-[75vw] max-w-[300px] border-b px-3 py-1 font-bold capitalize hover:text-hover'
            >
              <span className={`${location.pathname === path[key] ? 'text-hover' : ''}`}>{title}</span>
            </Link>
          ))}
          {isAuthenticated ? (
            <div
              className='text-md flex w-[75vw] max-w-[300px] cursor-pointer items-center justify-between border-b px-3 py-1 font-bold capitalize hover:text-hover'
              onClick={() => {
                clearLS()
                Cookies.remove('access_token')
                setTimeout(() => {
                  setIsAuthenticated(false)
                  toast.info('Logout successfully')
                  onChangeRoute()
                }, 500)
              }}
            >
              Log Out
              <div className='rotate-180'>
                <LogOutIcon />
              </div>
            </div>
          ) : (
            <Link
              to={path.login}
              onClick={onChangeRoute}
              className='text-md w-[75vw] max-w-[300px] border-b px-3 py-1 font-bold capitalize hover:text-hover'
            >
              Login
            </Link>
          )}
        </div>
      </Drawer>
    </div>
  )
}

export default HeaderMobile
