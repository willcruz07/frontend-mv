import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
`;

export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.colors.primary};
  width: 50%;

  img {
    height: 256px;
    width: 256px;
  }

  h1 {
    color: ${props => props.theme.colors.whitePrimary};
  }

  h3 {
    color: ${props => props.theme.colors.whiteTertiary};
  }
`;

export const ContainerForm = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  width: 50%;

  padding: 5%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  height: 100%;
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

export const Button = styled.button`
  width: 350px;
  height: 48px;

  border-radius: 8px;
  font-size: large;
  font-weight: bold;

  margin-top: 24px;

  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.whitePrimary};

  transition: opacity 0.9s;

  &:hover {
    opacity: 0.7;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
`;
