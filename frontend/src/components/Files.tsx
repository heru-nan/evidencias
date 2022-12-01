import React,{useState,useEffect} from "react"
import {Table,Button,Container,Modal,ModalBody,ModalHeader,FormGroup,ModalFooter,Form,Label,Col,Input} from "reactstrap"


type dataFiles = {
    id: number,
    nombre: string,
    nombreArchivo: string,
    idPubli: number
}

const dataExample: dataFiles[] =  [
    {id:1, nombre: "reg.pdf",nombreArchivo: "registro de ejemplo 1",idPubli: 1},
    {id:2, nombre: "planilaaaala2021.exel",nombreArchivo: "notas alumnos",idPubli: 2},
    {id:3, nombre: "presentacion final.pptx",nombreArchivo: "presentacion publicacion",idPubli: 5},
]

type dataPubli = {
    id:number,
    titulo:string
}

type dataProyec = {
    id:number,
    nombre:string
}

const dataPub: dataPubli[] = [
    {id:1, titulo: "hola"},
    {id:2,titulo: "como andas"}
]

const dataPro: dataProyec[] = [
    {id:5,nombre:"leo"},
    {id:10,nombre:"fabi"}
]


function Files(){    

    const [showAsoc,setShowAsoc] = React.useState(false)

    const [showDelete,setShowDelete] = React.useState(false)

    const [showPubli,setShowPubli] = React.useState(false)

    const [showProyec,setShowProyec] = React.useState(false)

    const [files,setFiles] = React.useState<dataFiles[] | any[]>([])


    //asoc
    const[id,setId] = React.useState(0)
    const[name,setName] = React.useState("")
    const[idPub,setIdPub] = React.useState(0)
    const[path,setPath] = React.useState("")
    

    const handleShow = (d:boolean,idnt:string,datos:any) => {
        if(idnt === "asociar"){
            setShowAsoc(d)
            setId(datos.id)
            setName(datos.nombre)
            setIdPub(datos.idFkPub)
            setPath(datos.ruta)

        }

        else if(idnt === "save"){
            setShowAsoc(d)
            console.log("ptecion::::::")
            console.log(id,name,idPub,path)
            console.log(id)
            handleEdit()

        }

        else if(idnt === "eliminar") setShowDelete(d)
    }


    useEffect(()=>{
        fetch("http://localhost:5000/api/files")
        .then(res => res.json())
        .then(resFile => {
            setFiles(resFile.data)
            console.log(resFile.data)
            console.log("xxxxxxxxxxxx")
            console.log(files)
        })
    },[])


    const handleEdit = () => {
        fetch("http://localhost:5000/api/files", {
          method: "POST",
          body: JSON.stringify({
            id: id,
            nombre: name,
            idFkPub: idPub,
            ruta: path
          }),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((res) => console.log("RES", res));
      };

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
                                nombre
                            </th>

                            <th>
                                idPubli
                            </th>

                            <th>
                                acciones
                            </th>
                        </tr>
                    </thead>

                    <tbody>

                        {files.map((archivos)=>(
                            <tr>
                                <td>{archivos.id}</td>
                                <td>{archivos.nombre}</td>
                                <td>{archivos.idFkPub}</td>                     
                                <td>
                                    <Button color = "primary" onClick={()=>handleShow(true,"asociar",archivos)}>Asociar</Button>{"  "}
                                    <Button color = "primary">Descargar</Button>{"  "}
                                    <Button color = "danger" onClick={()=>handleShow(true,"eliminar",archivos)}  >eliminar</Button>
                                </td>
                            </tr>
                        ))}



                        <Modal isOpen = {showAsoc}>
                            <ModalHeader>
                                <div>
                                    <h3>Asociar</h3>
                                </div>
                            </ModalHeader>

                            <ModalBody>


                                <Form>

                                    <FormGroup row>
                                        <Label sm={2}>Id</Label>
                                        <Col sm={9}>
                                        <Input
                                            id="id"
                                            name="id"
                                            type="number"
                                            value={id}
                                            autoComplete = "off"
                                            

                                            />                                        
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label sm={2}>Nombre</Label>
                                        <Col sm={9}>
                                        <Input
                                            id="name"
                                            name="name"
                                            value={name}
                                            required
                                            onChange={(e) => setName(e.target.value)}
                                            />                                        
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label sm={2}>Id Publicacion</Label>
                                        <Col sm={9}>
                                        <Input
                                            type = "number"
                                            id="idPub"
                                            name="idPub"
                                            value={idPub}
                                            required
                                            onChange={(e) => setIdPub(e.target.valueAsNumber)}
                                            />                                        
                                        </Col>
                                    </FormGroup>

                                </Form>


                            </ModalBody>

                            <ModalFooter>
                                <Button color="primary" onClick={()=>handleShow(false,"save",[])}>Guardar</Button>
                                <Button color="danger" onClick={()=>handleShow(false,"asociar",[])}>cancelar</Button>
                            </ModalFooter>

                        </Modal>


                        <Modal isOpen = {showDelete}>
                            <ModalHeader>
                                <div>
                                    <h3>Borrar</h3>
                                </div>
                            </ModalHeader>

                            <ModalBody>

                            <Button color="danger">borrar!</Button>

                            </ModalBody>

                            <ModalFooter>
                                <Button color="danger" onClick={()=>handleShow(false,"eliminar",[])} >Cancelar</Button>
                            </ModalFooter>

                        </Modal>

                    </tbody>
                </Table>
            </Container>
        )
    }

export default Files