import { useContext } from 'react'
import { AppContext } from '../../contexts/HighApp.context'
import { NavLink } from 'react-router-dom'
import path from '../../constants/path'

function Header() {
  const { setisAuthenticated } = useContext(AppContext)
  return (
    <header className='bg-white-800 text-black border-b border-orange-300'>
      <div className='container mx-auto px-4 py-6'>
        <div className='flex items-center justify-between'>
          <div className='w-1/4'>
            <div className='grid grid-cols-4 gap-4'>
              <NavLink to={path.home}>Home</NavLink>
              <NavLink to={path.products}>Products</NavLink>
              <NavLink to={''}>About</NavLink>
              <NavLink to={''}>Contact Us</NavLink>
            </div>
          </div>
          <div className='w-1/2 text-center'>
            <h1 className='text-2xl font-bold'>High Ecommerce</h1>
          </div>
          <div className='w-1/4'>
            <div className='grid grid-cols-6 gap-4'>
              <NavLink className='' to={path.register}>
                Register
              </NavLink>

              <NavLink to={path.login}>Login</NavLink>

              <NavLink to={''}>3</NavLink>
              <NavLink to={''}>4</NavLink>
              <button className='col-span-2 bg-orange-500' onClick={() => setisAuthenticated(false)}>
                Log out
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
    //  <div>
    //    <NavLink to={path.products}>Products</NavLink>
    //    <NavLink to={path.profile}>Profile</NavLink>
    //    <Button variant='contained' onClick={() => setisAuthenticated(false)}>
    //      Log out
    //    </Button>
    //    <Nav></Nav>
    //  </div>
  )
}

export default Header
