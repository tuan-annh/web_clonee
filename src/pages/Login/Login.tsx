import { NavLink } from 'react-router-dom'
import path from '../../constants/path'
import { Button } from '@mui/material'
import { useContext } from 'react'
import { AppContext } from '../../contexts/HighApp.context'
import { authApi } from '../../apis/auth.api'
// import { offlineHttp } from '../../apis/http'

function Login() {
  const { setisAuthenticated } = useContext(AppContext)

  const handleLogin = () => {
    setisAuthenticated(true)
    authApi.loginAccount({
      username: 'johnd',
      password: 'm38rmF$'
    })
    // offlineHttp.get('').then((res) => console.log(res))
  }

  return (
    <div>
      Login
      <NavLink to={path.register}>Go to Register</NavLink>
      <Button variant='contained' onClick={handleLogin}>
        Log in
      </Button>
    </div>
  )
}

export default Login
