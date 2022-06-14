import React from 'react'
import { Character } from './Character';
import { Search } from './Search';
import useCharacters from '../hooks/useCharacters'
import { useState, useReducer, useMemo, useRef, useCallback } from 'react';

//Estado inicial del reducer
const initialState = {
  favorites:[],
}

//URL API
const API = 'https://rickandmortyapi.com/api/character/';

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
  //const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favoritesReducer, initialState);
  const [search, setSearch] = useState('');
  const searchInput = useRef(null)
  const characters = useCharacters(API);
  //Agregar favoritos
  const hadleClick = favorite =>{
    dispatch({
      type: 'ADD_TO_FAVORITE',
      payload:favorite
    })
  }
  //Llamado Api
  // useEffect(()=>{
  //   fetch('https://rickandmortyapi.com/api/character/')
  //       .then(response => response.json())
  //       .then(data => setCharacters(data.results)) 
  // },[]);

  //Filtrar por busqueda
  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, [])

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

      
      <Search
        search = {search}
        searchInput = {searchInput}
        handleSearch = {handleSearch}
      />
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