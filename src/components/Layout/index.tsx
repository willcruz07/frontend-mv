import React from "react";
import { useAppContext } from "../../hooks/AppContext";

import { MainHeader } from "../MainHeader";
import { Container, Content, ContainerHeader } from "./styles";

export const Layout: React.FC = ({ children }) => {
  const { state } = useAppContext();
  return (
    <Container>
      <MainHeader />
      <ContainerHeader>
        <h1>{state.competition.name}</h1>
      </ContainerHeader>
      <Content>{children}</Content>
    </Container>
  );
};
