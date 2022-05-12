import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSingleBeanie } from './services/fetch-utils';

export default function StarWarsDetails() {

  const params = useParams();
  const [char, setChar] = useState({});
  
  return (
    <div>StarWarsDetails</div>
  );
}
