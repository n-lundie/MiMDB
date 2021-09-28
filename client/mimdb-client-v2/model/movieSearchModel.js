'use strict';

export const url = 'https://api.themoviedb.org/3/search/movie?query=';
export const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
  },
};
