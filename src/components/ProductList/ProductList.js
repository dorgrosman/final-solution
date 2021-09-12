import React from 'react'
import ProductPreview from './../../components/ProductPreview/ProductPreview';
import './ProductList.scss'

export default function ProductList(props) {
   
    const  products  = props.products
    return (
        <div className="product-list ">
            {products ? (
                <ul className="flex column">
                    {products.map(product => <li key={product._id}><ProductPreview key={product._id} product={product} /></li>)}
                </ul>) : null}
        </div>
    )
}
