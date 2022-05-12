import React from 'react';
import StarWarsChar from './StarWarsChar';

export default function StarWarsList({ starWarsChars }) {
  return (
    <div className="char-list">
      {starWarsChars.map((char) => <StarWarsChar key={char.id} char={char}/>)}
    </div>
  );
}
