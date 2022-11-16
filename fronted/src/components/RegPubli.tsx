import React, {useState} from "react"
import {UseForm} from "./UseForm"
import {Button,Form,FormGroup,Label,Input,Col,Alert} from "reactstrap"


function RegPubli(){

    const initialState = {
        titulo: "",
        autores: "",
        revista: "",
        index: "",
        issnDoi: ""

    }

    async function formularioCallback(){
        console.log(values)
        alert("subido correctamente")
        
        // aqui va lo del mandar a backend y revisar que todo este bien??
    }


    const {onChange,onSubmit,values} = UseForm(formularioCallback,initialState)




    return (
        <Form onSubmit={onSubmit}>

            <FormGroup>
                <Label htmlFor="head-form"></Label>
                Registrar Publicación
            </FormGroup>

            <FormGroup row>
                <Label sm={2}>Titulo</Label>
                <Col sm={9}>
                    <Input
                        id= "titulo"
                        name = "titulo"
                        placeholder="Ingresar titulo de la publicación"
                        onChange = {onChange}
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label sm={2}>Autores</Label>
                <Col sm={9}>
                    <Input
                        id= "autores"
                        name = "autores"
                        placeholder="Ingresar autores"
                        onChange = {onChange}
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label sm={2}>Revista</Label>
                <Col sm={9}>
                    <Input
                        id= "revista"
                        name = "revista"
                        placeholder="Ingresar revista"
                        onChange = {onChange}                     
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label sm={2}>Indexación</Label>
                <Col sm={9}>
                    <Input
                        id= "index"
                        name = "index"
                        placeholder="Ingresar indexación"
                        onChange = {onChange}     
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label sm={2}>IssnDoi</Label>
                <Col sm={9}>
                    <Input
                        id= "issnDoi"
                        name = "issnDoi"
                        placeholder="Ingresar issn/Doi"
                        onChange = {onChange}
                    />
                </Col>
            </FormGroup>


            <Button type="submit" color="primary">
                Registrar
            </Button>
            
        </Form>

    )


}

export default RegPubli