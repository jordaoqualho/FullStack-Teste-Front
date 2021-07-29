import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  display: none;
  background-color: rgba(13, 17, 17, 0.05);
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(3px);
  height: calc(100vh - 60px);
`;

export const Modal = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 50px;
  position: absolute;
  border-radius: 20px;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  background-color: #343a40;
  h1 {
    color: white;
  }
  h2 {
    color: white;
    font-size: 14px;
  }
`;

export const Input = styled.input`
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 5px 0 15px 0;
`;

export const Image = styled.div`
  display: flex;
  border-radius: 5px;
  height: 90px;
  margin-bottom: 5px;
  margin-top: 5px;
  img {
    height: 100%;
  }
`;

export const InputImage = styled.input`
  margin-top: 5px;
  background-color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 5px 0 0px 0;
`;

export const Select = styled.select`
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 5px 0 15px 0;
`;

export const Buttons = styled.div`
  display: flex;
  margin-top: 20px;
  cursor: pointer;
  button {
    background-color: white;
    color: black;
    font-weight: 700;
    padding: 10px 30px;
    border-radius: 5px;
    margin-right: 30px;
    :hover {
      color: #fff;
      background-color: #495057;
    }
    a {
      color: inherit;
      padding: 10px 5px;
    }
  }
`;
