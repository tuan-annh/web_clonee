import React, { FC, memo } from 'react'
import { ProductSaleItemType } from '../../../types/home.type'
import FeaturedProductItem from './FeaturedProductItem'

interface FeaturedProductsProps {
  products: ProductSaleItemType[]
}

const FeaturedProducts: FC<FeaturedProductsProps> = ({ products }) => {
  return (
    <div className='sale-section container z-30 mx-auto mt-10 flex flex-col gap-12 overflow-hidden px-8 lg:flex-row'>
      {products.map((item, index) => (
        <FeaturedProductItem key={index.toString()} data={item} />
      ))}
    </div>
  )
}

export default memo(FeaturedProducts)
