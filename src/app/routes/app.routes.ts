import { provideRouter, RouterConfig } from '@angular/router';
import { DesktopRoutes } from '../desktop/desktop.routes';
import { WelcomeComponent } from '../welcome';

const appRoutes = [
    { path: '', component: WelcomeComponent},
    { path: 'welcome', component: WelcomeComponent}
];

const routes: RouterConfig = [
    ...DesktopRoutes,
    ...appRoutes
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
    // guards?
];
