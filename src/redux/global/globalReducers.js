import { combineReducers } from 'redux';
import { Type } from './globalActions';

const isModalOpenTest = (state = false, { type }) => {
  switch (type) {
    case Type.MODAL_OPEN_TEST:
      return true;
    case Type.MODAL_CLOSE_TEST:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  isModalOpenTest,
});
