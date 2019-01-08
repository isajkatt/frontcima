"use strict"

// Define reducers
export function moviesReducers(state = { movies: [{
  id: 1,
  title: 'the 1 Movie title',
  description: 'description'
},
{
  id: 2,
  title: 'the 2 Movie title',
  description: 'description'
}] }, action) {
  switch (action.type) {
    case "GET_MOVIES":
      return {...state, movies:[...state.movies]};
      break;
  }
  return state;
};