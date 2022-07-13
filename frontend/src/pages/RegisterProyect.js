import React, { Component } from "react";

import { Row, Col, Form, Input, Label, FormGroup, Button } from "reactstrap";
class FormProyect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      ffinanciamiento: "",
      concurso: "",
      codigo: "",
      añoAdjudicacion: 0,
      fechaInicio: "",
      fechaTermino: "",
      montoTotal: 0,
      palabrasClaves: "",
      objetivo: "",

      invalidname: "",
      invalidfont: "",
      invalidConcurso: "",
      invalidCode: "",
      invalidAñoAdjudicacion: "",
      invalidPalabrasClaves: "",
      invalidObjetivo: "",
    };
  }
  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  cleanFields = () => {
    this.setState({
      nombre: "",
      ffinanciamiento: "",
      concurso: "",
      codigo: "",
      añoAdjudicacion: 0,
      fechaInicio: "",
      fechaTermino: "",
      montoTotal: 0,
      palabrasClaves: "",
      objetivo: "",
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (
      this.state.nombre &&
      this.state.ffinanciamiento &&
      this.state.concurso &&
      this.state.codigo &&
      this.state.añoAdjudicacion &&
      this.state.fechaInicio &&
      this.state.fechaTermino &&
      this.state.montoTotal &&
      this.state.palabrasClaves &&
      this.state.objetivo
    ) {
      console.log("Se envian los datos " + JSON.stringify(this.state));
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.state),
      };
      // eslint-disable-next-line no-useless-concat
      fetch("http://localhost:8001/api" + "/form/pro", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.error) console.log("error ", data.error);
          if (!data.error) {
            this.cleanFields();
          }
        });
    }
  };

  render() {
    return (
      <div
        style={{
          paddingTop: "2rem",
          paddingBottom: "2rem",
          overflowX: "hidden",
        }}
      >
        <Row>
          <Col xs="3"></Col>
          <Col xs="6">
            <Form name="FormularioProyectos" onSubmit={this.onSubmit}>
              <FormGroup>
                <Label>Nombre proyecto</Label>
                <Input
                  type="text"
                  name="nombre"
                  value={this.state.nombre}
                  onChange={this.onChange}
                  invalid={this.state.invalidname}
                />
              </FormGroup>
              <FormGroup>
                <Label>Fuente financiamiento</Label>
                <Input
                  type="text"
                  name="ffinanciamiento"
                  value={this.state.ffinanciamiento}
                  onChange={this.onChange}
                  invalid={this.state.invalidfont}
                />
              </FormGroup>
              <FormGroup>
                <Label>Concurso</Label>
                <Input
                  type="text"
                  name="concurso"
                  value={this.state.concurso}
                  onChange={this.onChange}
                  invalid={this.state.invalidConcurso}
                />
              </FormGroup>
              <FormGroup>
                <Label>Código de proyecto</Label>
                <Input
                  type="text"
                  name="codigo"
                  value={this.state.value}
                  onChange={this.onChange}
                  invalid={this.state.invalidCode}
                />
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col md={4}>
                    <Label>año adjudicacion</Label>
                    <Input
                      type="int"
                      name="añoAdjudicacion"
                      value={this.state.añoAdjudicacion}
                      onChange={this.onChange}
                    />
                  </Col>
                  <Col md={4}>
                    <Label>Fecha de inicio</Label>
                    <Input
                      type="date"
                      name="fechaInicio"
                      value={this.state.fechaInicio}
                      onChange={this.onChange}
                    />
                  </Col>
                  <Col md={4}>
                    <Label>Fecha de término</Label>
                    <Input
                      type="date"
                      name="fechaTermino"
                      value={this.state.fechaTermino}
                      onChange={this.onChange}
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Label>Monto total adjudicado</Label>
                <Input
                  type="int"
                  name="montoTotal"
                  value={this.state.montoTotal}
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col md={7}>
                    <Label>Palabras claves (5)(separadas por coma)</Label>
                    <Input
                      type="text"
                      name="palabrasClaves"
                      value={this.state.palabrasClaves}
                      onChange={this.onChange}
                    ></Input>
                  </Col>
                  <Col md={5}>
                    <Label>Objetivo: </Label>
                    <Input
                      type="text"
                      name="objetivo"
                      value={this.state.objetivo}
                      onChange={this.onChange}
                    ></Input>
                  </Col>
                </Row>
              </FormGroup>
              {/* <FormGroup>
                <Label>subir Archivo</Label>
                <Input type="file" name="fileName multiple"></Input>
              </FormGroup> */}

              <FormGroup>
                <Button color="success">Guardar</Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default FormProyect;
