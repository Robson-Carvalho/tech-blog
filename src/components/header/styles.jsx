import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 200px;
  background: linear-gradient(90deg, #574ae8 0%, #3ea1db 100%);
  padding: 48px 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Nav = styled.nav`
  max-width: 900px;
  width: 100%;

  h1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 41px;

    span {
      font-family: "Lexend Deca";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      /* identical to box height */

      color: #ffffff;
    }
  }
`;
