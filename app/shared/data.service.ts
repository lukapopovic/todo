import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {ListInterface} from './list.interface';
import {Observable} from 'rxjs/Rx';
import {CONFIG} from './config';

let listsUrl = CONFIG.baseUrl.lists;

@Injectable()
export class DataService {

    constructor(private _http: Http){}

    // getLists(){
    //     console.log(listsUrl);
    //     return this._http.get(listsUrl)
    //         .map(res => <ListInterface[]> res.json())
    //         .do(data => console.log(data))
    //         .catch(this.handleError);
    // }

    getLists(){
        return this._http.get(listsUrl)
            .map((response: Response) => <ListInterface[]>response.json())
            .catch(this.handleError);
    }

    getList(id: number){
        return this._http.get(`${listsUrl}/${id}`)
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    addList(list: ListInterface){
        let body = JSON.stringify(list);
        console.log(body);
        return this._http.post(`${listsUrl}`, body)
            .map((response: Response) => response.json())
            .do(data => console.log(data))
            .catch(this.handleError);
    }

    deleteList(list: ListInterface) {
        return this._http.delete(`${listsUrl}/${list.id}`)
            .catch(this.handleError);
        
    }

    updateList(list: ListInterface){
        let body = JSON.stringify(list);
        return this._http.put(`${listsUrl}/${list.id}`, body)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Unknown Error');
    }
}