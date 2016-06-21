'use strict';
// app for express js
import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import { Data } from './data';
import * as _ from 'lodash';
export class Server {
    public app: express.Application;
    private _root: string;
    private _users;

    constructor(root: string) {
        const d = new Data();
        this._users = d.users;
        this._root = root;
        this.app = express();
        this.config();
        this.SetupRoutes();
        this.SetupApiRoutes();
    }

    config() {
        console.log('server path = ' + this._root);
        this.app.set('views', path.join(this._root, 'views'));
        this.app.use(express.static(path.join(this._root, 'public')));

        this.app.use('/node_modules', express.static(path.join(this._root, '../node_modules')));
        this.app.set('view engine', 'pug');
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }


    private SetupRoutes() {
        let router: express.Router = express.Router();

        let index = (req: Express.Request, res: express.Response, next: express.NextFunction) => res.render('index');

        router.get('/', index.bind(index));
        this.app.use(router);
    }

    private SetupApiRoutes() {
        let router: express.Router = express.Router();

        router.route('/users')
            .get((req, res) => {
                if (req.query.username === undefined) {
                    res.json(this._users);
                    return;
                }
                const username: string = req.query.username;
                const password: string = req.query.password;
                //const user = _.find(this._users, (o: { id: number, username: string, password: string }) => { this.isValidUser(o, name, //password); });
                const user = _.find(this._users, function (o:any) { return o.username == username && o.password==password });

                console.log(`found user: ${user}`);
                if (user === undefined) {
                    res.statusCode = 404;
                    res.send(undefined);
                }
                else {
                    res.json(user);

                }
            });

        this.app.use('/api', router);
    }

    private isValidUser(u: { id: number, username: string, password: string }, username: string, password: string): boolean {
        var result = u.username == username && u.password == password;
        if (result)
            console.log(`login attempt: ${username} + ${password}.  Successful: ${result}`);

        return result;
    }
}
