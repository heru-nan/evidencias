import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Table,
  ModalFooter,
} from "reactstrap";
import axios from "axios";
import { useEffect, useState } from "react";

export default function FilesModal({ isOpen, closeModal, publication }) {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    const { id } = publication;

    if (id) {
      axios.get(`http://localhost:5000/api/files/${id}`).then(({ data }) => {
        console.log(data);
        if (data) setFiles(data);
      });
    }
  }, [publication]);

  return (
    <Modal isOpen={isOpen}>
      <ModalHeader>
        <div>
          <h3>Archivos</h3>
        </div>
      </ModalHeader>

      <ModalBody>
        <Table className="text-center">
          <thead>
            <tr>
              <th>ID</th>

              <th>nombre</th>

              <th>acciones</th>
            </tr>
          </thead>

          <tbody>
            {files.map((archivos) => (
              <tr>
                <td>{archivos.id}</td>
                <td>{archivos.nombre}</td>
                <td>
                  <Button color="primary">Descargar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </ModalBody>

      <ModalFooter>
        <Button color="secondary" onClick={closeModal}>
          Cerrar
        </Button>
      </ModalFooter>
    </Modal>
  );
}
