import React, { useState } from "react";
import { UseForm } from "./UseForm";
import { Button, Form, FormGroup, Label, Input, Col, Alert } from "reactstrap";

/*
por editar: poner fecha tipo dd/mm/yy en db y front
arreglar subida de archivos
decidir que onda con las subidas multiples

<FormGroup row>
        <Label sm={2}>Disciplina</Label>
        <Col sm={9}>
          <Input
            id="disciplina"
            name="disciplina"
            placeholder="Ingresar disciplina"
            onChange={onChange}
            required
          />
        </Col>
      </FormGroup>
 */

function RegPubli() {
  const initialState = {
    titulo: "",
    autores: "",
    revista: "",
    indexacion: "",
    identificador: 0,
    anio: "",
    mes: "",
    disciplina: "",
    clasificacion: "",
    autores_extranjeros: false,
  };

  function formularioCallback() {
    console.log(values)

    //const dt = new Date(values.año + "-" + values.mes + "-11");


    fetch("http://localhost:5000/api/pubs", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        autores: values.autores,
        titulo: values.titulo,
        revista: values.revista,
        indexacion: values.indexacion,
        autoresExtranjeros: values.autores_extranjeros,
        issnDoi: values.identificador,
        anio: values.año,
        mes: values.mes,
        clasificacion: values.clasificacion,
        disciplina: values.disciplina,
      }),
    })
      .then((res) => res.json)
    alert("subido correctamente");
    //window.location.reload();
    //if de no refrescar si esta mal todo xd
    // aqui va lo del mandar a backend y revisar que todo este bien??
  }

  const {
    onChange,
    onSubmit,
    values,
  }: { values: any; onChange: any; onSubmit: any } = UseForm(
    formularioCallback,
    initialState
  );

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label htmlFor="head-form"></Label>
        Registrar Publicación
      </FormGroup>

      <FormGroup row>
        <Label sm={2}>Titulo</Label>
        <Col sm={9}>
          <Input
            id="titulo"
            name="titulo"
            placeholder="Ingresar titulo de la publicación"
            onChange={onChange}
            required
          />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label sm={2}>Autores</Label>
        <Col sm={9}>
          <Input
            id="autores"
            name="autores"
            placeholder="Ingresar autores"
            onChange={onChange}
            required
          />
        </Col>
      </FormGroup>

      <FormGroup check inline>
        <Col sm={9}>
          <Input
            type="checkbox"
            id="autores_extranjeros"
            name="autores_extranjeros"
            onChange={onChange}
            value={values.autores_extranjeros}
          />
        </Col>
        <Label check>¿Hay autores extranjeros?</Label>
      </FormGroup>

      <FormGroup row>
        <Label sm={2}>Revista</Label>
        <Col sm={9}>
          <Input
            id="revista"
            name="revista"
            placeholder="Ingresar revista"
            onChange={onChange}
            required
          />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label sm={2}>Indexación</Label>
        <Col sm={9}>
          <Input
            id="indexacion"
            name="indexacion"
            placeholder="Ingresar indexación"
            onChange={onChange}
            required
          />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label sm={2}>IssnDoi</Label>
        <Col sm={9}>
          <Input
            id="identificador"
            name="identificador"
            placeholder="Ingresar issn/Doi"
            onChange={onChange}
            required
          />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label sm={2}>Año</Label>
        <Col sm={9}>
          <Input
            id="año"
            name="año"
            placeholder="Ingresar año"
            onChange={onChange}
            required
          />
        </Col>
      </FormGroup>

      <FormGroup row>

      <Label sm={2}>Mes</Label>
        <Col sm={9}>
        <Input
          id="mes"
          name="mes"
          type="select"
          placeholder = "ingresar mes"
          onChange={onChange}
        >
          <option>
            1
          </option>
          <option>
            2
          </option>
          <option>
            3
          </option>
          <option>
            4
          </option>
          <option>
            5
          </option>
          <option>
            6
          </option>
          <option>
            7
          </option>
          <option>
            8
          </option>
          <option>
            9
          </option>
          <option>
            10
          </option>
          <option>
            11
          </option>
          <option>
            12
          </option>
        </Input>
        </Col>
      </FormGroup>

      <FormGroup row>
      <Label sm={2}>Disciplina</Label>
        <Col sm={9}>
        <Input
          id="disciplina"
          name="disciplina"
          type="select"
          placeholder = "ingresar"
          onChange={onChange}
        >
          <option>
            Ingenieria
          </option>
          <option>
            otras...
          </option>
  
        </Input>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label sm={2}>Clasificacion</Label>
        <Col sm={9}>
          <Input
            id="clasificacion"
            name="clasificacion"
            placeholder="Ingresar clasificacion"
            onChange={onChange}
            required
          />
        </Col>
      </FormGroup>

      <Button type="submit" color="primary">
        Registrar
      </Button>
    </Form>
  );
}

export default RegPubli;
