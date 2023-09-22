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
          toast.success('Register successful.')
          navigate(path.login)
        } else {
          toast.error('Register failed.')
        }
      } catch (error) {
        console.log(error)
        setDebounce(false)
      }
    } else {
      toast.error('The account username already exists.')
    }
  }

  return (
    <div
      className='overflow-y-auto bg-cover bg-no-repeat md:h-screen md:py-20'
      style={{
        backgroundImage: 'url(https://chichchoedesign.com/wp-content/uploads/2022/12/thiet-ke-shop-quan-ao-nu.jpg)'
      }}
    >
      <div className='h-full w-full bg-white p-8 text-center md:m-auto md:h-max md:max-w-2xl md:rounded-xl md:shadow-box-1'>
        <h1 className='my-3 text-3xl font-bold text-main'>High Ecommerce</h1>
        <h2 className='mb-12'>Register an account</h2>
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
            className={classNames(
              'flex items-center justify-center rounded bg-main py-4 text-white duration-200 ease-in-out hover:bg-hover',
              {
                'cursor-not-allowed': debounce
              }
            )}
          >
            {debounce && (
              <svg
                aria-hidden='true'
                className='mr-2 h-5 w-5 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600'
                viewBox='0 0 100 101'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                  fill='currentColor'
                />
                <path
                  d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                  fill='currentFill'
                />
              </svg>
            )}
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
