/*eslint-disable*/
import * as api from '../../services/api';

import {
  fetchTestStart,
  fetchTestSuccess,
  fetchTestError,
} from './testActions';

export const fetchTest = () => (dispatch, getState) => {
  console.log(getState(), 'getState');
  dispatch(fetchTestStart());
  api
    .getStarWarsFilms()
    .then(response => {
      dispatch(fetchTestSuccess(response.data.results));
      console.log(response.data.results, 'response test data');
    })
    .catch(err => dispatch(fetchTestError(err)));
};
