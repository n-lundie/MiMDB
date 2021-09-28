'use strict';

export const url = 'https://api.themoviedb.org/3/movie/popular';
export const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDk0NzA3YjUxOTJmMmMyYjlkZWFiMWQ2MGU1MDBkOSIsInN1YiI6IjYxNDhjYTRlZTU1OTM3MDA4OWU5NDVmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3GZYKy0xP0orWnvnPj-lJ9PJ_2N-03QckqBfBCsdl5A',
  },
};
