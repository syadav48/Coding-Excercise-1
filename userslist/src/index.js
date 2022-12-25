import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Parkinglot from './Parkinglot';
import SearchPhoneNumber from './SearchNumber';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchPhoneNumber />
    {/* <Parkinglot /> */}
  </React.StrictMode>
);


