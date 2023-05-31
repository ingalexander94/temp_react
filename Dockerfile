FROM node:18.16.0-alpine3.17 AS builder
ARG ENVIRONMENT=build
WORKDIR /app
COPY src/package*.json ./
RUN npm install
COPY src .
ENV PATH /app/node_modules/.bin:$PATH
RUN npm run $ENVIRONMENT
FROM nginx:1.25.0-alpine3.17
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/build .
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
ENTRYPOINT ["nginx", "-g", "daemon off;"]
