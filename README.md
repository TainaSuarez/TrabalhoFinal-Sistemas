# 🌐 Aplicación Next.js con Docker 🐳

Este repositorio contiene una aplicación de [Next.js](https://nextjs.org/) contenedorizada usando [Docker](https://www.docker.com/). La aplicación está construida con características modernas de Next.js, y puede desplegarse fácilmente utilizando Docker para asegurar un entorno consistente.

##  📑 Tabla de Contenidos

- [🔧 Requisitos](#-requisitos)
- [🚀 Comenzando](#-comenzando)
- [🐳 Configuración de Docker](#-configuración-de-docker)
- [💻 Ejecución Local](#-ejecución-local)
- [🏗️ Construcción de la Imagen Docker](#️-construcción-de-la-imagen-docker)
- [▶️ Ejecución del Contenedor Docker](#️-ejecución-del-contenedor-docker)


## 🔧 Requisitos

Para ejecutar este proyecto, necesitarás tener instalado:

- Node.js (v14 o superior) 📦
- Docker (v20 o superior) 🐳

## 🚀 Comenzando

Primero, necesitas clonar el repositorio:

```bash
git clone https://github.com/TainaSuarez/TrabalhoFinal-Sistemas
cd TrabalhoFinal-Sistemas/Proyecto
 ```

## Luego, instala las dependencias:

```bash
npm install
 ```

O, si prefieres usar Yarn:

```bash
yarn install
 ```

## 🐳 Configuración de Docker

Para construir y ejecutar este proyecto en un contenedor Docker, sigue estos pasos.

## Dockerfile
Este proyecto incluye un Dockerfile para construir el contenedor. Aquí tienes una vista general de lo que hace:

# Etapa 1: Construcción
FROM node:16 AS builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build

# Etapa 2: Ejecución
FROM node:16-alpine

WORKDIR /app

COPY --from=builder /app ./
RUN yarn install --production

EXPOSE 3000

CMD ["yarn", "start"]



## 💻 Ejecución Local

Para ejecutar el proyecto localmente sin Docker, usa el siguiente comando:

```bash
npm run dev
```

## O:

```bash
yarn dev
```

La aplicación debería estar corriendo en http://localhost:3000.

## 🏗️ Construcción de la Imagen Docker

Para crear una imagen Docker de la aplicación Next.js, ejecuta:

```bash
docker build -t nextjs-docker-app .
```
Este comando construirá la imagen Docker con la etiqueta nextjs-docker-app.

## ▶️ Ejecución del Contenedor Docker

Después de construir la imagen, puedes ejecutarla con:

```bash
docker run -p 3000:3000 nextjs-docker-app
```

La aplicación debería ser accesible en http://localhost:3000.

