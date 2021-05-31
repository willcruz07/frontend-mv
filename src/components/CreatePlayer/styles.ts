import styled from "styled-components";

export const ContainerForm = styled.form`
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

  button {
    width: 350px;
    height: 32px;
    border-radius: 8px;

    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.whitePrimary};

    font-weight: 600;

    transition: 0.7s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
`;
