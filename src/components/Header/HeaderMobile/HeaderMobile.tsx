import React from 'react'
import { NavLink } from 'react-router-dom'
import path from '../../../constants/path'
import SearchBar from '../SearchBar/SearchBar'
import MenuIcon from '../../Icons/MenuIcon'

const HeaderMobile = () => {
  return (
    <div className='mx-auto my-5 flex w-screen items-center justify-between gap-3 overflow-hidden px-4 lg:hidden'>
      <div className='menu'>
        <MenuIcon />
      </div>
      <div className='z-[1] bg-white font-bold'>
        <NavLink to={path.home}>High Ecommerce</NavLink>
      </div>
      <div>
        <SearchBar />
      </div>
    </div>
  )
}

export default HeaderMobile
