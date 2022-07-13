import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import styled from "styled-components";
import apis from "../api";

const Label = styled.label`
  margin: 5px;

  @media screen and (max-wid_publicacionth: 420px) {
    height: auto;
    max-wid_publicacionth: 75%;
  }
`;

const InputText = styled.input.attrs({
  className: "form-control",
})`
  max-wid_publicacionth: 75%;
  text-align: center;
  margin-bottom: 5px;

  @media screen and (max-wid_publicacionth: 420px) {
    height: auto;
    max-wid_publicacionth: 75%;
  }
`;

// /id_publicacion_publicacion int(6) not null,
// nombre_publicacion varchar(100),
// anio year,
// revista varchar(100),
// indexacion varchar(100),
// citaciones varchar(300),
// clasificacion varchar(100),
// disciplina int(6),
// primary key(`id_publicacion_publicacion`),

export default function EditPub({ currentItem, closeModal }) {
  const [fields, setFields] = useState({
    id_publicacion: "",
    nombre_publicacion: "",
    anio: "",
    revista: "",
    indexacion: "",
    clasificacion: "",
    citaciones: "",
  });

  useEffect(() => {
    setFields({
      id_publicacion: currentItem["id_publicacion"],
      nombre_publicacion: currentItem["nombre"] || "",
      anio: currentItem["anio"] || "",
      revista: currentItem["revista"] || "",
      indexacion: currentItem["indexacion"] || "",
      clasificacion: currentItem["clasificacion"] || "",
      citaciones: currentItem["citaciones"] || "",
    });
  }, [currentItem]);

  const onChangeField = (e) => {
    const { value, id } = e.target;
    setFields({ ...fields, [id]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    apis.updatePublication(fields).then((res) => {
      console.log(res);
      closeModal();
    });
  };

  return (
    <form style={{ overflowX: "hid_publicacionden" }} onSubmit={onSubmit}>
      <Label>ID: </Label>
      <InputText
        disabled
        id="id_publicacion"
        type="text"
        value={fields.id_publicacion}
        onChange={onChangeField}
      />
      <Label>anio: </Label>
      <InputText
        id="anio"
        type="number"
        value={fields.anio}
        onChange={onChangeField}
      />
      <Label>Nombre Publicacion: </Label>
      <InputText
        id="nombre_publicacion"
        type="text"
        value={fields.nombre_publicacion}
        onChange={onChangeField}
      />
      <Label>revista: </Label>
      <InputText
        id="revista"
        type="text"
        value={fields.revista}
        onChange={onChangeField}
      />
      <Label>Citaciones: </Label>
      <InputText
        id="citaciones"
        type="text"
        value={fields.citaciones}
        onChange={onChangeField}
      />
      <Label>indexacion: </Label>
      <InputText
        type="text"
        id="indexacion"
        value={fields.indexacion}
        onChange={onChangeField}
      />
      <Label>clasificacion: </Label>
      <InputText
        type="text"
        id="clasificacion"
        value={fields.clasificacion}
        onChange={onChangeField}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "30px",
        }}
      >
        <Button style={{ right: "0px" }} onClick={closeModal}>
          Cerrar
        </Button>
        <Button color="primary" style={{ textAlign: "right" }} type="submit">
          Editar
        </Button>
      </div>
    </form>
  );
}
