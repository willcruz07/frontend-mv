import React from "react";
import { deletePlayer } from "../../actions/PlayerAction";
import { usePlayerContext } from "../../hooks/PlayerContext";

import { Container, Table } from "./styles";

export const PlayerList: React.FC = () => {
  const { state, dispatch } = usePlayerContext();

  const handleDelete = (id: string) => dispatch(deletePlayer(id));

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Times</th>
            <th>Jogadores</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {state.player.map((item, index) => (
            <tr key={index}>
              <td>{item?.team}</td>
              <td>{item.name}</td>
              <td>
                <button type="button" onClick={() => handleDelete(item.id)}>
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
