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
  ModalContainerNew,
} from "./Style";

export default function NewModal(props) {
  const conexao = axios.create({
    baseURL: process.env.REACT_APP_PORT,
  });
  const { newModal, setNewModal } = props;
  const [aberto, setAberto] = useState(false);
  const [marca, setMarca] = useState([{}]);
  const [material, setMaterial] = useState({
    thumb: "",
    descricao: "",
    marca: "Portobello",
    ativo: "true",
    dataInativacao: "",
  });

  useEffect(() => {
    if (newModal) {
      handleModal();
      setNewModal(!newModal);
    }
    document.getElementById("descricao").focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newModal]);

  const doGetMarca = async () => {
    const response = await conexao.get(`/marca/`);
    setMarca(response.data);
  };

  const doPostMaterial = async () => {
    await conexao.post(`/material/`, material);
  };

  const doPostFile = async (file) => {
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    const res = await conexao.post(`/imagen/`, file, config);
    setMaterial({ ...material, thumb: res.data });
  };

  useEffect(() => {
    doGetMarca();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [material.thumb]);

  useEffect(() => {
    if (material.ativo === "false") {
      setMaterial({ ...material, dataInativacao: dataAtualFormatada() });
    } else {
      setMaterial({ ...material, dataInativacao: "Material está ativo!" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [material.ativo]);

  const handleModal = () => {
    if (aberto) {
      document.getElementById("modal-container").style.display = "none";
    } else {
      document.getElementById("modal-container").style.display = "flex";
    }
    setAberto(!aberto);
  };

  const Marcas = marca.map((row, i) => {
    return (
      <option key={i} value={row.nome}>
        {row.nome}
      </option>
    );
  });

  const handleChangeFile = (event) => {
    const file = event.target.files[0];
    let formData = new FormData();
    formData.append("file", file);
    doPostFile(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    doPostMaterial();
    tempAlert("Material Adicionado com sucesso!", 1500);
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
    const dataAtaul = diaF + "/" + mesF + "/" + anoF;
    return dataAtaul.toString();
  }

  const handleChange = (event) => {
    const novoMaterial = {
      ...material,
      [event.target.name]: event.target.value,
    };
    setMaterial(novoMaterial);
  };

  return (
    <ModalContainerNew id="modal-container">
      <Modal onSubmit={handleSubmit}>
        <h1>Novo Material</h1>
        <h2>Descrição</h2>
        <Input
          id="descricao"
          type="text"
          name="descricao"
          onChange={handleChange}
          required
        />
        <h2>Marca</h2>
        <Select
          name="marca"
          onChange={handleChange}
          defaultValue="Portobello"
          required
        >
          {Marcas}
        </Select>
        <h2>Estado do Produto</h2>
        <Select
          name="ativo"
          onChange={handleChange}
          required
          defaultValue="true"
        >
          <option value="true">Disponível</option>
          <option value="false">Indisponível</option>
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
        <InputImage type="file" name="file" onChange={handleChangeFile} />
        <Image>
          <img src={material.thumb} alt="" />
        </Image>
        <Buttons>
          <button>Confirmar</button>
          <a href="/">
            <button type="button">Cancelar</button>
          </a>
        </Buttons>
      </Modal>
    </ModalContainerNew>
  );
}
