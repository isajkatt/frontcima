"use strict"
import axios from 'axios';

export function getMovies(movie) {
  return function(dispatch){
    axios.get("https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=fdf2401578138cdf57a0a108e49211d5")
      .then(function(response){
        dispatch({type:"GET_MOVIES", payload:response.data.results})
      })
      .catch(function(err){
        dispatch({type:"GET_MOVIES_REJECTED", payload: err})
      })
  }
}