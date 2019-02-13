// dependencies
import React from 'react';

// user files
import Header from './Header'


const App = ({children}) => {
  return(
    <div>
      <Header />
      {children}
    </div>
  )

};

export default App
