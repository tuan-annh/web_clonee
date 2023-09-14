import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import path from '../../../constants/path'
import SearchBar from '../SearchBar/SearchBar'
import MenuIcon from '../../Icons/MenuIcon'
import { Drawer } from '@mui/material'

const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

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
      <Drawer anchor='left' open={isOpen} onClose={() => setIsOpen(false)}>
        <div className='flex flex-col gap-1'>
          <Link to='/products' onClick={onChangeRoute} className='w-[75vw] max-w-[300px]'>
            adsflalsjfk
          </Link>
        </div>
      </Drawer>
    </div>
  )
}

export default HeaderMobile
