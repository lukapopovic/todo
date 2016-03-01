import {Component} from 'angular2/core';

@Component({
    selector: 'my-app-header',
    templateUrl: 'app/header/header.component.html',
    styleUrls: ['app/header/header.component.css']
})

export class HeaderComponent {
    navItems = [
        {
            name: 'Todo List',
            url: 'http://www.google.com'
        },
        {
            name: 'About Author',
            url: 'http://lukapopovic.info'
        }
        ];
    title = "ToDo App";
    className = "nav-item"
}