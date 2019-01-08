"use strict"

// Define reducers
export function moviesReducers(state = { movies: [] }, action) {
  switch (action.type) {
    case "GET_MOVIES":
      return {...state, movies:[...action.payload]};
      break;
  }
  return state;
};