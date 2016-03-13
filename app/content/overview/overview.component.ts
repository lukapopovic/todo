import {Component, OnInit } from 'angular2/core';
import {ListInterface} from '../../shared/list.interface';
import {DataService} from '../../shared/data.service';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'my-app-overview-list',
    templateUrl: 'app/content/overview/overview.component.html',
    styleUrls: ['app/content/overview/overview.component.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class OverviewComponent {
    previewLists: ListInterface[];
    allLists: ListInterface[];
    list: ListInterface;
    newName: string = '';
    filterCriteria: string = '';

    constructor(private _dataService: DataService) { }

    save(){
        let list = {
            id: null,
            name: this.newName,
            items: []
        };
        if(this.newName === ''){
            alert('Please enter the list name!');
        } else {
            this._dataService.addList(list)
                .subscribe(() => {
                    this.refreshLists();
                    this.clearInputField();
                });
        }
    }

    remove(list: ListInterface){
        this._dataService.deleteList(list)
            .subscribe(() => {
                this.refreshLists();
            });
    }

    filter(){
        let self = this,
            filteredLists: ListInterface[];

        filteredLists = _.filter(this.allLists, function(list) {
            return list.name.includes(self.filterCriteria);
        });
        this.previewLists = filteredLists;
    }

    clearFilter(){
        this.filterCriteria = '';
        this.refreshLists();
    }

    ngOnInit(){
        this.refreshLists();
    }

    private refreshLists() {
        this._dataService.getLists()
        .subscribe(lists => {
            this.previewLists = this.allLists = lists;         
        });
    }

    private clearInputField(){
        this.newName = '';
    }
}