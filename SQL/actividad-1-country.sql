-- Eliminación previa (por si existe)
DROP DATABASE IF EXISTS country_db;

-- Creación de la base
CREATE DATABASE country_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE country_db;

-- Tabla country
CREATE TABLE country (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    capital VARCHAR(100),
    language VARCHAR(100),
    area FLOAT,
    population INT
) ENGINE=InnoDB;

-- Datos de prueba
INSERT INTO country (name, capital, language, area, population) VALUES
('Argentina', 'Buenos Aires', 'Spanish', 2780400, 45000000),
('Germany', 'Berlin', 'German', 357386, 83000000),
('Japan', 'Tokyo', 'Japanese', 377975, 126000000);

-- Procedimientos almacenados

-- Obtener país
DELIMITER //
CREATE PROCEDURE country_get(IN p_id INT)
BEGIN
    SELECT * FROM country WHERE id = p_id;
END;
//
DELIMITER ;

-- Crear país
DELIMITER //
CREATE PROCEDURE country_create(
    IN p_name VARCHAR(100),
    IN p_capital VARCHAR(100),
    IN p_language VARCHAR(100),
    IN p_area FLOAT,
    IN p_population INT
)
BEGIN
    INSERT INTO country (name, capital, language, area, population)
    VALUES (p_name, p_capital, p_language, p_area, p_population);
END;
//
DELIMITER ;

-- Editar país
DELIMITER //
CREATE PROCEDURE country_update(
    IN p_id INT,
    IN p_name VARCHAR(100),
    IN p_capital VARCHAR(100),
    IN p_language VARCHAR(100),
    IN p_area FLOAT,
    IN p_population INT
)
BEGIN
    UPDATE country
    SET name = p_name,
        capital = p_capital,
        language = p_language,
        area = p_area,
        population = p_population
    WHERE id = p_id;
END;
//
DELIMITER ;

-- Eliminar país
DELIMITER //
CREATE PROCEDURE country_delete(IN p_id INT)
BEGIN
    DELETE FROM country WHERE id = p_id;
END;
//
DELIMITER ;
