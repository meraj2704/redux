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

// state
const initialState = {
  count :0
}

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
store.dispatch(resetAction());