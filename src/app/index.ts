// entry point for app
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { Http, Response, Headers, HTTP_PROVIDERS } from '@angular/http';

import { RootComponent } from './root';
import {Authentication } from './services/authentication';
//import { APP_ROUTER_PROVIDERS } from './routes/app.routes';

bootstrap(RootComponent, [ Authentication, HTTP_PROVIDERS/*, APP_ROUTER_PROVIDERS*/ ]);
