FROM node:10.15.3
WORKDIR /app
ADD . /app
RUN  npm install
EXPOSE 8080

CMD ["node", "app"]