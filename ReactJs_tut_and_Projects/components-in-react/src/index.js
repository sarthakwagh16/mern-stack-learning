import React from 'react';
import  ReactDOM  from 'react-dom';
import './index.css';


// import Heading from './components/Heading';
// import Para from './components/Para';
// import List from './components/List';

import App from './components/App';
import Calculator from './calculator/Calculator';



//components in react
/* 
we can also wrap all the components inside single component 
to keep index.js file as simple as possible
here we had put all the compo in App.jsx component

*/

ReactDOM.render(
  <>
   
   <App/>
   <Calculator/>
  
  </>,
  document.getElementById('root')
)