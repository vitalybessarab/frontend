FROM nginx:stable-alpine
RUN apk update
WORKDIR /app
COPY dist/frontend/ /app
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 4300
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
