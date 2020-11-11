# donut-shop

## Build a Server from Scratch

### Setup
1. Create a `server.js`
2. `npm init -y` to generate a `package.json`
3. `npm install express`

### Build the Basic Server
1. Require express
2. Create an instance of express. 
3. Set the PORT (be sure to include process.env.PORT for deploying to Heroku)
4. Listen on the PORT
5. Add middleware

### Build Routes
* Optional: Build a test route: `"/api/config"`

#### View Routes
* Always going to be get routes.
* Typically send back HTML for the browser to parse and display.
* Use `res.sendFile` to send back a previously built HTML file.

##### To Send Back an HTML File
1. Build a get route. 
2. Call `res.sendFile`
3. Use `path.join()` to combine the __dirname with the file name. (`npm install path`)

#### API Routes
* Resource-driven API Development

1. GET "/api/resources" returns a collection of resources.
2. GET "/api/resources/:id" return a single resource.
3. POST "/api/resources" allows the user to create a new resource. 