const {createStore} = require("redux");

// declare the state
// declare the constant

const increment = "INCREMENT";
const decrement = "DECREMENT";
const addUser = "ADDUSER";

// STATE
const initialCounterState = {
  count: 0,
};
const initialUserState = {
  users: [{ name: "anisul islam" }],
};

// action
const incrementCounter = () => {
  return {
    type: increment,
  };
};
const decrementCounter = () => {
  return {
    type: decrement,
  };
};
const add_user = () => {
  return {
    type: addUser,
    payload: { name: "shakil" },
  };
};

// create reducer

const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case increment:
      return {
        ...state,
        count: state.count + 1,
      };
    case decrement:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      state;
  }
};


// store method
//  getState(). dispatch(), subscribe()


// create store
const store = createStore(counterReducer);


store.subscribe(()=>{
  console.log(store.getState())
})

store.dispatch(incrementCounter())