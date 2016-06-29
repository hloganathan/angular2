import * as express from 'express';

export interface RouteProvider {
    Configure(app: express.Application);
}