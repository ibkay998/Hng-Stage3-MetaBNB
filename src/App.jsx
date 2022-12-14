import { Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import PlaceToStay from './pages/PlaceToStay';

function App() {
  return (
    <div className='w-full'>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='place' element={<PlaceToStay/>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
