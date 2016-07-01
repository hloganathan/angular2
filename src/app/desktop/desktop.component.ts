import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { DesktopMenuComponent } from './navigation';

@Component({
    moduleId: module.id,
    selector: 'hj-desktop',
    templateUrl: 'desktop.component.html',
    styleUrls: [ 'desktop.component.css' ],
    directives: [ DesktopMenuComponent, ROUTER_DIRECTIVES ]
})
export class DesktopComponent {
    public title: string = 'this is the desktop';
}