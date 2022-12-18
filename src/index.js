import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import TestPage from './pages/TestPage/index';
import Toast from './pages/Toast';
import Search from './pages/Search';
import Register from './pages/Register';
import reportWebVitals from './reportWebVitals';
import Store from './Store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = Store;

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className='main_body'>
        <Routes>
          <Route path="/" element={<Toast/>}></Route>
          <Route path="/search" element={<Search/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/testpage" element={<TestPage/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
