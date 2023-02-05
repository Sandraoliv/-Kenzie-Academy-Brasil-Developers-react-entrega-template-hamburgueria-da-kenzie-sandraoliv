import styled from "styled-components";
export const StyledProductsList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
  overflow-x: auto;

  margin-top: 29px;

  @media (min-width: 769px) {
    width: 100%;
    flex-direction: row;
    overflow: hidden;
    flex-wrap: wrap;
  }
`;
