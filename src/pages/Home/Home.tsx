import { useQuery } from '@tanstack/react-query'
import ProductComponent from '../../components/ProductComponent/ProductComponent'
import { productApi } from '../../apis/productApi.api'
import { NavLink } from 'react-router-dom'
import path from '../../constants/path'

function Home() {
  const { data: ProductsData } = useQuery({
    queryKey: ['products'],
    queryFn: () => productApi.getProducts()
  })

  return (
    <main className='bg-white-200'>
      <div className='hero-part relative'>
        <div className='absolute left-28 top-1/3 text-left'>
          <div className='text-white bg-hover flex w-fit items-center border px-3 py-2 mb-5 hover:bg-white hover:border hover:border-hover hover:text-hover'>
            <h3 className=' hover:text-hover'>SALE UP TO 50%</h3>
          </div>
          <p className='font-bold mb-5 text-[44px]'>Soft And Cozy Sweater</p>
          <p className='mb-8 text-lg'>Holiday shopping with 3% back rewards</p>
          <NavLink className='hover:text-hover hover:gap-8 flex items-center gap-4' to={path.products}>
            <p> Expore Now</p>
            <span>
              <svg
                fill='currentColor'
                className='test-hover'
                xmlns='http://www.w3.org/2000/svg'
                height='1em'
                viewBox='0 0 448 512'
              >
                <path d='M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z' />
              </svg>
            </span>
          </NavLink>
        </div>
        <div
          className='h-screen bg-slate-300 flex items-center justify-center'
          style={{
            backgroundImage:
              'url("https://ohey-demo.myshopify.com/cdn/shop/files/4_707d2d02-0fe4-4622-a8fc-d15e20ef4993_1950x.jpg?v=1634271377")'
          }}
        ></div>
      </div>
      <div className='grid grid-cols-3 py-7 mx-8'>
        {ProductsData?.data
          .slice(0, 3)
          .map((product, index) => <ProductComponent product={product} key={index} type='grid' />)}
        {/* {ProductsData?.data.map((product, index) => <ProductComponent product={product} key={index} type='grid' />)} */}
      </div>
      <h2 className='text-center text-[32px] font-bold my-4'>Top Trending</h2>
      <div className='grid grid-cols-5 items-center mx-8'>
        <div className='col-span-2'>
          {ProductsData?.data
            .slice(18, 19)
            .map((product, index) => <ProductComponent product={product} key={index} type='grid' />)}
        </div>
        <div className='col-span-3 grid grid-cols-3'>
          {ProductsData?.data
            .filter((product, index) => index % 3 === 0)
            .slice(0, 6)
            .map((product, index) => <ProductComponent product={product} key={index} type='grid' />)}
        </div>
      </div>
      <h2 className='text-center text-[32px] font-bold my-4'>Best Selling</h2>
      <div className='grid grid-cols-5 mx-8'>
        {ProductsData?.data
          .filter((product, index) => index % 2 !== 0)
          .slice(0, 10)
          .map((product, index) => <ProductComponent product={product} key={index} type='grid' />)}
      </div>
      <div className='relative my-7'>
        <div className='absolute left-28 top-1/3 text-left'>
          <div className='text-white bg-hover flex w-fit items-center border px-3 py-2 mb-5 hover:bg-white hover:border hover:border-hover hover:text-hover'>
            <h3 className=' hover:text-hover'>SALE UP TO 50%</h3>
          </div>
          <p className='font-bold mb-5 text-[44px]'>Elegant Oxford Blazer</p>
          <NavLink className='hover:text-hover hover:gap-8 flex items-center gap-4' to={path.products}>
            <p>Go Shopping</p>
            <span>
              <svg
                fill='currentColor'
                className='test-hover'
                xmlns='http://www.w3.org/2000/svg'
                height='1em'
                viewBox='0 0 448 512'
              >
                <path d='M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z' />
              </svg>
            </span>
          </NavLink>
        </div>
        <div
          className='h-screen  flex items-center justify-center bg-no-repeat bg-cover'
          style={{
            backgroundImage:
              'url("https://ohey-demo.myshopify.com/cdn/shop/files/1_ad0200aa-5c69-4e02-88a6-a32072ef20b2_1080x.jpg?v=1635404887")'
          }}
        ></div>
      </div>

      <h2 className='text-center text-[32px] font-bold my-4'>Latest Blog Posts</h2>
      <div className='grid grid-cols-2'></div>
      <div className='h-96 bg-client-say flex flex-col justify-center text-center'>
        <h2 className='text-center text-[32px] font-bold mx-auto pt-10'>What Client Says?</h2>
        <p className='text-center mx-14 py-10'>
          Lorem class ipsum dolor sit, amet consectetur adipisicing elit. Porro, aut! Aperiam, reiciendis autem.
          Numquam, sequi voluptate cum animi tenetur debitis minima nulla repellendus accusamus eaque temporibus
          asperiores obcaecati facere distinctio omnis ullam libero repudiandae officia! Accusamus numquam, sed minus
          distinctio quaerat tempore sint possimus animi? Lorem ipsum dolor sit amet consectetur,
        </p>
        <p className='font-bold mt-1'>Jason</p>
        <p className='font-bold text-center text-sm'></p>
      </div>
      <div className='grid grid-cols-3 px-7'>
        <div className='text-center my-5'>
          <p className='font-bold'>Free Worldwide Shipping</p>
          <p className=''>On all orders over $75.00</p>
        </div>
        <div className='text-center my-5'>
          <p className='font-bold'>Free Worldwide Shipping</p>
          <p className=''>On all orders over $75.00</p>
        </div>
        <div className='text-center my-5'>
          <p className='font-bold'>Free Worldwide Shipping</p>
          <p className=''>On all orders over $75.00</p>
        </div>
      </div>
      <div className='grid grid-cols-6'>
        <div className=''></div>
      </div>
      <div className='my-7 text-center'>
        <h2>@ Ohey! Follow Us On Instagram</h2>
      </div>
    </main>
  )
}

export default Home
