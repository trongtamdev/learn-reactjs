import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './app/store'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={store} ><BrowserRouter>
//     <SnackbarProvider anchorOrigin={{vertical:'top',horizontal:'right'}}>
//       <App />
//       </SnackbarProvider>
//     </BrowserRouter></Provider>

//   </React.StrictMode>
// );

// ReactDOM.render(
//   <React.StrictMode>
//   <Provider store={store} ><BrowserRouter>
//   <SnackbarProvider anchorOrigin={{vertical:'top',horizontal:'right'}}>
//     <App />
//     </SnackbarProvider>
//   </BrowserRouter></Provider>

// </React.StrictMode>,
//   document.getElementById('root')
//   );


const rootNode = document.getElementById('root');
ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store} ><BrowserRouter>
//     <SnackbarProvider anchorOrigin={{vertical:'top',horizontal:'right'}}>
//       <App />
//       </SnackbarProvider>
//     </BrowserRouter></Provider>

//   </React.StrictMode>
, rootNode);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
