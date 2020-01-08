# Final Project

**An Online Photograph Application:**   
Final Project for INFO6150 

## Author

Fish and Chips:  

Jiaao Yu	001464004  
Xuyang Li	001409590  
Yiqian Feng	001838812  
Xinyu Liang	001443054  

## User Stories

1)	As a *guest*, I should be able to **register** an account, so that I will be a common user or an advanced user with access to more functions provided by the application.
2)	As a *user*, I should be able to **login and logout** my account so that I should be able to view and manipulate under my account. 
3)	As a *user*, I should be able to view some **guidelines** so that I could easily learn how to better use this application.
4)	As a *user*, I should be able to apply different **filters** onto image so that different image styles will be achieved.
5)	As an *user*, I should be able to **resize** the image so that I will have no trouble on further image handling.
6)	As a *user*, I should be able to **import and export** image files so that I can manipulate the file.
7)  As a *user*, I should be able to **undo** the operation so that I can recover the image that I edit.
8)	As a *common user*, I should be able to send a **request** to Administrator so that I have chance to become an advanced user.
9)	As an *advanced user*, I should be able to introduce some **prestored stickers** from picture library so that unique mixed image style can be applied.
10)	As an *advanced user*, I should be able to import a image and use **keywords analysis** function so that I can get some keywords that described the image.
11)	As an *advanced user*, I should be able to type a keyword and **search a image** so that I can find a wanted image and export it.  
12)	As an *Administrator*, I should be able to **upgrade users** so that common users can finally become abvanced users.


## Domain Driven Design Model

![Image text](https://github.com/neu-mis-info6150-fall-2018/final-project-fish-and-chips/blob/Jiaao-Yu/img/DDD.svg)

## Nodejs
"angular-base64": "^2.0.5"  
"bootstrap": "^4.1.3"  
"caman": "^4.1.2"  
"core-js": "^2.5.4"  
"mailgun.js": "^2.0.1"  
"ngx-image-editor": "^1.4.1"  
"rxjs": "~6.3.3"  
"rxjs-compat": "^6.3.3"  
"tslib": "^1.9.0"  
"zone.js": "~0.8.26"  

## DB
"body-parser": "^1.18.3"  
"clarifai": "^2.9.0"  
"connect-mongo": "^1.3.2"  
"cookie-parser": "~1.4.3"  
"debug": "~2.6.9"  
"ejs": "~2.5.7"  
"express": "~4.16.0"  
"express-session": "^1.14.2"  
"http-errors": "~1.6.2"  
"mongoose": "^4.7.1"  
"morgan": "~1.9.0"  
"serve-favicon": "^2.5.0"  

## Running
### Prerequisites
Before you start running this project, make sure you have already installed all the required environment. A list of requirement is below:
1) node.js 
2) Angular 
3) MongoDB 

If this is your first time to run this project. please follow these steps below:
1) Download and intall **node.js** link:https://nodejs.org/en/
2) Install **Angular**: open the terminal/console window and enter the following command: "npm install -g @angular/cli"
3) Download and install **MongoDB** link: https://docs.mongodb.com/v3.2/installation/
4) Install **mongo-express**: open the terminal/console window and enter the following command: "npm install -g mongo-express"

### Running steps
1) Go to the **expressUserApp** folder, open the terminal/console window and enter command: "npm install". After this step, some node modules will be installed into the folder.
2) Go to the **fish-and chips** folder, open the terminal/console window and enter command: "npm install". After this step, some node modules will be installed into the folder. 
3) Go to the **expressUserApp** folder again, open the terminal/console window and enter command: "npm start", in order to run the database.  
4) Go to the **fish-and chips** folder again, open the terminal/console window and enter command: "ng serve --open". After this step, a web page will be open in your default browser at "http://localhost:4200/welcome".

## Further help
### Useful material for the developing tool
Please refer to the following document to better understand the principles of this application:  
Node.js https://nodejs.org/en/docs/  
Angular https://angular.io/docs  
MongoDB https://docs.mongodb.com/guides/  
Express.js https://expressjs.com/en/4x/api.html  
TypeScript https://www.typescriptlang.org/docs/home.html  
SASS https://sass-lang.com/documentation/file.SASS_REFERENCE.html

### Contact information  
If you have any question, please contact to **Fish and Chips** group.