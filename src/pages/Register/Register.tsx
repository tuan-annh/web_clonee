import { NavLink } from 'react-router-dom'
import path from '../../constants/path'
import { authApi } from '../../apis/auth.api'
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Box
} from '@mui/material'
import { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useForm } from 'react-hook-form'

interface RegisterFormData {
  username: string
  password: string
  confirm_password: string
  firstname: string
  lastname: string
  email: string
  phone: string
}

function Register() {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm<RegisterFormData>()

  const handleClickShowPassword = () => setShowPassword((show) => !show)
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show)
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }
  const handleRegister = async (data: RegisterFormData) => {
    try {
      const responsive = await authApi.registerAccount({
        username: data.username,
        password: data.password,
        name: { firstname: data.firstname, lastname: data.lastname },
        email: data.email,
        phone: data.phone
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
      className=' h-screen w-screen pt-20 bg-no-repeat bg-cover'
      style={{
        backgroundImage: 'url(https://chichchoedesign.com/wp-content/uploads/2022/12/thiet-ke-shop-quan-ao-nu.jpg)'
      }}
    >
      <div className=' w-1/3 m-auto p-8 rounded-xl shadow-box-1 bg-white'>
        <h1 className=' text-center uppercase pb-5'>Register</h1>
        <form action='' className='flex flex-col ' onSubmit={handleSubmit(handleRegister)}>
          <TextField
            label='UserName'
            type='text'
            {...register('username', {
              required: { value: true, message: 'UserName là bắt buộc' },
              minLength: {
                value: 4,
                message: 'UserName phải có ít nhất 4 kí tự'
              }
            })}
          />
          <Box className='h-5 text-left text-red-900 mb-3'>{errors.username?.message}</Box>

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
              autoComplete='on'
              {...register('password', {
                required: { value: true, message: 'Password là bắt buộc' }
              })}
            />
          </FormControl>
          <Box className='h-5 text-left text-red-900 mb-3'>{errors.password?.message}</Box>

          <FormControl sx={{ width: '100%' }} variant='outlined'>
            <InputLabel htmlFor='outlined-adornment-password'>Confirm Password</InputLabel>
            <OutlinedInput
              id='outlined-adornment-password'
              type={showConfirmPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowConfirmPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label='confirm_password'
              autoComplete='on'
              {...register('confirm_password', {
                required: {
                  value: true,
                  message: 'Nhập lại password là bắt buộc'
                },
                validate: (value) => value === getValues('password') || 'Nhập lại password không khớp'
              })}
            />
          </FormControl>
          <Box className='h-5 text-left text-red-900 mb-3'>{errors.confirm_password?.message}</Box>

          <TextField
            label='FirstName'
            type='text'
            {...register('firstname', {
              required: { value: true, message: 'FirstName là bắt buộc' }
            })}
          />
          <Box className='h-5 text-left text-red-900 mb-3'>{errors.firstname?.message}</Box>

          <TextField
            label='LastName'
            type='text'
            {...register('lastname', {
              required: { value: true, message: 'LastName là bắt buộc' }
            })}
          />
          <Box className='h-5 text-left text-red-900 mb-3'>{errors.lastname?.message}</Box>

          <TextField
            label='Email'
            type='email'
            {...register('email', {
              required: { value: true, message: 'Email là bắt buộc' },
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: 'Email không đúng định dạng'
              }
            })}
          />
          <Box className='h-5 text-left text-red-900 mb-3'>{errors.email?.message}</Box>

          <TextField
            label='Phone'
            type='tel'
            {...register('phone', {
              required: { value: true, message: 'Phone là bắt buộc' },
              pattern: {
                value: /^\+?[0-9][0-9]{9,10}$/,
                message: 'Chưa đúng định dạng'
              }
            })}
          />
          <Box className='h-5 text-left text-red-900 mb-3'>{errors.phone?.message}</Box>

          <Button variant='outlined' type='submit'>
            Register
          </Button>

          <NavLink to={path.login} className='text-right underline pt-5'>
            Go to Login
          </NavLink>
          <p className='h-8 text-center text-red-600'>{errorMessage}</p>
        </form>
      </div>
    </div>
  )
}

export default Register
