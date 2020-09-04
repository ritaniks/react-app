export const Type = {
  TEST_ON: 'TEST_ON',
  TEST_OFF: 'TEST_OFF',

  FETCH_TEST_START: 'FETCH_TEST_START',
  FETCH_TEST_SUCCESS: 'FETCH_TEST_SUCCESS',
  FETCH_TEST_ERROR: 'FETCH_TEST_ERROR',
};

// turn bool
export const testOn = () => ({
  type: Type.TEST_ON,
});
export const testOff = () => ({
  type: Type.TEST_OFF,
});

// Fetch Films
export const fetchTestStart = () => ({
  type: Type.FETCH_TEST_START,
});

export const fetchTestSuccess = test => ({
  type: Type.FETCH_TEST_SUCCESS,
  payload: {
    test,
  },
});

export const fetchTestError = error => ({
  type: Type.FETCH_TEST_ERROR,
  payload: {
    error,
  },
});
