import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.component.html',
  styleUrls: ['./user-list-component.component.scss']
})
export class UserListComponentComponent {

  users$ !: Observable<any[]>;

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
    this.users$ = this.userService.users$;
  }
}
