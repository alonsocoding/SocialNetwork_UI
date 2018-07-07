import { Observable } from 'rxjs/Rx';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/User';
import { Injectable } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';

@Injectable()
export class MemberDetailResolver implements Resolve<User> {
    constructor(private userService: UserService, 
        private router: Router, private alertify: AlertifyService) {}

        resolve(route: ActivatedRouteSnapshot): Observable<User> {
            return this.userService.getUser(route.params['id']).catch(error => {
                this.alertify.error('Problem Retrieving Data');
                this.router.navigate(['/members']);
                return Observable.of(null);
            })
        }
}