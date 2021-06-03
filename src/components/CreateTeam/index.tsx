/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import { createTeam } from "../../actions/TeamActions";
import { useAppContext } from "../../hooks/AppContext";

import { ContainerForm, ContainerInput } from "./styles";

export const CreateTeam: React.FC = () => {
  const [team, setTeam] = React.useState("");
  const { dispatch } = useAppContext();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (team.trim() === "") return;

    dispatch(
      createTeam({
        id: new Date().getTime().toString(),
        name: team,
      }),
    );

    setTeam("");
  };

  return (
    <ContainerForm>
      <ContainerInput>
        <label htmlFor="teamName">Nome do time</label>
        <input
          id="teamName"
          type="text"
          value={team}
          required
          onChange={e => setTeam(e.target.value)}
        />
      </ContainerInput>
      <button type="submit" onClick={handleSubmit}>
        Adicionar
      </button>
    </ContainerForm>
  );
};
