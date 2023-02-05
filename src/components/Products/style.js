import styled from "styled-components";
export const StyledProduct = styled.li`
  width: 30%;
  min-width: 300px;
  height: 379px;
  border: 2px solid var(--grey3);
  display: flex;
  flex-direction: column;
  gap: 20px;

  border-radius: 8px;

  .imgContainer {
    background-color: #f5f5f5;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 162px;
      height: 162px;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0 10px;
    gap: 12px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    span {
      color: var(--primary);
    }
  }
`;
