import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
// import { PersistGate } from 'redux-persist/integration/react';
import App from './App/App';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        {/* <PersistGate loading="wait a moment..." persistor={store.persistor}> */}
        <App />
        {/* </PersistGate> */}
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root'),
);
