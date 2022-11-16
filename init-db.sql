use evidencias;

DROP TABLE IF EXISTS `dirige`;
DROP TABLE IF EXISTS `proyecto`;
DROP TABLE IF EXISTS `publicar`;
DROP TABLE IF EXISTS `publicacion`;
DROP TABLE IF EXISTS `disciplina`;
DROP TABLE IF EXISTS `institucion`;
DROP TABLE IF EXISTS `afiliar`;
DROP TABLE IF EXISTS `financiamiento`;
DROP TABLE IF EXISTS `academico`;
DROP TABLE IF EXISTS `archivo`;


create table proyecto(
	id_proyecto int(6) not null AUTO_INCREMENT,
    palabras_clave varchar(300),
    anio varchar(300),
    codigo varchar(300),
    nombre varchar(100),
    objetivo varchar(300),
    fuente_financiamiento varchar(300),
    concurso varchar(300),
    presupuesto varchar(300),
    fecha_inicio varchar(300),
    fecha_termino varchar(300),
    primary key(`id_proyecto`)
);

create table publicacion(
    id INT NOT NULL AUTO_INCREMENT,
	issn_doi int(6) not null,
    titulo varchar(100),
    autores varchar(100),
    revista varchar(100),
    autores_extranjeros boolean,
    indexacion varchar(100), 
    anio year,
    citaciones varchar(300),
    clasificacion varchar(100),
    disciplina varchar(100),
    primary key(`id`),
);


create table archivo(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_fk_pub int(6),
    id_fk_pro int(6),
    nombre varchar(255),
    ruta varchar(255),
    foreign key(id_fk_pub) references publicacion(`id_publicacion`),
    foreign key(id_fk_pro) references proyecto(`id_proyecto`)
)
