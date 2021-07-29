import React, { useEffect, useState } from "react";
import tempAlert from "components/Alert/Alert";
import axios from "axios";
import {
  Modal,
  Input,
  Buttons,
  InputImage,
  Image,
  Select,
  ModalContainerEdit,
} from "./Style";

export default function EditModal(props) {
  const conexao = axios.create({
    baseURL: process.env.REACT_APP_PORT,
  });
  const { editModal, setEditModal } = props;
  const [aberto, setAberto] = useState(false);
  const [marca, setMarca] = useState([{}]);
  const [material, setMaterial] = useState({
    _id: "",
    thumb: "",
    descricao: "",
    ativo: "",
    marca: "",
    dataInativacao: "",
  });

  useEffect(() => {
    if (editModal.open) {
      handleModal();
      setEditModal(!editModal.open);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editModal.open]);

  const doGetMarca = async () => {
    const response = await conexao.get(`/marca/`);
    setMarca(response.data);
  };

  const doGetMaterial = async (id) => {
    const response = await conexao.get(`/material/${id}`);
    setMaterial(response.data);
  };

  const doPutMaterial = async () => {
    await conexao.put(`/material/${material._id}`, material);
  };

  useEffect(() => {
    doGetMarca();
    if (material.marca) {
      document
        .getElementById(material.marca)
        .setAttribute("selected", "selected");
    }
    if (material.ativo) {
      document
        .getElementById(material.ativo)
        .setAttribute("selected", "selected");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [material.marca, material.ativo]);

  const handleModal = () => {
    if (aberto) {
      document.getElementById("modal-container-edit").style.display = "none";
    } else {
      document.getElementById("modal-container-edit").style.display = "flex";
      document.getElementById("descricao2").focus();
      doGetMaterial(editModal.materialId);
    }
    setAberto(!aberto);
  };

  const Marcas = marca.map((row, i) => {
    return (
      <option key={i} id={row.nome} value={row.nome}>
        {row.nome}
      </option>
    );
  });

  const doPostFile = async (file) => {
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    const res = await conexao.post(`/imagen/`, file, config);
    setMaterial({ ...material, thumb: res.data });
  };

  const handleChangeFile = (event) => {
    const file = event.target.files[0];
    let formData = new FormData();
    formData.append("file", file);
    doPostFile(formData);
  };

  const handleExcluir = async () => {
    await conexao.delete(`/material/${material._id}`);
    tempAlert("Material excluído com sucesso!", 1500);
    setTimeout(function () {
      window.location.reload();
    }, 1500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (material.ativo === "false") {
      setMaterial({
        ...material,
        dataInativacao: dataAtualFormatada(),
      });
    }
    doPutMaterial();
    tempAlert("Material Alterado com sucesso!", 1500);
    setTimeout(function () {
      window.location.reload();
    }, 1500);
  };

  function dataAtualFormatada() {
    var data = new Date(),
      dia = data.getDate().toString(),
      diaF = dia.length === 1 ? "0" + dia : dia,
      mes = (data.getMonth() + 1).toString(),
      mesF = mes.length === 1 ? "0" + mes : mes,
      anoF = data.getFullYear();
    return diaF + "/" + mesF + "/" + anoF;
  }
  const handleChange = (event) => {
    const novoMaterial = {
      ...material,
      [event.target.name]: event.target.value,
    };
    setMaterial(novoMaterial);
  };

  return (
    <ModalContainerEdit id="modal-container-edit">
      <Modal onSubmit={handleSubmit}>
        <h1>Editar Material</h1>
        <h2>Descrição</h2>
        <Input
          id="descricao2"
          type="text"
          defaultValue={material.descricao}
          name="descricao"
          onChange={handleChange}
          required
        />
        <h2>Marca</h2>
        <Select
          name="marca"
          onChange={handleChange}
          defaultValue={material.marca}
          required
        >
          {Marcas}
        </Select>
        <h2>Estado do Produto</h2>
        <Select
          name="ativo"
          onChange={handleChange}
          defaultValue={material.ativo}
          required
        >
          <option id="true" value="true">
            Disponível
          </option>
          <option id="false" value="false">
            Indisponível
          </option>
        </Select>
        <h2>Data de Inativação</h2>
        <Input
          readOnly
          type="text"
          name="descricao"
          value={material.dataInativacao}
          onChange={handleChange}
          required
        />
        <h2>Imagem</h2>
        <InputImage type="file" onChange={handleChangeFile} />
        <Image>
          <img src={material.thumb} alt="" />
        </Image>

        <Buttons>
          <button>Confirmar</button>
          <a href="/">
            <button type="button">Cancelar</button>
          </a>
          <button
            type="button"
            onClick={() => {
              handleExcluir();
            }}
          >
            Excluir
          </button>
        </Buttons>
      </Modal>
    </ModalContainerEdit>
  );
}
