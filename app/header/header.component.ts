import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'my-app-header',
    templateUrl: 'app/header/header.component.html',
    styleUrls: ['app/header/header.component.css'],
    directives: [ROUTER_DIRECTIVES],
})

export class HeaderComponent {
    navItems = [
        {
            name: 'About Author',
            routerLink: ['About']
        },
        {
            name: 'Todo Lists',
            routerLink: ['Lists']
        }
        ];
    title = "ToDo App";
    className = "nav-item"
}