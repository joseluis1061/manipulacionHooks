import React from 'react'
import { Character } from './Character';
import { useState, useEffect } from 'react'


function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(()=>{
    fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => setCharacters(data.results))
  },[]);

  return (
    <div className='characters '>
        <div className='characters-container container'>
        {
            characters.map((character, id) =>{
               return <Character 
                character = {character}
                key={id}
               />
            })
        }
        </div>
    </div>
  )
}
export {Characters}