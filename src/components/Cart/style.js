import styled from "styled-components";
export const StyledCart = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media (min-width: 769px) {
    width: 30%;
    position: absolute;
    right: 20px;
    top: 162px;
  }
  .header {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: var(--primary);
    height: 65px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  div {
    width: 100%;
    padding: 6px;
    background-color: #f5f5f5;
  }

  h3 {
    font-family: "Inter";
    font-size: 1.12rem;
    color: white;
  }
  ul {
    padding: 6px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    align-items: center;
    @media (min-width: 769px) {
      width: 100%;
    }
  }
  gap: 10px;
  li {
    display: flex;
    flex-direction: row;
    min-width: 100%;
    align-items: center;
    justify-content: space-around;
    background: #f5f5f5;
    padding-right: 10px;
    @media (min-width: 769px) {
      width: 100%;
    }

    .imageContainer {
      width: 70px;
      height: 70px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #e0e0e0;

      img {
        width: 62.94px;
        height: 36.83px;
      }
    }
    button {
      width: 52px;
      height: 52px;
      background-color: transparent;
      border: none;
      font-family: "Inter";
      color: var(--grey2);
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100px;
      justify-content: flex-start;
      align-items: center;
      background-color: #f5f5f5;
      h4 {
        color: var(--grey1);
        font-size: 1rem;
        font-family: inter;
      }
      span {
        font-size: 0.5rem;
        color: var(--grey2);
        font-family: "Inter";
      }
    }
  }
`;
