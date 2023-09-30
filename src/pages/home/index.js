import React from 'react';
import './home.css';
import TopFold from '../../components/topFold';
const Home = () => {
  return (
    <div className='home'> 
      <TopFold />
      <div>ExpenseList</div>
    </div>
  )
}

export default Home;