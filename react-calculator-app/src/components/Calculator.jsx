import { useState } from 'react';
import './calculator.css'
import { TiBackspaceOutline } from "react-icons/ti";

export const Calculator = () => {
  const [calculation,setCalculation]=useState("");
  const[result,setResult]=useState(0);

  const handleClick=(e)=>{
 
   setCalculation((prevCalc)=>prevCalc+e.target.value)
    
  }

  const handleExpression=()=>{
     
   try{
    setResult(eval(calculation).toString())
   } 
   catch{
     setResult("Invalid Entry!!!")
   }
   

  }

  const handleReset=()=>{
    setCalculation("")
    setResult(0)
  }

  const handleDelete=()=>{
    setCalculation(prevCalc=>prevCalc.slice(0,-1))
  }
  return (
    <div className="calculator-container">
      <div className='screen-area'>
      <div className="display">{calculation}</div>
      <div className="result">{result}</div>
    </div>  
    <div className='calculator-section'>
      <hr />
      <button className='icon' onClick={handleDelete}><TiBackspaceOutline size="30px"/></button>
      <div className="calculator-buttons">
        <button  value="C"className='light-orange' onClick={handleReset}>C</button>
        <button  value="("className='light-orange' onClick={handleClick}>(</button>
        <button  value=")"className='light-orange' onClick={handleClick}>)</button>
        <button  value="%"className='light-orange' onClick={handleClick}>%</button>
        <button  value="/"className='dark-orange' onClick={handleClick}>/</button>
        <button  value="7"className='orange' onClick={handleClick}>7</button>
        <button  value="8"className='orange' onClick={handleClick}>8</button>
        <button  value="9"className='orange' onClick={handleClick}>9</button>
        <button  value="*" className='dark-orange' onClick={handleClick}>X</button>
        <button  value="4"className='orange' onClick={handleClick}>4</button>
        <button  value="5"className='orange' onClick={handleClick}>5</button>
        <button  value="6"className='orange' onClick={handleClick}>6</button>
        <button  value="-" className='dark-orange' onClick={handleClick}>-</button>
        <button  value="1"className='orange' onClick={handleClick}>1</button>
        <button  value="2"className='orange' onClick={handleClick}>2</button>
        <button  value="3"className='orange' onClick={handleClick}>3</button>
        <button  value="+" className='dark-orange' onClick={handleClick}>+</button>
        <button  value="0"className='orange' onClick={handleClick}>0</button>
        <button  value="."className='orange' onClick={handleClick}>.</button>
        <button className='equals' onClick={handleExpression}>=</button>
      </div>
      </div>
    </div>
  );
};
