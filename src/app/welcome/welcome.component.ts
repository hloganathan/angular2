import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'hj-welcome',
    templateUrl: 'welcome.component.html',
    styleUrls: [ 'welcome.component.css' ]
})
export class WelcomeComponent implements OnInit {
    public title: string = 'this is the welcome screen';
    constructor() { }

    ngOnInit() { }

}