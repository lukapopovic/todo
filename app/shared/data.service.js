System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', './config'], function(exports_1, context_1) {
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
    var core_1, http_1, Rx_1, config_1;
    var listsUrl, DataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            listsUrl = config_1.CONFIG.baseUrl.lists;
            DataService = (function () {
                function DataService(_http) {
                    this._http = _http;
                }
                // getLists(){
                //     console.log(listsUrl);
                //     return this._http.get(listsUrl)
                //         .map(res => <ListInterface[]> res.json())
                //         .do(data => console.log(data))
                //         .catch(this.handleError);
                // }
                DataService.prototype.getLists = function () {
                    return this._http.get(listsUrl)
                        .map(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                DataService.prototype.getList = function (id) {
                    return this._http.get(listsUrl + "/" + id)
                        .map(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                DataService.prototype.addList = function (list) {
                    var body = JSON.stringify(list);
                    console.log(body);
                    return this._http.post("" + listsUrl, body)
                        .map(function (response) { return response.json(); })
                        .do(function (data) { return console.log(data); })
                        .catch(this.handleError);
                };
                DataService.prototype.deleteList = function (list) {
                    return this._http.delete(listsUrl + "/" + list.id)
                        .catch(this.handleError);
                };
                DataService.prototype.updateList = function (list) {
                    var body = JSON.stringify(list);
                    return this._http.put(listsUrl + "/" + list.id, body)
                        .catch(this.handleError);
                };
                DataService.prototype.handleError = function (error) {
                    console.error(error);
                    return Rx_1.Observable.throw(error.json().error || 'Unknown Error');
                };
                DataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DataService);
                return DataService;
            }());
            exports_1("DataService", DataService);
        }
    }
});
//# sourceMappingURL=data.service.js.map