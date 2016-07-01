'use strict';
// app for express js
import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';

import { RouteProvider } from './route-provider';

export class Server {
    public app: express.Application;
    public root: string = './dist';
    public port: any = 3000;
    private routes_: RouteProvider[] = [];

    constructor() {
        this.port = this.normalizePort(process.env.PORT || 3000);
        this.app = express();
        this.Config();
    }

    public Start(){
        this.routes_.forEach((p) => p.Configure(this.app));

        this.app.set('port', this.port);
        this.app.listen(this.port, function(){
            console.log('listening . . . ');
        });
    }

    public AddRoutProvider(provider: RouteProvider){
        this.routes_.push(provider);
    }

    public Config() {
        console.log(`Server Path = ${this.root}`);
        this.app.set('views', path.join(this.root, '/server/views'));
        this.app.use(express.static(path.join(this.root, '/app')));
        this.app.use('/css', express.static(path.join(this.root, '/server/css')));

        this.app.use('/node_modules', express.static(path.join(this.root, '../node_modules')));
        this.app.set('view engine', 'pug');
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    private normalizePort(p) {
        var port = parseInt(p);

        if (isNaN(port)) return p;

        if (port >= 0) return port;

        return false;
    }
}
