FROM node:16-alpine AS build1
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app/
RUN npm run build

FROM nginx:alpine 
COPY --from=build1 /app/build  /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT [ "nginx","-g","daemon off;"]


