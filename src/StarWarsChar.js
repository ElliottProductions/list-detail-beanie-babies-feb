import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

export default function StarWarsChar({ char }) {
  return (
    <Link to={`/chars/${char.id}`}>
      <div className="star-card">
        <img src={char.image}/>
        <p>{char.name}</p>
      </div>
    </Link>
  );
}
