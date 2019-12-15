-- VIEWS
-- They're permanently saved query results, that act like virtual tables (you can query views like any other kind of table)

-- CREATING A VIEW
-- Creates a View called italiani from the given select query: Select every column from the atleti table where nomenazione from the nazioni table is equals to "Italia"
CREATE VIEW `italiani` AS (SELECT * FROM atleti, nazioni WHERE idNazione=nazione AND nomenazione='Italia');