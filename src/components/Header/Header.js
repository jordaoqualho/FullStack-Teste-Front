import React from "react";
import logo from "img/logo.png";
import { HeaderContainer, Input } from "./Style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Header(props) {
  let { setTermoDePesquisa } = props;

  const handleInputChange = (input) => {
    setTermoDePesquisa(input.target.value);
  };

  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <Input>
        <FontAwesomeIcon icon={faSearch} />
        <input
          type="text"
          autoFocus
          placeholder="Qual material você procura?"
          onChange={handleInputChange}
        />
      </Input>

      <a href="https://cria.io/">
        <button>Sair</button>
      </a>
    </HeaderContainer>
  );
}
