import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './SignUp';
import Login from './Login';
import Home from './Home';
import Footer from './Footer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Redirect '/' to '/register' */}
          <Route path='/' element={<Navigate to='/register' replace />} />
          <Route path='/register' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
