import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from './ReducerSetup';
import { Provider } from 'react-redux';
import  './fireBaseSetup.ts';
import UserProvider from './UserProvider'

ReactDOM.render(
  <Provider store={configureStore()}>
    <UserProvider>
     <App />
    </UserProvider>  
    
    </Provider>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
