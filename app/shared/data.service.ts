import {Injectable} from 'angular2/core';
import {Http, Headers, Response} from 'angular2/http';
import {ListInterface} from './list.interface';
import {Observable} from 'rxjs/Rx';
import {CONFIG} from './config';

let listsUrl = CONFIG.baseUrl.lists;

@Injectable()
export class DataService {
    private _headers: Headers;;
    constructor(private _http: Http){
        this._headers = new Headers();
        this._headers.append('Content-Type', 'application/json');
    }

    getLists(){
        return this._http.get(listsUrl)
            .map((response: Response) => <ListInterface[]>response.json())
            .catch(this.handleError);
    }

    getList(id: string){
        return this._http.get(`${listsUrl}/${id}`)
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    addList(list: ListInterface){
        let body = JSON.stringify(list);
        return this._http.post(`${listsUrl}`, body, { headers: this._headers })
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    deleteList(list: ListInterface) {
        return this._http.delete(`${listsUrl}/${list._id}`)
            .map((response: Response) => response.json())
            .catch(this.handleError);
        
    }

    updateList(list: ListInterface){
        let body = JSON.stringify(list);
        return this._http.put(`${listsUrl}/${list._id}`, body, { headers: this._headers })
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Unknown Error');
    }

    private 
}