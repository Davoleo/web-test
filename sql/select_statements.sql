-- Selects everything in the "colors" table
SELECT * FROM colors;

--Selects the colorId and colorName columns from the colors table
SELECT colorId, colorName FROM colors;

--Selects the colorId column from the colors table in the test DB
SELECT colorId FROM `test`.`colors`;

-- adds 3 to 1 (?)
SELECT 1+3 FROM DUAL;

SELECT colorName FROM colors;
SELECT DISTINCT colorName FROM colors;
-- Distinct removes duplicates from your selection
SELECT DISTINCT colorName, colorHex FROM colors;
-- Removes duplicate (only if they have both the same colorName AND colorHex)