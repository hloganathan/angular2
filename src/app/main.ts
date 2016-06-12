// entry point for app
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import {Authentication } from './services/authentication';
import { Http, Response, Headers, HTTP_PROVIDERS } from '@angular/http';

bootstrap(AppComponent, [ Authentication, HTTP_PROVIDERS ]);
