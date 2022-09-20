create database elsci
  template template0
  encoding = 'utf8'
  -- How should the text fields be compared during sorting. 'C' means they are compared by their code points - which
  -- is the simplest, but it does mean that the text isn't always sorted alphabetically. Since we use text-based
  -- IDs, it's important to keep ID-generation consistent with the DB collation - ID that was generated later
  -- must also be considered larger from the DB perspective. See https://github.com/ctapobep/blog/issues/15
  --
  -- For text fields where alphabetical sorting is required, specify collation explicitly when creating the column.
  lc_collate = 'C'
  -- Determines what is a letter vs number/whitespace as well as how to lowercase/uppercase letters.
  lc_ctype = 'en_US.utf8';
\connect elsci;

create role peaksel with encrypted password 'HuCZSQUH' login;
create schema peaksel authorization peaksel;
create extension pg_trgm with schema pg_catalog;