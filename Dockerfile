FROM node:7.8.0
EXPOSE 8080
COPY app.js
CMD node app.js
