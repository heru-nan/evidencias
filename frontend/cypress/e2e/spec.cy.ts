const pub = {
  autores: "Hernan",
  titulo: "Taller Ing",
  revista: "Pyview",
  indexacion: 1111,
  anio: "1999-11-11",
  clasificacion: "Alguna",
  issnDoi: 111121,
};

describe("Publication", () => {
  it("create publication", () => {
    cy.visit("http://localhost:3000/rutaRegPubli");
    cy.get('input[name="autores"]').type(pub.autores);
    cy.get('input[name="titulo"]').type(pub.titulo);
    cy.get('input[name="revista"]').type(pub.revista);
    cy.get('input[name="indexacion"]').type(pub.indexacion);
    cy.get('input[name="anio"]').type(pub.anio);
    cy.get('input[name="clasificacion"]').type(pub.clasificacion);
    cy.get('input[name="issnDoi"]').type(pub.issnDoi);

    cy.get('button[type="submit"]').click();

    cy.contains("Publicación Registrada");
  });
  it("view publication", () => {
    cy.visit("http://localhost:3000/publicaciones");

    Object.values(pub).forEach((pubVal) => {
      cy.contains(pubVal);
    });
  });
});
