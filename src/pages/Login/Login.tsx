import { NavLink } from 'react-router-dom'
import path from '../../constants/path'
import { TextField, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Box } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { SetStateAction, useContext, useState } from 'react'
import { AppContext } from '../../contexts/HighApp.context'
import { authApi } from '../../apis/auth.api'
import { toast } from 'react-toastify'
import { useQuery } from '@tanstack/react-query'
import { userApi } from '../../apis/user.api'
import { setProfileToLS } from '../../utils/auth.util'
import Cookies from 'js-cookie'

function Login() {
  const { setisAuthenticated, setUserId } = useContext(AppContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [isLoggingIn, setIsLoggingIn] = useState(false) // Add a state for login status

  const { data: usersData } = useQuery({
    queryKey: ['users'],
    queryFn: () => userApi.getAllUser()
  })

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
    if (isLoggingIn) {
      // If already logging in, return to prevent multiple clicks
      return
    }

    setIsLoggingIn(true) // Set the login status to true during login process

    try {
      const response = await authApi.loginAccount({ username, password })

      if (response.status === 200) {
        const loginUser = usersData?.data.find((user) => user.username === username)
        setUserId(loginUser?.id)
        // Save access token in a cookie
        Cookies.set('access_token', response.data.token, { expires: 7, secure: true, sameSite: 'strict' })
        console.log('User', loginUser)
        console.log('API Response:', response.data)
        toast.success('Login successfully!')

        setisAuthenticated(true)
        if (loginUser) {
          const profileData = { username, password, id: loginUser.id }
          setProfileToLS(profileData)
        }
      }
      //   // Assuming the response includes authentication data

      // Update the authentication status using the context
      // Update this based on your API response
    } catch (error) {
      toast.error('Wrong username or password.')
      setLoginError('Wrong username or password.')

      // Handle network error
    } finally {
      setIsLoggingIn(false) // Reset login status when done
    }
  }

  return (
    <div
      className=' h-screen w-screen bg-cover bg-no-repeat pt-32'
      style={{
        backgroundImage: 'url(https://chichchoedesign.com/wp-content/uploads/2022/12/thiet-ke-shop-quan-ao-nu.jpg)'
      }}
    >
      <div className='m-auto w-5/6 rounded-xl bg-white px-8 pb-8 pt-16 shadow-box-1 md:w-1/2 lg:w-1/3 xl:w-1/4 '>
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
          <form className='flex flex-col gap-1 ' onSubmit={handleSubmit}>
            <TextField
              label='username'
              name='username'
              type='text'
              autoComplete='username'
              required
              value={username}
              onChange={handleUsernameChange}
            />
            <Box className=' h-5'></Box>

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
            <div className='mb-1 h-[24px]'>{loginError && <p className='text-red-500 '>{loginError}</p>}</div>

            <button
              type='submit'
              className={`w-full rounded border border-main bg-main py-3 text-product-bg duration-300 ease-in-out hover:bg-white hover:text-main ${
                isLoggingIn ? 'cursor-not-allowed opacity-60' : ''
              }`}
              disabled={isLoggingIn}
            >
              {isLoggingIn ? 'Logging in...' : 'Log in'}
            </button>

            <NavLink to={path.register} className='mt-4 pr-2 text-right underline hover:text-hover '>
              Go to Register
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
