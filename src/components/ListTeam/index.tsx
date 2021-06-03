import React from "react";
import { useAppContext } from "../../hooks/AppContext";
import { deleteTeam } from "../../actions/TeamActions";
import { Table, Container } from "./styles";

export const ListTeam: React.FC = () => {
  const { state, dispatch } = useAppContext();

  const handleDelete = (id: string) => dispatch(deleteTeam(id));

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Times</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {state.team.map((item, index) => (
            <tr key={index}>
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
