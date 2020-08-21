import { combineReducers } from 'redux';
import { Type } from './testActions';

const isTest = (state = false, { type }) => {
  switch (type) {
    case Type.TEST_ON:
      return true;
    case Type.TEST_OFF:
      return false;
    default:
      return state;
  }
};

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case Type.FETCH_TEST_SUCCESS:
      return payload.test;
    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case Type.FETCH_TEST_START:
      return null;
    case Type.FETCH_TEST_ERROR:
      return payload.error;
    default:
      return state;
  }
};

export default combineReducers({
  isTest,
  films: itemsReducer,
  error: errorReducer,
});
