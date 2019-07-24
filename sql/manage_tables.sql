show databases;
use test;

/*
Creates a table called "colors" in the database called "test"
This table has 3 columns:
1) The Unique ID (CANNOT be null) [Assigned as Primary key on line 15]
2) The Name of the color
3) The Hex Key 
*/
CREATE TABLE `test`.`colors` (
  `colorId` INT NOT NULL,
  `colorName` VARCHAR(45) NULL,
  `colorHex` VARCHAR(45) NULL,
  PRIMARY KEY (`colorId`));
show tables;

CREATE TABLE `test`.`temp` (
  `idTemp` INT NOT NULL AUTO_INCREMENT,
  `tempName` VARCHAR(45) NULL,
  `tempQuantity` VARCHAR(45) NULL,
  PRIMARY KEY (`idTemp`));


-- Empties temp table completely (Deleting and recreating the table)
TRUNCATE temp;
-- Empties temp table completely (Deleting the entries one by one)
DELETE FROM temp;

-- Used to delete a table
DROP TABLE temp;
