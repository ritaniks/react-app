export default function selectUserIds(select) {
  const newArr = [];

  const keys = Object.keys(select);

  // eslint-disable-next-line array-callback-return
  keys.map(el => {
    // eslint-disable-next-line array-callback-return
    select[el].map(e => {
      if (e.checked === true) {
        newArr.push(e.id);
      }
    });
  });

  return newArr;
}
