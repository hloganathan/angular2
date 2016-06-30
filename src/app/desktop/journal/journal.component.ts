import { Component } from '@angular/core';

@Component({
    selector: 'hj-journal',
    moduleId: module.id,
    templateUrl: 'journal.component.html',
    styleUrls: ['journal.component.css']
})
export class JournalComponent {
    public title: string = 'the journal component';
}