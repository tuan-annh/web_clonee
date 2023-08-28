import { NavLink } from 'react-router-dom'
import path from '../../constants/path'
import { Button } from '@mui/material'
import { SetStateAction, useContext, useState } from 'react'
import { AppContext } from '../../contexts/HighApp.context'
import { authApi } from '../../apis/auth.api'

// import { offlineHttp } from '../../apis/http'

function Login() {
  const { setisAuthenticated } = useContext(AppContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')

  const handleUsernameChange = (event: { target: { value: SetStateAction<string> } }) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event: { target: { value: SetStateAction<string> } }) => {
    setPassword(event.target.value)
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
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <img
          className='mx-auto h-10 w-auto'
          src='https://ohey-demo.myshopify.com/cdn/shop/files/logo_130x@2x.png?v=1630570943'
          alt='Your Company'
        />
        <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
          Sign in to your account
        </h2>
      </div>

      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <form className='space-y-6' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='username' className='block text-sm font-medium leading-6 text-gray-900'>
              Username
            </label>
            <div className='mt-2'>
              <input
                id='username'
                name='username'
                type='text'
                autoComplete='username'
                required
                value={username}
                onChange={handleUsernameChange}
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div>
            <div className='flex items-center justify-between'>
              <label htmlFor='password' className='block text-sm font-medium leading-6 text-gray-900'>
                Password
              </label>
              {/* ... (Forgot password link) ... */}
            </div>
            <div className='mt-2'>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                required
                value={password}
                onChange={handlePasswordChange}
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
            {loginError && <p className='text-red-500'>{loginError}</p>}
          </div>

          <div>
            <NavLink to={path.register}>Go to Register</NavLink>
            <Button
              type='submit'
              className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              variant='contained'
            >
              Log in
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
