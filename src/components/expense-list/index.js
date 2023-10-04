import React from 'react'
import './expenseList.css' 
import { useSelector } from 'react-redux'
import logo from '../../assets/EmptyList.png';
import Card from './card'
import { ToastContainer, toast } from 'react-toastify';
const ExpenseList = () => {
  
  const {expenseList: list, query} = useSelector((state) => state.expenses);
  const filterList=list.filter(item => item.title.includes(query))
  const notifySuccess = () => toast.success("Expense Deleted");
  return (
    <div className='expense-list'> 
    <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick />
    
    {filterList.length ? (
      filterList.map(item=>(
      <Card item={item} notifySuccess={notifySuccess}/>
    ))
    ):
    (
      <div className='empty-state'>
        <img src={logo} alt ='Empty List' className='empty-image'></img>
        <label>Uh Oh! Your expense list is empty</label>
      </div>
    )
    }
    </div>
  )
}

export default ExpenseList