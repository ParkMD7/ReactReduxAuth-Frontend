// dependencies
import axios from 'axios'

// user files
import { AUTH_USER, AUTH_ERROR } from './types'


// export const signup = ({ email, password }) => {
//   // NOTE: When we add redux thunk as a middleware, we can return a different value type from our action creators
//   // NOTE: With reduxThunk, we can return either an action obj or we can return a function (here an arrow function) that gets called with the dispatch arg -> allows us to dispatch as many functions as we want
//   return (dispatch) => {
//
//   }
// }

// Refactored Code from above
export const signup = (formProps, callback) => async (dispatch) => {
  try{
    const response = await axios.post('http://localhost:3001/signup', formProps)
    dispatch({ type: AUTH_USER, payload: response.data.token })
    callback() //ensures our user gets automatically redirected
  }

  catch(error){
    dispatch({ type: AUTH_ERROR, payload: "Email is in Use" })
  }
}
