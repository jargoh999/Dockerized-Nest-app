#!/bin/bash
set -e

# Wait for PostgreSQL to be ready
until pg_isready -h postgres -p 5432 -U postgres; do
  echo "Waiting for PostgreSQL to be ready..."
  sleep 2
done

# Create the nest_crud database and user
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    -- Create database if not exists
    SELECT 'CREATE DATABASE nest_crud' 
    WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'nest_crud')\gexec

    -- Create user if not exists
    DO \$\$
    BEGIN
        IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = 'nest_db') THEN
            CREATE USER nest_db WITH PASSWORD 'password';
        END IF;
    END
    \$\$;

    -- Grant privileges
    GRANT ALL PRIVILEGES ON DATABASE nest_crud TO nest_db;
    \c nest_crud
    GRANT ALL PRIVILEGES ON SCHEMA public TO nest_db;
EOSQL

echo "Database initialization complete."