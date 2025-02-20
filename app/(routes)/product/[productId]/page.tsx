import React from 'react'

const ProductPage = async ({params} : {params : {productId : string}}) => {
    const {productId} = await params;
  return (
    <div className='flex px-20 w-full bg-blue-200 h-full pt-2'>
        <div className='w-full bg-red-200'>1</div>
        <div className='w-full bg-green-200'>1</div>
    </div>
  )
}

export default ProductPage