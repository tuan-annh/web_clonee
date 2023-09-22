import { useQuery } from '@tanstack/react-query'
import ProductComponent from '../../components/ProductComponent/ProductComponent'
import { productApi } from '../../apis/productApi.api'
import { NavLink } from 'react-router-dom'

import path from '../../constants/path'
import LabelBenefits from '../../components/LabelBenefits/LabelBenefits'
import Banner from './Banner/Banner'
import Subscribe from '../../components/Subscribe/Subscribe'
import ArrowRightIcon from '../../components/Icons/ArrowRightIcon'
import ProductSale from './ProductSale/ProductSale'
import { FEATURE_PRODUCTS, PRODUCT_SALES } from '../../constants/home.constant'
import FeaturedProducts from './FeaturedProducts/FeaturedProducts'

function Home() {
  const { data: ProductsData } = useQuery({
    queryKey: ['products'],
    queryFn: () => productApi.getProducts()
  })

  return (
    <main className='bg-white-200'>
      <Banner />
      <ProductSale products={PRODUCT_SALES} />
      <section className='best-selling mt-20'>
        <h2 className='my-4 text-center text-[32px] font-bold'>Best Selling</h2>
        <div className='container mx-auto flex flex-col gap-12 px-8 py-7 lg:flex-row'>
          {ProductsData?.data.slice(0, 2).map((product, index) => (
            <div key={index} className='flex-1'>
              <ProductComponent product={product} type='grid' />
            </div>
          ))}
          {/* {ProductsData?.data.map((product, index) => <ProductComponent product={product} key={index} type='grid' />)} */}
        </div>
      </section>

      <section className='top-trending'>
        <h2 className='my-4 text-center text-[32px] font-bold'>Top Trending</h2>
        <div className='mx-auto mb-4 hidden grid-cols-4 px-14 lg:grid '>
          {ProductsData?.data
            .filter((product, index) => index % 2 !== 0)
            .slice(0, 8)
            .map((product, index) => <ProductComponent product={product} key={index} type='grid' />)}
        </div>
        <div className='container mx-auto mb-4 px-7 lg:hidden lg:px-14'>
          {ProductsData?.data
            .filter((product, index) => index % 2 !== 0)
            .slice(3, 4)
            .map((product, index) => <ProductComponent product={product} key={index} type='grid' />)}
        </div>
      </section>

      <section className='advertised'>
        <div className='relative overflow-hidden'>
          <div
            className=' relative flex h-screen items-center justify-center bg-cover bg-center bg-no-repeat transition-all duration-[15000ms] hover:scale-125'
            style={{
              backgroundImage:
                'url("https://ohey-demo.myshopify.com/cdn/shop/files/1_ad0200aa-5c69-4e02-88a6-a32072ef20b2_1080x.jpg?v=1635404887")'
            }}
          />
          <div className='absolute left-28 top-1/3  text-left '>
            <h3 className='mb-5 flex w-fit cursor-pointer items-center rounded-sm border bg-hover px-3 py-2 text-white duration-300 hover:border hover:border-hover hover:bg-white hover:text-hover'>
              SALE UP TO 50%
            </h3>
            <p className='mb-5 text-[36px] font-bold lg:text-[44px]'>Elegant Oxford Blazer</p>
            <NavLink className='flex items-center gap-4 duration-300 hover:gap-8 hover:text-hover' to={path.products}>
              <p>Go Shopping</p>
              <span>
                <ArrowRightIcon />
              </span>
            </NavLink>
          </div>
        </div>
      </section>
      <section className='featured-products'>
        <h2 className='mx-auto pt-10 text-center text-[32px] font-bold'>Feature Products</h2>
        <FeaturedProducts products={FEATURE_PRODUCTS} />
      </section>

      <section className='client'>
        <div className='mt-12 flex h-1/2 flex-col items-center justify-center bg-client-say py-16 text-center'>
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
