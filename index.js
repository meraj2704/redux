// const {createStore} = require("redux");

const { createStore, combineReducers } = require("redux")





/* 
--------------plan---------------

createstore requir from redux
constants
state - count : 0
action - increment,decrement, reset
reducer
store
see the situation of the states
dispatch the action


*/

// ||-------------------------constans---------------------||

const increment = "INCREMENT"
const decrement = "DECREMENT"
const reset = "RESET"
const incrementByValue = "incrementByValue"
const addUser = "ADD_USER"
// constant for products
const getProducts = "GET_PRODUCTS";
const addProducts = "ADD_PRODUCTS"
// constant for carts
const getCart = "GET_CART_ITEMS";
const addCart = "ADD_TO_CART"






// ||-------------------------state---------------------||
const initialState = {
  count :0
}
// initial user
const users = [
  {
    id:1,
    name:"Meraj Hossain",
    email:"mh1669101@gmail.com",
    phone:"01684088348"
  }
]
// inital state for products
const products ={
  products:["Sugar","Salt"],
  numOfProducts : 2,
}
// inital state for carts
const carts ={
  products:["Sugar"],
  numOfProducts : 1,
}





// ||-------------------------action----------------------||

const incrementCounterAction = ()=>{
  return{
    type:increment,
  }
}
const decrementCounterAction = ()=>{
  return{
    type:decrement,
  }
}
const resetAction = ()=>{
  return{
    type:reset,
  }
}

const incrementByValueAction = (value)=>{
  return{
    type:incrementByValue,
    payload:value
  }
}
// actions for users
const addUserAction = (user) =>{
  return{
    type:addUser,
    payload:user
  }
}
// action for getProduct
const getProductsAction = () =>{
  return{
    type:getProducts
  }
}
const addProductAction = (product) =>{
  return{
    type:addProducts,
    payload: product
  }
}
// action for getProduct
const getCatItemAction = () =>{
  return{
    type:getCart
  }
}
const addToCartAction = (product) =>{
  return{
    type:addCart,
    payload: product
  }
}









// ||-------------------------------reducer----------------------||

// reducer for count
const counterReducer = (state = initialState, action) =>{
  switch(action.type){
    case increment:
      return{
        ...state,
        count: state.count + 1
      }
    case decrement:
      return{
        ...state,
        count: state.count - 1
      }
    case reset:
      return{
        ...state,
        count: 0,
      }
    case incrementByValue:
      return{
        ...state,
        count: state.count + action.payload,
      }
    default:
     return state;
  }
}
// reducer for users
const addUserReducer = (state=users,action) =>{
  switch(action.type){
    case addUser:
      return  [...state,action.payload]
      
    default:
      return state;
  }
}
// reducer for products
const produtsReducer = (state=products,action)=>{
  switch(action.type){
    case getProducts:
      return {
        ...state
      }
    case addProducts:
      return{
        products:[...state.products,action.payload],
        numOfProducts:state.numOfProducts + 1
      }
    default:
      return state;
  }
}
// reducer for products
const cartReducer = (state=carts,action)=>{
  switch(action.type){
    case getCart:
      return {
        ...state
      }
    case addCart:
      return{
        products:[...state.products,action.payload],
        numOfProducts:state.numOfProducts + 1
      }
    default:
      return state;
  }
}





// {---------------- -create root reducer --------------- }
const rootReducer = combineReducers({
  counterR : counterReducer,
  addUserR : addUserReducer,
  productsR : produtsReducer,
  cartR:cartReducer
})







// ||---------------store------------------||
const store = createStore(rootReducer);







// ||------------------set the state---------------------||
store.subscribe(()=>{
  console.log(store.getState());
})
// store2.subscribe(()=>{
//   console.log(store2.getState())
// })
// productStore.subscribe(()=>{
//   console.log(productStore.getState())
// })






// ||-----------------------dispatch the action------------------||

store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(decrementCounterAction());
store.dispatch(incrementByValueAction(10))
store.dispatch(resetAction());

const newUser = {
  id:2,
  name:"Rahat Hossain",
  email:"rahat@gmail.com",
  phone:"01645-----"
}
// dispatch adduser
store.dispatch(addUserAction(newUser))

// dispatch products
store.dispatch(getProductsAction())
store.dispatch(addProductAction("Milk"))
// dispatch for cart 
store.dispatch(getCatItemAction())
store.dispatch(addToCartAction("Sugar"))
