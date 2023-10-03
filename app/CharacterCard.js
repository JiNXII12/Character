// components/CharacterCard.js
import React from 'react';

function CharacterCard({ character }) {
  return (
    <div>
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>Status: {character.status}</p>
      <p>Gender: {character.gender}</p>
    </div>
  );
}

export default CharacterCard;
