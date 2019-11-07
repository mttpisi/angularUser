import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-viewer',
  templateUrl: './user-viewer.component.html',
  styleUrls: ['./user-viewer.component.css']
})
export class UserViewerComponent implements OnInit {
  users:User[];
  constructor(private userService : UsersService) { }

  ngOnInit() {
    this.getUsers();
  }
  
  getUsers(): void{
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  selectedUser : User;
  onSelect(user: User):void{
    this.selectedUser = user;
  }
  
}
