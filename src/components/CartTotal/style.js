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
    height: 50px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f5f5f5;
    p {
      margin-right: 10px;
    }
    h4 {
      margin-left: 10px;
    }
    height: 80px;
  }

  .cartButton {
    text-align: center;
    color: var(--grey2);
    width: 100%;
    height: 50px;
    padding: 14px 0;
    background-color: #e0e0e0;
  }
`;
