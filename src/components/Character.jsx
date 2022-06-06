import React from 'react'

export const Character = ({character}) => {
  return (

    <div className='character-card'>        
        <img src={character.image} alt="image character " />
        <div className="character-text">
            <h2>{character.name}</h2>
            <p><span>Location: </span>{character.location.name}</p>
            <p><span>Origin: </span>{character.origin.name}</p>
            <p><span>Status: </span>{character.status}</p>
        </div>        
    </div>
    
  )
}
