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

// constans
const increment = "INCREMENT"
const decrement = "DECREMENT"
const reset = "RESET"
const incrementByValue = "incrementByValue"
const addUser = "ADD_USER"

// state
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

// action
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
// actions
const addUserAction = (user) =>{
  return{
    type:addUser,
    payload:user
  }
}
// reducer
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

// store

const store = createStore(counterReducer);

// set the state
store.subscribe(()=>{
  console.log(store.getState());
})

// dispatch the action

store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(decrementCounterAction());
store.dispatch(incrementByValueAction(10))
store.dispatch(resetAction());




// reducer
const addUserReducer = (state=users,action) =>{
  switch(action.type){
    case addUser:
      return [...state,action.payload]
      
    default:
      return state;
  }
}

// create store constants

const store2 = createStore(addUserReducer);

store2.subscribe(()=>{
  console.log(store2.getState())
})
const newUser = {
  id:2,
  name:"Rahat Hossain",
  email:"rahat@gmail.com",
  phone:"01645-----"
}

store2.dispatch(addUserAction(newUser))