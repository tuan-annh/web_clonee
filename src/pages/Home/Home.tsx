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
      <div className='w-ful mx-auto mt-10 grid grid-cols-1 gap-12 overflow-hidden px-8 lg:grid-cols-3'>
        <div
          className='flex h-screen items-center justify-center bg-cover bg-center bg-no-repeat '
          style={{
            backgroundImage:
              'url("https://ohey-demo.myshopify.com/cdn/shop/files/7_8b4ef785-88c3-4bcb-a0b8-f24df4dc3145_540x.jpg?v=1634273714")'
          }}
        >
          <div className='flex-col items-center justify-center gap-1 text-center text-white'>
            <p className='my-6 text-white'>BE WELL DRESSED IN</p>
            <h2 className='my-7 text-[40px] font-medium'>Flat 25% Off</h2>
            <p className='pb-3 text-[20px] font-medium'>Midnight From 14.99$</p>
            <p className='mx-auto w-1/2 bg-main px-3 py-2 text-center font-bold hover:text-hover'>Shop Now</p>
          </div>
        </div>
        {/* <div
          className='  flex h-screen items-center justify-center bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage: 'url("https://ohey-demo.myshopify.com/cdn/shop/files/8_540x.jpg?v=1634273850")'
          }}
        >
          <div className='flex-col items-center justify-center gap-1 text-center text-white'>
            <p className='my-6 text-white'>GET REWARDED</p>
            <h2 className='my-7  text-[40px] font-medium'>Shoes & Bags</h2>
            <p className='pb-3 text-[20px] font-medium'>Valid Online & In-store$</p>
            <p className='mx-auto w-1/2 bg-main px-3 py-2 text-center font-bold hover:text-hover'>Shop Now</p>
          </div>
        </div> */}
        <div
          className='hover:bg-scale-105 flex h-screen items-center justify-center bg-cover bg-center bg-no-repeat transition-all duration-300'
          style={{
            backgroundImage: 'url("https://ohey-demo.myshopify.com/cdn/shop/files/8_540x.jpg?v=1634273850")'
          }}
        >
          <div className='flex-col items-center justify-center gap-1 text-center text-white'>
            <p className='my-6 text-white'>GET REWARDED</p>
            <h2 className='my-7 text-4xl font-medium'>Shoes & Bags</h2>
            <p className='pb-3 text-2xl font-medium'>Valid Online & In-store$</p>
            <p className='mx-auto w-1/2 bg-main px-3 py-2 text-center font-bold transition-colors duration-300 hover:text-hover'>
              Shop Now
            </p>
          </div>
        </div>
        <div
          className=' flex h-screen items-center justify-center bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage:
              'url("https://ohey-demo.myshopify.com/cdn/shop/files/img3_46f72c07-11ea-49e5-951b-19181b742a95_540x.jpg?v=1633689787")'
          }}
        >
          <div className=' flex-col items-center justify-center gap-1 text-center text-white'>
            <p className='my-6 text-white'>NEW ARRIVAL</p>
            <h2 className='my-7  text-[40px] font-medium'>Up To 70%</h2>
            <p className='pb-3 text-[20px] font-medium'>Just landed warm up styles</p>
            <p className='mx-auto w-1/2 bg-main px-3 py-2 text-center font-bold hover:text-hover'>Shop Now</p>
          </div>
        </div>
      </div>
      <section className='best-selling'>
        <h2 className='my-4 text-center text-[32px] font-bold'>Best Selling</h2>
        <div className='mx-8 grid grid-cols-2 py-7  '>
          {ProductsData?.data
            .slice(0, 2)
            .map((product, index) => <ProductComponent product={product} key={index} type='grid' />)}
          {/* {ProductsData?.data.map((product, index) => <ProductComponent product={product} key={index} type='grid' />)} */}
        </div>
      </section>

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
      <section className='top-trending'>
        <h2 className='my-4 text-center text-[32px] font-bold'>Top Trending</h2>
        <div className='mx-auto hidden grid-cols-5 px-14 lg:grid'>
          {ProductsData?.data
            .filter((product, index) => index % 2 !== 0)
            .slice(0, 10)
            .map((product, index) => <ProductComponent product={product} key={index} type='grid' />)}
        </div>
        <div className='mx-auto px-14 lg:hidden'>
          {ProductsData?.data
            .filter((product, index) => index % 2 !== 0)
            .slice(3, 4)
            .map((product, index) => <ProductComponent product={product} key={index} type='grid' />)}
        </div>
      </section>
      {/* <div className='relative my-7'>
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
      </div> */}
      <section className='advertised'>
        <div
          className=' relative flex h-screen items-center justify-center bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage:
              'url("https://ohey-demo.myshopify.com/cdn/shop/files/1_ad0200aa-5c69-4e02-88a6-a32072ef20b2_1080x.jpg?v=1635404887")'
          }}
        >
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
        </div>
      </section>
      <section className='featured-products'>
        <h2 className='mx-auto pt-10 text-center text-[32px] font-bold'>Feature Products</h2>
        <div className='mx-auto my-10 grid grid-cols-1 gap-16 px-16 lg:grid-cols-2'>
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
      </section>

      <section className='client'>
        <div className='flex h-1/2 flex-col items-center justify-center bg-client-say py-16 text-center'>
          <h2 className='mx-auto pt-10 text-center text-[32px] font-bold'>What Client Says?</h2>
          <div className='my-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full'>
            <img
              src='https://ohey-demo.myshopify.com/cdn/shop/files/img-about3_360x.jpg?v=1632544754'
              alt='Client'
              className='h-full w-full object-cover'
            />
          </div>
          <div className='client-comment mx-14 my-4 text-center text-sm font-thin'>
            <p className='my-3'>
              Lorem class ipsum dolor sit, amet consectetur adipisicing elit. Porro, aut! Aperiam, reiciendis autem.
              Numquam, sequi voluptate cum animi tenetur debitis
            </p>
            <p>
              ullam libero repudiandae officia! Accusamus numquam, sed minus distinctio quaerat tempore sint possimus
            </p>
          </div>

          <p className='mt-1 font-bold'>Jason</p>
          <p className='text-center text-sm font-bold'></p>
        </div>
      </section>
      <LabelBenefits />

      <Subscribe />
    </main>
  )
}

export default Home
