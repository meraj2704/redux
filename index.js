// const {createStore} = require("redux");

const { createStore } = require("redux")





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









// ||---------------store------------------||
// store for count
const store = createStore(counterReducer);
// create store for user
const store2 = createStore(addUserReducer);
// crete store for products 
const productStore = createStore(produtsReducer)






// ||------------------set the state---------------------||
store.subscribe(()=>{
  console.log(store.getState());
})
store2.subscribe(()=>{
  console.log(store2.getState())
})
productStore.subscribe(()=>{
  console.log(productStore.getState())
})






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
store2.dispatch(addUserAction(newUser))
store2.dispatch(addUserAction(newUser))

// dispatch products
productStore.dispatch(getProductsAction())
productStore.dispatch(addProductAction("Milk"))
