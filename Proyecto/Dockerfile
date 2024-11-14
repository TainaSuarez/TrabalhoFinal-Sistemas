# Fase de construcción
FROM node:18 AS builder

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo de dependencias y las instala
COPY package*.json ./
RUN npm install

# Copia el resto del código fuente de la aplicación
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Fase de producción
FROM node:18-alpine AS runner

# Establece la variable de entorno para producción
ENV NODE_ENV production

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia las dependencias de node_modules y el build de la primera fase
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Expone el puerto en el que Next.js estará disponible
EXPOSE 3000

# Comando por defecto para iniciar la aplicación
CMD ["npm", "start"]