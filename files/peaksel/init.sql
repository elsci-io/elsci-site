create database elsci;
\connect elsci;

create role peaksel with encrypted password 'HuCZSQUH' login;

create schema peaksel;
grant all on schema peaksel to peaksel;
create extension pg_trgm with schema pg_catalog;