import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'hj-appointments',
    templateUrl: 'appointments.component.html',
    styleUrls: [ 'appointments.component.css' ]
})
export class AppointmentsComponent {
    public title: string = 'this is the appointments component';
}