import React from 'react';
import './home.css';
import TopFold from '../../components/topFold';

import AddForm from '../../components/add-form';
const Home = () => {
  return (
    <div className='home'> 
      <TopFold />
      <AddForm />
    </div>
  )
}

export default Home;