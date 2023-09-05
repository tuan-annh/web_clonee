// Khai báo danh sách kiểu view

enum productViewList {
  grid = 'grid',
  list = 'list'
}

enum customSortList {
  none = 'none',
  name_asc = 'name_asc',
  name_desc = 'name_desc',
  price_asc = 'price_asc',
  price_desc = 'price_desc',
  rating_asc = 'rating_asc',
  rating_desc = 'rating_desc'
}

enum sortNamesList {
  none = 'Choosing sort filter',
  name_asc = 'Alphabetically, A-Z',
  name_desc = 'Alphabetically, Z-A',
  price_asc = 'Price, low to high',
  price_desc = 'Price, high to low',
  rating_asc = 'Rate, low to high',
  rating_desc = 'Rate, high to low'
}

enum priceRanges {
  first_range = 'first_range',
  second_range = 'second_range',
  third_range = 'third_range'
}

enum priceNamesList {
  first_range = '$0 - $50',
  second_range = '$50 - $100',
  third_range = '> $100'
}

enum ratingRages {
  first_range = 'first_range',
  second_range = 'second_range',
  third_range = 'third_range',
  forth_range = ' forth_range',
  fifth_range = 'fifth_range'
}

export { productViewList, customSortList, priceRanges, sortNamesList, priceNamesList, ratingRages }

// kiểu dữ liệu view trả về. Mặc dù có 2 kiểu view là grid và list thôi nhưng khai báo ra cho mn dễ type hơn nhé.
export type ProductViewType = keyof typeof productViewList
