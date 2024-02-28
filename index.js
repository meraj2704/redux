// const {createStore} = require("redux");

const { createStore, combineReducers, applyMiddleware } = require("redux")
const { default: logger } = require("redux-logger")
const { thunk } = require("redux-thunk")





/* 
--------------plan---------------

1. declare all constants
2. declare the initial state
3. declare all actions
4. reducer
5. create store constants 
6. dispatch the actions with store

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
// constant for fetch api
const getTodoRequest = "GET_TO_REQUEST";
const getTodoSuccess = "GET_TO_SUCCESS";
const getTodoFailed = "GET_TO_FAILED";






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
// todo state
const todo = {
  todos:[],
  isLoaing:false,
  error : null
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
// action for todo api
const getTodoRequestAction = ()=>{
  return{
    type: getTodoRequest
  }
}
const getTodoSuccessAction = (todos)=>{
  return{
    type: getTodoSuccess,
    payload:todos
  }
}
const getTodoFailedAction = (error)=>{
  return{
    type: getTodoFailed,
    payload:error
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
// todos reducer
const todoReducer  = (state = todo,action)=>{
  switch(action.type){
    case getTodoRequest:
      return{
        ...state,
        isLoaing:true
      }
    case getTodoSuccess:
      return {
        ...state,
        isLoaing:false,
        todos:action.payload
      }
    case getTodoFailed:
      return{
        ...state,
        error:payload.error
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
  cartR:cartReducer,
  todoR:todoReducer
})






//  ||------------------- fetch action --------------------||
const fetchData = () =>{
  return (dispatch) =>{
    dispatch(getTodoRequestAction());
    fetch("http://localhost:5000/services")
    .then(res => res.json())
    .then(data => {
      const id = data.map((da) => da._id)
      console.log(id)
      dispatch(getTodoSuccessAction(id))
    })
    .catch((error) =>{
      const message = error.message;
      dispatch(getTodoFailedAction(message))
    })
  }
}






// ||---------------store------------------||
const store = createStore(rootReducer,applyMiddleware(logger,thunk));







// ||------------------set the state---------------------||
store.subscribe(()=>{
  console.log(store.getState());
})






// ||-----------------------dispatch the action------------------||

// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(decrementCounterAction());
// store.dispatch(incrementByValueAction(10))
// store.dispatch(resetAction());

// const newUser = {
//   id:2,
//   name:"Rahat Hossain",
//   email:"rahat@gmail.com",
//   phone:"01645-----"
// }
// // dispatch adduser
// store.dispatch(addUserAction(newUser))

// // dispatch products
// store.dispatch(getProductsAction())
// store.dispatch(addProductAction("Milk"))
// // dispatch for cart  
// store.dispatch(getCatItemAction())
// store.dispatch(addToCartAction("Sugar"))
// dispath api
store.dispatch(fetchData())