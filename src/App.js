import Search from './pages/Search'
import Feed from './pages/Feed'
import Follow from './pages/Follow'
import FAQ from './pages/FAQ'
import Write from './pages/Write'
import Mypage from './pages/Mypage'
import Not from './pages/Not'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react'
import './App.css';
import { RecoilRoot } from 'recoil'
import GlobalModal from './components/GlobalModal'
import DefaultLayout from './components/layout/DefaultLayout'
import MinimalLayout from './components/layout/MinimalLayout'

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <GlobalModal />
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path='/' element={<Home />} />
              <Route path='/search' element={<Search />} />
              <Route path='/feed' element={<Feed />} />
              <Route path='/follow' element={<Follow />} />
              <Route path='/FAQ' element={<FAQ />} />
              <Route path='/mypage' element={<Mypage />} />
              <Route path='*' element={<Not />} />
            </Route>
            <Route element={<MinimalLayout />}>
              <Route path='/write' element={<Write />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;