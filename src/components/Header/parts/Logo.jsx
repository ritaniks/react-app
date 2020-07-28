import React from "react";
import css from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={css.wrapLogo} role="banner">
      <img src="./logo" alt="logo" />
    </div>
  );
};

export default Logo;
