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
    <div className='h-screen-80 w-screen'>
      <div className='mx-auto mt-32 flex h-4/5 w-5/6 gap-10 pb-7'>
        <div className='shadow-box-2 w-1/4 rounded'>
          <div className='p-5 text-center'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyrnx8jZxJ64bQwalnLcwgHsMvrv0CxbotThd3XEiqm41DICu9sOP7EApjE7AEzQRiK44&usqp=CAU'
              alt=''
              className='mx-auto w-1/4'
            />
            <p className='mt-3 font-semibold tracking-widest'>
              {user.name.firstname} {user.name.lastname}
            </p>
          </div>
          <div className='mt-10 flex flex-col'>
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
        <div className='shadow-box-2 w-3/4 rounded bg-slate-50'>{children}</div>
      </div>
    </div>
  )
}
