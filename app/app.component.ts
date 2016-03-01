import {Component, ViewChild} from 'angular2/core';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [HeaderComponent, FooterComponent]
})

export class AppComponent {
    @ViewChild(HeaderComponent) headerComponent: HeaderComponent;
    @ViewChild(FooterComponent) footerComponent: FooterComponent;
}