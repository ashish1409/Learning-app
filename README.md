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
     
     
![login](https://user-images.githubusercontent.com/17641451/86678969-bc5b3c80-c01a-11ea-8c76-d7357f06ed69.jpg)
![reg](https://user-images.githubusercontent.com/17641451/86679013-c715d180-c01a-11ea-9fa4-d0ffffdb9795.jpeg)
![3](https://user-images.githubusercontent.com/17641451/86679029-caa95880-c01a-11ea-9d2d-88baa510d1ab.jpeg)
![4](https://user-images.githubusercontent.com/17641451/86679038-cc731c00-c01a-11ea-8300-3abe1ba6b4e7.png)
![1](https://user-images.githubusercontent.com/17641451/86679062-d3019380-c01a-11ea-9fce-1cdd20aba793.jpg)
![2](https://user-images.githubusercontent.com/17641451/86679070-d563ed80-c01a-11ea-92b7-344400087ab2.jpg)


 

