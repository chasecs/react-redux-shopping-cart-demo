import * as types from '../constants/action_types';

const initialState = {
  addedIds: [],
  quantityById: {}
}

const addProduct = (state = initialState.addedIds, productId) => {
  if(state.indexOf(productId) === -1){
    return [...state, productId]
  }
  return state
}

const addQuantity = (state = initialState.quantityById, productId) => {
  return {
    ...state,
    [productId]: (state[productId] || 0) + 1
  }
}


const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      return Object.assign({}, state, {
        addedIds: addProduct(state.addedIds, action.productId),
        quantityById: addQuantity(state.quantityById, action.productId)
      })
    case types.CHECKOUT:
      return state
    default:
      return state
  }
}

export default cart
