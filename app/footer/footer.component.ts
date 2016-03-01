import {Component} from 'angular2/core';

@Component({
    selector: 'my-app-footer',
    templateUrl: 'app/footer/footer.component.html'
})

export class FooterComponent {
    author = {
        name: 'Luka Popovic',
        url: 'http://lukapopovic.info'
    };
}