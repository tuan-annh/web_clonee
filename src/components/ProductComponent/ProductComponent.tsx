import { Product } from '../../types/product.type'

function ProductComponent({ product }: { product: Product }) {
  return (
    <div className='m-1 overflow-hidden p-3 cursor-pointer'>
      <div className='w-full relative pt-[100%] bg-product-bg'>
        <img
          src={product.image}
          className='absolute left-1/2 top-1/2 h-full object-cover -translate-x-1/2 -translate-y-1/2 scale-75 hover:scale-[.85] hover:scale ease-out duration-700'
          style={{ mixBlendMode: 'multiply' }}
        />
        <div className='top-5 absolute w-4/5 left-1/2 -translate-x-1/2'>
          <span className='bg-hover text-product-bg py-1 px-2 rounded text-sm'>-20%</span>
        </div>
        <button className='w-4/5 absolute left-1/2 -translate-x-1/2 bottom-5 bg-white text-main uppercase text-sm font-bold px-4 py-3 hover:bg-hover hover:text-white rounded ease-in-out duration-500'>
          + add to cart
        </button>
      </div>
      <div className='text-center px-4'>
        <p className='text-name-product font-semibold line-clamp-1 hover:text-hover ease-in-out duration-300 mb-2 mt-3'>{product.title}</p>
        <div>
          <span className='text-current-product font-bold mr-2'>${(product.price * 0.8).toFixed(2)}</span>
          <span className='text-name-product line-through'>${product.price}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductComponent
