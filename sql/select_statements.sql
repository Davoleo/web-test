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

