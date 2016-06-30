// entry point for app
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { Http, Response, Headers, HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { RootComponent } from './root';
import {AuthenticationService } from './services';
import { APP_ROUTER_PROVIDERS } from './routes/app.routes';

bootstrap(RootComponent, [ AuthenticationService, HTTP_PROVIDERS, APP_ROUTER_PROVIDERS, ROUTER_DIRECTIVES ]);
