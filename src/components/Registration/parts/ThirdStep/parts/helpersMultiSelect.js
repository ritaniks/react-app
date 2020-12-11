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

export function addUsersIdsByGroup(select, setChoiseUsersIds, role) {
  if (!role) {
    // eslint-disable-next-line
    for (const key in select) {
      // eslint-disable-next-line
      select[key].forEach(el => userIds.push(el.id));
    }
  } else {
    // console.log(role, 'role add');
    select[role].forEach(el => userIds.push(el.id));
  }

  console.log(userIds, 'userIds');
}
export function deleteUsersIdsByGroup(select, setChoiseUsersIds, role) {
  userIds = [];
  if (!role) {
    setChoiseUsersIds(userIds);
    console.log(userIds, 'userIds');
  } else {
    console.log(role, 'role delete');
  }
  //   console.log('delete by group');
}
// export function updateUsersByGroup() {}
