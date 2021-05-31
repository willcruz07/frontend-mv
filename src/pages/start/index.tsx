import React from "react";

import logo from "../../assets/success.svg";
import { useCompetition } from "../../hooks/CompetitionContext";
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

  const authCompetition = useCompetition();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    authCompetition.start(competition);
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
              required
            />
          </ContainerInput>

          {/* <ContainerInput>
            <label htmlFor="quantityTeams">
              Quantidade de times participantes
            </label>
            <select onChange={e => setTeams(e.target.value)} required>
              <option value=""></option>
              <option value="2">2</option>
              <option value="4">4</option>
            </select>
          </ContainerInput> */}

          <Button type="submit">Entrar</Button>
        </Form>
      </ContainerForm>
    </Container>
  );
};
