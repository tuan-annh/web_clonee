import { NavLink, useLocation } from 'react-router-dom'
import path from '../../../constants/path'
import classNames from 'classnames'

const category = {
  electornics: 'electronics',
  jewelery: 'jewelery',
  mensclothing: "men's clothing",
  womensclothing: "women's clothing"
}

function AsideFilter() {
  const urlPath = useLocation()
  return (
    <>
      <div>
        <div className='flex'>
          <h3 className='font-semibold text-lg text-main pb-3 border-b border-name-product'>Categories</h3>
          <div className='border-b border-name-product/20 flex-grow'></div>
        </div>
        <div className='py-5 text-main-text'>
          <NavLink
            className={classNames('flex gap-3 items-center py-2 hover:font-bold', {
              'font-bold': urlPath.pathname === path.products
            })}
            to={path.products}
          >
            <div className='w-4 h-4 rounded-full border border-hover'></div>
            <p>All</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              classNames('flex gap-3 items-center py-2 hover:font-bold', {
                'font-bold': isActive
              })
            }
            to={`${path.products}/${category.electornics}`}
          >
            <div className='w-4 h-4 rounded-full border border-hover'></div>
            <p>Electronics</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              classNames('flex gap-3 items-center py-2 hover:font-bold', {
                'font-bold': isActive
              })
            }
            to={`${path.products}/${category.jewelery}`}
          >
            <div className='w-4 h-4 rounded-full border border-hover'></div>
            <p>Jewelery</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              classNames('flex gap-3 items-center py-2 hover:font-bold', {
                'font-bold': isActive
              })
            }
            to={`${path.products}/${category.mensclothing}`}
          >
            <div className='w-4 h-4 rounded-full border border-hover'></div>
            <p>Men's clothing</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              classNames('flex gap-3 items-center py-2 hover:font-bold', {
                'font-bold': isActive
              })
            }
            to={`${path.products}/${category.womensclothing}`}
          >
            <div className='w-4 h-4 rounded-full border border-hover'></div>
            <p>Women's clothing</p>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default AsideFilter
