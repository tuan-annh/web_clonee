// Khai báo danh sách kiểu view

const productViewList = {
  grid: 'grid',
  list: 'list'
}

const customSortList = {
  name_asc: 'name_asc',
  name_desc: 'name_desc',
  price_asc: 'price_asc',
  price_desc: 'price_desc',
  rating_asc: 'rating_asc',
  rating_desc: 'rating_desc'
}

export { productViewList, customSortList }

// kiểu dữ liệu view trả về. Mặc dù có 2 kiểu view là grid và list thôi nhưng khai báo ra cho mn dễ type hơn nhé.
export type ProductViewType = keyof typeof productViewList
