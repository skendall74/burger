-- Create the database task_saver_db and specified it for use.
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table tasks.
CREATE TABLE burgers
(
	ID INTEGER(11)
	AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR
	(255) NOT NULL,
	devoured BOOLEAN,
	PRIMARY KEY
	(ID)
);