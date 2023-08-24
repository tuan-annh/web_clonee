import { NavLink } from 'react-router-dom'
import path from '../../constants/path'
import { authApi } from '../../apis/auth.api'
import { Button } from '@mui/material'

function Register() {
  const handleRegister = () => {
    authApi.registerAccount({
      email: 'anvuvuong05@gmail.com',
      name: { firstname: 'An', lastname: 'Vu' },
      password: '123456',
      phone: '0378995613',
      username: 'aner'
    })
  }

  return (
    <div>
      Register
      <NavLink to={path.login}>Go to Login</NavLink>
      <Button onClick={handleRegister} variant='contained'>
        Register
      </Button>
    </div>
  )
}

export default Register
