import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Rx';
import { User } from '../models/User';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class UserService {
    baseUrl = environment.apiUrl;

    constructor(private authHttp: AuthHttp) { }

    public getUsers(): Observable<User[]> {
        return this.authHttp.get(this.baseUrl + 'user')
        .map(response => <User[]>response.json())
        .catch(this.handleError);
    }

    public getUser(id: number): Observable<User> {
        return this.authHttp.get(this.baseUrl + 'user/' + id)
        .map(response => <User>response.json())
        .catch(this.handleError);
    }
    private handleError(error: any) {
        const applicationError = error.headers.get('Application-Error');
        if (applicationError) {
            return Observable.throw(applicationError);
        }
        const serverError = error.json();
        let modelStateErrors = '';
        if (serverError) {
            for (const key in serverError) {
                if (serverError[key]) {
                    modelStateErrors += serverError[key] + '\n';
                }
            }
        }
        return Observable.throw( modelStateErrors || 'Server error');
    }

}
