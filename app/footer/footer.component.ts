import {Component} from 'angular2/core';

@Component({
    selector: 'my-app-footer',
    templateUrl: 'app/footer/footer.component.html',
    styleUrls: ['app/footer/footer.component.css']
})

export class FooterComponent {
    author = {
        name: 'Luka Popovic',
        url: 'http://lukapopovic.info'
    };
}