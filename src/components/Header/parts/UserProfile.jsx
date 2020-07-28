import React from "react";

import css from "./UserProfile.module.scss";

const UserProfile = ({ user }) => {
  return <div className={`${css.wrapUserProfile}`}>{user.name}</div>;
};

export default UserProfile;
