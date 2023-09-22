import { TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { User } from '../../types/user.type'
import { useContext } from 'react'
import { AppContext } from '../../contexts/HighApp.context'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'

function MyAccount() {
  const { register, handleSubmit } = useForm<User>()
  const { userData } = useContext(AppContext)
  const handleSaveChange = (data: User) => {
    if (userData) {
      if (
        userData.data.name.firstname !== data.name.firstname ||
        userData.data.name.lastname !== data.name.lastname ||
        userData.data.phone !== data.phone ||
        userData.data.email !== data.email ||
        userData.data.phone !== data.phone ||
        userData.data.address?.city !== data.address?.city
      ) {
        toast.success('Change information successfully.')
      } else {
        toast.error('Change information failed.')
      }
    }
  }

  return (
    <div>
      {userData && (
        <form action='' className='flex flex-col gap-5 p-5 text-[16px]' onSubmit={handleSubmit(handleSaveChange)}>
          <h1 className='text-center text-2xl'>Personal Information</h1>
          <TextField disabled label='username' value={userData.data.username} />
          <div className='flex gap-4'>
            <TextField
              label='firstname'
              defaultValue={userData.data.name.firstname}
              className='w-1/2'
              {...register('name.firstname')}
            />
            <TextField
              label='lastname'
              defaultValue={userData.data.name.lastname}
              className='w-1/2'
              {...register('name.lastname')}
            />
          </div>
          <TextField label='phone' defaultValue={userData.data.phone} {...register('phone')} />
          <TextField label='email' defaultValue={userData.data.email} {...register('email')} />
          <TextField label='city' defaultValue={userData.data.address?.city} {...register('address.city')} />
          <button type='submit' className='rounded bg-main py-4 text-white duration-200 ease-in-out hover:bg-hover'>
            Save
          </button>
        </form>
      )}
    </div>
  )
}

export default MyAccount
