import React from "react";
import { useCompetition } from "../../hooks/CompetitionContext";

import { MainHeader } from "../MainHeader";
import { Container, Content, ContainerHeader } from "./styles";

export const Layout: React.FC = ({ children }) => {
  const competition = useCompetition();
  return (
    <Container>
      <MainHeader />
      <ContainerHeader>
        <h1>{competition.name}</h1>
      </ContainerHeader>
      <Content>{children}</Content>
    </Container>
  );
};
