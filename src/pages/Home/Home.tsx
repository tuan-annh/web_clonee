import { useQuery } from '@tanstack/react-query'
import ProductComponent from '../../components/ProductComponent/ProductComponent'
import { productApi } from '../../apis/productApi.api'
import { NavLink } from 'react-router-dom'

import path from '../../constants/path'
import LabelBenefits from '../../components/LabelBenefits/LabelBenefits'
import Banner from './Banner/Banner'
import Subscribe from '../../components/Subscribe/Subscribe'

function Home() {
  const { data: ProductsData } = useQuery({
    queryKey: ['products'],
    queryFn: () => productApi.getProducts()
  })

  return (
    <main className='bg-white-200'>
      <Banner />
      <h2 className='my-4 text-center text-[32px] font-bold'>Best Selling</h2>
      <div className='mx-8 grid grid-cols-1 py-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {ProductsData?.data
          .slice(0, 3)
          .map((product, index) => <ProductComponent product={product} key={index} type='grid' />)}
        {/* {ProductsData?.data.map((product, index) => <ProductComponent product={product} key={index} type='grid' />)} */}
      </div>

      {/* <h2 className='my-4 text-center text-[32px] font-bold'>Top Trending</h2>
      <div className='mx-8 grid grid-cols-5 items-center'>
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
      </div> */}
      <h2 className='my-4 text-center text-[32px] font-bold'>Top Trending</h2>
      <div className='mx-8 grid grid-cols-5'>
        {ProductsData?.data
          .filter((product, index) => index % 2 !== 0)
          .slice(0, 10)
          .map((product, index) => <ProductComponent product={product} key={index} type='grid' />)}
      </div>
      <div className='relative my-7'>
        <div className='absolute left-28 top-1/3 text-left'>
          <div className='mb-5 flex w-fit items-center border bg-hover px-3 py-2 text-white hover:border hover:border-hover hover:bg-white hover:text-hover'>
            <h3 className=' hover:text-hover'>SALE UP TO 50%</h3>
          </div>
          <p className='mb-5 text-[44px] font-bold'>Elegant Oxford Blazer</p>
          <NavLink className='flex items-center gap-4 hover:gap-8 hover:text-hover' to={path.products}>
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
          className='flex h-screen items-center justify-center bg-cover bg-no-repeat'
          style={{
            backgroundImage:
              'url("https://ohey-demo.myshopify.com/cdn/shop/files/1_ad0200aa-5c69-4e02-88a6-a32072ef20b2_1080x.jpg?v=1635404887")'
          }}
        ></div>
      </div>
      <div>
        <h2 className='mx-auto pt-10 text-center text-[32px] font-bold'>Feature Products</h2>
        <div className='mx-8 my-10 grid grid-cols-1 gap-16 lg:grid-cols-2'>
          <div
            className='relative h-screen bg-cover bg-no-repeat '
            style={{
              backgroundImage:
                'url("https://ohey-demo.myshopify.com/cdn/shop/files/8_d5267630-2b25-4dd2-991d-b51da396701f_900x.jpg?v=1634280975")'
            }}
          >
            <div className='absolute left-14 top-12'>
              <p className='my-6 text-hover'>MID-SEASON</p>
              <h2 className='my-7 w-48 text-[40px] font-medium'>Amazing clothes</h2>
              <p className='font-bold hover:text-hover'>Shop Now</p>
            </div>
          </div>
          <div
            className='relative h-screen bg-cover bg-no-repeat'
            style={{
              backgroundImage: 'url("https://ohey-demo.myshopify.com/cdn/shop/files/9_900x.jpg?v=1634280810")'
            }}
          >
            <div className='absolute left-14 top-12'>
              <p className='my-6 text-hover'>TOP-TRENDING</p>
              <h2 className='my-7 w-48 text-[40px] font-medium'>Handbags Upto-70%</h2>
              <p className='font-bold hover:text-hover'>Shop Now</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex h-1/2 flex-col justify-center bg-client-say py-16 text-center'>
        <h2 className='mx-auto pt-10 text-center text-[32px] font-bold'>What Client Says?</h2>
        <p className='mx-14 py-10 text-center'>
          Lorem class ipsum dolor sit, amet consectetur adipisicing elit. Porro, aut! Aperiam, reiciendis autem.
          Numquam, sequi voluptate cum animi tenetur debitis minima nulla repellendus accusamus eaque temporibus
          asperiores obcaecati facere distinctio omnis ullam libero repudiandae officia! Accusamus numquam, sed minus
          distinctio quaerat tempore sint possimus animi? Lorem ipsum dolor sit amet consectetur,
        </p>
        <p className='mt-1 font-bold'>Jason</p>
        <p className='text-center text-sm font-bold'></p>
      </div>

      <LabelBenefits />

      <Subscribe />
    </main>
  )
}

export default Home
