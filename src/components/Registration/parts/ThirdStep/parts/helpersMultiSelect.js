let userIds = [];

export function addUsers(id, choiseUsersIds, setChoiseUsersIds) {
  //   console.log(id, 'id');
  setChoiseUsersIds([...choiseUsersIds, id]);
}
export function deleteUsers(id, choiseUsersIds, setChoiseUsersIds) {
  let tmpUsersIsd = [...choiseUsersIds];
  tmpUsersIsd = tmpUsersIsd.filter(el => el !== id);
  setChoiseUsersIds(tmpUsersIsd);
}
// export function updateUsers() {}
export function addUsersIdsByGroup(select, setChoiseUsersIds, role) {
  // eslint-disable-next-line no-restricted-syntax
  for (const key in select) {
    if (!role) {
      // eslint-disable-next-line no-loop-func
      select[key].forEach(el => userIds.push(el.id));
    }
  }
  //   else {
  //     console.log('role true');
  //   }

  console.log(userIds, 'userIds');
}
export function deleteUsersIdsByGroup(select, setChoiseUsersIds, role) {
  userIds = [];
  if (!role) {
    setChoiseUsersIds(userIds);
    console.log(userIds, 'userIds');
  } else {
    console.log('role true');
  }
  //   console.log('delete by group');
}
// export function updateUsersByGroup() {}
