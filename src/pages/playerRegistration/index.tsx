import React from "react";

import { CreatePlayer } from "../../components/CreatePlayer";
import { PlayerList } from "../../components/PlayerList";
import { Container } from "./styles";

export const PlayerRegistration: React.FC = () => {
  return (
    <Container>
      <CreatePlayer />
      <PlayerList />
    </Container>
  );
};
