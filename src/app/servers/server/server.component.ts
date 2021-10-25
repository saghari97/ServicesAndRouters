import {Component, OnInit} from '@angular/core';

import {ServersService} from '../servers.service';
import {ActivatedRoute, Params, Router , Data} from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService,
              private routing: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    // in rah doroste badi b surate dynamic resolve
    // const id = +this.routing.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    // this.routing.params.subscribe((params: Params) => {
    //   // ba in code e man age az hamun safe berim avaz nemise
    //   // this.server.id = +params['id'];
    //   this.server = this.serversService.getServer(+params['id']);
    // });
    this.routing.data.subscribe((data: Data) => {
      this.server = data['server'];
    });
  }

  onEdit() {
    this.router.navigate(['edit'],
      {relativeTo: this.routing , queryParamsHandling: 'preserve'});
  }

}
