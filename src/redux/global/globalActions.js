export const Type = {
  MODAL_OPEN_TEST: 'MODAL_OPEN_TEST',
  MODAL_CLOSE_TEST: 'MODAL_CLOSE_TEST',
};

export const modalOpenTest = () => ({
  type: Type.MODAL_OPEN_TEST,
});

export const modalCloseTest = () => ({
  type: Type.MODAL_CLOSE_TEST,
});
