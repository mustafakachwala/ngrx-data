import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Post } from './models/post.model';
import { DefaultService } from './services/default.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngrx-data';
  posts$: Observable<Post[]>;
  displayedColumns = ['userId', 'id', 'body'];

  
 // dataSource = new MatTableDataSource(this.posts$);

  constructor(private defaultService: DefaultService) {
    this.posts$ = defaultService.entities$;
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.defaultService.getAll();
  }
}
