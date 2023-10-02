-- -----------------------------------------------------
-- Schema full-stack-ecommerce
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `full-stack-ecommerce`;

CREATE SCHEMA `full-stack-ecommerce`;
USE `full-stack-ecommerce` ;

-- -----------------------------------------------------
-- Table `full-stack-ecommerce`.`product`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `full-stack-ecommerce`.`carDetail` (
    id BIGINT(20) NOT NULL AUTO_INCREMENT,
    
)

-- -----------------------------------------------------
-- Table `full-stack-ecommerce`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `full-stack-ecommerce`.`popularCar` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `carName` VARCHAR(255) DEFAULT NULL,
  `img1` VARCHAR(255) DEFAULT NULL,
  `img2` VARCHAR(255) DEFAULT NULL,
  `carModel` VARCHAR(255) DEFAULT NULL,
  `rating` VARCHAR(255) DEFAULT NULL,
  `carDetail` VARCHAR(255) DEFAULT NULL,
  `country` VARCHAR(255) DEFAULT NULL,
   `price` VARCHAR(255) DEFAULT NULL,
  `heading` VARCHAR(255) DEFAULT NULL,
  `text` VARCHAR(255) DEFAULT NULL,
  `like` BIT DEFAULT 0,
  PRIMARY KEY (`id`))
ENGINE=InnoDB
AUTO_INCREMENT = 1;


-- -----------------------------------------------------
-- Add sample data
-- -----------------------------------------------------
INSERT INTO popular_cars (carName, img1, img2, carModel, rating, transmission, mileAge, fuelType, make, year, capacity, country, price, heading, text, like)
VALUES
    ('Toyota', 'assets/img/cars/car-01.jpg', 'assets/img/profiles/avatar-0.jpg', 'Toyota Camry SE 350', '(5.0)', 'Auto', '10 KM', 'Petrol', 'Power', 2018, '5 Persons', 'Germany', '$400', '/ Day', 'Rent Now', false),
    ('KIA', 'assets/img/cars/car-02.jpg', 'assets/img/profiles/avatar-02.jpg', 'Kia Soul 2016', '(5.0)', 'Auto', '22 KM', 'Petrol', 'Diesel', 2016, '5 Persons', 'Belgium', '$80', '/ Day', 'Rent Now', false),
    17:58:49	INSERT INTO popularCar (carName, img1, img2, carModel, rating, transmission, mileAge, fuelType, make, year, capacity, country, price, heading, text, like) VALUES     ('Toyota', 'assets/img/cars/car-01.jpg', 'assets/img/profiles/avatar-0.jpg', 'Toyota Camry SE 350', '(5.0)', 'Auto', '10 KM', 'Petrol', 'Power', 2018, '5 Persons', 'Germany', '$400', '/ Day', 'Rent Now', false),     ('KIA', 'assets/img/cars/car-02.jpg', 'assets/img/profiles/avatar-02.jpg', 'Kia Soul 2016', '(5.0)', 'Auto', '22 KM', 'Petrol', 'Diesel', 2016, '5 Persons', 'Belgium', '$80', '/ Day', 'Rent Now', false)	Error Code: 1064. You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'like) VALUES     ('Toyota', 'assets/img/cars/car-01.jpg', 'assets/img/profiles/a' at line 1	0.000 sec
