import {
  Table,
  Button,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  ModalFooter,
  Form,
  Label,
  Input,
  Col,
} from "reactstrap";

export default function EditPubModal({ isOpen }) {
  const onSubmit = () => {};

  return (
    <Modal isOpen={isOpen}>
      <ModalHeader>
        <div>
          <h3>Editar Publicación</h3>
        </div>
      </ModalHeader>

      <ModalBody>
        <Form onSubmit={onSubmit}>
          <FormGroup row>
            <Label sm={2}>autores</Label>
            <Col sm={9}>
              <Input
                id="autores"
                name="autores"
                placeholder="Ingresar Autores"
                value={autores}
                onChange={(e) => setAutores(e.target.value)}
                required
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}>titulo</Label>
            <Col sm={9}>
              <Input
                id="titulo"
                name="titulo"
                placeholder="Ingresar titulo"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                required
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}>Revista</Label>
            <Col sm={9}>
              <Input
                id="revista"
                name="revista"
                placeholder="Ingresar revista"
                value={revista}
                onChange={(e) => setRevista(e.target.value)}
                required
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}>Indexación</Label>
            <Col sm={9}>
              <Input
                id="index"
                name="index"
                placeholder="Ingresar indexación"
                value={indexacion}
                onChange={(e) => setIndexacion(e.target.value)}
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
                value={anio}
                onChange={(e) => setAnio(e.target.value)}
                required
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}>Mes</Label>
            <Col sm={9}>
              <Input
                id="mes"
                name="select"
                type="select"
                value={mes}
                onChange={(e) => setMes(e.target.value)}
              >
                <option>Enero</option>
                <option>Febrero</option>
                <option>Marzo</option>
                <option>Abril</option>
                <option>Mayo</option>
                <option>Junio</option>
                <option>Julio</option>
                <option>Agosto</option>
                <option>Septiembre</option>
                <option>Octubre</option>
                <option>Noviembre</option>
                <option>Diciembre</option>
              </Input>
            </Col>
          </FormGroup>

          <FormGroup check inline>
            <Col sm={9}>
              <Input
                type="checkbox"
                id="autoresEx"
                name="autoresEx"
                value={autores_extranjeros}
                onChange={(e) => setAutores_extranjeros(e.target.value)}
              />
            </Col>
            <Label check>¿Hay autores extranjeros?</Label>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}>clasificacion</Label>
            <Col sm={9}>
              <Input
                id="clasificacion"
                name="clasificacion"
                placeholder="Ingresar clasificacion"
                value={clasificacion}
                onChange={(e) => setClasificacion(e.target.value)}
                required
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}>Disciplina</Label>
            <Col sm={9}>
              <Input
                id="disciplina"
                name="disciplina"
                type="select"
                placeholder="ingresar"
                value={disciplina}
                onChange={(e) => setDisciplina(e.target.value)}
              >
                <option>Ingenieria</option>
                <option>otras...</option>
              </Input>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}>Issn Doi</Label>
            <Col sm={9}>
              <Input
                id="issn_doi"
                name="issn_doi"
                placeholder="Ingresar issn_doi"
                value={issn_doi}
                onChange={(e) => setIssn_doi(e.target.value)}
                required
              />
            </Col>
          </FormGroup>

          <Button type="submit" color="primary">
            Registrar
          </Button>
        </Form>
      </ModalBody>

      <ModalFooter>
        <Button
          color="danger"
          onClick={() => handleShow(false, "editar", 0, initialState)}
        >
          cancelar
        </Button>
      </ModalFooter>
    </Modal>
  );
}
