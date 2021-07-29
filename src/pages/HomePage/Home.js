import React, { useState, useEffect } from "react";
import Header from "components/Header/Header";
import {
  Container,
  Material,
  MaterialText,
  Wraper,
  AdderButton,
  AdderContainer,
  Paragraf,
} from "./Style";
import pedra from "img/pedra.jpg";
import axios from "axios";

import NewModal from "components/Modal/NewModal";
import EditModal from "components/Modal/EditModal";

export const Home = () => {
  const conexao = axios.create({
    baseURL: "http://localhost:8080/",
  });
  const [material, setMaterial] = useState([{}]);
  const [termoDePesquisa, setTermoDePesquisa] = useState("");
  const [newModal, setNewModal] = useState(false);
  const [editModal, setEditModal] = useState({ open: false, materialId: "" });

  useEffect(() => {
    doGetMaterial(termoDePesquisa);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [termoDePesquisa]);

  const doGetMaterial = async (termoDePesquisa) => {
    const response = await conexao.get(
      `/material/?descricao=${termoDePesquisa}`
    );
    setMaterial(response.data);
  };

  const materialData =
    material.length === 0 ? (
      <Paragraf>Nada encontrado!</Paragraf>
    ) : (
      material.map((row, i) => {
        return (
          <Material
            key={i}
            onClick={() => setEditModal({ open: true, materialId: row._id })}
          >
            <img src={pedra} alt="" />
            <MaterialText>
              {row.ativo === "true" ? (
                <span id="on">disponível</span>
              ) : (
                <span id="off">indisponível</span>
              )}
              <h2>{row.descricao}</h2>
              <p>{row.marca}</p>
              <p></p>
            </MaterialText>
          </Material>
        );
      })
    );

  return (
    <>
      <Header setTermoDePesquisa={setTermoDePesquisa}></Header>
      <Wraper>
        <Container>{materialData}</Container>
        <AdderContainer>
          <AdderButton onClick={() => setNewModal(!newModal)}>
            <h1>+</h1>
          </AdderButton>
        </AdderContainer>
        <EditModal
          setEditModal={setEditModal}
          editModal={editModal}
        ></EditModal>
        <NewModal setNewModal={setNewModal} newModal={newModal}></NewModal>
      </Wraper>
    </>
  );
};
