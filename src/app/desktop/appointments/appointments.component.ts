import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'hj-appointments',
    templateUrl: 'appointments.component.html',
    styleUrls: [ 'appointments.component.css' ]
})
export class AppointmentsComponent implements OnInit {
    public title: string = 'this is the appointments component';
    
    constructor() { }

    ngOnInit() { }

}