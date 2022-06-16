import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EntityDataModule, EntityDataService } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostDataService } from './services/post-data.service';
import { entityMetadata } from './store-meta/entity-metadata';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot({ entityMetadata }),
    StoreDevtoolsModule.instrument(),
    MatTableModule,
    MatPaginatorModule
    
  ],
  providers: [PostDataService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    EntityDataService: EntityDataService,
    PostDataService: PostDataService
  ) {
    EntityDataService.registerService('Post', PostDataService);
  }
}
