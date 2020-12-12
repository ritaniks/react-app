let userIds = [];

export function addUsers(id, choiseUsersIds, setChoiseUsersIds) {
  setChoiseUsersIds([...choiseUsersIds, id]);
}
export function deleteUsers(id, choiseUsersIds, setChoiseUsersIds) {
  let tmpUsersIds = [...choiseUsersIds];
  tmpUsersIds = tmpUsersIds.filter(el => el !== id);
  setChoiseUsersIds(tmpUsersIds);
}

export function addUsersIdsByGroup(select, setChoiseUsersIds, role) {
  if (!role) {
    userIds = [];
    // eslint-disable-next-line
    for (const key in select) {
      // eslint-disable-next-line
      select[key].forEach(el => userIds.push(el.id));
    }
    setChoiseUsersIds(userIds);
  } else {
    select[role].forEach(el => {
      // TODO fix
      if (!userIds.includes(el.id)) {
        userIds.push(el.id);
      }
    });
    setChoiseUsersIds(userIds);
  }

  console.log(userIds, 'userIds');
}
export function deleteUsersIdsByGroup(select, setChoiseUsersIds, role) {
  if (!role) {
    setChoiseUsersIds([]);
    userIds = [];
  } else {
    // eslint-disable-next-line
    const res = userIds.filter(el => {
      const tmpArr = select[role].map(({ id }) => id);

      if (!tmpArr.includes(el)) {
        return el;
      }
    });
    userIds = [];
    setChoiseUsersIds(res);
  }
}
