import Search from './pages/Search'
import Feed from './pages/Feed'
import Follow from './pages/Follow'
import FAQ from './pages/FAQ'
import Write from './pages/Write'
import Mypage from './pages/Mypage'
import Not from './pages/Not'
import Home from './pages/Home'
import Player from './components/Player'
import Header from './pages/Header'
import Footer from './pages/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react'
import './App.css';

const App = () => {
  return (
    <BrowserRouter>

      <Suspense fallback={<Home />}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='/follow' element={<Follow />} />
          <Route path='/FAQ' element={<FAQ />} />
          <Route path='/write' element={<Write />} />
          <Route path='/mypage' element={<Mypage />} />
          <Route path='*' element={<Not />} />
        </Routes>
        <Footer />
        <Player />
      </Suspense>
    </BrowserRouter>

  );
}

export default App;