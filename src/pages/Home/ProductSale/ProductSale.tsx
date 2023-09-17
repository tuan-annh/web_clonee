import React, { FC, memo } from 'react'
import { ProductSaleItemType } from '../../../types/home.type'
import ProductSaleItem from './ProductSaleItem'

interface ProductSaleProps {
  products: ProductSaleItemType[]
}

const ProductSale: FC<ProductSaleProps> = ({ products }) => {
  return (
    <section className='sale-section container z-30 mx-auto mt-10 flex flex-col gap-12 overflow-hidden px-8 lg:flex-row'>
      {products.map((item, index) => (
        <ProductSaleItem key={index.toString()} data={item} />
      ))}
    </section>
  )
}

export default memo(ProductSale)
