import DashbordHeading from '@/components/dashboard/DashbordHeading'
import AddProductModal from '@/components/dashboard/seller/addProductsModal'
import { getProducts } from '@/lib/api/products'
import React from 'react'

const ProductsSellerPage = async() => {
    const products=await getProducts()
    // console.log(products)
    return (
        <div className='flex justify-between items-center'>
            <DashbordHeading title={'Products'} description={'Seller Add your Prodcuts'}/>
            
            <AddProductModal/>
        </div>
    )
}

export default ProductsSellerPage