# Node-Express-Mongo-Api
A sample application which creates a back end APIs for getting, updating, inserting and deleting the posts 
Api has GET, POST, DELETE, PATCH api demonstration along with mongoose and Atlas Mongo Db connection.
The application is using MongoDb Atlas to store the data and to retrieve the data


# Prerequisites
1. Install the latest version of node js from https://nodejs.org/en/
2. You can use any code editor to open the app, I have used Visual Studio Code, Create a project and open it in code
3. Write in terminal within the project as npm init --yes, this creates a package.json file which contains all the important information of your project
4. Install express.js using npm i express
5. Install nodemon to keep the server running using npm i nodemon
6. Also install the  npm i @hapi/joi joi is used for input validations
7. Install the mongoose db by using  npm i mongoose
8. Install dotenv to ensure that you are storing the variables such as DB Connection strings, username and passwords
in an env file using command npm i dotenv
9. Install Body parser to parse the body in json format using npm i body-parser
10. Open MongoDb Atlas and create a cluster
11. Once a cluster is created copy the mongo db url by clicking on the connect -> Connect Your Application(using mongoDb native drivers)
12. Create a user for the cluster as Admin Role user

# Description 
1. The package models contains a model class which is the schema for the database
2. The package route contains a router class which handles creation, updation, deletion and viewing of the posts api with validation, request and response
3. The file app.js acts as a middleware to listen to the requests, connection to the Database, applies the useful components such as body-parser, cors
4. The DB_CONNECTION is a variable created in .env file that stores the database connection string from Atlas Mongodb 

# Deployment and Running
For this app, I have hosted it in local machine
To Run the application 
Go to command promt and type npm start - This will automatically start the nodemon which will keep on running to deploy the latest changes
Type in Browser - http://localhost:PORT_NUMBER - This is the port number where you are listening for changes

1. For GET API - http://localhost:PORT_NUMBER/posts
2. For POST API - http://localhost:PORT_NUMBER/posts along with body
3. For DELETE API - http://localhost:PORT_NUMBER/posts/postId 
4. For PATCH API - http://localhost:PORT_NUMBER/posts/postId 

# Acknowledgments
Beautifully Explained in this tutorial by Dev Ed 
https://www.youtube.com/watch?v=vjf774RKrLc
