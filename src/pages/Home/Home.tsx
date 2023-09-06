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
      <div>
        <h2 className='text-center text-[32px] font-bold mx-auto pt-10'>Feature Products</h2>
        <div className='grid grid-cols-2 gap-16 mx-8 my-10'>
          <div
            className='h-screen bg-auto no-repeat relative'
            style={{
              backgroundImage:
                'url("https://ohey-demo.myshopify.com/cdn/shop/files/8_d5267630-2b25-4dd2-991d-b51da396701f_900x.jpg?v=1634280975")'
            }}
          >
            <div className='absolute top-12 left-14'>
              <p className='text-hover my-6'>MID-SEASON</p>
              <h2 className='my-7 text-[40px] font-medium w-48'>Amazing clothes</h2>
              <p className='hover:text-hover font-bold'>Shop Now</p>
            </div>
          </div>
          <div
            className='h-screen bg-auto no-repeat relative'
            style={{
              backgroundImage: 'url("https://ohey-demo.myshopify.com/cdn/shop/files/9_900x.jpg?v=1634280810")'
            }}
          >
            <div className='absolute top-12 left-14'>
              <p className='text-hover my-6'>TOP-TRENDING</p>
              <h2 className='my-7 text-[40px] font-medium w-48'>Handbags Upto-70%</h2>
              <p className='hover:text-hover font-bold'>Shop Now</p>
            </div>
          </div>
        </div>
      </div>

      <div className='h-1/2 bg-client-say flex flex-col justify-center text-center py-16'>
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
      <div className='grid grid-cols-3 px-7 pt-10'>
        <div className='text-center my-5 flex-col items-center'>
          <div className='flex justify-center'>
            <svg className='h-9 w-9' xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 512 512'>
              <path d='M256 8C119.3 8 8 119.2 8 256c0 136.7 111.3 248 248 248s248-111.3 248-248C504 119.2 392.7 8 256 8zM33 256c0-32.3 6.9-63 19.3-90.7l106.4 291.4C84.3 420.5 33 344.2 33 256zm223 223c-21.9 0-43-3.2-63-9.1l66.9-194.4 68.5 187.8c.5 1.1 1 2.1 1.6 3.1-23.1 8.1-48 12.6-74 12.6zm30.7-327.5c13.4-.7 25.5-2.1 25.5-2.1 12-1.4 10.6-19.1-1.4-18.4 0 0-36.1 2.8-59.4 2.8-21.9 0-58.7-2.8-58.7-2.8-12-.7-13.4 17.7-1.4 18.4 0 0 11.4 1.4 23.4 2.1l34.7 95.2L200.6 393l-81.2-241.5c13.4-.7 25.5-2.1 25.5-2.1 12-1.4 10.6-19.1-1.4-18.4 0 0-36.1 2.8-59.4 2.8-4.2 0-9.1-.1-14.4-.3C109.6 73 178.1 33 256 33c58 0 110.9 22.2 150.6 58.5-1-.1-1.9-.2-2.9-.2-21.9 0-37.4 19.1-37.4 39.6 0 18.4 10.6 33.9 21.9 52.3 8.5 14.8 18.4 33.9 18.4 61.5 0 19.1-7.3 41.2-17 72.1l-22.2 74.3-80.7-239.6zm81.4 297.2l68.1-196.9c12.7-31.8 17-57.2 17-79.9 0-8.2-.5-15.8-1.5-22.9 17.4 31.8 27.3 68.2 27.3 107 0 82.3-44.6 154.1-110.9 192.7z' />
            </svg>
          </div>
          <p className='font-bold my-5'>Free Worldwide Shipping</p>
          <p className=''>On all orders over $75.00</p>
        </div>
        <div className='text-center my-5 flex-col items-center'>
          <div className='flex justify-center'>
            <svg className='h-9 w-9' xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 576 512'>
              <path d='M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z' />
            </svg>
          </div>
          <p className='font-bold my-5'>100% Payment Secure</p>
          <p className=''>We ensure secure payment with PEV</p>
        </div>
        <div className='text-center my-5 flex-col items-center'>
          <div className='flex justify-center'>
            <svg className='h-9 w-9' xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 512 512'>
              <path d='M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z' />
            </svg>
          </div>
          <p className='font-bold my-5'>30 Days Return</p>
          <p className=''>Return it within 20 day for an exchange</p>
        </div>
      </div>
      <div className='grid grid-cols-6'>
        <div className=''></div>
      </div>
      <div className='my-7 text-center m-auto'>
        <div className='my-4'>
          <h2 className='text-center text-[32px] font-bold mx-auto pt-10'>Let's Stay In Touch</h2>
          <p className='my-10'>
            Subscribe to the Gosto mailing list to receive updates on new arrivals & other discount information.
          </p>
        </div>
        <div className='m-auto flex justify-center'>
          <form className='w-1/2'>
            <div className='flex justify-center items-center border-b border-b-black py-2'>
              <input
                className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
                type='text'
                placeholder='Your email address...'
                aria-label='Full name'
              />
              <button
                className='flex-shrink-0 bg-black hover:bg-hover text-sm border-4 text-white px-4 py-3 rounded'
                type='button'
              >
                Subcribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Home
