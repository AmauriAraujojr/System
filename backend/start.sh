#!/bin/bash

npm install

# Rodar as migrações (gerar e rodar)
echo "Gerando migrações..."
npm run migrate:generate

echo "Rodando migrações..."
npm run migrate:run

# Iniciar a aplicação
echo "Iniciando a aplicação..."
npm run dev
