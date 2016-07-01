const ngBarrels: string[] = [
  'core',
  'common',
  'compiler',
  'http',
  'platform-browser',
  'platform-browser-dynamic',
];

const barrels: string[] = [
  // Angular specific barrels.
  '@angular/router',

  // Thirdparty barrels.

  // App specific barrels.
  'components',
  'components/login',
  'components/navigation',
  'components/navigation/main-menu',
  'components/navigation/navbar',
  'components/user-dropdown',
  'desktop',
  'desktop/appointments',
  'desktop/dashboard',
  'desktop/journal',
  'desktop/navigation',
  'desktop/physicians',
  'desktop/prescriptions',
  'models',
  'root',
  'routes',
  'services',
  'welcome'
];

const systemPackages: any = {};
barrels.forEach((b) => {
    systemPackages[b] = { main: 'index', defaultExtension: 'js'};
});

systemPackages['rxjs'] = { main: '/bundles/rx.js', defaultExtension: 'js' };

ngBarrels.forEach((b) => {
    systemPackages['@angular/'+b] = { main: 'index', defaultExtension: 'js' };
});

declare var System: any;

System.config({
    map: {
        '@angular':                   'node_modules/@angular',
        '@angular/router':            'node_modules/@angular/router',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        'rxjs':                       'node_modules/rxjs',
        'main': 'index.js'
    },
    packages: systemPackages
});
