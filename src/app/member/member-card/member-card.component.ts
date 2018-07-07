import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
  // User in the parent component
  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
