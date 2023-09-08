import { Link } from 'react-router-dom'
import path from '../../constants/path'

function About() {
  return (
    <>
      <div
        className='min-h-screen bg-slate-300 relative flex items-center'
        style={{
          backgroundImage:
            'url(https://ohey-demo.myshopify.com/cdn/shop/files/bg-breadcrumb-about_1950x.jpg?v=1632970793)'
        }}
      >
        <div className='absolute left-14'>
          <h2 className='text-6xl font-semibold text-white'>We're High team</h2>
          <p className='my-7 text-white font-medium'>Follow your passsion, and success will follow you</p>
          <button className='hover:text-hover font-bold'>Shop Now</button>
        </div>
      </div>
      <div className=' mt-5'>
        <Link to={path.home} className='text-main-text'>
          Home
        </Link>
        <span> / </span>
        <span>About</span>
      </div>
    </>
  )
}

export default About
