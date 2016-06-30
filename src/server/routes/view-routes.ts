import * as express from 'express';
import { RouteProvider } from '../route-provider';

export class ViewRoutes implements RouteProvider {
    public Configure(app: express.Application){
        let router: express.Router = express.Router();

        let index = (req: Express.Request, res: express.Response, next: express.NextFunction) => res.render('index');

        router.get('/', index.bind(index));
        app.use((req: express.Request, res: express.Response) => {
            res.status(200).render('index');
        })
        app.use(router);
    }
}