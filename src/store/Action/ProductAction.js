import jsonData from "../../jsonData.json";
export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const SET_ADD_PRODUCT = 'SET_ADD_PRODUCT'
export const SET_SELECTED_PRODUCT_DETAILS = 'SET_SELECTED_PRODUCT_DETAILS'
export const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST'

export const listProducts = () => {
    return (dispatch) => {
        dispatch({ type: SET_PRODUCT_LIST, payload: jsonData.products })
    }
}

const deleteProduct = (id) => {
    return { type: DELETE_PRODUCT, productId: id }
}

export const productSelected = (id) => {

    return { type: SET_SELECTED_PRODUCT_DETAILS, productId: id }
}

export const createProduct = (product) => {
    return { type: SET_ADD_PRODUCT, product: product }
}

export default deleteProduct