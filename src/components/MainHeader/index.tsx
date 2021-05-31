import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/success.svg";
import { useCompetition } from "../../hooks/CompetitionContext";

import { ContainerHeader, ContainerLogo, ContainerNav } from "./styles";

export const MainHeader: React.FC = () => {
  const competition = useCompetition();

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
          onClick={() => competition.finish()}
        >
          Sair
        </NavLink>
      </ContainerNav>
    </ContainerHeader>
  );
};
