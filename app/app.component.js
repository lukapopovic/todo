System.register(['angular2/core', 'angular2/http', 'angular2/router', 'rxjs/Rx', 'a2-in-memory-web-api/core', './shared/in-memory-todo.service', './header/header.component', './footer/footer.component', './content/content.component', './about/about.component', './shared/data.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1, core_2, in_memory_todo_service_1, header_component_1, footer_component_1, content_component_1, about_component_1, data_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (_1) {},
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (in_memory_todo_service_1_1) {
                in_memory_todo_service_1 = in_memory_todo_service_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (content_component_1_1) {
                content_component_1 = content_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.component.html',
                        styleUrls: ['app/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent, content_component_1.ContentComponent, footer_component_1.FooterComponent, about_component_1.AboutComponent],
                        providers: [router_1.ROUTER_PROVIDERS,
                            http_1.HTTP_PROVIDERS,
                            core_1.provide(http_1.XHRBackend, { useClass: core_2.InMemoryBackendService }),
                            core_1.provide(core_2.SEED_DATA, { useClass: in_memory_todo_service_1.InMemoryTodoService }),
                            core_1.provide(core_2.InMemoryBackendConfig, { useValue: { delay: 300 } }),
                            data_service_1.DataService]
                    }),
                    router_1.RouteConfig([
                        { path: '/about', name: 'About', component: about_component_1.AboutComponent, useAsDefault: true },
                        { path: '/lists/...', name: 'Lists', component: content_component_1.ContentComponent }]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map