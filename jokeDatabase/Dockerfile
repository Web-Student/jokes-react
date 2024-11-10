FROM node:20-alpine as build
WORKDIR /app
COPY . .
RUN cd ./jokeDatabase
RUN npm install
RUN npm run build

FROM nginx:latest
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /jokeDatabase/dist /usr/share/nginx/html
#COPY default.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]