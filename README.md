# Waweet
Waweet is a web app where users review food. Here you can discover new food that you like or add some that perhaps no one has ever seen.
<br/><br/><br/>

## Requirements
- Node.js
- MongoDB
<br/><br/>

## First use:
Install the dependencies:
```
npm install
```
<br/>
Rename '.env_example' to 'env' and config your DB.
<br/>

After this, seed the database like so:
```
npm run-script seedDB
```

After seeing the message \"DB has been filled with success\" you can close the command and start the server.
<br/><br/>

## Start the server with:
```
npm start
```

Now you can enter \"localhost:3000\" and your application should be running. Items are duplicated for showing more explicitly the pagination.
<br/><br/><br/>

## Next features/technologies to implement:
- Authentification with JWT
- NestJS
