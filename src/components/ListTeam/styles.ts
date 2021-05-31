import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  margin-top: 24px;
  justify-content: center;
  width: 100%;

  td,
  th {
    border: 1px solid ${props => props.theme.colors.grayPrimary};
    padding: 8px;
    text-align: center;

    button {
      padding: 8px;
      border-radius: 8px;
      background-color: ${props => props.theme.colors.danger};
      color: ${props => props.theme.colors.whiteSecondary};

      transition: 0.3s;
      &:hover {
        opacity: 0.8;
      }
    }
  }

  th {
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.blackSecondary};
  }

  tr:nth-child(even) {
    background-color: ${props => props.theme.colors.whiteSecondary};
  }
  tr:nth-child(odd) {
    background-color: ${props => props.theme.colors.whiteTertiary};
  }
`;

export const Table = styled.table`
  width: 50%;
  border-collapse: collapse;

  border: 1px solid ${props => props.theme.colors.grayPrimary};
  border-radius: 8px;
  overflow: hidden;
`;
