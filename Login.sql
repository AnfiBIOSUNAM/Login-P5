create database Tienda;
use Tienda

create user 'lab'@'localhost' identified by 'Developer123!';

grant all privileges on Tienda.* to 'lab'@'localhost'
with grant option;

DROP TABLE IF EXISTS Usuario;
CREATE TABLE Usuario(
	idUsuario serial,
    nombre varchar(50) not null,
    apPat varchar (50) not null,
    apMat varchar (50) not null,
    correo varchar (50) not null,
    telefono varchar(10) not null,
    contraseña varchar(50) not null,
    imagen varchar(50),
    vendedor tinyint not null,
    primary key (idUsuario)
);


INSERT INTO Usuario (nombre, apPat, apMat, correo, telefono, contraseña, imagen, vendedor)
VALUES ('Juan', 'Pérez', 'Gómez', 'juan@example.com', '1234567890', 'contraseña123', 'imagen.jpg', 0);

select * from Usuario