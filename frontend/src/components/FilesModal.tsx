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
      axios.get(`http://localhost:5000/api/pubs/${id}`).then(({ data }) => {
        if (data) {
          setFiles(data.data.files);
        }
      });
    }
  }, [publication]);

  const downloadFile = (id: string) => {
    axios.get(`http://localhost:5000/api/files/download/${id}`);
  };

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

              <th>Nombre</th>

              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {files?.map((archivo) => (
              <tr>
                <td>{archivo.id}</td>
                <td>{archivo.nombre}</td>
                <td>
                  <a
                    target="_blank"
                    href={`http://localhost:5000/api/files/download/${archivo.id}`}
                    rel="noreferrer"
                  >
                    Descargar
                  </a>
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
