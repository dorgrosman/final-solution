import React from 'react'
import { useDispatch } from 'react-redux'
import deleteProduct from '../../store/Action/ProductAction'
import './ProductPreview.scss'
import { productSelected } from './../../store/Action/ProductAction';

export default function ProductPreview(props) {
    const product = props.product
    
    const dispatch = useDispatch()

    const selectedDeleteProduct = () => {
        dispatch(deleteProduct(product._id))
    }

    const displayProductDetails = (() => {
        dispatch(productSelected(product._id))
    })

    return (
        <div className="card" onClick={() => displayProductDetails()}>

            <div className="product-preview flex align-center">
                <div className="title-price">
                    <div className="title">Name {product.title}</div>
                    <div>Price : {product.price} $</div>
                </div>
                <img src={product.imgUrl} />
                <div className="dis"><h2>description :</h2> {product.description} </div>

                {/* <div> */}
                    <button onClick={() => selectedDeleteProduct()} >Delete</button>
                {/* </div> */}
            </div>
        </div>
    )
}
