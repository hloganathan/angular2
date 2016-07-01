import * as express from 'express';
import * as _ from 'lodash';
import { RouteProvider } from '../route-provider';
import { users } from '../data';

export class ApiRoutes implements RouteProvider {
    public Configure(app: express.Application) {
        console.log('configuring api routes');
        let router: express.Router = express.Router();

        router.route('/users')
            .get((req, res) => {
                if (req.query.username === undefined) {
                    res.json(users);
                    return;
                }

                const username: string = req.query.username;
                const password: string = req.query.password;

                const user = _.find(users, function (o: any) { return o.username == username && o.password == password; });

                if (user === undefined) {
                    res.statusCode = 404;
                    res.send(undefined);
                }
                else {
                    res.json(user);
                }
            });

        app.use('/api', router);
    }
}