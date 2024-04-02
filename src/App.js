import Main from './pages/Main'
import Search from './pages/Search'
import Feed from './pages/Feed'
import Follow from './pages/Follow'
import FAQ from './pages/FAQ'
import Write from './pages/Write'
import Mypage from './pages/Mypage'
import Not from './pages/Not'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import './App.css';

const App = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/search' element={<Search />} />
              <Route path='/feed' element={<Feed />} />
              <Route path='/follow' element={<Follow />} />
              <Route path='/FAQ' element={<FAQ />} />
              <Route path='/write' element={<Write />} />
              <Route path='/mypage' element={<Mypage />} />
              <Route path='*' element={<Not />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;