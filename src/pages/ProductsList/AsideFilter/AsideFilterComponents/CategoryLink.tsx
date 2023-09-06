import classNames from 'classnames'
import { NavLink, useLocation } from 'react-router-dom'
import path from '../../../../constants/path'
import { capitalizeFirstLetter, encodeSpaces } from '../../../../utils/utils'

function CategoryLink({ category }: { category: string }) {
  const isAllCategories = category === 'products'
  const urlPath = useLocation()

  return (
    <NavLink
      className={({ isActive }) =>
        classNames('my-2 flex items-center gap-3 py-2 hover:font-bold', {
          'font-bold': isAllCategories ? urlPath.pathname === path.products : isActive
        })
      }
      to={category === 'products' ? path.products : `${path.products}/${category}`}
    >
      <div
        className={classNames('h-4 w-4 rounded-full border border-hover', {
          'bg-hover': isAllCategories
            ? urlPath.pathname === path.products
            : urlPath.pathname === `/products/${encodeSpaces(category)}`
        })}
      >
        <svg fill='none' viewBox='0 0 24 24' strokeWidth={3} stroke='white'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5' />
        </svg>
      </div>
      <p>{category === 'products' ? 'All Categories' : capitalizeFirstLetter(category)}</p>
    </NavLink>
  )
}

export default CategoryLink
