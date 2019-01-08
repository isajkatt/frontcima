"use strict"

// Define reducers
export function moviesReducers(state = [] , action) {
  switch (action.type) {
    case "GET_MOVIES":
      return [...state, ...action.payload];
      break;
    case "GET_MOVIE_DETAILS":
      return action.payload
      break;
  }
  return state;
};