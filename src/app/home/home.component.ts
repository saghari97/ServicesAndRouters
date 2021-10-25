import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private routing: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
  }

  onGotoServers(id: number) {
    this.routing.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '54'}, fragment: 'loading'});
  }
  onLogin() {
    this.authService.login();
  }
  onLogout() {
    this.authService.logout();
  }
}
