import {Component, OnInit} from '@angular/core';

import {ServersService} from '../servers.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(private serversService: ServersService,
              private routing: ActivatedRoute,
              private router: Router
  ) {
  }

  ngOnInit() {
    console.log(this.routing.snapshot.queryParams);
    console.log(this.routing.snapshot.fragment);
    this.routing.queryParams
      .subscribe((params: Params) => {
        this.allowEdit = params['allowEdit'] === '1' ? true : false;
        console.log(this.allowEdit);
      });
    this.routing.fragment.subscribe();
    const id = +this.routing.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.routing.params.subscribe((params: Params) => {
      this.server.id = +params['id'];
    });
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.routing});
  }

  canDeactivated(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status && !this.changesSaved)) {
      console.log('gsxbhjjxb zjxb hjkczk');
      return confirm('Do you sure you wanna exit without submitting the changes?');
    } else {
      return true;
    }
  }

}
