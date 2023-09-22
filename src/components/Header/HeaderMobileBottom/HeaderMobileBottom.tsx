import React, { FC } from 'react'
import { useLocation, Link } from 'react-router-dom'
import HomeIcon from '../../Icons/HomeIcon'
import ProductIcon from '../../Icons/ProductIcon'
import CartIcon from '../../Icons/CartIcon'
import HeartIcon from '../../Icons/HeartIcon'
import ProfileIcon from '../../Icons/ProfileIcon'
import path from '../../../constants/path'

const NAVIGATIONS: { icon: JSX.Element; link: string }[] = [
  {
    icon: <HomeIcon />,
    link: path.home
  },
  {
    icon: <ProductIcon />,
    link: path.products
  },
  {
    icon: <CartIcon />,
    link: path.paycart
  },
  {
    icon: <HeartIcon />,
    link: path.wishList
  },
  {
    icon: <ProfileIcon />,
    link: path.profile
  }
]

const HeaderMobileBottom: FC = () => {
  const location = useLocation()

  return (
    <header className='fixed bottom-0 left-0 right-0 z-50 flex justify-around rounded-t-[20px] rounded-tr-[20px] bg-white px-[10px] shadow-[0_0_12px_#0000001f] lg:hidden'>
      {NAVIGATIONS.map((item) => (
        <Link
          className={`px-9 py-6 hover:bg-slate-100 hover:text-hover ${
            location.pathname === item.link ? 'text-hover' : ''
          }`}
          key={item.link}
          to={item.link}
        >
          <span>{item.icon}</span>
        </Link>
      ))}
    </header>
  )
}

export default HeaderMobileBottom
