import { Button } from '@mui/material'
import { useContext } from 'react'
import { AppContext } from '../../contexts/HighApp.context'
import { NavLink } from 'react-router-dom'
import path from '../../constants/path'

function Header() {
  const { setisAuthenticated } = useContext(AppContext)

  return (
    <div>
      <NavLink to={path.products}>Products</NavLink>
      <NavLink to={path.profile}>Profile</NavLink>
      <Button variant='contained' onClick={() => setisAuthenticated(false)}>
        Log out
      </Button>
    </div>
  )
}

export default Header
