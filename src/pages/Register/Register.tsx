import { NavLink } from 'react-router-dom'
import path from '../../constants/path'
import { authApi } from '../../apis/auth.api'
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useForm } from 'react-hook-form'

interface RegisterFormData {
  username: string
  Password: string
  FirstName: string
  LastName: string
  Email: string
  Phone: string
}

function Register() {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterFormData>()

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }
  const handleRegister = async (data: RegisterFormData) => {
    try {
      const responsive = await authApi.registerAccount({
        username: data.username,
        password: data.Password,
        name: { firstname: data.FirstName, lastname: data.LastName },
        email: data.Email,
        phone: data.Phone
      })
      if (responsive.status === 200) {
        setErrorMessage('Sign Up Success')
      } else {
        setErrorMessage('Registration Failed')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div
      className=' h-screen w-screen pt-32 bg-no-repeat bg-cover'
      style={{
        backgroundImage: 'url(https://chichchoedesign.com/wp-content/uploads/2022/12/thiet-ke-shop-quan-ao-nu.jpg)'
      }}
    >
      <div className=' w-1/3 m-auto  p-8 rounded-xl shadow-box-1 bg-white'>
        <h1 className=' text-center uppercase pb-5'>Register</h1>
        <form action='' className='flex flex-col gap-3 ' onClick={handleSubmit(handleRegister)}>
          <TextField label='UserName' {...register('username', { required: true })} />
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
              {...register('Password', { required: true })}
            />
          </FormControl>
          <TextField label='FirstName' type='text' {...register('FirstName', { required: true })} />
          <TextField label='LastName' type='text' {...register('LastName', { required: true })} />
          <TextField label='Email' type='email' {...register('Email', { required: true })} />
          <TextField label='Phone' type='tel' {...register('Phone', { maxLength: 10, required: true })} />
          {errors.Phone?.type === 'maxLength' && 'Max Length Exceed'}
          <Button variant='outlined' type='submit'>
            Register
          </Button>
          <NavLink to={path.login} className='text-right underline pr-2'>
            Go to Login
          </NavLink>
          <p className='h-8 text-center text-red-600'>{errorMessage}</p>
        </form>
      </div>
    </div>
  )
}

export default Register
