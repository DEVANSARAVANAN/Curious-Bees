





import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from 'react';
import Home from './components/Home';
import Register from './components/register';
import Login from './components/GoogleSingin/Login';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Feed from './components/FeedPage/Feed';
// import React, { Component }  from 'react';
import { db } from './components/GoogleSingin/firebase';
import Profile from './components/Profile';

const App = () => {
  return (
    <div className="App">
      
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/home' Component={Home} />
          <Route exact path='/login' Component={Login} />
          <Route exact path='/register' Component={Register} />
          <Route exact path='/feed' Component={Feed} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

