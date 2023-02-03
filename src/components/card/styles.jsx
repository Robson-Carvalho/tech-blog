import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 16px 12px 15px 16px;

  background: #fff;
  box-shadow: 0px 0px 10px rgba(19, 19, 31, 0.05);
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  gap: 27px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  span {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    /* identical to box height */

    color: #717171;
  }

  img {
    width: 19.25px;
    height: 19.25px;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;

  h3 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    color: #1a202c;
  }

  span {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 26px;
    /* or 186% */

    color: #717171;
  }
`;
