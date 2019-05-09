import React from 'react';
import ReactDOM from 'react-dom';

import 'antd/dist/antd.css';
import * as serviceWorker from './utils/serviceWorker';

import { BrowserRouter } from 'react-router-dom';

import App from './App';

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
