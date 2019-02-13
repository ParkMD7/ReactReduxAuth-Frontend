// dependencies
import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

// user files
import auth from './auth';


export default combineReducers({
  auth,
  form: reduxFormReducer
})

// NOTE: the 'form' key is required syntax for Redux Form
