import { Link } from 'react-router-dom'
import path from '../../constants/path'
import LabelBenefits from '../../components/LabelBenefits/LabelBenefits'
import Subscribe from '../../components/Subscribe/Subscribe'

function About() {
  return (
    <>
      <div
        className='relative flex min-h-screen items-center bg-slate-300 bg-cover bg-center'
        style={{
          backgroundImage:
            'url(https://ohey-demo.myshopify.com/cdn/shop/files/bg-breadcrumb-about_1950x.jpg?v=1632970793)'
        }}
      >
        <div className='absolute left-14'>
          <h2 className='text-6xl font-semibold text-white'>We're High team</h2>
          <p className='my-7 font-medium text-white'>Follow your passion, and success will follow you</p>
          <button className=' rounded-sm bg-hover px-4 py-3 font-bold text-white duration-300 hover:text-main'>
            Contact Us
          </button>
        </div>
      </div>
      <div className='ml-14 mt-5'>
        <Link to={path.home} className='text-main-text'>
          Home
        </Link>
        <span> / </span>
        <span>About</span>
      </div>
      <div className='mx-auto my-5 flex flex-col justify-center gap-6 px-10 lg:min-h-screen lg:flex-row lg:px-14'>
        <div className='my-8 w-full lg:w-1/2 '>
          <img
            className='h-full w-full'
            src='http://ohey-demo.myshopify.com/cdn/shop/files/img-left-about_300x300.jpg?v=1632560283'
            alt=''
          />
        </div>
        <div className='mt-14 w-full lg:w-1/2 lg:pl-10'>
          <p className=' bg-hover px-3 py-2 text-center text-white md:w-36'>OUR STORIES</p>
          <h2 className='my-5 font-bold'>We Work In The Fields Of UI/UX Design, Photography and Art Direction.</h2>
          <p className='my-10'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo dolores odit quidem, maxime ipsum soluta fuga
            corrupti ut nostrum assuae quae? sum doloribus, vel nam quo minima, iure quasi incidunt.
          </p>
          <p>
            Delectus qui perspiciatis laboriosam debitis expedita magni ex possimus culpa illum fugiat dolorem eos
            suscipit quis quibusdam, sapiente hic? Quos itaque iste eum quidem est vitae praesentium reprehenderit odio
            ex, amet pariatur nemo assumenda. Eveniet doloremque consequatur qui placeat nostrum?
          </p>
          <button className='mt-8 bg-main px-4 py-2 text-white duration-300 hover:bg-hover'>Read more</button>
        </div>
      </div>
      <LabelBenefits />
      <Subscribe />
    </>
  )
}

export default About
