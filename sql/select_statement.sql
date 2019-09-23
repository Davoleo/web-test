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

-- Selects all the columns from the colors table and shows them in alphabetical order by colorName
SELECT * FROM colors ORDER BY colorName;

-- Selects all the columns from the colors table and shows them in alphabetical order by colorId
SELECT * FROM colors ORDER BY colorId;

-- Selects all the columns from the colors table and shows them in descending alphabetical order by colorId
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

-- Selects all the columns from the colors table in the test database concatenating them under the "colorBigConcatColumn" column
SELECT concat(colorId," | ", colorName," | ", colorHex) as colorBigConcatColumn from test.colors;