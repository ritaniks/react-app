import React from "react";
import PropTypes from "prop-types";

import css from "./Header.module.css";
import styled from "styled-components";

const Div = styled.div`
  background-color: red;
`;

const Header = ({ user }) => {

//   const getter = () => { 
//   };

  return (
    <div className={css.header}>
      <Div>header</Div>
      <p>{user.name}</p>
    </div>
  );
};

Header.defaultProps = {
  // user: "Jon",
};
Header.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Header;
