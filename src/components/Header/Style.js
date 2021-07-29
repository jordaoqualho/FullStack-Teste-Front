import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: #212121;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 70px;
  justify-content: space-between;
  button {
    display: flex;
    align-items: center;
    background-color: #343a40;
    color: white;
    transition: 0.3s ease;
    padding: 10px 30px;
    text-transform: uppercase;
    :hover {
      background-color: #fff;
      color: #343a40;
    }
  }
  @media (max-width: 800px) {
    padding: 0 40px;
    img {
      display: none;
    }
    button {
      display: none;
    }
  }
`;

export const Input = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  svg {
    color: #495057;
    opacity: 0.5;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 15px;
  }
  input {
    background-color: #fff;
    border-radius: 15px;
    border: none;
    padding: 9px 50px;
    color: #495057;
    width: 30vw;
    ::placeholder {
      color: #495057;
      font-weight: 700;
      opacity: 0.5;
    }
  }
  @media (max-width: 800px) {
    width: 100%;
    input {
      width: 100%;
    }
  }
`;
