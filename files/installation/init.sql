-- need to read about encoding & collate at some point to ensure UTF8
create database elsci;
\connect elsci;

create role peaksel with encrypted password 'HuCZSQUH' login;
grant create on database elsci to peaksel;

create schema peaksel;
create extension pg_trgm with schema pg_catalog;