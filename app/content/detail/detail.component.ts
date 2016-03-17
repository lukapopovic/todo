import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import {DataService} from '../../shared/data.service';
import {ListInterface} from '../../shared/list.interface';

@Component({
    selector: 'my-app-list-detail',
    templateUrl: 'app/content/detail/detail.component.html',
    styleUrls: ['app/content/detail/detail.component.css']
})
export class DetailComponent {
    tempList: ListInterface;
    newItem: string;
    checkedItems: string[] = [];

    constructor(private _routeParams: RouteParams,
                private _dataService: DataService){}

    ngOnInit(){
        this.refreshItems();
    }

    saveItem(event){
        if(event.code === "Enter"){
            console.log(this.tempList);
            this.tempList.items.push(this.newItem);
            this.refreshItems(this.tempList);
            this.clearItemField();
        }
    }

    checkItem(event, itemName) {
        if (event.target.checked) {
            this.checkedItems.push(itemName);
        } else {
            _.remove(this.checkedItems, function(i) {
                return i === itemName;
            })
        }
    }

    removeCheckedItems(){   
        let newItems = _.difference(this.tempList.items, this.checkedItems);
        this.tempList.items = newItems;
        this.refreshItems(this.tempList);
        this.checkedItems = [];
    }

    private refreshItems(list?: ListInterface){
        let id = +this._routeParams.get('id');
        if(list !== undefined){
            this._dataService.updateList(this.tempList)
                .subscribe(() => {});
        }
        this._dataService.getList(id).subscribe(list => {
            this.tempList = list;
        });
    }

    private clearItemField() {
        this.newItem = '';
    }

}