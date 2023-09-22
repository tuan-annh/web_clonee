import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AppContext } from '../../contexts/HighApp.context'
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Box } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'

// const user = {
//   address: {
//     geolocation: {
//       lat: '-37.3159',
//       long: '81.1496'
//     },
//     city: 'kilcoole',
//     street: 'new road',
//     number: 7682,
//     zipcode: '12926-3874'
//   },
//   id: 1,
//   email: 'john@gmail.com',
//   username: 'johnd',
//   password: 'm38rmF$',
//   name: {
//     firstname: 'john',
//     lastname: 'doe'
//   },
//   phone: '1-570-236-7033',
//   __v: 0
// }

interface password {
  old_password: string
  new_password: string
}
export default function ChangePassword() {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<password>()
  const { userData } = useContext(AppContext)

  const handleClickShowPassword = () => setShowPassword((show) => !show)
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show)
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const handleSavePassword = (data: password) => {
    if (data.old_password === userData?.data.password) {
      toast.success('Password changed successfully.')
    } else {
      toast.error('Incorrect old password.')
    }
  }

  return (
    <div>
      <form action='' onSubmit={handleSubmit(handleSavePassword)} className='flex flex-col gap-4 p-5'>
        <h1 className='text-center text-2xl'>Updated PassWord</h1>
        <div>
          <FormControl sx={{ width: '100%' }} variant='outlined'>
            <InputLabel htmlFor='outlined-adornment-password'>Password</InputLabel>
            <OutlinedInput
              id='current-password'
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
              {...register('old_password', { required: { value: true, message: 'Password not entered yet.' } })}
            />
          </FormControl>
          <Box className='text-left text-red-900'>{errors.old_password?.message}</Box>
        </div>

        <div>
          <FormControl sx={{ width: '100%' }} variant='outlined' id='new-password'>
            <InputLabel htmlFor='outlined-adornment-password'>Confirm Password</InputLabel>
            <OutlinedInput
              id='new-password'
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
              {...register('new_password', {
                required: { value: true, message: 'Have not entered a new password yet.' }
              })}
            />
          </FormControl>
          <Box className='text-left text-red-900'>{errors.new_password?.message}</Box>
        </div>

        <button type='submit' className='rounded bg-main py-4 text-white duration-200 ease-in-out hover:bg-hover'>
          Save Password
        </button>
      </form>
    </div>
  )
}
