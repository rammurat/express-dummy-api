# API design in Express
* A quick POC created to provide APIs for front end (Please refer - Google map integration https://github.com/rammurat/react-map-integration)

## Resources
* [Nodejs](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)

## Tech utilized
* Express 4
* Mongoose 5 
* Morgan


## Set-up - Database
* Install home brew for quick installation - `brew tap mongodb/brew`
* Install mongo db - `brew install mongodb-community@4.2`
* Run Mongodb - `mongod --config /usr/local/etc/mongod.conf`
* Questions? - Please refer - https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/


## Set-up - Application
* npm install
* Start server - `npm run dev`
* Build directory - `npm run build` (optional)
* Open application via `http://localhost:1234/`

## Swagger API documentation
* Please refer this link on how to consume this API here - http://localhost:1234/api/

## API urls for reference
* /api/ - get all records (GET)
* /api/ - post new record (POST)
* /api/:id - update any existing record (PUT)
* /api/:id - delete any existing record (DELETE)

### Testing
* `npm run test-routes` - Test all the routers 
* `npm run test-models` - Test all the models/tables including data type
* `npm run test-controllers` - Test controllers if any authentication is required 
