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

      color: #fff;
    }
  }
  form {
    width: 100%;
    height: 40px;
    padding: 11px 9.19px;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 13.19px;

    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px;

    input {
      flex-grow: 1;
      outline: none;
      background-color: transparent;
      border: none;

      color: #fff;

      &::placeholder {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        /* identical to box height */

        color: #fff;

        opacity: 0.5;
      }
    }

    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      img {
        width: 15.63px;
        height: 15.63px;
      }
    }
  }
`;
