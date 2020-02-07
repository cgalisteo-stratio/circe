#!/bin/bash

set -x

ssh -o "StrictHostKeyChecking no" travis@188.166.18.204 -p 18665 /bin/bash << EOF
  cd /var/www/circe/web
  docker login repo.treescale.com --username=nulpas --password=$TREESCALE_PS
  docker rm circe --force
  docker pull repo.treescale.com/nulpas/sds-circe:latest
  docker run --name circe -d -p 6161:80 repo.treescale.com/nulpas/sds-circe:latest
EOF
