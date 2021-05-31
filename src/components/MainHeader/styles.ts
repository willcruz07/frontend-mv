import styled from "styled-components";

export const ContainerHeader = styled.div`
  display: flex;

  justify-content: space-between;

  width: 100%;
  height: 60px;

  padding: 8px 16px;

  background-color: ${props => props.theme.colors.primary};
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
  }

  h2 {
    margin-left: 8px;
    color: ${props => props.theme.colors.whiteSecondary};
  }
`;

export const ButtonFinish = styled.button`
  width: 150px;
  border-radius: 8px;

  font-weight: 700;

  background-color: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.whitePrimary};
`;

export const ContainerNav = styled.div`
  display: flex;

  align-items: center;

  .menu {
    margin-left: 16px;
    text-decoration: none;
    color: ${props => props.theme.colors.whitePrimary};
  }

  .active {
    align-items: center;
    border-bottom: 2px solid #fff;
    padding: 8px;
  }
`;
