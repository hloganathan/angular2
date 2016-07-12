import * as express from 'express';
//import * as _ from 'lodash';
import { RouteProvider } from '../route-provider';
//import { users } from '../data';
import { User } from '../../shared/models';

export class ApiRoutes implements RouteProvider {
    public Configure(app: express.Application) {
        console.log('configuring api routes');
        let router: express.Router = express.Router();

        router.route('/users')
            .post((req, res) => {
                const user = new User();
                user.firstName = req.body.firstName;
                user.lastName = req.body.lastName;
                user.username = req.body.username;
                user.password = req.body.password;
                console.log(`saving user: ${user.firstName}, | ${user.lastName} | ${user.username} | ${user.password}`);

                user.save((e,r: any) => {
                    if(e){
                        console.log('error creating user');
                        res.send(e);
                    }

                    res.send(`User created: ${r.id}`);
                });
            })

            .get((req, res) => {

                if (req.query.username === undefined) {
                console.log('trying to get users');
                    User.find((err, u) => {
                        if(err){
                            console.log('error getting all users');
                        }
                        else {
                            res.json(u);
                        }
                    });
                }
                else {
                    const username: string = req.query.username;
                    const password: string = req.query.password;
                    console.log(`searching for username: ${username}  |  password: ${password}`);

                    User.findOne({username: username, password: password}, (err, u) => {
                        if(err){
                            console.log('error getting');
                        }
                        else {
                            res.json(u);
                        }
                    });
                }
            });

        router.route('/users/:id')
            .delete((req, res) => {
                User.remove({_id: req.params.id}, (e)=>{
                    if(e){
                        res.send(e);
                    }

                    res.send('deleted user');
                });
            })
            .get((req, res) => {
                User.findById(req.params.id, (err, user) => {
                    if(err){
                        res.sendStatus(404);
                    }

                    res.json(user);
                });
            });

        router.all('/*', (req, res) => {
            res.sendStatus(400);
        });
        app.use('/api', router);
    }
}