# Waweet
Waweet is a web app where users review food. Here you can discover new food that you like or add some that perhaps no one has ever seen.
<br/><br/><br/>

## Presentation

### Homepage

<br/>

![Homepage](./public/images/presentation/Homepage.png?raw=true)

<br/>

### Search

<br/>

![Search](./public/images/presentation/Search.png?raw=true)

<br/>

### Show an element

<br/>

![Show an element](./public/images/presentation/Show%20element.png?raw=true)

<br/><br/>

## Requirements
- [MongoDB](https://www.mongodb.com/) v4.4 - Database
- [Node.js](https://nodejs.org/en/) v12.18.3 - Web Server
- [Watchify](https://www.npmjs.com/package/watchify) v3.11.1 - Module Bundler
<br/><br/>

## First use:
Install the dependencies:
```
npm install
```
<br/>
Rename '.env_example' to '.env' and config your DB.
<br/><br/>

> Note: If you are on Windows and it displays the error "You must type a file name" you can rename the file '.env.' and the file will be renamed correctly. Or, you can rename from CLI with the command `ren .env_example .env`.

<br/>

After this, seed the database like so:
```
npm run-script seedDB
```

After seeing the message \"DB has been filled successfully!\" you can close the command and start the server.
<br/><br/>

## Start the server with:
```
npm start
```

Now you can enter `localhost:3000` and your application should be running.
<br/><br/>

If you are a developer and you want to modify files from 'src' folder, you should start the server with:
```
npm run-script startDev
```
In this way your modifications will be saved in 'public' folder.
<br/><br/><br/>

## Next features/technologies to implement:
- Authentification with JWT
- NestJS
