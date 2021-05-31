import React from "react";

import { CreateTeam } from "../../components/CreateTeam";
import { ListTeam } from "../../components/ListTeam";
import { Container } from "./styles";

export const TeamRegistration: React.FC = () => {
  return (
    <Container>
      <CreateTeam />
      <ListTeam />
    </Container>
  );
};
