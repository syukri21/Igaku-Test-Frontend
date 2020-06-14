
# Stage 2 - the production environment
FROM nginx:1.12-alpine
COPY /usr/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]