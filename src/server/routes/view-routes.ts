import * as express from 'express';
import { RouteProvider } from '../route-provider';

export class ViewRoutes implements RouteProvider {
    public Configure(app: express.Application){
        let router: express.Router = express.Router();

        let index = (req: Express.Request, res: express.Response, next: express.NextFunction) => res.render('index');

        router.get('/', index.bind(index));
        app.use(router);
    }
}