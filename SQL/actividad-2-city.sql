-- Seleccionar la base existente
USE country_db;

-- Crear tabla city
CREATE TABLE city (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    population INT NOT NULL,
    area FLOAT NOT NULL,
    postal_code VARCHAR(20),
    is_coastal BOOLEAN,
    id_country INT,
    FOREIGN KEY (id_country) REFERENCES country(id)
        ON DELETE CASCADE
) ENGINE=InnoDB;

-- Insertar datos de prueba
INSERT INTO city (name, population, area, postal_code, is_coastal, id_country) VALUES
('Buenos Aires', 3000000, 203, 'C1000', TRUE, 1),
('Córdoba', 1400000, 576, 'X5000', FALSE, 1),
('Berlin', 3700000, 891, '10115', FALSE, 2),
('Hamburg', 1800000, 755, '20095', TRUE, 2),
('Tokyo', 13900000, 2194, '100-0001', TRUE, 3),
('Osaka', 2700000, 225, '530-0001', TRUE, 3);

-- ABM de ciudad

-- Obtener ciudad por ID
DELIMITER //
CREATE PROCEDURE city_get(IN p_id INT)
BEGIN
    SELECT * FROM city WHERE id = p_id;
END;
//
DELIMITER ;

-- Crear ciudad
DELIMITER //
CREATE PROCEDURE city_create(
    IN p_name VARCHAR(100),
    IN p_population INT,
    IN p_area FLOAT,
    IN p_postal_code VARCHAR(20),
    IN p_is_coastal BOOLEAN,
    IN p_id_country INT
)
BEGIN
    INSERT INTO city (name, population, area, postal_code, is_coastal, id_country)
    VALUES (p_name, p_population, p_area, p_postal_code, p_is_coastal, p_id_country);
END;
//
DELIMITER ;

-- Actualizar ciudad
DELIMITER //
CREATE PROCEDURE city_update(
    IN p_id INT,
    IN p_name VARCHAR(100),
    IN p_population INT,
    IN p_area FLOAT,
    IN p_postal_code VARCHAR(20),
    IN p_is_coastal BOOLEAN,
    IN p_id_country INT
)
BEGIN
    UPDATE city
    SET name = p_name,
        population = p_population,
        area = p_area,
        postal_code = p_postal_code,
        is_coastal = p_is_coastal,
        id_country = p_id_country
    WHERE id = p_id;
END;
//
DELIMITER ;

-- Eliminar ciudad
DELIMITER //
CREATE PROCEDURE city_delete(IN p_id INT)
BEGIN
    DELETE FROM city WHERE id = p_id;
END;
//
DELIMITER ;

-- Procedimiento 1: Mostrar país de la ciudad más poblada
DELIMITER //
CREATE PROCEDURE city_get_most_populated_country()
BEGIN
    SELECT c.name AS country_name
    FROM country c
    JOIN city ci ON ci.id_country = c.id
    ORDER BY ci.population DESC
    LIMIT 1;
END;
//
DELIMITER ;

-- Procedimiento 2: Países con ciudades costeras de más de 1 millón de habitantes
DELIMITER //
CREATE PROCEDURE city_get_coastal_over_1m()
BEGIN
    SELECT DISTINCT c.name AS country_name
    FROM country c
    JOIN city ci ON ci.id_country = c.id
    WHERE ci.is_coastal = TRUE AND ci.population > 1000000;
END;
//
DELIMITER ;

-- Procedimiento 3: País y ciudad con mayor densidad poblacional
DELIMITER //
CREATE PROCEDURE city_get_highest_density()
BEGIN
    SELECT c.name AS country_name, ci.name AS city_name,
           (ci.population / ci.area) AS density
    FROM country c
    JOIN city ci ON ci.id_country = c.id
    ORDER BY density DESC
    LIMIT 1;
END;
//
DELIMITER ;
