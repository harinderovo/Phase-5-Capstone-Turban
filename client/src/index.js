import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { ErrorProvider } from './context/ErrorContext';
import { UserProvider } from './context/UserContext';
import { ShopContextProvider } from './context/ShopContext'


// const root = ReactDOM.createRoot(document.getElementById('root'));

ReactDOM.render(
<ShopContextProvider>
  <ErrorProvider>
    <BrowserRouter>
      <UserProvider>
          <App />
      </UserProvider>
    </BrowserRouter>
  </ErrorProvider>
</ShopContextProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();