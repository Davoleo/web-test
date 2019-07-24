INSERT INTO `test`.`colors`
VALUES
(2, "blue", "#0000FF"),
(3, "green", "#00FF00"),
(4, "red", "#FF0000"); 
-- The values you want to insert - [Multiple insertion are separated by commas]

INSERT INTO `test`.`colors`
(`colorId`, `colorName`)
-- The columns you want to insert values into (you can avoid them in case you insert data into every column)
VALUES
(2, "blue"); 
-- The values you want to insert

-- Temp table values
INSERT INTO `test`.`temp`
VALUES
(1, "ABC", 11),
(2, "DEF", 12),
(3, "GHI", 13); 