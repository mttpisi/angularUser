import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './users';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private messageService: MessageService) { }

  getUsers(): Observable<User[]> {
    this.messageService.add('UserService: fetched heroes');
    return of(USERS);  
  }
}
