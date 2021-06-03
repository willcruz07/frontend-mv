import React from "react";

import logo from "../../assets/success.svg";
import { startCompetition } from "../../actions/CompetitionAction";
import { useAppContext } from "../../hooks/AppContext";
import {
  Container,
  ContainerLogo,
  ContainerForm,
  Form,
  Button,
  ContainerInput,
} from "./styles";

export const Start: React.FC = () => {
  const [competition, setCompetition] = React.useState("");

  const { dispatch } = useAppContext();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(
      startCompetition({
        id: new Date().getTime().toString(),
        name: competition,
        isActive: true,
        start: new Date(),
      }),
    );
  };

  return (
    <Container>
      <ContainerLogo>
        <img src={logo} alt="" />
        <h1>Champion</h1>
        <h3>Sua competição esta aqui!</h3>
      </ContainerLogo>
      <ContainerForm>
        <Form onSubmit={handleSubmit}>
          <ContainerInput>
            <label htmlFor="name">Nome da competição</label>
            <input
              id="name"
              type="text"
              placeholder="Informe o nome da competição"
              onChange={e => setCompetition(e.target.value)}
              value={competition}
              required
            />
          </ContainerInput>
          <Button type="submit">Entrar</Button>
        </Form>
      </ContainerForm>
    </Container>
  );
};
