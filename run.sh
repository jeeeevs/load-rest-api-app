#!/bin/bash
IMAGE_NAME=rest-api-app
CONTAINER_NAME=rest-api-app
docker rm -f $CONTAINER_NAME
docker build -t $IMAGE_NAME .
docker run -p 8080:8080 --name $CONTAINER_NAME --hostname load_app_host --network my-ne -d $IMAGE_NAME
DEMO_API_IP=$(docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' $CONTAINER_NAME)
echo $DEMO_API_IP
export DEMO_API_IP