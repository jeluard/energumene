id: String
version: INT
blog: String
blog + id unique
title: String
visibility: enum
tags: set of string
metadata: kv pair
cover: cover id
elements: element id with order

md: source-utl; source-id; license; locations; class

CREATE TABLE ADDRESS(FIRST_NAME VARCHAR, NAME VARCHAR, CITY VARCHAR, PHONE VARCHAR);
INSERT INTO ADDRESS VALUES('John', 'Miller', 'Berne', '123 456 789'); INSERT INTO ADDRESS VALUES('Philip', 'Jones', 'Berne', '123 012 345'); SELECT _ROWID_, * FROM ADDRESS;

CREATE TABLE CUSTOMER(ID IDENTITY, NAME VARCHAR); CREATE TABLE INVOICE(ID IDENTITY,
CUSTOMER_ID INT REFERENCES CUSTOMER(ID), AMOUNT NUMBER);
CREATE TABLE CUSTOMER(ID IDENTITY, NAME VARCHAR); CREATE TABLE INVOICE(ID IDENTITY,
CUSTOMER_ID INT REFERENCES CUSTOMER(ID), AMOUNT NUMBER);
SET ALLOW_LITERALS NONE; (or NUMBERS)

CREATE SCHEMA CONST AUTHORIZATION SA; CREATE CONSTANT CONST.ACTIVE VALUE 'Active'; CREATE CONSTANT CONST.INACTIVE VALUE 'Inactive'; SELECT * FROM USERS WHERE TYPE=CONST.ACTIVE;
SELECT * FROM USERS WHERE LENGTH(PASSWORD)=ZERO();
CREATE TABLE example_table (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	name VARCHAR(256)
);

 {:db/ident              :post/published-at
  :db/id                 #db/id[:db.part/db]
  :db/valueType          :db.type/instant
  :db/cardinality        :db.cardinality/one
  :db/doc                "When the post was published"
  :db.install/_attribute :db.part/db}

 {:db/ident              :post/updated-at
  :db/id                 #db/id[:db.part/db]
  :db/valueType          :db.type/instant
  :db/cardinality        :db.cardinality/one
  :db/doc                "When the post was last updated"
  :db.install/_attribute :db.part/db}
