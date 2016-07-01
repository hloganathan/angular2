import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'hj-welcome',
    templateUrl: 'welcome.component.html',
    styleUrls: [ 'welcome.component.css' ]
})
export class WelcomeComponent {
    public title: string = 'this is the welcome screen';
}