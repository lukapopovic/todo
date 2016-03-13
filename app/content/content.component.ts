import {Component, ViewChild} from 'angular2/core';
import {OverviewComponent} from './overview/overview.component';
import {DetailComponent} from './detail/detail.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'my-app-content',
    templateUrl: 'app/content/content.component.html',
    styleUrls: ['app/content/content.component.css'],
    directives: [ROUTER_DIRECTIVES, OverviewComponent]
})

@RouteConfig([
    { path: '/', name: 'Lists', component: OverviewComponent, useAsDefault: true },
    { path: '/:id', name: 'List', component: DetailComponent}
])
export class ContentComponent {
    content = "Content page";
}