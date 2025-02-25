import GetSingleProduct from '@/actions/get-SingleProduct';
import Productgallary from '@/components/productgallary';
import ProductInfo from '@/components/productInfo';
import React from 'react'

const ProductPage = async ({params} : {params : {productId : string}}) => {
    const {productId} = await params;
    const product = await GetSingleProduct(productId)

    const productImage = product.Images.map((image) => ({
      id: image.id,
      url: image.url
    }))

  return (
    <div className='flex px-20 w-full h-full  pt-4'>
      <div className='w-full flex p-4'>
        <div className='w-full'>
        <Productgallary Images={productImage}/>
        </div>
        <div className='w-full pb-[40px] '>
          <ProductInfo product={product}/>
        </div>
      </div>
    </div>
  )
}

export default ProductPage