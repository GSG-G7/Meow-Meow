# Meow Meow

## Team - Members 
* Alaa Yasin
* Alaa Taima

## What our app provide ? 
we built a cat-app that help user to find cat photo that he love so, the user will get :
* cat photo.
## Why did we built our app ?
to get photo about any cat type from server by applying view-engine (handlebars). 
## How our progress was during the building of our app ?? 
* Make tests for server routs.
* Create Express server.
* use view engine : handlebars.
* Handle error.
* make request from front-side to express-app by add route (/search) to action attribute of form.
* Make  request to cat-api from express-app. by using (node-fetch).
* then,server get required data from API, then handlebars render them to be showed to client-side.
* Code modularization.
* Code Refactor
* Make style
* Fix accessibility and responsive
* display data to the user.
## User Story
* We use view-engin : (handlebars) to render html pages (home page & erroe pages).
* At home page, when a user enter data in an input field then click submit, client-side will make a request to edpress server 
### that happened by handle (/search rout) like this :
* Add route (/search) to action attribute of <form
* and also define method as (POST) to send entered data to route (/search)
* (/search) is handeled to send a request to express-server (enterd data will be in request-body) 
* express-server will send a request to cat-API by using (fetch).
* cat-API will send back a response-object.
* here, we use a handlebars to render home-page to have a required data from response-object then display them to the user. 

## User Journey 
* When the user enter the name of any type of cat then, click on submit button , he will get photo about this cat.

