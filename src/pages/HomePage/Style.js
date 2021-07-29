import styled from "styled-components";

export const Paragraf = styled.p`
  color: #fff;
  font-size: 20px;
`;

export const Wraper = styled.div`
  background-color: #212121;
  position: relative;
  width: 100%;
  height: calc(100vh - 60px);
`;

export const Container = styled.div`
  background-color: #212121;
  max-height: calc(100vh - 120px);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #343a40;
  }
  ::-webkit-scrollbar-thumb {
    background: black;
  }
`;

export const Material = styled.div`
  background-color: #fff;
  border-radius: 20px;
  color: #212121;
  cursor: pointer;
  height: 270px;
  margin: 10px 10px;
  width: 250px;
  img {
    height: 70%;
    width: 100%;
    border-radius: 20px 20px 0 0;
  }
`;

export const MaterialText = styled.div`
  span {
    font-size: 12px;
    color: white;
    padding: 0px 15px;
  }
  #on {
    background-color: #7ed321;
  }
  #off {
    background-color: #495057;
  }
  padding: 5px 20px;
  h2 {
    margin-bottom: -5px;
  }
`;

export const AdderContainer = styled.div`
  position: relative;
  background-color: blue;
`;

export const AdderButton = styled.button`
  position: absolute;
  background-color: #7ed321;
  right: 11%;
  bottom: 0px;
  cursor: pointer;
  color: #fff;
  border-radius: 50px;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  font-size: 20px;
  transition: 0.3s ease;
  :hover {
    background-color: #495057;
  }
`;
