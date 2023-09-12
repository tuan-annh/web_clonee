import { NavLink, useNavigate } from 'react-router-dom'
import path from '../../constants/path'
import { authApi } from '../../apis/auth.api'
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Box } from '@mui/material'
import { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useForm } from 'react-hook-form'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import classNames from 'classnames'
import { useQuery } from '@tanstack/react-query'
import { userApi } from '../../apis/user.api'

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
  const navigate = useNavigate()
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)
  const [debounce, setDebounce] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm<RegisterFormData>()

  const { data: usersData } = useQuery({
    queryKey: ['users'],
    queryFn: () => userApi.getAllUser()
  })

  const handleClickShowPassword = () => setShowPassword((show) => !show)
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show)
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }
  const handleRegister = async (data: RegisterFormData) => {
    const registerUser = usersData?.data.filter((user) => user.username === data.username)

    if (registerUser && registerUser.length === 0) {
      try {
        setDebounce(true)
        const responsive = await authApi.registerAccount({
          username: data.username,
          password: data.password,
          name: { firstname: data.firstname, lastname: data.lastname },
          email: data.email,
          phone: data.phone,
          id: Math.random()
        })
        if (responsive.status === 200) {
          toast.success('Registration successful.')
          navigate(path.login)
        } else {
          toast.error('Registration failed.')
        }
      } catch (error) {
        console.log(error)
        setDebounce(false)
      }
    } else {
      toast.error('The account name already exists.')
    }
  }

  return (
    <div
      className='h-full bg-cover bg-no-repeat md:h-screen md:pt-20'
      style={{
        backgroundImage: 'url(https://chichchoedesign.com/wp-content/uploads/2022/12/thiet-ke-shop-quan-ao-nu.jpg)'
      }}
    >
      <div className='h-full w-full bg-white p-8 md:m-auto md:h-max md:max-w-2xl md:rounded-xl md:shadow-box-1'>
        <h1 className='pb-5 text-center text-xl uppercase'>Register an account</h1>
        <form action='' className='flex flex-col ' onSubmit={handleSubmit(handleRegister)}>
          <TextField
            label='UserName'
            type='text'
            {...register('username', {
              required: { value: true, message: 'UserName is required.' },
              minLength: {
                value: 5,
                message: 'UserName must have at least 5 characters.'
              }
            })}
          />
          <Box className='mb-3 h-5 text-left text-red-900'>{errors.username?.message}</Box>

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
                required: { value: true, message: 'Password is required.' }
              })}
            />
          </FormControl>
          <Box className='mb-3 h-5 text-left text-red-900'>{errors.password?.message}</Box>

          <FormControl sx={{ width: '100%' }} variant='outlined'>
            <InputLabel htmlFor='outlined-adornment-password'>Confirm Password</InputLabel>
            <OutlinedInput
              id='outlined-adornment-confirm-password'
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
                  message: 'Re-entering the password is required.'
                },
                validate: (value) => value === getValues('password') || 'The re-entered password does not match.'
              })}
            />
          </FormControl>
          <Box className='mb-3 h-5 text-left text-red-900'>{errors.confirm_password?.message}</Box>

          <TextField
            label='FirstName'
            type='text'
            {...register('firstname', {
              required: { value: true, message: 'FirstName is required.' }
            })}
          />
          <Box className='mb-3 h-5 text-left text-red-900'>{errors.firstname?.message}</Box>

          <TextField
            label='LastName'
            type='text'
            {...register('lastname', {
              required: { value: true, message: 'LastName is required.' }
            })}
          />
          <Box className='mb-3 h-5 text-left text-red-900'>{errors.lastname?.message}</Box>

          <TextField
            label='Email'
            type='email'
            {...register('email', {
              required: { value: true, message: 'Email is required.' },
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: 'The email is not in the correct format.'
              }
            })}
          />
          <Box className='mb-3 h-5 text-left text-red-900'>{errors.email?.message}</Box>

          <TextField
            label='Phone'
            type='tel'
            {...register('phone', {
              required: { value: true, message: 'Phone is required.' },
              pattern: {
                value: /^\+?[0-9][0-9]{9,10}$/,
                message: 'The phone number is not correct.'
              }
            })}
          />
          <Box className='mb-3 h-5 text-left text-red-900'>{errors.phone?.message}</Box>

          <button
            type='submit'
            disabled={debounce}
            className={classNames('rounded bg-main py-4 text-white duration-200 ease-in-out hover:bg-hover', {
              'cursor-not-allowed': debounce
            })}
          >
            Register
          </button>

          <div className='mt-2 text-center'>
            <span className='opacity-60'>Do you already have an account?</span>{' '}
            <NavLink to={path.login} className='pt-5 text-right hover:text-hover'>
              Login.
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
