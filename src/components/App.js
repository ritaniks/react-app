import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";

import "./App.css";

const user = {
  name: "Max",
  admin: true,
  val: 1,
};

// const name = "";

const App = () => {
  return (
    <div>
      <header className="header">
        <Header user={user} />
        {/* <Header user={user}></Header> */}
        {/* {user.admin && <p>dddd</p>} */}
      </header>

      <main className="main">
        <Main />
      </main>
    </div>
  );
};

export default App;
