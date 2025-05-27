# FullStackTakeHome
## Please install the following versions for Each 
## Frontend - Angular: 16.2.12
## Backend - Node v24.0.2, NPM 11.3.0


First clone the project using Git Clone 
Once clonned please execute the following cmds

cd front-end-app
npm install 
cd environments
cp environment.dev.ts environment.ts
cd ../..
cd backend 
npm install


To run the Angular Application
cd front-end-app
ng serve

To run the Backedn Application
cd backend 
npm start 


I've used in memory json for file store in Backend and also implemented Sort and Filter Pipe in Frontend 
Sort and Filter is for all columns 
Search functionality is implemented for Name column only