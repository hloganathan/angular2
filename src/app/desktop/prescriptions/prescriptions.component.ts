import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'hj-prescriptions',
    templateUrl: 'prescriptions.component.html',
    styleUrls: [ 'prescriptions.component.css' ]
})
export class PrescriptionsComponent implements OnInit {
    public title: string = 'this is the precscriptions component';
    
    constructor() { }

    ngOnInit() { }

}