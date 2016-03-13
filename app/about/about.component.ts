import {Component} from 'angular2/core';

@Component({
    selector: '<my-app-about>',
    templateUrl: 'app/about/about.component.html',
    styleUrls: ['app/about/about.component.css']
})
export class AboutComponent {
    author = {
        name: 'Luka Popovic'
    };
}