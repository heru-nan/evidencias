import React,{useState, useEffect} from "react"
import {UseForm} from "./UseForm"
import {Table,Button,Container,Modal,ModalBody,ModalHeader,FormGroup,ModalFooter} from "reactstrap"
import {Form,Label,Input,Col,Alert} from "reactstrap"

//

type dataPublicacion = {
    id:number,
    titulo: string,
    revista: string,
    indexacion: string,
    año: string,
    citaciones: number,
    clasificacion: string,
    disciplina: string
} | any

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
        disciplina: "",
        issn_doi: ""

    }

    async function formularioCallback(){
        handleEdit() //editar fetch??
        alert("ediatado correctamente")
        window.location.reload();
        
        //por docker:docker ps id-- stop, rm, docker compose down --volumes
    }

    const {onChange,onSubmit,values} = UseForm(formularioCallback,initialState)

    const [showEdit,setShowEdit] = React.useState(false)

    const [targetId,setTargetId] = React.useState(0)

    const [publicaciones,setPublicaciones] = React.useState<dataPublicacion[] | []>([])

    const [publiEdit,setPubliEdit] = React.useState(initialState)

    const [id, setID] = React.useState(0)
    const [titulo, setTitulo] = React.useState("")
    const [autores, setAutores] = React.useState("")
    const [revista, setRevista] = React.useState("")
    const [indexacion, setIndexacion] = React.useState("")
    const [anio, setAnio] = React.useState("")
    const [autores_extranjeros,setAutores_extranjeros] = React.useState("")
    const [clasificacion, setClasificacion] = React.useState("")
    const [disciplina, setDisciplina] = React.useState("")
    const [issn_doi, setIssn_doi] = React.useState("")

    useEffect(()=>{
        fetch("http://localhost:5000/api/pubs")
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

            setID(idtarget)
            setTitulo(datos.titulo)
            setAutores(datos.autores)
            setRevista(datos.revista)
            setIndexacion(datos.indexacion)
            setAnio(datos.anio)
            setAutores_extranjeros(datos.autores_extranjeros)
            setClasificacion(datos.clasificacion)
            setDisciplina(datos.disciplina)
            setIssn_doi(datos.issnDoi)
        }
            
    }

    const handleEdit = () =>{

        fetch("http://localhost:5000/api/pubs/update", {
            method: 'POST',
            body: JSON.stringify({
                id: id,
                autores: autores,
                titulo: titulo,
                revista: revista,
                indexacion: indexacion,
                autores_extranjeros: autores_extranjeros,
                issnDoi: issn_doi,
                anio: anio,
                clasificacion: clasificacion,
                disciplina: disciplina,
            }), 
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
          }).then(res => res.json())
          .then(res => console.log("RES",res))
    }

    return(
        <Container>
                <br />
                <Table>
                    <thead>
                        <tr>
                            <th>
                                ID xd
                            </th>

                            <th>
                                Autores
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
                                Aut.Ex
                            </th>

                            <th>
                                Clasificación
                            </th>

                            <th>
                                Disciplina
                            </th>

                            <th>
                                issnDoi
                            </th>


                        </tr>
                    </thead>

                    <tbody>

                        {publicaciones.map((archivos)=>(
                            <tr>
                                <td>{archivos.id}</td>
                                <td>{archivos.autores}</td>
                                <td>{archivos.titulo}</td>
                                
                                <td>{archivos.revista}</td>
                                <td>{archivos.indexacion}</td>
                                <td>{archivos.anio}</td>
                                <td>{archivos.autoresExtranjeros}</td>
                                <td>{archivos.clasificacion}</td>
                                <td>{archivos.disciplina}</td>
                                <td>{archivos.issnDoi}</td>
                                <td>
                                    <Button color = "primary" onClick={()=>handleShow(true,"editar",archivos.id,archivos)}>Editar</Button>
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
                                        <Label sm={2}>autores</Label>
                                        <Col sm={9}>
                                            <Input
                                                id= "autores"
                                                name = "autores"
                                                placeholder="Ingresar Autores"
                                                value = {autores}
                                                onChange = {e => setAutores(e.target.value)}
                                                required
                                            />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label sm={2}>titulo</Label>
                                        <Col sm={9}>
                                            <Input
                                                id= "titulo"
                                                name = "titulo"
                                                placeholder="Ingresar titulo"
                                                value = {titulo}
                                                onChange = {e => setTitulo(e.target.value)}
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
                                                value = {revista}
                                                onChange = {e => setRevista(e.target.value)}
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
                                                value = {indexacion}
                                                onChange = {e => setIndexacion(e.target.value)}
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
                                            value = {anio}
                                            onChange = {e => setAnio(e.target.value)}
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
                                            value={autores_extranjeros}
                                            onChange = {e => setAutores_extranjeros(e.target.value)}
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
                                                value = {clasificacion}
                                                onChange = {e => setClasificacion(e.target.value)}
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
                                                value = {disciplina}
                                                onChange = {e => setDisciplina(e.target.value)}
                                                required
                                            />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label sm={2}>Issn Doi</Label>
                                        <Col sm={9}>
                                            <Input
                                                id= "issn_doi"
                                                name = "issn_doi"
                                                placeholder="Ingresar issn_doi"
                                                value = {issn_doi}
                                                onChange = {e => setIssn_doi(e.target.value)}
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