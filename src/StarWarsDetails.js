import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getChar } from './services/fetch-utils';

export default function StarWarsDetails() {

  const params = useParams();
  const [char, setChar] = useState({});

  useEffect(() => {
    async function load() {
      const charDetails = await getChar(params.id);
      setChar(charDetails);
    }
    load();
  }, [params.id]);
  return (
    <>
      <Link to="/">Home</Link>
      <div className="char-details">
        <h2>{char.name}</h2>
        <p>from</p>
        <h5>{char.homeworld}</h5><h5>{char.homeworld__001}</h5>
        <img src={char.image}/>
        <p>Gender: {char.gender}</p>
        <p>Height: {char.height}</p>
        <p>Mass: {char.mass}</p>
        <p>{char.productLine && `Product Line: ${char.productLine}`}</p>
        <p>{char.manufacturer && `Manufacturer: ${char.manufacturer}`}</p>
        <p>{char.model && `Model: ${char.model}`}</p>
        <p>{char.class && `Class: ${char.class}`}</p>
        
      </div>
    </>
  );
}
