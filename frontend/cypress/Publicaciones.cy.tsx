import React from "react";
import Publicaciones from "../src/components/Publicaciones";

describe("<Publicaciones />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Publicaciones />);

    // eslint-disable-next-line no-sparse-arrays
    const tableRows = [
      ,
      "ID",
      "Autores",
      "Titulo",
      "Revisa",
      "Indexación",
      "Fecha",
      "publicacion",
      "Autores Extranjeros",
      "Clasificación",
      "Disciplina",
      "ISSN/DOI",
      "Acciones",
    ];

    tableRows.forEach((row) => {
      cy.contains(row);
    });
  });
});
