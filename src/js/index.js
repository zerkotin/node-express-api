
import express from 'express';
import bodyParser from 'body-parser';
import readProperties from 'properties-reader';

import UserService from './service/UserService.js';
import ErrorService from './service/ErrorService.js';

// all calls will be under host:port/api/...
const ROOT = '/api/';

// list all services for easier init
const services = [UserService, ErrorService];

// init express
const app = express();
app.use(bodyParser.json());

// read properties file
const properties = readProperties('./app.properties');

// register all the endpoints in express
services.forEach(service => {
	service.endpoints.forEach(endpoint => {
		app[endpoint.method](ROOT + endpoint.route, endpoint.handler);
	});
});

// init with port from properties file
const port = properties.get('server.http.port') || 8081;

// run the server
app.listen(port, () => console.log('API running on port ' + port));
