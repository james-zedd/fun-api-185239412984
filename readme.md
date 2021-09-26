# Fun API created by James Zedd

(a simple REST API project using Node JS and NPM packages)

### How to use

1.  clone repo and open path to folder in terminal
2.  create your own .env file in main directory and use your own Mongo DB credentials (see /api/config/db.js)
3.  <code>npm install</code>
4.  <code>npm run dev</code>
5.  make requests to http://localhost:5000/api/ to get started

### Classes API List

-   <code>GET /api/classes</code> | Get all classes
-   <code>GET /api/classes/:id</code> | Get a single class
-   <code>POST /api/classes</code> | Create a class
-   <code>PUT /api/classes/:id</code> | Update a class
-   <code>DELETE /api/classes/:id</code> | Delete a class

### Instructors API list

-   <code>GET /api/instructors</code> | Get all instructors
-   <code>GET /api/instructors/:id</code> | Get a single instructor
-   <code>POST /api/instructors</code> | Create a instructor
-   <code>PUT /api/instructors/:id</code> | Update a instructor
-   <code>DELETE /api/instructor/:id</code> | Delete a instructor
