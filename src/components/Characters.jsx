import React from 'react'
import { Character } from './Character';
import { useState, useEffect, useReducer, useMemo } from 'react'

//Estado inicial del reducer
const initialState = {
  favorites:[],
}

//Funcion reducer
const favoritesReducer = (state, action)=>{
  switch(action.type){
    case 'ADD_TO_FAVORITE':
      return{
        ...state, 
        favorites:[...state.favorites, action.payload]
      }
      default:
        return state;
  }
}

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favoritesReducer, initialState);
  const [search, setSearch] = useState('');

  //Agregar favoritos
  const hadleClick = favorite =>{
    dispatch({
      type: 'ADD_TO_FAVORITE',
      payload:favorite
    })
  }
  //Llamado Api
  useEffect(()=>{
    fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => setCharacters(data.results)) 
  },[]);

  //Filtrar por busqueda
  const handleSearch = event =>{
    setSearch(event.target.value)
  }
  // const filtederedUsers = characters.filter((user)=>{
  //   return user.name.toLowerCase().includes(search.toLowerCase());
  // });

  const filtederedUsers = useMemo(()=>
    characters.filter((user)=>{
      return user.name.toLowerCase().includes(search.toLowerCase())
    }),
    [characters, search]
  )

  return (
    <div className='characters'>     

      {
      favorites.favorites.length>0? 
      (
        <div className='characters-container container'>
        <h2>Favorites Characters</h2>
        {
        favorites.favorites.map((favorite, id) =>         
          <Character 
            character = {favorite}
            key={id}
            hadleClick = {hadleClick}
          />)}
        </div>  
      )
      :
      (<h2>Not favorites characters</h2>) 
      
      }
      <h2>Characters</h2>
      <div className='Search'>
        <input 
          type="text" 
          value={search} 
          onChange={handleSearch}
          />
      </div>
      <div className='characters-container container'>
      {
        filtederedUsers.map((character, id) =>{
          return <Character 
            character = {character}
            key={id}
            hadleClick = {hadleClick}
          />
        })
      }
      </div>
    </div>
  )
}
export {Characters}