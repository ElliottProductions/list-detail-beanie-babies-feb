import React from 'react';
import StarWarsList from './StarWarsList';
import { getStarWars } from './services/fetch-utils';
import { useState, useEffect } from 'react';

export default function StarWarsPage() {

  const [starWarsChars, setStarWarsChars] = useState([]);
  const [page, setPage] = useState(1);

  const perPage = 19;
  
  useEffect(() => {
    async function fetch() {
      const from = page * perPage - perPage;
      const to = page * perPage;
      const chars = await getStarWars(from, to);
      setStarWarsChars(chars);

    }
    

    fetch();
  }, [page]);

  return (
    <div>
      <p>Star Wars Characters</p>
      <button disabled={page <= 1}
        onClick={() => setPage(page - 1)}>Prev</button>
      <button onClick={() => setPage(page + 1)}>Next</button>

      <StarWarsList starWarsChars={starWarsChars}/>
    </div>
  );
}
