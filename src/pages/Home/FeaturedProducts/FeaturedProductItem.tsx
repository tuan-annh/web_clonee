import React, { FC, memo } from 'react'
import { ProductSaleItemType } from '../../../types/home.type'
import { Link } from 'react-router-dom'

interface FeaturedProductItemProps {
  data: ProductSaleItemType
}

const FeaturedProductItem: FC<FeaturedProductItemProps> = ({ data }) => {
  return (
    <div className='featured-product relative flex aspect-square flex-1 cursor-pointer items-center justify-center overflow-hidden'>
      <div
        className='absolute flex h-full w-full items-center justify-center bg-cover bg-center bg-no-repeat transition-all duration-[1500ms] hover:scale-125'
        style={{
          backgroundImage: `url("${data.backgroundUrl}")`
        }}
      />
      <div className='absolute left-14 top-12'>
        <p className='my-6 text-hover'>{data.subTitle}</p>
        <h2 className='my-7 w-48 text-[36px] font-medium'>{data.title}</h2>
        <Link to={data.link} className='font-bold hover:text-hover'>
          Shop Now
        </Link>
      </div>
    </div>
  )
}

export default memo(FeaturedProductItem)
