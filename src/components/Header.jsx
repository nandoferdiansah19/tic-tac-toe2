import React from "react";
import logoImg from "../../public/game-logo.png";
const Header = () => {
  return (
    <header>
      <img src={logoImg} />
      <h1>Tic-Tac-Toe</h1>
    </header>
  );
};

export default Header;
