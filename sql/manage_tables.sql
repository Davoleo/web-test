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

-- Returns a visual structure of a table
DESCRIBE colors;

/*
+-----------+-------------+------+-----+---------+-------+
| Field     | Type        | Null | Key | Default | Extra |
+-----------+-------------+------+-----+---------+-------+
| colorId   | int(11)     | NO   | PRI | NULL    |       |
| colorName | varchar(45) | YES  |     | NULL    |       |
| colorHex  | varchar(45) | YES  |     | NULL    |       |
+-----------+-------------+------+-----+---------+-------+
*/



-- Edits the temp table structure adding a new column called "tempTest" of type "varchar(30)" that can be null
ALTER TABLE temp add tempTest varchar(30) NULL;

-- Edits the temp table structure adding 2 new columns contemporarily
ALTER TABLE temp add tempName varchar(30) NULL, ALTER TABLE temp add tempQuantity int(100) NULL;

-- Edits the temp table structure modifying the tempQuantity column to int type and not null
ALTER TABLE temp modify tempQuantity int NOT NULL;

-- Edits the temp table structure removing the tempTest column
ALTER TABLE temp drop column tempTest;

-- Edits the temp table structure renaming the tempId column to id
ALTER TABLE temp change column idTemp id int NOT NULL;

-- Edits temp renaming it to tempTable
ALTER TABLE temp rename to tempTable;

--------- CREATE TABLE LIKE -------------
-- Used to create a table with the model of another table

-- Create a table called temp_colors with the structure of the colors table
CREATE TABLE temp_colors LIKE colors;