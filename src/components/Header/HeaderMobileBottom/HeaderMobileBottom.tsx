import React, { FC } from 'react'
import HomeIcon from '../../Icons/HomeIcon'
import ProductIcon from '../../Icons/ProductIcon'
import CartIcon from '../../Icons/CartIcon'
import HeartIcon from '../../Icons/HeartIcon'
import ProfileIcon from '../../Icons/ProfileIcon'
import { Link } from 'react-router-dom'

const NAVIGATIONS: { icon: JSX.Element; link: string }[] = [
  {
    icon: <HomeIcon />,
    link: '/'
  },
  {
    icon: <ProductIcon />,
    link: '/products'
  },
  {
    icon: <CartIcon />,
    link: '/paycart'
  },
  {
    icon: <HeartIcon />,
    link: '/'
  },
  {
    icon: <ProfileIcon />,
    link: '/profile'
  }
]

const HeaderMobileBottom: FC = () => {
  return (
    <header className='fixed bottom-0 left-0 right-0 z-50 flex justify-around rounded-t-[20px] rounded-tr-[20px] bg-white px-[10px] pb-[14px] pt-[20px] shadow-[0_0_12px_#0000001f] lg:hidden'>
      {NAVIGATIONS.map((item) => (
        <Link key={item.link} to={item.link}>
          {item.icon}
        </Link>
      ))}
    </header>
  )
}

export default HeaderMobileBottom
