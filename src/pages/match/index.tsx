import React from "react";
import { usePlayerContext } from "../../hooks/PlayerContext";

import { Container, TeamCard, Divider, ContainerInput } from "./styles";

export const Match: React.FC = () => {
  const [casa, setCasa] = React.useState("");
  const [visitante, setVisitante] = React.useState("");

  const { state, dispatch } = usePlayerContext();

  return (
    <Container>
      <TeamCard>
        <ContainerInput>
          <label htmlFor="team">Casa</label>
          <select onChange={e => setCasa(e.target.value)} required value={casa}>
            <option value=""></option>
            {state.team.map(item => (
              <option value={item.name}>{item.name}</option>
            ))}
          </select>
        </ContainerInput>
      </TeamCard>

      <Divider>
        <h1>X</h1>
        <h3>00:00</h3>
        <button type="button">Iniciar</button>
      </Divider>

      <TeamCard>
        <ContainerInput>
          <label htmlFor="team">Visitante</label>
          <select
            onChange={e => setVisitante(e.target.value)}
            required
            value={visitante}
          >
            <option value=""></option>
            {state.team.map(item => (
              <option value={item.name}>{item.name}</option>
            ))}
          </select>
        </ContainerInput>
      </TeamCard>
    </Container>
  );
};
