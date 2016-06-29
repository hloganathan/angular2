'use strict';
// app for express js
import { Server } from './server';
import { ApiRoutes, ViewRoutes } from './routes';

const server = new Server();
const apiRoutes = new ApiRoutes();
const viewRoutes = new ViewRoutes();

server.port = 3000;
server.root = './dist';
server.AddRoutProvider(viewRoutes);
server.AddRoutProvider(apiRoutes);
server.Start();
