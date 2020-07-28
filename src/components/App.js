import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";

import "./App.module.scss";

const user = {
  name: "Max",
  admin: true,
  val: 1,
};

const App = () => {
  return (
    <div>
      <header className="header">
        <Header user={user} />
      </header>

      <main className="main">
        <Main />
      </main>
    </div>
  );
};

export default App;
