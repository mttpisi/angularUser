import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { USERS } from '../users';

@Component({
  selector: 'app-user-viewer',
  templateUrl: './user-viewer.component.html',
  styleUrls: ['./user-viewer.component.css']
})
export class UserViewerComponent implements OnInit {
  users = USERS;
  selectedUser : User;
  constructor() { }

  ngOnInit() {
  }
  
  onSelect(user:User):void{
    this.selectedUser = user;
  }
  
}
