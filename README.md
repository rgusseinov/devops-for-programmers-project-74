# Project: Docker compose app

This app is designed to help you learn the basics of Docker Compose and the basic principles of (CI).

## Requirements

* docker
* docker compose 
* make

## Usage

#### Usage

Run setup your local environment
```bash
make setup # Install dependencies
make create-env # To create .env file

# Fill out the .env file with correct variables

```

### Run tests

```bash
make test
```

### Start application

```bash
make dev
# open http://0.0.0.0:8080 in browser
```

### DockerHub status:
[DockerHub](https://hub.docker.com/repository/docker/ruslan0688/devops-for-programmers-project-74/general)

[![Actions Status](https://github.com/rgusseinov/devops-for-programmers-project-74/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/rgusseinov/devops-for-programmers-project-74/actions)
[![Push to Docker Hub](https://github.com/rgusseinov/devops-for-programmers-project-74/actions/workflows/push.yml/badge.svg)](https://github.com/rgusseinov/devops-for-programmers-project-74/actions/workflows/push.yml)