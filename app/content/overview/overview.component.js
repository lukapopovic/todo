System.register(['angular2/core', '../../shared/data.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, data_service_1, router_1;
    var OverviewComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            OverviewComponent = (function () {
                function OverviewComponent(_dataService) {
                    this._dataService = _dataService;
                    this.newName = '';
                    this.filterCriteria = '';
                }
                OverviewComponent.prototype.save = function () {
                    var _this = this;
                    var list = {
                        _id: null,
                        name: this.newName,
                        items: []
                    };
                    if (this.newName === '') {
                        alert('Please enter the list name!');
                    }
                    else {
                        this._dataService.addList(list)
                            .subscribe(function () {
                            _this.refreshLists();
                            _this.clearInputField();
                        });
                    }
                };
                OverviewComponent.prototype.remove = function (list) {
                    var _this = this;
                    this._dataService.deleteList(list)
                        .subscribe(function () {
                        _this.refreshLists();
                    });
                };
                OverviewComponent.prototype.filter = function () {
                    var self = this, filteredLists;
                    filteredLists = _.filter(this.allLists, function (list) {
                        return list.name.includes(self.filterCriteria);
                    });
                    this.previewLists = filteredLists;
                };
                OverviewComponent.prototype.clearFilter = function () {
                    this.filterCriteria = '';
                    this.refreshLists();
                };
                OverviewComponent.prototype.ngOnInit = function () {
                    this.refreshLists();
                };
                OverviewComponent.prototype.refreshLists = function () {
                    var _this = this;
                    this._dataService.getLists()
                        .subscribe(function (lists) {
                        _this.previewLists = _this.allLists = lists;
                    });
                };
                OverviewComponent.prototype.clearInputField = function () {
                    this.newName = '';
                };
                OverviewComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app-overview-list',
                        templateUrl: 'app/content/overview/overview.component.html',
                        styleUrls: ['app/content/overview/overview.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [data_service_1.DataService])
                ], OverviewComponent);
                return OverviewComponent;
            }());
            exports_1("OverviewComponent", OverviewComponent);
        }
    }
});
//# sourceMappingURL=overview.component.js.map