import * as components from './index';
export const DesktopRoutes = [
    {
        path: 'desktop',
        component: components.DesktopComponent,
        index: false,
        children: [
            { path: 'dashboard', component: components.DashboardComponent },
            { path: 'journal', component: components.JournalComponent },
            { path: 'appointments', component: components.AppointmentsComponent },
            { path: 'physicians', component: components.PhysiciansComponent },
            { path: 'prescriptions', component: components.PrescriptionsComponent },
            { path: '', component: components.DashboardComponent },
        ]
    }
];