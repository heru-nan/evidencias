import React from 'react';
import './App.css';
import Files from './components/Files';
import Head from './components/Head';
import ListEvi from './components/ListEvi';
import Proyectos from './components/Proyectos';
import Publicaciones from './components/Publicaciones';
import Publicacion from './components/Publicaciones';
import RegProyect from './components/RegProyect';
import RegPubli from './components/RegPubli';
import UploadForm from './components/UploadForm';


function App() {
  const currentPage = window.location.href.split("/")[3]
  console.log(currentPage)

  switch (currentPage){
    case "rutaEvi":
      return (
        <div className="App">
    
          <Head />
          
          <ListEvi/>
          <Files/>

    
        </div>
      );
      break

    case "RutaUp":
      return (
        <div className="App">
    
          <Head />
          <h1> formulario subida</h1>
          <UploadForm/>
    
        </div>
      );
      break

    case "rutaRegPubli":
      return (
        <div className="App">
    
          <Head />
          <h1>Registrar publicacion</h1>
          <RegPubli/>
    
        </div>
      );
      break

    case "rutaRegProyect":
      return (
        <div className="App">
    
          <Head />
          <h1> formulario proyecto</h1>
          <RegProyect/>
        </div>
      );
      break

      case "archivos":
        return (
          <div className="App">
      
            <Head />
            
            <ListEvi/>
            
            <Files/>
            
          </div>
        );
        break

      case "publicaciones":
        return (
          <div className="App">
      
            <Head />
            
            <ListEvi/>
            
            <Publicaciones/>
          </div>
        );
        break

        case "proyectos":
          return (
            <div className="App">
        
              <Head />
              
              <ListEvi/>
              <Proyectos/>
            </div>
          );
          break


    
    default:
      return (
        <div className="App">
    
          <Head />
          <h1> Lista evidencias</h1>
          <ListEvi/>
          
          <Files/>
    
        </div>
      );
      

  }





  
}


export default App;
