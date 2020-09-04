/*eslint-disable*/
import axios from 'axios';

export const getStarWarsFilms = () => axios.get(`http://swapi.dev/api/films/`);
