import { Button, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { User } from '../../types/user.type'

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

function MyAcount() {
  const { register, handleSubmit } = useForm<User>()
  const handleSaveChange = (data: User) => {
    console.log(data)
  }

  return (
    <div>
      <form action='' className='flex flex-col p-5 gap-5' onSubmit={handleSubmit(handleSaveChange)}>
        <h1 className='text-center text-2xl'>Thông tin cá nhân</h1>
        <TextField disabled label='username' value={user.username} />
        <div className='flex gap-4'>
          <TextField
            label='firstname'
            defaultValue={user.name.firstname}
            className='w-1/2'
            {...register('name.firstname')}
          />
          <TextField
            label='lastname'
            defaultValue={user.name.lastname}
            className='w-1/2'
            {...register('name.lastname')}
          />
        </div>
        <TextField label='phone' defaultValue={user.phone} {...register('phone')} />
        <TextField label='email' defaultValue={user.email} {...register('email')} />
        <TextField label='city' defaultValue={user.address.city} {...register('address.city')} />
        <Button variant='outlined' type='submit'>
          Save Changes
        </Button>
      </form>
    </div>
  )
}

export default MyAcount
