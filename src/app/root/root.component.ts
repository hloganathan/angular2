import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navigation/navbar';

@Component({
    selector: 'hj-root',
    moduleId: module.id,
    templateUrl: 'root.component.html',
    styleUrls: ['root.component.css'],
    directives: [NavbarComponent]
})

export class RootComponent {
    title: string = 'Angular 2 Data Entry - App';
}