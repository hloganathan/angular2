import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'hj-prescriptions',
    templateUrl: 'prescriptions.component.html',
    styleUrls: [ 'prescriptions.component.css' ]
})
export class PrescriptionsComponent {
    public title: string = 'this is the precscriptions component';
}