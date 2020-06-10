### Schema

-- Drops the burgerMonster_db if it exists currently --
DROP DATABASE IF EXISTS burgerMonster_db;
-- Creates the "burgerMonster_db" database --
CREATE DATABASE burgerMonster_db;

-- Makes it so all of the following code will affect burgerMonster_db --
USE burgerMonster_db;

-- Create tables for db --
CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(255) NOT NULL,
  devoured BOOLEAN NOT NULL DEFAULT false,
  PRIMARY KEY (id)
);
