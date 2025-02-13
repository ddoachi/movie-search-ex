import fetch from 'node-fetch';

export default async function handler(request, response) {
  const { title, page, id } = JSON.parse(request.body);
  const url = id
  ?  `https://www.omdbapi.com?apikey=f25e888&i=${id}&plot=full`
  : `https://www.omdbapi.com?apikey=f25e888&s=${title}&page=${page}`

  const res = await fetch(url);
  const json = await res.json();
  response.status(200).json(json)
}