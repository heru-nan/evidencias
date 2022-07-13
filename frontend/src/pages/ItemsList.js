import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useTable } from "react-table";
import { DeleteButton } from "../components/buttons";
import api from "../api";

import MaUTable from "@material-ui/core/Table";
import {
  CssBaseline,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

import styled from "styled-components";
import { Button } from "reactstrap";

import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Wrapper = styled.div`
  padding: 0 40px 40px 40px;

  @media screen and (max-width: 420px) {
    padding-left: 0.5em;
    padding-right: 0.5em;
  }
`;

const Table = ({ columns, data }) => {
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <MaUTable {...getTableProps()}>
      <TableHead>
        {headerGroups.map((headerGroup) => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <TableCell {...column.getHeaderProps()}>
                {column.render("Header")}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <TableRow data-row-item-id={row.values._id} {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <TableCell {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </MaUTable>
  );
};

class ItemsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      open: false,
      currentItem: null,
      pubs: {},
      pros: {},
      type: null,
    };
  }

  handleOpen = (item) => {
    console.log("open", item);
    this.setState({ open: true, currentItem: item });
  };
  handleClose = () => {
    this.setState({ open: false, type: null });
  };

  handleAsociar = (currentItem) => {
    console.log(currentItem);
    console.log(this.state.currentItem, this.state.type);
    if (this.state.type === "pro") {
      api
        .link({
          id_archivo: this.state.currentItem.id,
          id_fk: currentItem.id_proyecto,
          type: this.state.type,
        })
        .then((res) => {
          console.log(res);
          this.handleClose();
          api
            .getAllItems()
            .then((resp) => {
              const { items } = resp.data;
              console.log("getAllItems: resp");
              console.log(items);
              this.setState({ items });
            })
            .catch((err) => {
              console.error(`ERROR in 'getAllItems': ${err}`);
              console.error(err);
              return err;
            });
        });
    } else {
      api
        .link({
          id_archivo: this.state.currentItem.id,
          id_fk: currentItem.id_publicacion,
          type: this.state.type,
        })
        .then((res) => {
          console.log(res);
          this.handleClose();
          api
            .getAllItems()
            .then((resp) => {
              const { items } = resp.data;
              console.log("getAllItems: resp");
              console.log(items);
              this.setState({ items });
            })
            .catch((err) => {
              console.error(`ERROR in 'getAllItems': ${err}`);
              console.error(err);
              return err;
            });
        });
    }
  };

  componentDidMount() {
    this.fetchAllItems();
  }

  fetchAllItems = () => {
    api
      .getAllItems()
      .then((resp) => {
        const { items } = resp.data;
        console.log("getAllItems: resp");
        console.log(items);
        this.setState({ items });
      })
      .catch((err) => {
        console.error(`ERROR in 'getAllItems': ${err}`);
        console.error(err);
        return err;
      });
    api
      .getAllFormItems()
      .then((resp) => {
        const { data } = resp.data;
        console.log("getAllFormItems: resp");
        console.log("data", data);
        this.setState({ pubs: data });
      })
      .catch((err) => {
        console.error(`ERROR in 'getAllItems': ${err}`);
        console.error(err);
        return err;
      });
    api
      .getAllFormProyectItems()
      .then((resp) => {
        const { data } = resp.data;
        console.log("getAllFormItems: resp");
        console.log("data", data);
        this.setState({ pros: data });
      })
      .catch((err) => {
        console.error(`ERROR in 'getAllItems': ${err}`);
        console.error(err);
        return err;
      });
  };

  deleteSingleItem = (itemId) => {
    return api
      .deleteItemById(itemId)
      .then((resp) => {
        console.log("deleteItemById: resp");
        console.log(resp);
        return resp;
      })
      .catch((err) => {
        console.error(`ERROR in 'deleteSingleItem': ${err}`);
        console.error(err);
        return err;
      });
  };

  handleRemoveItem = (data) => {
    const itemId = data;

    this.deleteSingleItem(itemId).then((resp) => {
      console.log("handleRemoveItem: resp");
      console.log(resp);
      this.fetchAllItems();
    });
  };

  handleShowItems = (type) => {
    this.setState({ type });
  };

  render() {
    const items = this.state.items || {};
    console.log(items);

    const columns = [
      {
        Header: "ID",
        accessor: "id",
        // filterable: true,
        Cell: (props) => {
          console.log(props);
          const { original } = props.cell.row;
          return <span data-item-id={original._id}>{props.value}</span>;
        },
      },
      {
        Header: "Nombre",
        accessor: "nombre",
        // filterable: true,
        Cell: (props) => {
          const { original } = props.cell.row;
          return <span data-name={original.name}>{props.value}</span>;
        },
      },
      {
        Header: "Filename",
        accessor: "ruta",
        // filterable: true,
        Cell: (props) => {
          const { original } = props.cell.row;
          return <span data-name={original.filename}>{props.value}</span>;
        },
      },
      {
        Header: "ID Publicacion",
        accessor: "id_fk_pub",
        // filterable: true,
        Cell: (props) => {
          const { original } = props.cell.row;
          return <span data-name={original.content}>{props.value}</span>;
        },
      },
      {
        Header: "ID Proyecto",
        accessor: "id_fk_pro",
        // filterable: true,
        Cell: (props) => {
          const { original } = props.cell.row;
          return <span data-name={original.content}>{props.value}</span>;
        },
      },
      {
        Header: "Acciones",
        accessor: "_delete",
        Cell: (props) => {
          const { original } = props.cell.row;
          return (
            <span data-delete-id={original._id}>
              <Button
                id={original._id}
                onClick={() => this.handleOpen(original)}
              >
                Asociar
              </Button>
            </span>
          );
        },
      },
    ];

    return (
      <Wrapper>
        <CssBaseline />
        <Modal
          isOpen={this.state.open}
          onRequestClose={this.handleClose}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2>Asociar</h2>
          {!this.state.type ? (
            <div
              style={{
                padding: "2rem",
                width: "500px",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Button
                color="secondary"
                onClick={() => this.handleShowItems("pub")}
              >
                Publicaciones
              </Button>
              <Button color="info" onClick={() => this.handleShowItems("pro")}>
                Proyectos
              </Button>
            </div>
          ) : (
            <div
              style={{
                padding: "2rem",
                width: "500px",
                display: "column",
                justifyContent: "center",
                alignItems: "space-eveenly",
              }}
            >
              {this.state.type === "pub" ? (
                <Table
                  data={this.state.pubs}
                  columns={[
                    {
                      Header: "ID",
                      accessor: "id_publicacion",
                      // filterable: true,
                      Cell: (props) => {
                        console.log(props);
                        const { original } = props.cell.row;
                        return (
                          <span data-item-id={original._id}>{props.value}</span>
                        );
                      },
                    },
                    {
                      Header: "Nombre",
                      accessor: "nombre_publicacion",
                      // filterable: true,
                      Cell: (props) => {
                        const { original } = props.cell.row;
                        return (
                          <span data-name={original.name}>{props.value}</span>
                        );
                      },
                    },
                    {
                      Header: "Revista",
                      accessor: "revista",
                      // filterable: true,
                      Cell: (props) => {
                        const { original } = props.cell.row;
                        return (
                          <span data-name={original.filename}>
                            {props.value}
                          </span>
                        );
                      },
                    },
                    {
                      Header: "Acciones",
                      accessor: "_delete",
                      Cell: (props) => {
                        const { original } = props.cell.row;
                        return (
                          <span data-delete-id={original._id}>
                            <Button
                              color="primary"
                              id={original._id}
                              onClick={() => this.handleAsociar(original)}
                            >
                              Asociar
                            </Button>
                          </span>
                        );
                      },
                    },
                  ]}
                />
              ) : (
                <Table
                  data={this.state.pros}
                  columns={[
                    {
                      Header: "ID",
                      accessor: "id_proyecto",
                      // filterable: true,
                      Cell: (props) => {
                        console.log(props);
                        const { original } = props.cell.row;
                        return (
                          <span data-item-id={original._id}>{props.value}</span>
                        );
                      },
                    },
                    {
                      Header: "Nombre",
                      accessor: "nombre",
                      // filterable: true,
                      Cell: (props) => {
                        const { original } = props.cell.row;
                        return (
                          <span data-name={original.name}>{props.value}</span>
                        );
                      },
                    },
                    {
                      Header: "Palabras clave",
                      accessor: "palabras_clave",
                      // filterable: true,
                      Cell: (props) => {
                        const { original } = props.cell.row;
                        return (
                          <span data-name={original.filename}>
                            {props.value}
                          </span>
                        );
                      },
                    },
                    {
                      Header: "Acciones",
                      accessor: "_delete",
                      Cell: (props) => {
                        const { original } = props.cell.row;
                        return (
                          <span data-delete-id={original._id}>
                            <Button
                              color="primary"
                              id={original._id}
                              onClick={() => this.handleAsociar(original)}
                            >
                              Asociar
                            </Button>
                          </span>
                        );
                      },
                    },
                  ]}
                />
              )}
            </div>
          )}

          <Button style={{ right: "0px" }} onClick={this.handleClose}>
            close
          </Button>
        </Modal>
        {(items || []).length > 0 ? (
          <Table data={items} columns={columns} />
        ) : (
          `No se han cargado elementos`
        )}
      </Wrapper>
    );
  }
}

export default ItemsTable;
