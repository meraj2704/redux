const {createStore} = require("redux")

/*


---------plan---------

1. declare all constants
2. declare the initial state
3. declare all actions
4. reducer
5. create store constants 
6. dispatch the actions with store



*/

// constants
const addUser = "ADD_USER"

// initial user
const users = [
  {
    id:1,
    name:"Meraj Hossain",
    email:"mh1669101@gmail.com",
    phone:"01684088348"
  }
]

// actions
const addUserAction = (user) =>{
  return{
    type:addUser,
    payload:user
  }
}

// reducer
const addUserReducer = (state=users,action) =>{
  switch(action.type){
    case addUser:
      return
        [...state,action.payload]
      
    default:
      return state;
  }
}

// create store constants

const store = createStore(addUserReducer);
const newUser = {
  id:2,
  name:"Rahat Hossain",
  email:"rahat@gmail.com",
  phone:"01645-----"
}

store.dispatch(addUserAction(newUser))