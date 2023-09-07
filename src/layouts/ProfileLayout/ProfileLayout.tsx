import { NavLink } from 'react-router-dom'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import LogoutIcon from '@mui/icons-material/Logout'
import LockIcon from '@mui/icons-material/Lock'
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

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-max w-screen lg:h-screen-80'>
      <div className='mx-auto flex w-5/6 flex-col gap-10 pb-7 lg:mt-32 lg:h-4/5 lg:flex-row'>
        <div className='rounded shadow-box-2 lg:w-1/4'>
          <div className='text-center lg:p-5'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyrnx8jZxJ64bQwalnLcwgHsMvrv0CxbotThd3XEiqm41DICu9sOP7EApjE7AEzQRiK44&usqp=CAU'
              alt=''
              className='mx-auto w-1/6 lg:w-1/4'
            />
            <p className='font-semibold tracking-widest lg:mt-3'>
              {user.name.firstname} {user.name.lastname}
            </p>
          </div>
          <div className='mt-2 flex flex-col lg:mt-10'>
            <NavLink
              to={'/profile'}
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? '#edf1f5' : ''
                }
              }}
              className='p-5'
            >
              <AccountBoxIcon className='align-text-bottom' /> Thông tin cá nhân
            </NavLink>
            <NavLink
              to={'/changepassword'}
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? '#edf1f5' : ''
                }
              }}
              className='p-5'
            >
              <LockIcon className='align-text-bottom' /> Đổi mật khẩu
            </NavLink>
            <NavLink
              to={'/'}
              className='p-5'
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? '#edf1f5' : ''
                }
              }}
            >
              <LogoutIcon className='align-text-bottom' /> Đăng xuất
            </NavLink>
          </div>
        </div>
        <div className='rounded bg-slate-50 shadow-box-2 lg:w-3/4'>{children}</div>
      </div>
    </div>
  )
}
