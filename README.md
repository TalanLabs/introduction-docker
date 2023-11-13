### Introduction

Welcome to this docker introduction !! 
In this practice exercise we'll see how to build an image of an app, launch it in container and interact with it from outside the container.

### Requirements

https://www.postgresql.org -> last
https://www.docker.com/get-started/ -> last
https://nodejs.org/en/docs -> at least 16.16.0

### What you'll find here

Mostly bad code.

- /backend -> an Express.js app that expose 3 endpoints : 
    - GET '/' -> return a random number between 0 and 10
    - GET '/cats' -> return the list of all the cats in the DB
    - POST '/cats' -> add a randomly generated cat in the DB

- /frontend -> a React + Vite app that display the responses of the backend

- README.md -> what you're reading atm. Contains help, knowledge and power (and eventually instructions)

### Instructions

## Step 0 : explain please

TBA

## Step 1 : Minecraft (build)

First step of this exercise is to build our images for our frontend and backend.
TBA

## Step 2 : Hello, world ? (interact)

Try to use the app. Go to the frontend and try to click the buttons. What is happening ?
TBA

## Step 3 : Time to play Mozart (docker compose)

TBA

## Step 4 : Stop being Sisyphe (mount volumes)

Now stop your app with docker compose down. It'll remove all containers linked inside your docker-compose configuration file. If you re-run docker compose, and try to get the cats you created what happened ? 

## Bonus : multistep building

TBA

#### CheatSheet

### Run frontend

You need Node JS.
Go to /frontend directory
run npm install

## No build
run npm run dev

## With build
run npm run build
run npm run preview

### Run backend

You need Node JS.
Go to /frontend directory
run npm install
run npm run build
run npm run start

### Commands

(in a context with a dockerfile)
docker build . -t <your_tag> => build from a dockerfile an img

docker run <your_img_name>
-d => run it in background
--name => give your container a name
-p <hostport>/<dockerport> => specify a port binding

docker image ls -la -> list all images
docker container ls -> list all running container
-la -> list also those not running

docker container prune -> remove all unused container
docker image prune -> remove all unused img

docker exec -it <your_container_name> sh -> run a sh in the FS of your container

docker logs <your_container_name> -> show the container name

### Dockerfile

FROM <name>:<version> -> select the base image for your image
ex : FROM java:17

RUN <command> <args> -> run a command
ex: RUN sudo apt-get install openssl

COPY <path> <path_in_container> -> copy a file or a directory
ex: COPY /src . (copy all files from /src to /)

EXPOSE <port> -> not changing everything, but it specifies to who reads the dockerfile which port to expose. Good to know.


