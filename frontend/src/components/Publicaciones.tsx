import React,{useState, useEffect} from "react"
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
        titulo: "publicacion de ejemplo",
        revista: "ciencia chile",
        indexacion: "n/a",
        año: "2022",
        citaciones: 4,
        clasificacion: "n/a",
        disciplina: "ingenieria"},

        {id:2,
            titulo: "publicacion ejem 2",
            revista: "uach revista",
            indexacion: "n/a",
            año: "2021",
            citaciones: 16,
            clasificacion: "n/a",
            disciplina: "ingenieria"}

]

function Publicacion(){

    const initialState = {
        publicacion_id:0,
        titulo: "",
        autores: "",
        revista: "",
        indexacion: "",
        anio: "",
        autoresEx: 0,
        clasificacion: "",
        disciplina: ""

    }

    async function formularioCallback(){

        console.log("aquiiii")
        console.log(publiEdit)
        //handleEdit(publiEdit) //editar fetch??
        alert("ediatado correctamente")
        
        //por docker:docker ps id-- stop, rm, docker compose down --volumes
    }


    const {onChange,onSubmit,values} = UseForm(formularioCallback,initialState)

    const [showEdit,setShowEdit] = React.useState(false)

    const [targetId,setTargetId] = React.useState(0)

    const [publicaciones,setPublicaciones] = React.useState<dataPublicacion[] | []>([])

    const [publiEdit,setPubliEdit] = React.useState(initialState)


    useEffect(()=>{
        fetch("http://localhost:5000/api/form")
        .then(res => res.json())
        .then(resPub => {
            setPublicaciones(resPub.data)
            console.log(resPub.data)
        })
    },[])

    const handleShow = (d:boolean,id:string,idtarget,datos) => {
        if(id === "editar"){
            setShowEdit(d)
            setTargetId(idtarget)
            setPubliEdit(datos)
        }
            
    }

    const handleEdit = (data:any) =>{

        fetch("http://localhost:5000/form/update/pub", {
            method: 'POST',
            body: JSON.stringify(data), 
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => console.log('Success:', response));
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
                                Autores
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
                                Aut.Ex
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

                        {publicaciones.map((archivos)=>(
                            <tr>
                                <td>{archivos.publicacion_id}</td>
                                <td>{archivos.autores}</td>
                                <td>{archivos.titulo}</td>
                                <td>{archivos.revista}</td>
                                <td>{archivos.indexacion}</td>
                                <td>{archivos.anio}</td>
                                <td>{archivos.autores_extranjeros}</td>
                                <td>{archivos.clasificacion}</td>
                                <td>{archivos.disciplina}</td>
                                <td>
                                    <Button color = "primary" onClick={()=>handleShow(true,"editar",archivos.publicacion_id,archivos)}>Editar</Button>
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
    

                                <Form onSubmit={onSubmit}>

                                

                                    <FormGroup row>
                                        <Label sm={2}>Titulo</Label>
                                        <Col sm={9}>
                                            <Input
                                                id= "titulo"
                                                name = "titulo"
                                                placeholder="Ingresar titulo de la publicación"
                                                defaultValue = {publiEdit.titulo}
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
                                                defaultValue = {publiEdit.autores}
                                                onChange = {onChange}
                                                required
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
                                                defaultValue = {publiEdit.revista}
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
                                                defaultValue = {publiEdit.indexacion}
                                                onChange = {onChange}
                                                required     
                                            />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label sm={2}>Año</Label>
                                        <Col sm={9}>
                                        <Input
                                            id="año"
                                            name="año"
                                            placeholder="Ingresar año"
                                            defaultValue = {publiEdit.anio}
                                            onChange={onChange}
                                            required
                                        />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup check inline>
                                        <Col sm={9}>
                                        <Input
                                            type="checkbox"
                                            id="autoresEx"
                                            name="autoresEx"
                                            onChange={onChange}
                                            defaultValue={publiEdit.autoresEx}
                                        />
                                        </Col>
                                        <Label check>¿Hay autores extranjeros?</Label>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label sm={2}>clasificacion</Label>
                                        <Col sm={9}>
                                            <Input
                                                id= "clasificacion"
                                                name = "clasificacion"
                                                placeholder="Ingresar clasificacion"
                                                defaultValue = {publiEdit.clasificacion}
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
                                                defaultValue = {publiEdit.disciplina}
                                                onChange = {onChange}
                                                required
                                            />
                                        </Col>
                                    </FormGroup>


                                    <Button type="submit" color="primary">
                                        Registrar
                                    </Button>
                                    
                                </Form>


                            </ModalBody>

                            <ModalFooter>
                                <Button color="danger" onClick={()=>handleShow(false,"editar",0,initialState)}>cancelar</Button>
                                
                            </ModalFooter>

                        </Modal>

            



                    </tbody>
                </Table>

            </Container>
    )
}

export default Publicacion