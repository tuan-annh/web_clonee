import React, { FC, memo, useCallback, useEffect, useRef, useState } from 'react';
import SearchIcon from '../../Icons/SearchIcon';
import { useQuery } from '@tanstack/react-query';
import { productApi } from '../../../apis/productApi.api';
import { ProductsListType } from '../../../types/product.type';
import { Link, useLocation } from 'react-router-dom';

const SearchBar: FC = () => {
  const { data: productsData } = useQuery({
    queryKey: ['products'],
    queryFn: () => productApi.getProducts()
  });

  const location = useLocation();

  const [list, setList] = useState<ProductsListType>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const searchByKey = useCallback(
    (key = '') => {
      const dataList = productsData?.data;
      const keyTrim = key.trim();
      if (dataList && dataList.length > 0 && keyTrim) {
        const results = dataList.filter((item) => item.title.includes(keyTrim));
        setList(results);
      } else {
        setList([]);
      }
    },
    [productsData?.data]
  );

  useEffect(() => {
    if (location.pathname) {
      if (inputRef.current) {
        inputRef.current.value = '';
      }
      setList([]);
    }
  }, [location.pathname]);

  return (
    <div className='relative mx-auto max-w-md z-[3]'>
      <form action='' className='relative mx-auto w-max'>
        <input
          ref={inputRef}
          type='search'
          className='peer relative z-10 h-12 w-12 cursor-pointer rounded-full border bg-transparent outline-none focus:w-full focus:cursor-text focus:border-gray-300 focus:pl-16 focus:pr-4'
          onChange={(e) => {
            searchByKey(e.target.value);
          }}
        />
        <SearchIcon />
      </form>
      {list.length > 0 ? (
        <div className='absolute right-0 top-20 z-30 h-48 w-[400px] bg-white'>
          {list.map((item) => (
            <Link to={`/products/${item.category}/${item.id}`} key={item.id} className='mb-2 flex gap-2 border'>
              <div
                style={{ background: `url("${item.image}")`, backgroundSize: 'cover' }}
                className='h-[40px] w-[40px]'
              />
              {item.title}
            </Link>
          ))}
        </div>
      ) : (
        <div className='absolute right-0 top-20 z-30 h-48 w-[400px] bg-white'>
          The product you are looking for does not exist.
        </div>
      )}
    </div>
  );
};

export default memo(SearchBar);