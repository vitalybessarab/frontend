import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public modulesCount$: Observable<any>;

  constructor(private api: ApiService) {
    this.modulesCount$ = this.api.getModulesCount();
  }
}
