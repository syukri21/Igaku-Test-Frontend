# Stage 1 - the build process


# Stage 2 - the production environment
FROM nginx:1.12-alpine
WORKDIR /usr/src/app
COPY /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]