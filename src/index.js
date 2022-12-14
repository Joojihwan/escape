import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/index'
import Login from './pages/Login/index'
import Settings from './pages/Settings/index'
import TestPage from './pages/TestPage/index'
import Signup from './pages/Signup'
import Header from './components/ui/Header'
import Footer from './components/ui/Footer'
import reportWebVitals from './reportWebVitals';
import Store from './Store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = Store;

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header/>
      <div className='main_body'>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/settings" element={<Settings/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/testpage" element={<TestPage/>}></Route>
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
