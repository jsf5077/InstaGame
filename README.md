# InstaGame

Welcome to InstaGame! An application for all gamers alike to have a community of their own. On InstaGame, gamers are given a voice to express their thoughts about their favorite/least favorite games. Visitors to InstaGame can view what gamers are saying and can filter the blog posts via genre. 

## Deployment

This application is deployed on Heroku.
link: https://sheltered-badlands-92972.herokuapp.com

## Home Page

The InstaGame application has two major components; the genre tabs and the blog post section. In the genre tabs section, gamers and visitors can select a genre and the site will filter all blog posts, only showing posts from that selected genre. There is also a tab to show all posts as well. The posts section is where the blog posts display. There is also a "make a psot" button that will open a modal that allows a user to submit a new blog post. In order to see a post's conent, the user can click on the link in the post and the post will open in a seperate html and display the content. 

## Screenshot
![image](https://user-images.githubusercontent.com/37354778/66722786-d7788300-eddf-11e9-8807-c48a2b1b5c86.png)

## Server side 

**The Directory Structure consists of:** 

* **config** - handles the connections with the database.
* **controllers** - responds to the user input and performs interactions on the data model objects.
* **db** - contains schema.sql and seeds.sql
* **models** - responsible for managing the data of the application. It receives user input from the controller.
* **node_modules & package.json** - The necessary packages needed from runing "npm install" in the terminal.
* **public** - contains css, assets, and javascript for the html pages.
* **views** - contains all the handlbars that create the htmls in the browser.
* **server.js** - creates the actual server connection when opened with node. 


## Built With

* [Visual Studio Code](https://code.visualstudio.com/)
* [Heroku](https://www.heroku.com/)
* [JawsDB](https://www.jawsdb.com/)

## Authors

* **Jeff Froehlich** - *Initial work* - [Github Repo](https://github.com/jsf5077/instagame/)
* **Nam Truong** - *Initial work* - [Github Repo](https://github.com/nmikeytruong)
* **Patrick Follett** - *Initial work* - [Github Repo](https://github.com/PWFollett)
