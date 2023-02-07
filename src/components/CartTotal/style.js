import styled from "styled-components";
export const StyledCartTotal = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 6px;
  justify-content: space-between;
  border-top: 2px solid #e0e0e0;
  div {
    height: 120px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f5f5f5;
  }

  h4 {
    font-family: "Inter";
    font-size: 0.2rem;
    margin-left: 10px;
  }
  height: 80px;

  .cartButton {
    text-align: center;
    color: var(--grey2);
    width: 100%;
    height: 80px;
    padding: 14px 0;
    background-color: #e0e0e0;
    font-family: "Inter";
  }
`;
