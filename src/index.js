// dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';


// user files
import App from './components/App'
import Welcome from './components/Welcome'
import SignUp from './components/auth/SignUp'
import reducers from './reducers'

const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route exact path="/" component={Welcome}/>
        <Route exact path="/signup" component={SignUp}/>
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
)
