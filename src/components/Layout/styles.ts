import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;

  padding: 24px;

  height: calc(100vh - 60px - 80px);
`;

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 80px;

  h1 {
    color: ${props => props.theme.colors.grayPrimary};
  }
`;
