import React from "react";
import "./App.css";
import Files from "./components/Files";
import Head from "./components/Head";
import ListEvi from "./components/ListEvi";
import Publicaciones from "./components/Publicaciones";
import Publicacion from "./components/Publicaciones";
import RegProyect from "./components/RegProyect";
import RegPubli from "./components/RegPubli";
import UploadForm from "./components/UploadForm";

function App() {
  const currentPage = window.location.href.split("/")[3];
  console.log(currentPage);

  switch (currentPage) {
    case "rutaEvi":
      return (
        <div className="App">
          <Head />

          <ListEvi />
          <Files />
        </div>
      );
      break;

    case "RutaUp":
      return (
        <div className="App">
          <Head />

          <UploadForm />
        </div>
      );
      break;

    case "rutaRegPubli":
      return (
        <div className="App">
          <Head />

          <RegPubli />
        </div>
      );
      break;

    case "rutaRegProyect":
      return (
        <div className="App">
          <Head />

          <RegProyect />
        </div>
      );
      break;

    case "archivos":
      return (
        <div className="App">
          <Head />

          <ListEvi />

          <Files />
        </div>
      );
      break;

    case "publicaciones":
      return (
        <div className="App">
          <Head />

          <ListEvi />

          <Publicaciones />
        </div>
      );
      break;

    default:
      return (
        <div className="App">
          <Head />
          <ListEvi />

          <Files />
        </div>
      );
  }
}

export default App;
