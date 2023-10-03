import React from 'react';
import './home.css';
import TopFold from '../../components/topFold';
import Card from '../../components/expense-list/card'

const Home = () => {
  return (
    <div className='home'> 
      <TopFold />
      <Card />
    </div>
  )
}

export default Home;