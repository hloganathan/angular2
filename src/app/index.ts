// entry point for app
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { RootComponent } from './root';
import {Authentication } from './services/authentication';
import { Http, Response, Headers, HTTP_PROVIDERS } from '@angular/http';

bootstrap(RootComponent, [ Authentication, HTTP_PROVIDERS ]);
