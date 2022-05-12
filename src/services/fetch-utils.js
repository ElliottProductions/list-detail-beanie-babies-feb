import { client } from './client';

export async function getStarWars(from, to) {
  const response = await client
    .from('starwars')
    .select()
    .range(from, to);
  
  return response.body;
}

export async function getChar(id) {
  const response = await client
    .from('starwars')
    .select()
    .match({ id })
    .single();
  
  return response.body;
}