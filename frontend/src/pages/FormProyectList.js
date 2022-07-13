import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useTable } from "react-table";
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
    };
  }

  componentDidMount() {
    console.log("ItemsList: props");
    console.log(this.props);

    this.fetchAllItems();
  }

  handleEdit = () => {
    console.log("handle edit");
  };

  fetchAllItems = () => {
    api
      .getAllFormProyectItems()
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
    console.log("FORMLISTPROYECY");

    //   id_proyecto int(6) not null AUTO_INCREMENT,
    //   palabras_clave varchar(300),
    //   anio year,
    //   codigo varchar(300) not null,
    //   nombre varchar(100),
    //   objetivo varchar(300),
    //   fuente_financiamiento varchar(300),
    //   concurso varchar(300),
    //   presupuesto varchar(300),
    //   fecha_inicio date,
    //   fecha_termino date,

    const columns = [
      {
        Header: "ID",
        accessor: "id_proyecto",
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
        Header: "Palabras clave",
        accessor: "palabras_clave",
        // filterable: true,
        Cell: (props) => {
          const { original } = props.cell.row;
          return <span data-name={original.name}>{props.value}</span>;
        },
      },
      {
        Header: "Fuente financiamiento",
        accessor: "fuente_financiamiento",
        // filterable: true,
        Cell: (props) => {
          const { original } = props.cell.row;
          return <span data-name={original.name}>{props.value}</span>;
        },
      },
      {
        Header: "Concurso",
        accessor: "concurso",
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
        Header: "Codigo",
        accessor: "codigo",
        // filterable: true,
        Cell: (props) => {
          const { original } = props.cell.row;
          return <span data-name={original.content}>{props.value}</span>;
        },
      },
      {
        Header: "Presupuesto",
        accessor: "presupuesto",
        // filterable: true,
        Cell: (props) => {
          const { original } = props.cell.row;
          return <span data-name={original.content}>{props.value}</span>;
        },
      },
      {
        Header: "Fecha Inicio",
        accessor: "fecha_inicio",
        // filterable: true,
        Cell: (props) => {
          const { original } = props.cell.row;
          return <span data-name={original.content}>{props.value}</span>;
        },
      },
      {
        Header: "Fecha Termino",
        accessor: "fecha_termino",
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
              <Button id={original._id} onClick={this.handleEdit}>
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
        {(items || []).length > 0 ? (
          <Table data={items} columns={columns} />
        ) : (
          `No items to render... :(`
        )}
      </Wrapper>
    );
  }
}

export default ItemsTable;
