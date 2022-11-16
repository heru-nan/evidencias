import React,{useState} from "react"
import {UseForm} from "./UseForm"
import {Table,Button,Container,Modal,ModalBody,ModalHeader,FormGroup,ModalFooter} from "reactstrap"
import {Form,Label,Input,Col,Alert} from "reactstrap"


type dataPublicacion = {
    id:number,
    titulo: string,
    revista: string,
    indexacion: string,
    año: string,
    citaciones: number,
    clasificacion: string,
    disciplina: string
}

const dataExample: dataPublicacion[] = [

    {id:1,
        titulo: "asdsad",
        revista: "asdasdsa",
        indexacion: "asdbh",
        año: "asdsadsad",
        citaciones: 4,
        clasificacion: "asdasdasd",
        disciplina: "asdasdsad"},

        {id:2,
            titulo: "asdsad",
            revista: "asdasdsa",
            indexacion: "asdbh",
            año: "asdsadsad",
            citaciones: 98,
            clasificacion: "asdasdasd",
            disciplina: "asdasdsad"}

]

function Publicacion(){

    const initialState = {
        titulo: "",
        autores: "",
        revista: "",
        index: "",
        clasificacion: "",
        citaciones:0

    }

    async function formularioCallback(){
        console.log(values)
        alert("subido correctamente")
        
        // aqui va lo del mandar a backend y revisar que todo este bien??
    }


    const {onChange,onSubmit,values} = UseForm(formularioCallback,initialState)

    const [showEdit,setShowEdit] = React.useState(false)


    const handleShow = (d:boolean,id:string) => {
        if(id === "editar"){
            setShowEdit(d)
        }
            
    }


    return(
        <Container>
                <br />
                <Table>
                    <thead>
                        <tr>
                            <th>
                                ID
                            </th>

                            <th>
                                Titulo
                            </th>

                            <th>
                                Revisa
                            </th>

                            <th>
                                Indexación
                            </th>

                            <th>
                                Año
                            </th>

                            <th>
                                Citaciones
                            </th>

                            <th>
                                Clasificación
                            </th>

                            <th>
                                Disciplina
                            </th>


                        </tr>
                    </thead>

                    <tbody>

                        {dataExample.map((archivos)=>(
                            <tr>
                                <td>{archivos.id}</td>
                                <td>{archivos.titulo}</td>
                                <td>{archivos.revista}</td>
                                <td>{archivos.indexacion}</td>
                                <td>{archivos.año}</td>
                                <td>{archivos.citaciones}</td>
                                <td>{archivos.clasificacion}</td>
                                <td>{archivos.disciplina}</td>
                                <td>
                                    <Button color = "primary" onClick={()=>handleShow(true,"editar")}>Editar</Button>
                                </td>
                            </tr>
                        ))}

                        <Modal isOpen = {showEdit}>
                            <ModalHeader>
                                <div>
                                    <h3>Editar publicacion</h3>
                                </div>
                            </ModalHeader>

                            <ModalBody>

                                <h3>aki form</h3>


                                <Form onSubmit={onSubmit}>

                                    <FormGroup>
                                        <Label htmlFor="head-form"></Label>
                                        Editar Publicación
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
                                        <Label sm={2}>clasificacion</Label>
                                        <Col sm={9}>
                                            <Input
                                                id= "clasificacion"
                                                name = "clasificacion"
                                                placeholder="Ingresar clasificacion"
                                                onChange = {onChange}
                                            />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label sm={2}>Citaciones</Label>
                                        <Col sm={9}>
                                            <Input
                                                id= "citaciones"
                                                name = "citaciones"
                                                placeholder="Ingresar n° citaciones"
                                                onChange = {onChange}
                                            />
                                        </Col>
                                    </FormGroup>


                                    <Button type="submit" color="primary">
                                        Registrar
                                    </Button>
                                    
                                </Form>


                            </ModalBody>

                            <ModalFooter>
                                <Button color="danger" onClick={()=>handleShow(false,"editar")}>cancelar</Button>
                                
                            </ModalFooter>

                        </Modal>

            



                    </tbody>
                </Table>

            </Container>
    )
}

export default Publicacion