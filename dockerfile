# Fase 1: Construcción
FROM node:16 AS builder

WORKDIR /app

# Copiamos dependencias primero para aprovechar cache de Docker
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Copiar el resto del código
COPY . .

# Construir la app de React (tailwind incluido si se configuró bien)
RUN npm run build

# Fase 2: Producción
FROM nginx:alpine

# Copiar archivos de producción a nginx
COPY --from=builder /app/build /usr/share/nginx/html

# Exponer el puerto (por defecto nginx usa el 80, pero puedes usar 5000 si modificaste la config de nginx)
EXPOSE 80

# Nginx inicia automáticamente
