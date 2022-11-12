import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import PlaceToStay from './pages/PlaceToStay/PlaceToStay';

function App() {
  return (
    <div className='w-full'>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='place-to-stay' element={<PlaceToStay />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
