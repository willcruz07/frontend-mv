import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  justify-content: space-around;
  padding: 24px;
  width: 100%;

  label {
    margin-left: 8px;
    font-weight: 700;
    color: ${props => props.theme.colors.grayTertiary};
  }

  input,
  select {
    border: 1px solid ${props => props.theme.colors.grayPrimary};

    width: 350px;
    height: 48px;

    padding: 8px;
    border-radius: 8px;
    margin-bottom: 8px;

    color: ${props => props.theme.colors.blackTertiary};

    &:hover {
      border: 1px solid ${props => props.theme.colors.primary};
    }

    &:focus {
      border: 1px solid ${props => props.theme.colors.primary};
    }
  }
`;

export const TeamCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;

  padding: 24px;

  background-color: ${props => props.theme.colors.whiteTertiary};
  border: 1px solid ${props => props.theme.colors.grayPrimary};
  border-radius: 8px;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  h2 {
    color: ${props => props.theme.colors.blackTertiary};
    font-size: large;
    font-weight: 400;
  }

  button {
    height: 48px;
    border-radius: 8px;
    background-color: #0f6537;
    color: ${props => props.theme.colors.whitePrimary};
    font-weight: 600;
    font-size: large;

    &:disabled {
      background-color: ${props => props.theme.colors.grayPrimary};
      color: ${props => props.theme.colors.graySecondary};
    }
  }
`;

export const ContainerPlayers = styled.div`
  margin-bottom: 16px;
  border-bottom: solid 1px ${props => props.theme.colors.grayPrimary};
`;

export const Divider = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 60px;
    color: ${props => props.theme.colors.blackPrimary};
  }

  h3 {
    color: ${props => props.theme.colors.blackSecondary};
  }

  button {
    width: 150px;
    height: 48px;
    border-radius: 8px;
    margin-top: 24px;

    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.whitePrimary};
    font-weight: 600;

    transition: opacity 0.8s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const ContainerTeams = styled.div``;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const ContainerListPlayers = styled.div``;
