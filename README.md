# TaskManager - Migration PostgreSQL

## Contexte
Migration d'une API Node.js utilisant SQLite vers PostgreSQL pour production.

## Installation
1. Installer PostgreSQL.
2. Créer la base de données et l'utilisateur :
   ```sql
   CREATE DATABASE taskmanager;
   CREATE USER taskuser WITH PASSWORD 'taskpassword';
   GRANT ALL PRIVILEGES ON DATABASE taskmanager TO taskuser;
