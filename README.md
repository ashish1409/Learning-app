# Learning-app
The app is divided into three main categories:   Project Dashboard,  Calendar – My Tasks, Resource Utilization as well as login and registration using firebase authentication-. For this POC   i am using React , redux,  material-ui  and also used  React Scheduler
# Introduction
 1. Clone and download project
 2. npm install 
 # Firebase Configration
 
  1. refer this:- https://firebase.google.com/docs/hosting/use-cases
   # deploy app  with firebase tool terminal
      Firebase Configration
     1. go to app folder path using terminal
     2 npm i firebase-tools -g
     3 firebase login 
     4 firebase init    —— like output /users/desktop/meet-upcli features do you want to setup for  confirmation   
     5- info database:deploy firebase realtime database rules -  check mark on this storage: 
     6 deploy cloud storage security rules  - check mark on this generate file in your app folder 
     7 .firebaserc, database.rules.json, firebase.json - all rules over there which you write in firebase console 
     8 npm run build 
     9 build folder generate in your aap folder (production) 
     10 open firebase.json file --add this
     
     {
      "hosting": {
          "public": "./build",
          "ignore": [
              "firebase.json",
              "**/.*",
              "**/node_modules/**"
          ],
          "rewrites": [{
                  "source": "/public/**",
                  "destination": "/public.html"
              },
              {
                  "source": "**",
                  "destination": "/index.html"
              }
          ],
          "database": {
            "rules": "database.rules.json"
          },
          "storage": {
            "rules": "storage.rules"
          }
      }
      }
     
     11 firebase deploy  
     12 at the last  you got hosting url  ————— in terminal
     
     
