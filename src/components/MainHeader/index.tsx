import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/success.svg";
import { useAppContext } from "../../hooks/AppContext";
import { endCompetition } from "../../actions/CompetitionAction";

import { ContainerHeader, ContainerLogo, ContainerNav } from "./styles";

export const MainHeader: React.FC = () => {
  const { dispatch } = useAppContext();

  const handleFinish = () => {
    dispatch(endCompetition(new Date()));
  };

  return (
    <ContainerHeader>
      <ContainerLogo>
        <img src={logo} alt="logo" />
        <h2>Champion</h2>
      </ContainerLogo>
      <ContainerNav>
        <NavLink
          exact
          activeClassName="active"
          className="menu"
          to="/cadastrar-times"
        >
          Cadastrar times
        </NavLink>

        <NavLink
          exact
          activeClassName="active"
          className="menu"
          to="/cadastrar-jogadores"
        >
          Cadastrar jogadores
        </NavLink>

        <NavLink exact activeClassName="active" className="menu" to="/partida">
          Partida
        </NavLink>

        <NavLink
          exact
          activeClassName="active"
          className="menu"
          to="/"
          onClick={() => handleFinish()}
        >
          Sair
        </NavLink>
      </ContainerNav>
    </ContainerHeader>
  );
};
