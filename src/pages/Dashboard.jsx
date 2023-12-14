import React, { useState } from 'react'
import {stocks} from  "../Data"
import { Link } from "react-router-dom"

function  Dashbord()  {
  //const[stocks,setStocks]=useState([])
 
    console.log(stocks)
  return (
     <div className='container'>
          <h1 >Most Active Stocks</h1>
    <div className='stocks'>

      
        <div>
        <h2>Company Name</h2>
        {stocks.map((stock)=>{
        const{name,symbol}=stock;
        return(
           
            
            <Link key ={symbol} to={'/stocks/'+symbol}>
        
            <h4>{`${name} (${symbol})`}</h4>
            </Link>
           
        )
    })} </div> 
      <div>
        <h2>Price</h2>
        {stocks.map((stock)=>{
        const{lastPrice}=stock;
        return( 
        
            <h4>{lastPrice}</h4>
          
           
        )
    })} </div> 
    
    <div>
        <h2>Change</h2>
        {stocks.map((stock)=>{
        const{change, symbol}=stock;
        let changeStyle={color:change<0 ? "red ": "green"}
        return( 
        
            <h4  style={changeStyle} >{change}</h4>
          
           
        )
    })} </div> 
    </div>
    </div>
  )
}

export default Dashbord