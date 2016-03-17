System.register(['angular2/core', 'angular2/router', '../../shared/data.service'], function(exports_1, context_1) {
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
    var core_1, router_1, data_service_1;
    var DetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            DetailComponent = (function () {
                function DetailComponent(_routeParams, _dataService) {
                    this._routeParams = _routeParams;
                    this._dataService = _dataService;
                    this.checkedItems = [];
                }
                DetailComponent.prototype.ngOnInit = function () {
                    this.refreshItems();
                };
                DetailComponent.prototype.saveItem = function (event) {
                    if (event.code === "Enter") {
                        console.log(this.tempList);
                        this.tempList.items.push(this.newItem);
                        this.refreshItems(this.tempList);
                        this.clearItemField();
                    }
                };
                DetailComponent.prototype.checkItem = function (event, itemName) {
                    if (event.target.checked) {
                        this.checkedItems.push(itemName);
                    }
                    else {
                        _.remove(this.checkedItems, function (i) {
                            return i === itemName;
                        });
                    }
                };
                DetailComponent.prototype.removeCheckedItems = function () {
                    var newItems = _.difference(this.tempList.items, this.checkedItems);
                    this.tempList.items = newItems;
                    this.refreshItems(this.tempList);
                    this.checkedItems = [];
                };
                DetailComponent.prototype.refreshItems = function (list) {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    if (list !== undefined) {
                        this._dataService.updateList(this.tempList)
                            .subscribe(function () { });
                    }
                    this._dataService.getList(id).subscribe(function (list) {
                        _this.tempList = list;
                    });
                };
                DetailComponent.prototype.clearItemField = function () {
                    this.newItem = '';
                };
                DetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app-list-detail',
                        templateUrl: 'app/content/detail/detail.component.html',
                        styleUrls: ['app/content/detail/detail.component.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, data_service_1.DataService])
                ], DetailComponent);
                return DetailComponent;
            }());
            exports_1("DetailComponent", DetailComponent);
        }
    }
});
//# sourceMappingURL=detail.component.js.map