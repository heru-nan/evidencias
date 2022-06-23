import React, { Component } from "react";
import {
  Row,
  Col,
  Form,
  Input,
  Label,
  FormGroup,
  Button,
  FormFeedback,
} from "reactstrap";

import { createRoot } from "react-dom/client";

const api = "http://localhost:5000/api";

class FPublic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      autores: "",
      titulo: "",
      revista: "",
      indexacion: "",
      identificador: "",

      mensajeAutores: "",
      mensajeTitulo: "",
      mensajeRevista: "",
      mensajeIndexacion: "",
      mensajeIdentificador: "",

      invalidAutores: false,
      invalidTitulo: false,
      invalidRevista: false,
      invalidIndexacion: false,
      invalidIdentificador: false,
    };
    this.onChange = this.onChange.bind(this);
    this.enviarAlaBD = this.enviarAlaBD.bind(this);
    this.cleanFields = this.cleanFields.bind(this);
  }

  cleanFields = () => {
    this.setState({
      autores: "",
      titulo: "",
      revista: "",
      indexacion: "",
      identificador: "",

      mensajeAutores: "",
      mensajeTitulo: "",
      mensajeRevista: "",
      mensajeIndexacion: "",
      mensajeIdentificador: "",

      invalidAutores: false,
      invalidTitulo: false,
      invalidRevista: false,
      invalidIndexacion: false,
      invalidIdentificador: false,
    });
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  enviarAlaBD = (e) => {
    e.preventDefault();
    let valido = true;
    if (this.state.autores === "") {
      this.setState({
        invalidAutores: true,
        mensajeAutores: "El campo autores es obligatorio, indique autores",
      });
      valido = false;
    }
    if (this.state.titulo === "") {
      this.setState({
        invalidTitulo: true,
        mensajeTitulo: "Indique el titulo de la publicación",
      });
      valido = false;
    }
    if (this.state.revista === "") {
      this.setState({
        invalidRevista: true,
        mensajeRevista: "Indique revista de publicación",
      });
      valido = false;
    }
    if (this.state.indexacion === "") {
      this.setState({
        invalidIndexacion: true,
        mensajeIndexacion: "Ingrese indexación",
      });
      valido = false;
    }
    if (this.state.identificador === "") {
      this.setState({
        invalidIdentificador: true,
        mensajeIdentificador: "Ingrese ISSN/DOI",
      });
      valido = false;
    }
    if (valido) {
      //Enviarlo a la base de datos o a otro componente
      console.log("Se envian los datos " + JSON.stringify(this.state));
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.state),
      };
      fetch(api + "/form", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (!data.error) {
            this.cleanFields();
          }
        });
    }
  };
  render() {
    return (
      <div style={{ paddingTop: "2rem" }}>
        <Row>
          <Col xs="3"></Col>
          <Col xs="6">
            <h2>Registro de Publicaciones</h2>
            <Form onSubmit={this.enviarAlaBD}>
              <FormGroup>
                <Label>autores</Label>
                <Input
                  type="text"
                  name="autores"
                  value={this.state.autores}
                  onChange={this.onChange}
                  invalid={this.state.invalidAutores}
                />
                <FormFeedback>{this.state.mensajeAutores}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label>titulo</Label>
                <Input
                  type="text"
                  name="titulo"
                  value={this.state.titulo}
                  onChange={this.onChange}
                  invalid={this.state.invalidTitulo}
                />
                <FormFeedback>{this.state.mensajeTitulo}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label>revista</Label>
                <Input
                  type="text"
                  name="revista"
                  value={this.state.revista}
                  onChange={this.onChange}
                  invalid={this.state.invalidRevista}
                />
                <FormFeedback>{this.state.mensajeRevista}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label>indexación</Label>
                <Input
                  type="text"
                  name="indexacion"
                  value={this.state.indexacion}
                  onChange={this.onChange}
                  invalid={this.state.invalidIndexacion}
                />
                <FormFeedback>{this.state.mensajeIndexacion}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label>ISSN/DOI</Label>
                <Input
                  type="text"
                  name="identificador"
                  value={this.state.identificador}
                  onChange={this.onChange}
                  invalid={this.state.invalidIdentificador}
                />
                <FormFeedback>{this.state.mensajeIdentificador}</FormFeedback>
              </FormGroup>
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

const root = createRoot(document.getElementById("root"));
root.render(<FPublic />);
