# cs465-fullstack
CS-465 Full Stack Development with MEAN

Architecture
Express is a web application framework that can use template engines to build HTML on the server. Express delivers the HTML and content directly from the server to the public-facing frontend. The single page application is developed using Angular. The Angular driven SPA runs everything inside the browser and never does a page reload. All application logic, data processing, and template delivery are managed in the browser. The Angular SPA is the dedicated front-end for the admin user-interface. In essence, Express delivers content to the customer-facing frontend while Angular runs everything in the browser for the admin interface which requires less system resources. All of code within each framework is based on Javascript in which the application logic is written in.
The backend uses MongoDB for storing the data. MongoDB is a NoSQL or unstructured database. Where structured databases use columns and rows, MongoDB stores data in collections of documents. A collection of documents contain a wide variety of data inside. MongoDB stores documents as BSON or binary JSON which stands for Javascript Serialized Object Notation. It is the structure in which Javascript holds data. Additionally, Mongoose is added to model the data in the application and interact with the database.

Functionality
The application is primarily based on the Javascript language. Javascript is a web development language for developing web applications. The data that is sent through the application in JSON format which is stored in the Mongo database. MongoDB stores data in binary JSON and is exposed as JSON through the Mongoose data modeling features. The flow of data between the system's architectural components are made possible with a REST API. The REST API allows interaction with the database through HTTP calls and enablees CRUD operations to be performed on the data (create, read, update, and delete). The REST API is a stateless interface to the database enabling the other applications to work with the data, taking in HTTP requests; processing the request, and sending back HTTP responses. 
The project started out by simply rendering static HTML content with Express and Node.js. Then, the views were moved into the a server folder while applying handlebars templating to dynamically render the HTML content specified by specific controllers and routes for each page. The next stage of refactoring involved creating the REST API. The rest API provided an interface for the interaction of system components. The REST API handled the application logic for routing requests to and from the endpoint URLs, modeling the data within the application in Schemas, and managing authentication for access control. Finally, the admin interface was built using Angular SPA for rendering the admin interface front-end using Typescript in HTML. 

Testing
Methods for requests and retrieval for each URL endpoint were tested using a variety of sources. An obvious source is the browser's output itself; however, this is not an adequate testing method if used alone especially if the browser doesn't render the content properly or there are errors. The browser's various dev tools contain many ways to look inside the application to see if it is functioning correctly. Using the console tab, the console log displays messages according to the component accessed in the app. It also displays errors when encountered. The network tag of the dev tools offers a look inside HTTP requests and responses as well as the json web token in the authorization section. The application tab shows whether the json web token was stored in the local storage of the application. Postman can be used to test requests and responses to the URL endpoints by passing test data through the application. Additionally, the command line interface debug features using npm and mongoose provided verification of proper functionality of the HTTP methods and CRUD operations. Verification of data processing and storage was validated by directly accessing the data through the mongo shell.

Reflection
There was a lot I learned in the full stack development course. One, it was my first time using Javascript so that came with a little bit of a learning curve. Fortunately, I had some experience with MongoDB and using the mongo shell to verify proper database reads and writes. Additionally, it was my first time working on a program of this scale. It reinforced my understanding about model-view-controller architecture and using an API to enable cross-application interactions. This course certainly will help with my professional goals providing me with hands-on experience building a end-to-end web application with frameworks I previously have never used before. I also learned how to use a templating engine to render dynamic HTML content with handlebars templates. I also got a deeper dive into creating HTTP requests and responses in Express and Angular. Even as important, I learned various ways of testing URL endpoints with different tools to ensure the application is functioning properly. I certainly took a harder path in this course in that I avoided using the older versions of some of the packages, libraries and frameworks that were used in the guide and the video references. Because of that, I had to dig into the documentation to discover other ways of using HTTP responses and requests especially in the last 2-3 weeks of the course. I ran into my biggest hurdles in converting Promises into Observables in the data and authentication services of the Angular admin front end. I had to do this because the toPromise() method was deprecated in previous versions of the installed angular package. This forced me to dive deep into the Angular rxjs library to understand how Observables work in terms of HTTP requests and how to properly subscribe to them. Although it was a stressful experience during the second half of the course, I am glad I went through it because I can use this experience to draw upon in the future when I experience challenges. 
