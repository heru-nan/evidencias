import React, {useState} from "react"
import {UseForm} from "./UseForm"
import {Button,Form,FormGroup,Label,Input,Col,Alert} from "reactstrap"


function RegPubli(){

    const initialState = {
        titulo: "",
        autores: "",
        revista: "",
        index: "",
        issnDoi: "",
        año: "",
        disciplina: "",
        clasificacion: "",
        autoresEx: "off"

    }

    async function formularioCallback(){
        console.log(values)
        alert("subido correctamente")
        window.location.reload();
        //if de no refrescar si esta mal todo xd 
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
                        required
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
                        required
                    />
                </Col>
            </FormGroup>

            <FormGroup
                check
                inline
                >
                <Col sm={9}>
                    <Input type="checkbox"
                        
                        id = "autoresEx"
                        name="autoresEx"
                        onChange={onChange}
                    />
                </Col>
                <Label check>
                ¿Hay autores extranjeros?
                </Label>
            </FormGroup>

            <FormGroup row>
                <Label sm={2}>Revista</Label>
                <Col sm={9}>
                    <Input
                        id= "revista"
                        name = "revista"
                        placeholder="Ingresar revista"
                        onChange = {onChange}
                        required                     
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
                        required     
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
                        required
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label sm={2}>Año</Label>
                <Col sm={9}>
                    <Input
                        id= "año"
                        name = "año"
                        placeholder="Ingresar año"
                        onChange = {onChange}
                        required
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label sm={2}>Disciplina</Label>
                <Col sm={9}>
                    <Input
                        id= "disciplina"
                        name = "disciplina"
                        placeholder="Ingresar disciplina"
                        onChange = {onChange}
                        required
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label sm={2}>Clasificacion</Label>
                <Col sm={9}>
                    <Input
                        id= "clasificacion"
                        name = "clasificacion"
                        placeholder="Ingresar clasificacion"
                        onChange = {onChange}
                        required
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