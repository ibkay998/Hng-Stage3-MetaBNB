import React from 'react';
import Header from '../components/Header/Header';
import Mid from '../components/Mid/Mid';
import Inspiration from '../components/Inspiration/Inspiration';
import LearnMore from '../components/LearnMore/LearnMore';

function Home() {
  return (
  <div className='w-full'>
    <Header/>
    <Mid/>
    <Inspiration/>
    <LearnMore/>
  </div>
  )
}

export default Home;
