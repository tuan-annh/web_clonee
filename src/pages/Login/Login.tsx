import { NavLink } from 'react-router-dom'
import path from '../../constants/path'
import { Button, TextField, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { SetStateAction, useContext, useState } from 'react'
import { AppContext } from '../../contexts/HighApp.context'
import { authApi } from '../../apis/auth.api'

function Login() {
  const { setisAuthenticated } = useContext(AppContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleUsernameChange = (event: { target: { value: SetStateAction<string> } }) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event: { target: { value: SetStateAction<string> } }) => {
    setPassword(event.target.value)
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    // Perform API call to authenticate

    if (!username || !password) {
      setLoginError('Username and password are required.')

      // Handle validation error: Username or password is empty

      return
    }

    try {
      const response = await authApi.loginAccount({ username, password })
      if (response.status === 200) {
        // Assuming the response includes authentication data

        // const data = response.data;

        // Update the authentication status using the context

        setisAuthenticated(true) // Update this based on your API response
      } else {
        // Handle authentication error here
      }
    } catch (error) {
      setLoginError('Wrong username or password.')

      // Handle network error
    }
  }

  return (
    <div
      className=' h-screen w-screen bg-cover bg-no-repeat pt-32'
      style={{
        backgroundImage: 'url(https://chichchoedesign.com/wp-content/uploads/2022/12/thiet-ke-shop-quan-ao-nu.jpg)'
      }}
    >
      <div className=' m-auto w-1/3  rounded-xl bg-white p-8 shadow-box-1'>
        <div className='mb-12 flex flex-col items-center  '>
          <div
            style={{
              backgroundImage: 'url(https://ohey-demo.myshopify.com/cdn/shop/files/logo_130x@2x.png?v=1630570943)',

              backgroundRepeat: 'no-repeat',

              height: '40px',

              width: '100px'
            }}
          ></div>

          <h2>Sign in to your account</h2>
        </div>

        <div>
          <form className='flex flex-col gap-4 ' onSubmit={handleSubmit}>
            <TextField
              label='username'
              name='username'
              type='text'
              autoComplete='username'
              required
              value={username}
              onChange={handleUsernameChange}
            />

            <FormControl sx={{ width: '100%' }} variant='outlined'>
              <InputLabel htmlFor='outlined-adornment-password'>Password</InputLabel>

              <OutlinedInput
                id='outlined-adornment-password'
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge='end'
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label='Password'
                value={password}
                onChange={handlePasswordChange}
              />
            </FormControl>

            {loginError && <p className='text-red-500'>{loginError}</p>}

            <Button type='submit' variant='outlined'>
              Log in
            </Button>

            <NavLink to={path.register} className='pr-2 text-right underline'>
              Go to Register
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
