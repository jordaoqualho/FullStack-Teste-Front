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
import axios from "axios";
import NewModal from "components/Modal/NewModal";
import EditModal from "components/Modal/EditModal";
import SkeletonLoader from "components/Loader/SkeletonLoader";

export const Home = () => {
  const conexao = axios.create({
    baseURL: process.env.REACT_APP_PORT,
  });
  const [loading, setLoading] = useState(false);
  const loadingMaterial = new Array(10);
  const [material, setMaterial] = useState([{}]);
  const [termoDePesquisa, setTermoDePesquisa] = useState("");
  const [newModal, setNewModal] = useState(false);
  const [editModal, setEditModal] = useState({ open: false, materialId: "" });

  useEffect(() => {
    firstDoGetMaterial();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    doGetMaterial(termoDePesquisa);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [termoDePesquisa]);

  const firstDoGetMaterial = async () => {
    setLoading(true);
    setTimeout(async () => {
      doGetMaterial(termoDePesquisa);
      setLoading(false);
    }, 1500);
  };

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
            <img src={row.thumb} alt="" />
            <MaterialText>
              {row.ativo === "true" ? (
                <span id="on">disponível</span>
              ) : (
                <span id="off">indisponível</span>
              )}
              <h2>{row.descricao}</h2>
              <p>{row.marca}</p>
            </MaterialText>
          </Material>
        );
      })
    );

  return (
    <>
      <Header setTermoDePesquisa={setTermoDePesquisa}></Header>
      <Wraper>
        <Container>
          {loading ? (
            loadingMaterial.fill(10).map((row, i) => {
              return (
                <Material key={i}>
                  <SkeletonLoader></SkeletonLoader>)
                </Material>
              );
            })
          ) : (
            <>{materialData}</>
          )}
        </Container>
        <EditModal
          setEditModal={setEditModal}
          editModal={editModal}
        ></EditModal>
        <NewModal setNewModal={setNewModal} newModal={newModal}></NewModal>
      </Wraper>
      <AdderContainer>
        <AdderButton onClick={() => setNewModal(!newModal)}>
          <h1>+</h1>
        </AdderButton>
      </AdderContainer>
    </>
  );
};
