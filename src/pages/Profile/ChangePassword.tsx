import { Button, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'

const user = {
  address: {
    geolocation: {
      lat: '-37.3159',
      long: '81.1496'
    },
    city: 'kilcoole',
    street: 'new road',
    number: 7682,
    zipcode: '12926-3874'
  },
  id: 1,
  email: 'john@gmail.com',
  username: 'johnd',
  password: 'm38rmF$',
  name: {
    firstname: 'john',
    lastname: 'doe'
  },
  phone: '1-570-236-7033',
  __v: 0
}
interface password {
  old_password: string
  new_password: string
}
export default function ChangePassword() {
  const { register, handleSubmit } = useForm<password>()

  const handleSavePassword = (data: password) => {
    if (data.old_password === user.password) {
      console.log(data.new_password)
    }
  }

  return (
    <div>
      <form action='' onSubmit={handleSubmit(handleSavePassword)} className='flex flex-col p-5 gap-5'>
        <h1 className='text-center text-2xl'>Updated PassWord</h1>
        <TextField label='Old Password' {...register('old_password')} />
        <TextField label='New Password' {...register('new_password')} />
        <Button variant='outlined' type='submit'>
          Save PassWord
        </Button>
      </form>
    </div>
  )
}
