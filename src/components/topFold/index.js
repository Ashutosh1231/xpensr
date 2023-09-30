import React, {useState} from 'react'
import './topFold.css'
const TopFold = () => {
    const [query, setQuery] = useState("")
    const handleQuery =(e)=>{
        setQuery(e.target.value)
    }
  return (
    <div className='topfold'>
        {window.location.pathname === '/' ?(<div className='home-topfold'>
       <div className='searchbar'>
         <i class="fi-rr-search"></i>
         <input placeholder='Search for expenses' 
          value={query} 
          onChange={(e)=>handleQuery(e)}></input>
       </div>
       <div className='add-button'>
        <i class="fi-rr-add"></i>
        <label>Add</label>
        </div> 
    </div>) : (
    <div className='add-topfold'>
    <div className='add-topfold-button'>
    <i class="fi-rr-angle-left"></i>
    <lable>Back</lable>
    </div>
    <div className='add-topfold-button'>
    <i class="fi-rr-cross-circle"></i>
    <lable>Cancel</lable>
    </div>
    </div>
    
    
    )} 
    
    </div>
 )
}

export default TopFold;