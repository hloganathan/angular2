import { provideRouter, RouterConfig } from '@angular/router';
import { DesktopRoutes } from '../desktop/desktop.routes';

const appRoutes = [

];

const routes: RouterConfig = [
    ...DesktopRoutes
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
    // guards?
]
