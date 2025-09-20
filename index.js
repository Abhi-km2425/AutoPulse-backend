
// 1. import json server file (express server)
const jsonServer = require("json-server");

// 2. create server
const Vehicleserver = jsonServer.create(); // Returns an Express server.

// middle is a function which have ability to break the request response cycle.
// 5. middleware to parse json format
const middleware = jsonServer.defaults();

// 7. setup path to store data
const router = jsonServer.router("db.json");

// 6. use middleware
Vehicleserver.use(middleware);
Vehicleserver.use(router);

// 3. set port number for the server
const PORT = 4000 || process.env.PORT;

// 4. listen to the request from the frontend to resolve the request.
Vehicleserver.listen(PORT, () => {
  console.log(`Server Running Successfully at port number ${PORT}`);
});
