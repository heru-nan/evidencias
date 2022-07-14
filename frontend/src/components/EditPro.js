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

// id_proyecto int(6) not null AUTO_INCREMENT,
//     palabras_clave varchar(300),
//     anio varchar(300),
//     codigo varchar(300),
//     nombre varchar(100),
//     objetivo varchar(300),
//     fuente_financiamiento varchar(300),
//     concurso varchar(300),
//     presupuesto varchar(300),
//     fecha_inicio varchar(300),
//     fecha_termino varchar(300),
//     primary key(`id_proyecto`)

export default function EditPub({ currentItem, closeModal }) {
  const [fields, setFields] = useState({
    id_proyecto: "",
    palabras_clave: "",
    codigo: "",
    anio: "",
    nombre: "",
    objetivo: "",
    fuente_financiamiento: "",
    concurso: "",
    presupuesto: "",
    fecha_inicio: "",
    fecha_termino: "",
  });

  useEffect(() => {
    setFields({
      id_proyecto: currentItem["id_proyecto"] || "",
      palabras_clave: currentItem["palabras_clave"] || "",
      codigo: currentItem["codigo"] || "",
      anio: currentItem["anio"] || "",
      nombre: currentItem["nombre"] || "",
      objetivo: currentItem["objetivo"] || "",
      fuente_financiamiento: currentItem["fuente_financiamiento"] || "",
      concurso: currentItem["concurso"] || "",
      presupuesto: currentItem["presupuesto"] || "",
      fecha_inicio: currentItem["fecha_inicio"] || "",
      fecha_termino: currentItem["fecha_termino"] || "",
    });
  }, [currentItem]);

  const onChangeField = (e) => {
    const { value, id } = e.target;
    setFields({ ...fields, [id]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    apis.updateProyect(fields).then((res) => {
      console.log(res);
      closeModal();
    });
  };

  return (
    <form style={{ maxHeight: "500px" }} onSubmit={onSubmit}>
      <Label>ID: </Label>
      <InputText
        disabled
        id="id_proyecto"
        type="text"
        value={fields.id_proyecto}
        onChange={onChangeField}
      />
      <Label>Nombre: </Label>
      <InputText
        id="nombre"
        type="text"
        value={fields.nombre}
        onChange={onChangeField}
      />
      <Label>anio: </Label>
      <InputText
        id="anio"
        type="number"
        value={fields.anio}
        onChange={onChangeField}
      />
      <Label>Palabras Clave: </Label>
      <InputText
        id="palabras_clave"
        type="text"
        value={fields.palabras_clave}
        onChange={onChangeField}
      />
      <Label>Codigo: </Label>
      <InputText
        id="codigo"
        type="text"
        value={fields.codigo}
        onChange={onChangeField}
      />
      <Label>Fuente financiamiento: </Label>
      <InputText
        id="fuente_financiamiento"
        type="text"
        value={fields.fuente_financiamiento}
        onChange={onChangeField}
      />
      <Label>Concurso: </Label>
      <InputText
        type="text"
        id="concurso"
        value={fields.concurso}
        onChange={onChangeField}
      />
      <Label>Presupuesto: </Label>
      <InputText
        type="text"
        id="presupuesto"
        value={fields.presupuesto}
        onChange={onChangeField}
      />
      <Label>Fecha inicio: </Label>
      <InputText
        type="text"
        id="fecha_inicio"
        value={fields.fecha_inicio}
        onChange={onChangeField}
      />
      <Label>Fecha termino: </Label>
      <InputText
        type="text"
        id="fecha_termino"
        value={fields.fecha_termino}
        onChange={onChangeField}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "30px",
          paddingBottom: "40px",
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
