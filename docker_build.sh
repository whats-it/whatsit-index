#!/usr/bin/env bash

HOSTNAME="gcr.io"
NAMESPACE="whatsit"
TAG=$1
PROJECT_ID="whatsit-174908"
IMAGE="whatsit-index"

docker build -t $IMAGE:$TAG .
docker tag $IMAGE:$TAG $HOSTNAME/$PROJECT_ID/$IMAGE:$TAG
gcloud docker -- push $HOSTNAME/$PROJECT_ID/$IMAGE:$TAG
gcloud container images list --repository=$HOSTNAME/$PROJECT_ID

#restart pod
kubectl --namespace=$NAMESPACE delete pod -l name=$IMAGE