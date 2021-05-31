import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

export const ContainerCard = styled.div`
  display: flex;
  flex: 1;
`;

export const ButtonStart = styled.button`
  width: 400px;
  height: 80px;

  font-weight: 700;
  font-size: 24px;

  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.whitePrimary};

  border-radius: 8px;

  transition: opacity 0.9s;

  &:hover {
    opacity: 0.7;
  }
`;
