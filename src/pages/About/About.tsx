import { Link } from 'react-router-dom'
import path from '../../constants/path'
import LabelBenefits from '../../components/LabelBenefits/LabelBenefits'
import Subcribe from '../../components/Subcribe/Subcribe'

function About() {
  return (
    <>
      <div
        className='relative flex min-h-screen items-center bg-slate-300'
        style={{
          backgroundImage:
            'url(https://ohey-demo.myshopify.com/cdn/shop/files/bg-breadcrumb-about_1950x.jpg?v=1632970793)'
        }}
      >
        <div className='absolute left-14'>
          <h2 className='text-6xl font-semibold text-white'>We're High team</h2>
          <p className='my-7 font-medium text-white'>Follow your passsion, and success will follow you</p>
          <button className=' bg-hover px-4 py-3 font-bold text-white hover:text-black'>Contact Us</button>
        </div>
      </div>
      <div className='ml-14 mt-5'>
        <Link to={path.home} className='text-main-text'>
          Home
        </Link>
        <span> / </span>
        <span>About</span>
      </div>
      <div className='mx-auto my-5 flex h-screen flex-wrap justify-evenly px-14'>
        <div
          className='h-full w-full bg-cover bg-no-repeat md:w-1/2 '
          style={{
            backgroundImage:
              'url(http://ohey-demo.myshopify.com/cdn/shop/files/img-left-about_300x300.jpg?v=1632560283)'
          }}
        ></div>
        <div className='mt-14 w-full pl-10 md:w-1/2'>
          <p className=' bg-hover px-3 py-2 text-center text-white md:w-36'>OUR STORIES</p>
          <h2 className='my-5 font-bold'>We Work In The Fields OfUI/UX Design, Photographyand Art Direction.</h2>
          <p className='my-10'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo dolores odit quidem, maxime ipsum soluta fuga
            corrupti ut nostrum assuae quae? sum doloribus, vel nam quo minima, iure quasi incidunt.
          </p>
          <p>
            Delectus qui perspiciatis laboriosam debitis expedita magni ex possimus culpa illum fugiat dolorem eos
            suscipit quis quibusdam, sapiente hic? Quos itaque iste eum quidem est vitae praesentium reprehenderit odio
            ex, amet pariatur nemo assumenda. Eveniet doloremque consequatur qui placeat nostrum?
          </p>
          <button className='mt-5 bg-main px-4 py-2 text-white hover:bg-hover'>Read more</button>
        </div>
      </div>
      <LabelBenefits />
      <Subcribe />
    </>
  )
}

export default About
