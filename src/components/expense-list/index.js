import React from 'react'
import './expenseList.css'
import Card from './card'
const ExpenseList = () => {
  
  const list=[{
    title:"Made a purchase",
    logo: "asdasd",
    createdAt:Date.now,
    amount: 1234,
  }]
    return (
    <div>
        {list.length?(list.map(item=>(<Card item ={item}></Card>) ) ) :null}
    </div>
  )
}

export default ExpenseList