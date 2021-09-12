
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import ProductReducer from './Reducers/ProductReducer';

const rootReducer = combineReducers({
  products: ProductReducer,

})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;