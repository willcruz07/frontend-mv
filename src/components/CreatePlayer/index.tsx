/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import { createPlayer } from "../../actions/PlayerAction";
import { usePlayerContext } from "../../hooks/PlayerContext";

import { ContainerForm, ContainerInput } from "./styles";

export const CreatePlayer: React.FC = () => {
  const [team, setTeam] = React.useState("");
  const [player, setPlayer] = React.useState("");

  const { state, dispatch } = usePlayerContext();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (team.trim() === "") return;

    dispatch(
      createPlayer({
        id: new Date().getTime().toString(),
        name: player,
        team: team,
      }),
    );

    setPlayer("");
    setTeam("");
  };

  return (
    <ContainerForm>
      <ContainerInput>
        <label htmlFor="team">Time</label>
        <select onChange={e => setTeam(e.target.value)} required value={team}>
          <option value=""></option>
          {state.team.map(item => (
            <option value={item.name}>{item.name}</option>
          ))}
        </select>
      </ContainerInput>

      <ContainerInput>
        <label htmlFor="playerName">Nome do jogador</label>
        <input
          id="playerName"
          type="text"
          value={player}
          required
          onChange={e => setPlayer(e.target.value)}
        />
      </ContainerInput>
      <button type="submit" onClick={handleSubmit}>
        Adicionar
      </button>
    </ContainerForm>
  );
};
