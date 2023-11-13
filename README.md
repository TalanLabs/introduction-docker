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

What is docker ? Docker engine ? An image ? A container ? 

## Step 0.1 : Let's get the party started (install)

We're going to run the app to see what it does.
- First install dependencies in both frontend and backend folders (i.e. see cheat sheet)
- You might need to create a database too. You can call it whatever you want, as you change the `DB_NAME` var in the `.env` file of the backend.
- Now you can run the frontend and the backend (our table "Cat" is created at the start of the backend)
- Go to http://localhost:8080
- Enjoy cats

## Step 1 : Minecraft (build)

First step of this exercise is to build our images for our frontend and backend.
To achieve that you need to create two docker files at the root of each source code (backend AND frontend), then run a "docker build" (i.e. see "Cheat Sheet" section for more info or : https://docs.docker.com/engine/reference/commandline/build/) command at the same level as the Dockerfile
You might have to think "what step do I do to build my frontend/backend" to write the Dockerfile :) and the doc : https://docs.docker.com/engine/reference/builder/

## Step 1.2 : Hello, world ? (interact)

Now that both frontend and backend are dockerized, try to use the app. What is happening ?
Can you explain why ?

## Step 3 : Time to play Mozart (docker compose)

You can write a file to launch all your containers at the same time. It is called a Docker Compose.
Write a docker compose file that launch a frontend, a backend, and a postgres instance for your database.
https://docs.docker.com/compose/features-uses/

## Step 4 : Stop being Sisyphe (mount volumes)

Now stop your app with docker compose down. It'll remove all containers linked inside your docker-compose configuration file. If you re-run docker compose, and try to get the cats you created, what happened ? 

## Bonus : La Défense (multi stage building)

https://docs.docker.com/build/building/multi-stage/

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
- `docker build . -t <your_tag>` => build from a dockerfile an img

- `docker run <your_img_name>`
   - `-d` => run it in background
   - `--name` => give your container a name
   - `-p` <hostport>/<dockerport> => specify a port binding
   - `--env-file=<path>` -> specify a env file to use during run context

- `docker image ls -la` -> list all images
- `docker container ls` -> list all running container
   - `-la` -> list also those not running

- `docker container prune` -> remove all unused container
- `docker image prune` -> remove all unused img

`docker exec -it <your_container_name> sh` -> run a sh in the FS of your running container

`docker logs <your_container_name>` -> show the container logs

### Dockerfile

`FROM <name>:<version>` -> select the base image for your image
- ex : FROM java:17

`RUN <command> <args>` -> run a command
- ex: RUN sudo apt-get install openssl

`COPY <path> <path_in_container>` -> copy a file or a directory
- ex: COPY /src . (copy all files from /src to /)

`EXPOSE <port>` -> not changing everything, but it specifies to who reads the dockerfile which port to expose. Good to know.

`CMD ["arg1", "arg2", "arg3"]` -> run command when "docker run"
- ex : CMD ["npx", "npm-check"]

### Docker Compose 

`docker compose up` -> run all containers defined in compose file
- `--build` -> rebuild images
`docker compose down` -> stop and remove all containers defines in the compose file


