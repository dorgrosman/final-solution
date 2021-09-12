import React, {  useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ProductList from './../../components/ProductList/ProductList';
import ProductDetails from './../../components/ProductDetails/ProductDetails';
import { createProduct } from '../../store/Action/ProductAction';
import { storageService } from './../../services/storageService';
import { listProducts } from './../../store/Action/ProductAction';
import LoadingBox from './../../components/LoadingBox/LoadingBox';
import './HomePage.scss'

export default function HomePage() {
    const { products } = useSelector(state => state.products)
    const [addBtn, setAddButton] = useState(false)
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    storageService.save('products', products)

    const dispatch = useDispatch();
    const newProduct = {
        title,
        price,
        description
    }

    useEffect(() => {
        dispatch(listProducts({}))
    }, [])

    const toggleAddButton =() => {
        setAddButton(!addBtn)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        dispatch(createProduct(newProduct))
        setAddButton(!addBtn)
    }

    return (
        <div >
            {addBtn ?
                <form onSubmit={submitHandler}>
                    <div>Name
                        <label htmlFor="title"></label><br />
                        <input type="text" id="title" value={title} onChange={(event) => setTitle(event.target.value)} />
                    </div>
                    <div>
                        <label>Price:</label><br />
                        <input type="number" value={price} onChange={(event) => setPrice(event.target.value)} />
                    </div>
                    <div>
                        <label>Description:</label><br />
                        <textarea type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
                    </div>
                    <button type="submit" >Save</button>
                </form>
                : <div className="add-btn"><button  onClick={(event) => toggleAddButton(event)}>Add Product +</button></div>}
            {!products ? <LoadingBox /> :
                <div className="flex">
                    <ProductList products={products} />
                    <ProductDetails />
                </div>
            }
        </div>
    )
}
