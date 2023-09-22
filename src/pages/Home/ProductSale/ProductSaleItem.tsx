import React, { FC, memo } from 'react'
import { ProductSaleItemType } from '../../../types/home.type'
import { Link } from 'react-router-dom'

interface ProductSaleItemProps {
  data: ProductSaleItemType
}

const ProductSaleItem: FC<ProductSaleItemProps> = ({ data }) => {
  return (
    <>
      <div className='relative flex aspect-[2/3] flex-1 cursor-pointer items-center justify-center overflow-hidden'>
        <div
          className='absolute flex h-full w-full items-center justify-center bg-cover bg-center bg-no-repeat transition-all duration-[1500ms] hover:scale-125'
          style={{
            backgroundImage: `url("${data.backgroundUrl}")`
          }}
        />
        <div className='absolute flex-col items-center justify-center gap-1 text-center text-white'>
          <p className='my-6 text-white'>{data.subTitle}</p>
          <h2 className='lg: my-7 text-4xl font-medium md:text-[30px]'>{data.title}</h2>
          <p className='md:text-[20px]font-medium mb-2 pb-3 text-2xl lg:text-2xl'>{data.detail}</p>
          <Link
            to={data.link}
            className='mx-auto w-1/2 cursor-pointer bg-main px-3 py-2 text-center font-bold duration-300 hover:text-hover'
          >
            Shop Now
          </Link>
        </div>
      </div>
    </>
  )
}

export default memo(ProductSaleItem)
