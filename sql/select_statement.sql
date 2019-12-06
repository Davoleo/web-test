-- Selects everything in the "colors" table
SELECT * FROM colors;

--Selects the colorId and colorName columns from the colors table
SELECT colorId, colorName FROM colors;

--Selects the colorId column from the colors table in the test DB
SELECT colorId FROM `test`.`colors`;

-- adds 3 to 1 (?)
SELECT 1+3 FROM DUAL;

-- DISTINCT VALUES ONLY SELECTION ------------------------------
SELECT colorName FROM colors;
SELECT DISTINCT colorName FROM colors;
-- Distinct removes duplicates from your selection
SELECT DISTINCT colorName, colorHex FROM colors;
-- Removes duplicate (only if they have both the same colorName AND colorHex)

---------------- CONDITIONAL SELECTION (KEYWORD: WHERE)--------------------------

--select all columns from the colors table where colorId is less than or equals to 12
SELECT * FROM colors WHERE colorId<=12;

--select all columns from the colors table where colorName is not equals to "red"
SELECT * FROM colors WHERE colorName<>"red";

-- select colorId and colorHex columns from the colors table where colorName is equals to "red"
SELECT colorId, colorHex FROM colors WHERE colorName="red";

-- select all columns from the colors table where colorHex is null
SELECT * FROM colors WHERE colorHex IS NULL;

---------------- COMPLEX CONDITIONS ----------------------------------------------

-- selects all the columns from the colors table where colorId is greater than 4 but also less than 18
SELECT * FROM colors WHERE colorId > 4 AND colorId < 18;

-- selects all the columns from the colors table where colorId is greater than 10 but also where colorName is equals to "red"
SELECT * FROM colors WHERE colorId >= 10 AND colorName="red";

-- selects all the columns from the colors table where colorId is greater than 10 or where colorName is equals to "red"
SELECT * FROM colors WHERE colorId > 10 OR colorName="red";

-- selects colorName from the colors table where colorId is greater than 15 or less than 17
SELECT colorName FROM colors WHERE colorId > 15 OR colorId <= 17;   -- selects everything

-- selects colorHex from the colors table where colorId is greater than 2 and also less or equals to 11 or when colorName is equals to "brown"
SELECT colorHex FROM colors WHERE (colorId > 2 AND colorId <= 11) OR colorName="brown";


---------------------- ORDER BY -------------------------------------------------------

-- Selects all the columns from the colors table and shows them in alphabetical order by colorName, if 2 colorName entries are identical they'll be ordered by colorId
SELECT * FROM colors ORDER BY colorName, colorId;

-- Selects all the columns from the colors table and shows them in alphabetical order by colorId
SELECT * FROM colors ORDER BY colorId;

-- Selects all the columns from the colors table where colorId is greater than 8 and shows them in descending alphabetical order by colorId
SELECT * FROM colors WHERE colorId>8 ORDER BY colorId DESC;

----------------------  LIMIT ----------------------------------------------------------------

-- Select all the columns of 5 rows from the colors table
SELECT * FROM colors LIMIT 5;

-- Selects all the columns of 3 rows from the colors table where colorId is greater than 8
SELECT * FROM STUDENT WHERE colorId > 8 LIMIT 3;

---------------------- BETWEEN and IN -----------------------------------------------------------------

--Shorthand version for complex AND conditions
-- Selects all the columns from the colors table where the colorId is between 2 and 10 (Limits included)
SELECT * FROM colors WHERE colorId BETWEEN 2 AND 10;

-- Shorthand version for complex OR conditions
-- Selects all the columns from the colors table where the colorId is either 4 OR 11 OR 18
SELECT * FROM colors WHERE colorId IN (4, 11, 18);
-- Selects all the columns from the colors table where colorName is either "red" OR "blue" OR "green"
SELECT * FROM test.colors WHERE colorName IN ("red", "green", "blue");

---------------------- ALIASES | concat() | AS Keyword -----------------------------------------------------------------

-- Selects the colorId column from the colors table giving it a header of "id"
SELECT colorId AS id FROM colors

-- Selects the colorId column from the colors table giving it a header of "id" and selects the colorName and colorHex columns concatenating them under the "colorInfo" header
SELECT colorId AS id, concat(colorName," - ",colorHex) AS colorInfo FROM colors;

-- Selects all the columns from the colors table concatenating them under the "colorBigConcatColumn" column
SELECT concat(colorId," | ", colorName," | ", colorHex) as colorBigConcatColumn from test.colors;

---------------------- LIKE -----------------------------------------------------------------
-- % : Jolly Char for "any number of chars"
-- _ : Jolly Char for "one char"

-- Selects all the columns from the colors table where colorName starts with "c"
SELECT * FROM colors WHERE colorName LIKE "c%";

-- Selects all the columns from the colors table where colorName ends with "n"
SELECT * FROM colors WHERE colorName LIKE "%n";

-- Selects all the columns from the colors table where colorName contains "i"
SELECT * FROM colors WHERE colorName LIKE "%i%";

-- Selects all the columns from the colors table where colorName is 3 chars long and ends with "d"
SELECT * FROM colors WHERE colorName LIKE "__d";

-- Selects all the columns from the colors table where colorName has a "q" on the second char
SELECT * FROM colors WHERE colorName LIKE "_q%";

-- Selects all the columns from the colors table where colorId is 2 chars long and ends with "8"
SELECT * FROM colors WHERE colorId LIKE "_8";

---------------------- OPERATORS ------------------------------------------
-- Selects the minimum value for a table field
SELECT MIN(eta) FROM atleti;
SELECT nome, cognome WHERE eta = (SELECT MIN(eta) FROM atleti) FROM atleti;
-- Selects the maximum value for a table field
SELECT MAX(eta) FROM atleti;
-- Selects the average value for a table field
SELECT AVG(eta) FROM atleti;

-- Selects the surname of the athletes where age is below the average
SELECT COGNOME FROM ATLETI WHERE ETA < (SELECT AVG(ETA) FROM ATLETI);

-- Selects the number of athletes where age is equal to 18
-- inside count paretheses you can specify a column whose values should not be null to be added in the count
SELECT COUNT(*) FROM ATLETI WHERE ETA=18;

-- Selects the sum of the ages of all the athletes
SELECT SUM(ETA) FROM ATLETI;

---------------------- UNION -----------------------------------------------------------------
-- Used to join together 2 select statements from different tables 

-- selects the colorId Column from the colors table joined with the id column from the colorscopy table (without showing duplicates)
SELECT colorId FROM colors UNION SELECT id FROM colorscopy;
-- selects the colorId Column from the colors table joined with the name column from the colorscopy table (without showing duplicates)
SELECT colorId FROM colors UNION SELECT name FROM colorscopy;
-- selects the colorId Column from the colors table joined with the name column from the colorscopy table (showing duplicates)
SELECT colorId FROM colors UNION ALL SELECT name FROM colorscopy;

-------------------------- JOIN ----------------------------------------------------------------
-- Used to join together 2 tables

-- JOIN CONDITION WITH OtO / OtM links
-- Selects nomeNazione, cognome and nome from the nazioni and atleti tables where idNazione equals nazione, everything ordered by nomeNazione
SELECT NOMENAZIONE, COGNOME, NOME FROM nazioni, atleti WHERE IDNAZIONE=NAZIONE ORDER BY NOMENAZIONE;

-- JOIN CONDITION WITH MtM LINKS
-- Selects cognome, nome, nomeDisciplina from atleti, atletidiscipline, nazioni and discipline tables where idAtleta equals atleta, idDisciplina equals disciplina and nazione equals idNazione, everything ordered by cognome and nome
SELECT COGNOME, NOME, NOMEDISCIPLINA, NOMENAZIONE
FROM atleti, atletidiscipline, discipline, nazioni
WHERE idAtleta=atleta AND idDisciplina=disciplina AND idNazione=nazione
ORDER BY cognome, nome; 

