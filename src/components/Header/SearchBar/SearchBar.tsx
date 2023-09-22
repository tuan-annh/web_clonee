import React, { FC, memo, useCallback, useEffect, useRef, useState } from 'react'
import SearchIcon from '../../Icons/SearchIcon'
import { useQuery } from '@tanstack/react-query'
import { productApi } from '../../../apis/productApi.api'
import { ProductsListType } from '../../../types/product.type'
import { Link, useLocation } from 'react-router-dom'
import { Grow, Paper, Popover, TextField } from '@mui/material'

const SearchBar: FC = () => {
  const { data: productsData } = useQuery({
    queryKey: ['products'],
    queryFn: () => productApi.getProducts()
  })

  const location = useLocation()
  const [inputKey, setInputKey] = useState('')
  const [list, setList] = useState<ProductsListType>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null)

  const searchByKey = useCallback(
    (key = '') => {
      const dataList = productsData?.data
      const keyTransform = key.trim().toLowerCase()
      setInputKey(key)
      if (dataList && dataList.length > 0 && keyTransform) {
        const results = dataList.filter((item) => item.title.toLocaleLowerCase().includes(keyTransform))
        setList(results)
      } else {
        setList([])
      }
    },
    [productsData?.data]
  )

  const handleOpenSearch = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget)
  }

  useEffect(() => {
    if (location.pathname) {
      if (inputRef.current) {
        inputRef.current.value = ''
      }
      setList([])
    }
  }, [location.pathname])

  return (
    <>
      <div className='relative'>
        <div onClick={handleOpenSearch} className='hover cursor-pointer rounded-[50%] border p-2 hover:bg-slate-200'>
          <SearchIcon />
        </div>
        <Popover
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
        >
          <Grow in={Boolean(anchorEl)}>
            <Paper className=' h-[auto] max-h-[75vh] w-[calc(100vw-48px)] overflow-hidden pb-4 lg:w-[50vw] lg:max-w-[400px]'>
              <div className='px-4 pt-4'>
                <TextField
                  label='Search'
                  variant='outlined'
                  InputProps={{
                    className: 'rounded-sm',
                    startAdornment: (
                      <div className='pr-2'>
                        <SearchIcon />
                      </div>
                    ),
                    style: {
                      borderRadius: '12px'
                    }
                  }}
                  ref={inputRef}
                  type='search'
                  autoFocus
                  fullWidth
                  onChange={(e) => {
                    searchByKey(e.target.value)
                  }}
                />
              </div>
              {inputKey.length > 0 && (
                <>
                  {list.length > 0 ? (
                    <div className='max-h-[calc(75vh-88px)] overflow-y-auto'>
                      {list.map((item) => (
                        <Link
                          to={`/products/${item.category}/${item.id}`}
                          key={item.id}
                          className='mx-auto grid grid-cols-4 items-center justify-center gap-3 p-3 hover:bg-slate-50'
                        >
                          <div className='mx-auto h-[64px] w-[64px]'>
                            <img
                              src={item.image}
                              alt=''
                              className='mx-auto h-full object-cover'
                              style={{ mixBlendMode: 'multiply' }}
                            />
                          </div>

                          <p className='col-span-3 line-clamp-2 text-left text-[16px] text-lg font-medium'>
                            {item.title}
                          </p>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className='mt-3 px-4'>The product you are looking for does not exist.</div>
                  )}
                </>
              )}
            </Paper>
          </Grow>
        </Popover>
      </div>
    </>
  )
}

export default memo(SearchBar)
