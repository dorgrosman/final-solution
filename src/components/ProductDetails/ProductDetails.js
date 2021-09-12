import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './ProductDetails.scss'

export default function ProductDetails() {
    const productDetails = useSelector(state => state.products.productDetails)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const dispatch = useDispatch();

    useEffect(() => {
        if (!productDetails) {
        } else {
            setTitle(productDetails.title)
            setDescription(productDetails.description)
            setPrice(productDetails.price)
        }
    })

    const submitHandler = (event) => {
        event.preventDefault()
    }
    return (
        <div>
                <div className="details-card">
                    {productDetails ?
                        <form className="form flex column align-center" onSubmit={submitHandler}>
                            <div>
                                <label htmlFor="title">Name:</label><br />
                                <input id="title" type="text" value={title} onChange={event => setTitle(event)} />
                            </div>
                            <div>
                                <label>Price:</label><br />
                                <input type="number" value={price} onChange={(event) => setTitle(event.target.value)} />
                            </div>
                            <div>
                                <label>Description:</label><br />
                                <textarea value={description} onChange={(event) => setDescription(event.target.value)} />
                            </div>
                            <div className="details-btn flex space-around">
                                <button type="submit">Save</button>
                            </div>
                        </form>
                        : null}
                </div>
        </div>
    )
}
