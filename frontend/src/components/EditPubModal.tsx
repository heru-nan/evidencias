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
import { useForm } from "react-hook-form";

export default function EditPubModal({ isOpen, closeModal }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Modal isOpen={isOpen}>
      <ModalHeader>
        <div>
          <h3>Editar Publicación</h3>
        </div>
      </ModalHeader>

      <ModalBody>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup row>
            <Label sm={2}>autores</Label>
            <Col sm={9}>
              <input
                className="form-control"
                id="autores"
                name="autores"
                placeholder="Ingresar Autores"
                {...register("autores", { required: true })}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}>titulo</Label>
            <Col sm={9}>
              <input
                className="form-control"
                name="titulo"
                placeholder="Ingresar titulo"
                {...register("titulo", { required: true })}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}>Revista</Label>
            <Col sm={9}>
              <input
                className="form-control"
                name="revista"
                placeholder="Ingresar revista"
                {...register("revista", { required: true })}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}>Indexación</Label>
            <Col sm={9}>
              <input
                className="form-control"
                id="index"
                name="index"
                placeholder="Ingresar indexación"
                {...register("indexacion", { required: true })}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}>Año</Label>
            <Col sm={9}>
              <input
                className="form-control"
                id="año"
                name="año"
                placeholder="Ingresar año"
                {...register("anio", { required: true })}
              />
            </Col>
          </FormGroup>

          <FormGroup check inline>
            <Col sm={9}>
              <input
                className="form-control"
                type="checkbox"
                id="autoresEx"
                name="autoresEx"
                {...register("autoresExtranjeros", { required: true })}
              />
            </Col>
            <Label check>¿Hay autores extranjeros?</Label>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}>clasificacion</Label>
            <Col sm={9}>
              <input
                className="form-control"
                id="clasificacion"
                name="clasificacion"
                placeholder="Ingresar clasificacion"
                {...register("clasificacion", { required: true })}
              />
            </Col>
          </FormGroup>

          {/* <FormGroup row>
            <Label sm={2}>Disciplina</Label>
            <Col sm={9}>
              <input
                className="form-control"
                id="disciplina"
                name="disciplina"
                type="select"
                placeholder="ingresar"
                {...register("disciplina", { required: false })}
              >
                <option>Ingenieria</option>
                <option>otras...</option>
              </input>
            </Col>
          </FormGroup> */}

          <FormGroup row>
            <Label sm={2}>Issn Doi</Label>
            <Col sm={9}>
              <input
                className="form-control"
                id="issn_doi"
                name="issnDoi"
                placeholder="Ingresar issn_doi"
                {...register("issnDoi", { required: true })}
              />
            </Col>
          </FormGroup>

          <Button type="submit" color="primary">
            Registrar
          </Button>
        </Form>
      </ModalBody>

      <ModalFooter>
        <Button color="danger" onClick={closeModal}>
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>
  );
}
