-- CREATE DATABASE evidencias;
use evidencias;
-- CREATE TABLE publicacion()


/*tabla academicos*/
DROP TABLE IF EXISTS `academico`;
DROP TABLE IF EXISTS `publicacion`;
DROP TABLE IF EXISTS `disciplina`;

CREATE TABLE academico (
    id_academico varchar(255) not null,
    rut varchar(255),
    nombre varchar(255),
    apellido1 varchar(255),
    apellido2 varchar(255),
    genero varchar(255),
    nacionalidad varchar(255),
    correo varchar(255),
    PRIMARY KEY (`id_academico`)
);

create table publicacion (
    id_publicacion varchar(255),
    anio_publicacion int(5),
    nombre_publicacion VARCHAR(100),
    id_disciplina int(100),
    clasificacion varchar(10),
    citas int(10),
    PRIMARY KEY (`id_publicacion`)
);

CREATE TABLE disciplina (
    id varchar(100),
    nombre_disciplina varchar(255),
    PRIMARY KEY (`id`)
);