CREATE DATABASE FORlinks;

USE `FORlinks`;

CREATE TABLE users (
    id INT(11) NOT NULL,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    PRIMARY KEY (id)
);

ALTER TABLE users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT;

DESCRIBE users;


CREATE TABLE links (
    id INT(11) NOT NULL,
    title VARCHAR(150) NOT NULL,
    url VARCHAR(255) NOT NULL,
    description TEXT,
    user_id INT(11),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users (id)
);


ALTER TABLE links
    ADD PRIMARY KEY (id);

ALTER TABLE links
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT;

DESCRIBE links;


--consultar si un dato fue ingresado correctamente
/*SHOW DATABASES; mostrar las bases de datos (para este ejercico forlinks*/
/*USE forlinks;*/
/*SHOW TABLES;*/
/*SELECT * FROM ...*/