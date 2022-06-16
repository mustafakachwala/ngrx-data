import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  DefaultDataService,
  HttpUrlGenerator,
  Logger,
  QueryParams,
} from '@ngrx/data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from '../models/post.model';

@Injectable()
export class PostDataService extends DefaultDataService<Post> {
  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    logger: Logger
  ) {
    super('Post', http, httpUrlGenerator);
    logger.log('Created custom Post EntityDataService');
  }

  override getAll(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  //   getById(id: string | number): Observable<Hero> {
  //     return super.getById(id).pipe(map(hero => this.mapHero(hero)));
  //   }

  //   getWithQuery(params: string | QueryParams): Observable<Hero[]> {
  //     return super.getWithQuery(params).pipe(map(heroes => heroes.map(hero => this.mapHero(hero))));
  //   }

  //   private mapHero(hero: Hero): Hero {
  //     return { ...hero, dateLoaded: new Date() };
  //   }
}
