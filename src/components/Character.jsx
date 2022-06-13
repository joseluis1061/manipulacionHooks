import React from 'react'

export const Character = ({character, hadleClick}) => {
 
  return (

    <div className='character-card'>

      <figure className='figure-container'>
        <img src={character.image} alt="image character " />
      </figure>
      <div className="character-text">
          <h2>{character.name}</h2>
          <p><span>Location: </span>{character.location.name}</p>
          <p><span>Origin: </span>{character.origin.name}</p>
          <p><span>Status: </span>{character.status}</p>
      </div>        
      <button type='button'
        onClick={()=>hadleClick(character)}
      >
        Agregar a Favorito
      </button>
    </div>
    
  )
}
