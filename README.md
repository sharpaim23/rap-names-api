# rap-names-api
Rap Name API
This is a fun little api that was built together for a fun project with 100Devs. I have taken the opportunity to add some more rappers to the list from the [https://complex.com](https://www.complex.com/music/best-rappers-20s-right-now-2021/) "Best 20 Rappers in their 20's" article to pump up this rappers like along with some OGs.

Link to project:https://rapper-name-api-project.herokuapp.com/api/rapper-name

How It's Made:
Tech used: HTML, JavaScript, Express, & Heroku

First and foremost make sure that Node.js is installed. Easily install Node.js from here: https://nodejs.org/en/download/ and it is a simple download according to the OS you are using. 

Second step was to create the index.html and server.js npm init, npm install express and the CORS. Please do not forget to install CORS, it is literally two lines of code and a simple addition to your project. 

Steps to installing the NPM(s) Express and CORS:
1. npm init (this will get the package.json files and the node_modules)
2. npm install express --save (this will install express, which can be found under the dependencies on the package.json)
3. npm install cors --save (this will do the same thing as the express install)

Third step is to start writing the requirements in order to run express and cors on the server side. This is also where the PORT was determined just for localhost purposes. 

Fourth step was to write the get(s) and listen so the server will know what the user is looking for whether it is the landing page or the API. 

Fifth step was to start creating the rapper object list, which I stated at the beginning of this readme that I had incorporated the complex.com list of the "Top 20 rappers in their 20's". 

Sixth step was to push it to Heroku. This is a server application website that 100Devs choose to use in order to get the API up and running. In order to push it to Heroku you will need to create a login and possibly two-step verification. Below I have left the steps to be able to add this api to you Heroku. 
From your command line (depending which terminal you are using. I am using powershell within VS Code application) 
1. heroku login -i (you will only need the -i if two-step verifcation is not set up)
2. heroku create (here is where you will want to name the heroku project) 
3. echo "web: node server.js" . Procfile (this is telling Heroku what is running the server.js file)
4. git add . (this should be familiar)
5. git commit -m (this as you will know is where you want to comment on what you are committing)
6. git push heroku main (Final step and if everything went well you should see a link to your newly created API)

Lessons Learned:
The take away here for me was to make sure that CORS was installed and added to my code. Once I figured out why I could not retrieve any information on the client side because of the cors, which took me longer than I want to admit. Everything went smoothly and my server side was working with my client side like PB$J! 
