FROM node:20-alpine as build
WORKDIR /app
COPY . .
RUN echo "Ls"
#RUN cd ./jokeDatabase
RUN npm install
ENV VITE_BASEURL "http://api.rachelrecipe.duckdns.org/"
ENV VITE_REDIRECT_URI "https://rachelrecipe.duckdns.org/"

RUN npm run build

FROM nginx:latest
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
# COPY --from=build /jokeDatabase/dist /usr/share/nginx/html
RUN ls
COPY --from=build /app/dist /usr/share/nginx/html
#COPY default.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]