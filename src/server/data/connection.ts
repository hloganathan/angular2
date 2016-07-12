import * as config from './config';
//import * as m from 'mongoose';
import { Mongoose, Connection } from 'mongoose';

export class DbConnection {
    public static Connect() : Connection {
        const m = new Mongoose();
        const c = m.connect(config.connectionString);
        return c.createConnection();
    }
}
