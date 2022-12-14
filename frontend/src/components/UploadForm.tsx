import React, {useState} from "react"
import {UseForm} from "./UseForm"
import {Button,Form,FormGroup,Label,Input,Col,Alert} from "reactstrap"



const UploadForm = () =>{

    const initialState = {
        nombre: "",
        id_fk_pub: 0,
    }

    async function formularioCallback(){
        console.log(values)
        console.log(inputFiles)
        //hacer fetch a values.nombre e input files
        alert("subido correctamente");
        
        
        // aqui va lo del mandar a backend y revisar que todo este bien??
    }

    const {onChange,onSubmit,values} = UseForm(formularioCallback,initialState)

    const [inputFiles, setInputFiles] = React.useState(null)


    return(
        <Form onSubmit={onSubmit}>

            <FormGroup>
                <Label htmlFor="head-form"></Label>
                Subir archivos
            </FormGroup>

            <FormGroup row>
                <Label sm={2}>Nombre</Label>
                <Col sm={9}>
                    <Input
                        id= "nombre"
                        name = "nombre"
                        placeholder="Ingresar nombre del archivo"
                        required
                        
                        onChange = {onChange}
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label sm={2}>Archivo</Label>
                <Col sm={9}>
                    <Input
                        id= "archivo"
                        name = "archivo"
                        type="file"
                        single
                        onChange={(e) => setInputFiles(e.target.files)}
                        required
                    />
                </Col>
            </FormGroup>

            <Button type="submit" color="primary">
                Subir
            </Button>


        </Form>
    )
}

export default UploadForm