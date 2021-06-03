import React from "react";
import { useAppContext } from "../../hooks/AppContext";
import {
  Container,
  TeamCard,
  Divider,
  ContainerInput,
  ContainerListPlayers,
  ContainerTeams,
  ContainerPlayers,
} from "./styles";

export const Match: React.FC = () => {
  const [house, setHouse] = React.useState("");
  const [visitor, setVisitor] = React.useState("");
  const [scoreHouse, setScoreHouse] = React.useState(0);
  const [scoreVisitor, setScoreVisitor] = React.useState(0);
  const [second, setSecond] = React.useState(0);
  const [isMatch, setIsMatch] = React.useState(false);

  const { state } = useAppContext();

  const formatTimer = (time: number): string => {
    if (time < 10) return "0" + String(time);
    else return String(time);
  };

  const playersPearTeam = (team: string): number => {
    return state.player.filter(players => {
      return players.team === team;
    }).length;
  };

  const matchResult = () => {
    if (scoreHouse > scoreVisitor) {
      alert("O time da casa venceu!!!");
      return;
    } else if (scoreVisitor > scoreHouse) {
      alert("O time visitante venceu!!!");
    } else alert("Partida empatada");
  };

  const startTimer = () => {
    setIsMatch(true);
    let seconds = 0;

    const interval = setInterval(() => {
      seconds++;
      setSecond(seconds);

      if (seconds == 5) {
        setSecond(0);
        clearInterval(interval);
        matchResult();
      }
    }, 1000);
  };

  const startGame = () => {
    setScoreVisitor(0);
    setScoreHouse(0);

    if (playersPearTeam(house) < 5 || playersPearTeam(visitor) < 5) {
      alert("Mínimo de 5 jogadores por equipe");
      return;
    }

    startTimer();
  };

  return (
    <Container>
      <TeamCard>
        <ContainerTeams>
          <ContainerInput>
            <label htmlFor="team">Casa</label>
            <select
              onChange={e => setHouse(e.target.value)}
              required
              value={house}
            >
              <option value=""></option>
              {state.team.map(item => (
                <option value={item.name}>{item.name}</option>
              ))}
            </select>
          </ContainerInput>
          <ContainerListPlayers>
            {state.player.map(player => {
              if (player.team == house) {
                return (
                  <ContainerPlayers>
                    <h2>{player.name}</h2>
                  </ContainerPlayers>
                );
              }
            })}
          </ContainerListPlayers>
        </ContainerTeams>
        <button
          disabled={!isMatch}
          type="button"
          onClick={() => setScoreHouse(scoreHouse + 1)}
        >
          GooOoOl
        </button>
      </TeamCard>

      <Divider>
        <h1>
          {scoreHouse} X {scoreVisitor}
        </h1>
        <h3>00:{formatTimer(second)}</h3>
        <button type="button" onClick={() => startGame()}>
          Iniciar
        </button>
      </Divider>

      <TeamCard>
        <ContainerTeams>
          <ContainerInput>
            <label htmlFor="team">Visitante</label>
            <select
              onChange={e => setVisitor(e.target.value)}
              required
              value={visitor}
            >
              <option value=""></option>
              {state.team.map(item => (
                <option value={item.name}>{item.name}</option>
              ))}
            </select>
          </ContainerInput>
          <ContainerListPlayers>
            {state.player.map(player => {
              if (player.team == visitor) {
                return (
                  <ContainerPlayers>
                    <h2>{player.name}</h2>
                  </ContainerPlayers>
                );
              }
            })}
          </ContainerListPlayers>
        </ContainerTeams>
        <button
          disabled={!isMatch}
          type="button"
          onClick={() => setScoreVisitor(scoreVisitor + 1)}
        >
          GooOoOl
        </button>
      </TeamCard>
    </Container>
  );
};
