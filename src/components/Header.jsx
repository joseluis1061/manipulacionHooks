import React from 'react'
import { useState, useContext } from 'react'
import ThemeContex from '../context/ThemeContex';

export const Header = () => {
  const[darkmode, setDarkmode] = useState(false); 
  const color = useContext(ThemeContex);
  const handleClick=()=>{
    setDarkmode(!darkmode)
  }
  return (
    <div className='header'>

      <h1 style={{color}} className='headingPrincipal'>RICK AND MORTY</h1>

      <div className="button-container">
          {/* Usando una función externa */}
          <button 
          className='button buttonHeader'        
          onClick={handleClick}>
              {darkmode? 'DarkMode1':'LiteMode1'}
          </button> 

          {/* Modificando el estado directamente       */}
          <button 
          className='button buttonHeader'  
          onClick={() => setDarkmode(!darkmode)}>
              {darkmode? 'DarkMode2':'LiteMode2'}
          </button> 
        </div>
    </div>
  )
}
