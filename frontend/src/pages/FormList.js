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
import EditPub from "../components/EditPub";

const customStyles = {
  content: {
    height: "540px",
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
    };
  }

  componentDidMount() {
    console.log("ItemsList: props");
    console.log(this.props);

    this.fetchAllItems();
  }

  handleClose = () => {
    this.setState({ open: false });
    this.fetchAllItems();
  };

  setOpen = (currentItem) => {
    this.setState({ open: true, currentItem: currentItem });
  };

  fetchAllItems = () => {
    api
      .getAllFormItems()
      .then((resp) => {
        const { data } = resp.data;
        console.log("getAllItems: resp");
        console.log("data", data);
        this.setState({ items: data });
      })
      .catch((err) => {
        console.error(`ERROR in 'getAllItems': ${err}`);
        console.error(err);
        return err;
      });
  };

  render() {
    const items = this.state.items || {};
    console.log(items);
    console.log("FORMLIST");

    const columns = [
      {
        Header: "ID",
        accessor: "id_publicacion",
        // filterable: true,
        Cell: (props) => {
          console.log(props);
          const { original } = props.cell.row;
          return <span data-item-id={original._id}>{props.value}</span>;
        },
      },
      {
        Header: "Nombre",
        accessor: "nombre_publicacion",
        // filterable: true,
        Cell: (props) => {
          const { original } = props.cell.row;
          return <span data-name={original.name}>{props.value}</span>;
        },
      },
      {
        Header: "Revista",
        accessor: "revista",
        // filterable: true,
        Cell: (props) => {
          const { original } = props.cell.row;
          return <span data-name={original.name}>{props.value}</span>;
        },
      },
      {
        Header: "Indexacion",
        accessor: "indexacion",
        // filterable: true,
        Cell: (props) => {
          const { original } = props.cell.row;
          return <span data-name={original.name}>{props.value}</span>;
        },
      },
      {
        Header: "Anio",
        accessor: "anio",
        // filterable: true,
        Cell: (props) => {
          const { original } = props.cell.row;
          return <span data-name={original.filename}>{props.value}</span>;
        },
      },
      {
        Header: "Citaciones",
        accessor: "citaciones",
        // filterable: true,
        Cell: (props) => {
          const { original } = props.cell.row;
          return <span data-name={original.content}>{props.value}</span>;
        },
      },
      {
        Header: "Clasificacion",
        accessor: "clasificacion",
        // filterable: true,
        Cell: (props) => {
          const { original } = props.cell.row;
          return <span data-name={original.content}>{props.value}</span>;
        },
      },
      {
        Header: "Disciplina",
        accessor: "disciplina",
        // filterable: true,
        Cell: (props) => {
          const { original } = props.cell.row;
          return <span data-name={original.content}>{props.value}</span>;
        },
      },
      {
        Header: "Acciones",
        accessor: "_edit",
        Cell: (props) => {
          const { original } = props.cell.row;
          return (
            <span data-delete-id={original._id}>
              <Button
                className="mr-2"
                id={original._id}
                onClick={() => this.setOpen(original)}
              >
                Editar
              </Button>
            </span>
          );
        },
      },
      // {
      //   Header: 'Update',
      //   accessor: '_update',
      //   Cell: props => {
      //     const { original } = props.cell.row;

      //     return (
      //       <Link data-update-id={original._id} to={`/item/update/${original._id}`}>
      //         Update
      //       </Link>
      //     );
      //   },
      // },
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
          <h2>Editar Publicacion</h2>
          <div
            style={{
              padding: "2rem",
              width: "500px",
              display: "column",
              justifyContent: "center",
              alignItems: "space-eveenly",
            }}
          >
            <EditPub
              currentItem={this.state.currentItem}
              closeModal={this.handleClose}
            />
          </div>
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
