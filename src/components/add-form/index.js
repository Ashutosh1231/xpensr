import React, { useState } from 'react'
import './add-form.css'
import { categories } from "../../constants/add-expense"
import { useDispatch } from 'react-redux';
import addExpense from '../../redux/actions/expenses'

const AddForm = () => {
    const cat = categories;
    const [categeryOpen,setCategoryOpen] = useState(false)
    const [title,setTitle]=useState("")
    const [amount,setAmount]=useState("")
    const [category,setCategory]=useState()
    const dispatch = useDispatch();
    
    const handleCategory =(category) => {
        setCategory(category)
        setCategoryOpen(false)
    }

    const handleAmount = (e) =>{
        const val=parseFloat(e.target.value)
        if(isNaN(val)){
            setAmount("");
            return;
        }
        setAmount(val);
    }

    const handleTitle = (e) =>{
        setTitle(e.target.value);
    }

    const handleSubmit = () => {
        if(title==='' || amount==='' || !category){
            console.log("Not Data"); 
            return;
        }

        const data={
            title,
            amount,
            category,
            createdAt: new Date()
        }
        console.log("Here")
        dispatch(addExpense(data))
    };

  return (
    <div className='add-form'>
        <div className='form-item'>
            <label>Title</label>
            <input placeholder='Give a name to your Expenditure' value={title} onChange={(e) => handleTitle(e)}></input>
        </div>
        <div className='form-item'>
            <label>Amount ₹</label>
            <input placeholder='Enter the amount spent' value={amount} className='amount-input' onChange={(e) =>handleAmount(e)}/>
        </div>

        <div className='category-container-parent'>
            <div className='category'>
                <div className='category-dropdown' onClick={()=>setCategoryOpen(!categeryOpen)}>
                    <label>{category ? category.title : "Category"}</label>
                    <i class="fi-rr-angle-down"></i>
                </div>
                {categeryOpen && (
                <div className='category-container'>
                    {cat.map(category =>(
                        <div className='category-item' 
                        style={{ borderRight: `5px solid ${category.color}`  }} 
                        key={category.id} 
                        onClick = { () => handleCategory(category)}>
                        
                            <label>{category.title}</label>
                            <img src={category.icon.default} alt={category.title}/>
                        </div>
                    ))}
                    </div>
                    )}
            </div>
        </div>
        <div className='form-add-buttom'>
                <div onClick={handleSubmit}>
                    <label>Add</label>
                    <i class="fi-rr-paper-plane"/>    
                </div>
                
        </div>
    </div>
  )
}

export default AddForm