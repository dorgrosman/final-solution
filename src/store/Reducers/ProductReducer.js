

import img from "../../assets/img/New-Product.jpg";
import { DELETE_PRODUCT, SET_ADD_PRODUCT, SET_PRODUCT_LIST, SET_SELECTED_PRODUCT_DETAILS } from './../Action/ProductAction';

const initialState = {
    products: [],
    productDetails: null,
}

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT_LIST:
            return { ...state, products: action.payload }
        case DELETE_PRODUCT:
            const selectedProduct = state.products.findIndex(p => p._id === action.productId)
            const deletedProduct = state.products.splice(selectedProduct, 1)
            return { ...state, products: state.products }
        case SET_SELECTED_PRODUCT_DETAILS:
            const selectedProductDetails = state.products.find(p => p._id === action.productId)
            return { ...state, productDetails: selectedProductDetails }
        case SET_ADD_PRODUCT:
            const newProduct = action.product
            newProduct._id = makeId();
            newProduct.imgUrl = img
            state.products.push(newProduct)
            return { ...state }
        default:
            return state;
    }
}


function makeId(length = 5) {
    var txt = '';
    var possible = '1234567890';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return +txt;
}

export default ProductReducer