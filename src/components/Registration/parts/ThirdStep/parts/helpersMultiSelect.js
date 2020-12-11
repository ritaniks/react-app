export function addUsers(id, choiseUsersIds, setChoiseUsersIds) {
  //   console.log(id, 'id');
  setChoiseUsersIds([...choiseUsersIds, id]);
}
export function deleteUsers(id, choiseUsersIds, setChoiseUsersIds) {
  let tmpUsersIsd = [...choiseUsersIds];
  tmpUsersIsd = tmpUsersIsd.filter(el => el !== id);

  setChoiseUsersIds(tmpUsersIsd);
}
export function updateUsers() {}
export function addUsersByGroup() {}
export function deleteUsersByGroup() {}
export function updateUsersByGroup() {}
