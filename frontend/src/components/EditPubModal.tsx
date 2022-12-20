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
import axios from "axios";
import Swal from "sweetalert2";

export default function EditPubModal({ isOpen, closeModal, defaultValues }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ values: defaultValues });
  console.log(errors);

  const onSubmit = (data) => {
    axios.post("http://localhost:5000/api/pubs/update", data).then((data) => {
      Swal.fire({
        title: "Cambios Registrados",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => closeModal());
    });
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
          <FormGroup row w>
            <Label sm={3}>Autores</Label>
            <Col sm={8}>
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
            <Label sm={3}>Titulo</Label>
            <Col sm={8}>
              <input
                className="form-control"
                name="titulo"
                placeholder="Ingresar titulo"
                {...register("titulo", { required: true })}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={3}>Revista</Label>
            <Col sm={8}>
              <input
                className="form-control"
                name="revista"
                placeholder="Ingresar revista"
                {...register("revista", { required: true })}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={3}>Indexación</Label>
            <Col sm={8}>
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
            <Label sm={3}>Año</Label>
            <Col sm={8}>
              <input
                className="form-control"
                id="año"
                name="año"
                placeholder="Ingresar año"
                {...register("anio", { required: true })}
              />
            </Col>
          </FormGroup>

          <FormGroup check className="my-2">
            <Col sm={3}>
              <input
                style={{ marginLeft: "70px", marginRight: "10px" }}
                className="form-check-input"
                type="checkbox"
                id="autoresExtranjeros"
                name="autoresExtranjeros"
                {...register("autoresExtranjeros", { required: true })}
              />
            </Col>
            <Label check>¿Hay autores extranjeros?</Label>
          </FormGroup>

          <FormGroup row className="mt-2">
            <Label sm={3}>Clasificación</Label>
            <Col sm={8}>
              <input
                className="form-control"
                id="clasificacion"
                name="clasificacion"
                placeholder="Ingresar clasificacion"
                {...register("clasificacion", { required: true })}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={3}>Disciplina</Label>
            <Col sm={8}>
              <select
                className="form-select"
                id="disciplina"
                name="disciplina"
                placeholder="ingresar"
                {...register("disciplina", { required: false })}
              >
                <option value="ingenieria">Ingeniería</option>
                <option value="otro">otras...</option>
              </select>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={3}>ISSN/DOI</Label>
            <Col sm={8}>
              <input
                className="form-control"
                id="issn_doi"
                name="issnDoi"
                placeholder="Ingresar ISSN/DOI"
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
