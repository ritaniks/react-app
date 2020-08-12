import axios from 'axios';

import {
  fetchTestStart,
  fetchTestSuccess,
  fetchTestError,
} from './testActions';

export const fetchTest = () => dispatch => {
  dispatch(fetchTestStart());

  axios
    .get(`http://swapi.dev/api/films/`)
    .then(response => {
      dispatch(fetchTestSuccess(response.data.results));
      console.log(response.data.results, 'response test data');
    })
    .catch(err => dispatch(fetchTestError(err)));
};
