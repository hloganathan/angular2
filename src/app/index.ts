// entry point for app
import { enableProdMode} from '@angular/core';
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { RootComponent } from './root';
import { AuthenticationService } from './services';
import { APP_ROUTER_PROVIDERS } from './routes/app.routes';
enableProdMode();
bootstrap(RootComponent, [ AuthenticationService, HTTP_PROVIDERS, APP_ROUTER_PROVIDERS, ROUTER_DIRECTIVES ]);
