import {Component, provide} from 'angular2/core';
import {HTTP_PROVIDERS, XHRBackend} from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import 'rxjs/Rx';
import {InMemoryBackendConfig, InMemoryBackendService, SEED_DATA} from 'a2-in-memory-web-api/core';
import {InMemoryTodoService} from './shared/in-memory-todo.service';

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ContentComponent } from './content/content.component';
import {AboutComponent} from './about/about.component';
import {DataService} from './shared/data.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES, HeaderComponent, ContentComponent, FooterComponent, AboutComponent],
    providers: [ROUTER_PROVIDERS,
                HTTP_PROVIDERS,
                //Overrides the backend and creates mocked one.
                // provide(XHRBackend, { useClass: InMemoryBackendService }),
                // provide(SEED_DATA, { useClass: InMemoryTodoService }),
                // provide(InMemoryBackendConfig, { useValue: { delay: 300 } }),
                DataService]
})
@RouteConfig([
    {path: '/about', name: 'About', component: AboutComponent, useAsDefault: true},
    { path: '/lists/...', name: 'Lists', component: ContentComponent }])
export class AppComponent {}
