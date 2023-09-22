import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../../contexts/HighApp.context'
import { clearLS } from '../../utils/auth.util'
import { CircularProgress } from '@mui/material'
import Cookies from 'js-cookie'
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

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  const { setIsAuthenticated: setisAuthenticated, userData } = useContext(AppContext)

  if (!userData?.data) {
    return (
      <div className='relative h-[500px] text-center lg:h-[700px]'>
        <CircularProgress style={{ color: '#c7ab62' }} className='absolute top-20' />
      </div>
    )
  }

  return (
    <div className='mt-5 lg:mt-0'>
      <div className='mx-auto flex w-5/6 flex-col gap-10 pb-7 lg:mt-32 lg:h-[600px] lg:flex-row'>
        <div className='rounded shadow-box-2 lg:w-1/4'>
          <div className='p-2 text-center lg:p-5'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyrnx8jZxJ64bQwalnLcwgHsMvrv0CxbotThd3XEiqm41DICu9sOP7EApjE7AEzQRiK44&usqp=CAU'
              alt=''
              className='mx-auto w-1/6 lg:w-1/4'
            />
            <p className='font-semibold capitalize tracking-widest lg:mt-3'>
              {userData?.data.name.firstname} {userData?.data.name.lastname}
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
              className='flex gap-1 p-5 capitalize hover:text-hover'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
                />
              </svg>
              Personal information
            </NavLink>
            <NavLink
              to={'/changepassword'}
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? '#edf1f5' : ''
                }
              }}
              className='flex gap-1 p-5 capitalize hover:text-hover'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z'
                />
              </svg>
              Change Password
            </NavLink>
            <NavLink
              to={'/'}
              className='flex gap-1 p-5 capitalize hover:text-hover'
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? '#edf1f5' : ''
                }
              }}
              onClick={() => {
                clearLS()
                Cookies.remove('access_token')
                toast.info('Logout successfully')
                setisAuthenticated(false)
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75'
                />
              </svg>
              Log out
            </NavLink>
          </div>
        </div>
        <div className='rounded bg-slate-50 shadow-box-2 lg:w-3/4'>{children}</div>
      </div>
    </div>
  )
}
