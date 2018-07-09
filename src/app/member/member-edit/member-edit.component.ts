import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { AlertComponent } from '../../../../node_modules/ngx-bootstrap';
import { AlertifyService } from '../../services/alertify.service';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  user: User;
  @ViewChild('editForm') editForm: NgForm;

  constructor(private route: ActivatedRoute,
  private alertify: AlertifyService,
  private authService: AuthService,
  private userService: UserService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    })
  }

  // Method call the updateUser method from the user service and update a user
  updateUser() {
    this.userService.updateUser(this.authService.decodedToken.nameid, this.user).subscribe(next => {
      this.alertify.success('Profile Updated Successfully');
      this.editForm.reset(this.user);
    }, error => {
      this.alertify.error(error);
    });
  }

}
