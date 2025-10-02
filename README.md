# Inventory App – Despliegues (EC2/CLI/EB) y DB en PostgreSQL/MySQL

Pequeña app Node.js para ejercicio de despliegue en AWS.  
Incluye guía para ejecutar en **EC2 Ubuntu**, **AWS CLI** y **Elastic Beanstalk**, y migración de DB a **PostgreSQL** (o MySQL).

## Requisitos
- Node.js 20
- npm
- (Opcional) PostgreSQL o MySQL

## Variables de entorno
- `PORT` (default 80 en EC2; EB inyecta `PORT`)
- `DB_URL` (ej: `postgres://user:pass@host:5432/inventory` o `mysql://user:pass@host:3306/inventory`)

## Arranque local rápido
```bash
npm install
PORT=3000 npm start
