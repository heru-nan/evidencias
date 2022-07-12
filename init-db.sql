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

create table academico(
	id_academico int(6) not null AUTO_INCREMENT,
    nacionalidad varchar(100),
    nombre varchar(100) not null,
    rut varchar(100),
    genero varchar(100),
    correo varchar(100),
    primary key(`id_academico`)
);

create table financiamiento(
	id_financiamiento int(6) not null AUTO_INCREMENT,
	descripcion varchar(300),
    monto int(10) not null,
    primary key(`id_financiamiento`)    
);

create table proyecto(
	id_proyecto int(6) not null AUTO_INCREMENT,
    palabras_clave varchar(300),
    anio year,
    numero int(6) not null,
    nombre_proyecto varchar(100),
    objetivo varchar(300),
    presupuesto int(6),
    primary key(`id_proyecto`),
    foreign key(`presupuesto`) references financiamiento(`id_financiamiento`)
);

create table disciplina(
	id_disciplina int(6) not null AUTO_INCREMENT,
    nombre_disciplina varchar(100),
    primary key(`id_disciplina`)
);


create table dirige(
    id_dirige INT NOT NULL AUTO_INCREMENT,
	fecha_inicio date,
    fecha_termino date,
    proyecto int(6),
    encargado int(6),
    primary key(`id_dirige`),
    foreign key(`proyecto`) references proyecto(`id_proyecto`),
    foreign key(`encargado`) references academico(`id_academico`)
);

create table publicacion(
	id_publicacion int(6) not null,
    nombre_publicacion varchar(100),
    anio year,
    revista varchar(100),
    indexacion varchar(100), 
    citaciones varchar(300),
    clasificacion varchar(100),
    disciplina int(6),
    primary key(`id_publicacion`),
    foreign key(`disciplina`) references disciplina(`id_disciplina`)
);

create table publicar(
    id_publicar INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	estado varchar(100),
    tipo_participacion varchar(100),
    academico int(6) not null,
    publicacion int(6) not null,
    foreign key(`academico`) references academico(`id_academico`),
    foreign key(`publicacion`) references publicacion(`id_publicacion`)
);

create table institucion(
	id_institucion int(6) not null,
    nombre_institucion varchar(100),
    pais varchar(100),
    primary key(`id_institucion`)
);

create table afiliar(
    id_afiliar INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	academico int(6) not null,
    institucion int(6) not null,
    foreign key(`academico`) references academico(`id_academico`),
    foreign key(`institucion`) references institucion(`id_institucion`)
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
