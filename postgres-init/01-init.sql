-- Ensure we're using the postgres database first
\c postgres

-- Create the postgres user with full privileges
CREATE USER postgres WITH SUPERUSER PASSWORD 'password';

-- Create the database
CREATE DATABASE nest_crud;

-- Connect to the new database
\c nest_crud

-- Ensure public schema exists and grant privileges
CREATE SCHEMA IF NOT EXISTS public;

-- Grant all privileges
GRANT ALL PRIVILEGES ON DATABASE nest_crud TO postgres;
GRANT ALL PRIVILEGES ON SCHEMA public TO postgres;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO postgres;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO postgres;
GRANT ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA public TO postgres;