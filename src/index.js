import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import store from './redux/reduxStore';
import { Provider } from 'react-redux';




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* какая то обертка из RR библиотеки нужна я так понял для конекта и общего контекста */}
    <Provider store={store}>
      {/* .bind(store) мутная хуета с callback'ами типа они вызываются от имени вызывающего, 
          bind биндит вызов к оригинальному обьекту store */}
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

