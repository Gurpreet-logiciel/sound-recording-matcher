import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CandidatesRecordingListComponent } from './components/candidates-recording-list/candidates-recording-list.component';
import { DbRecordingsListComponent } from './components/db-recordings-list/db-recordings-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RecordingsDbService } from './services/recordings-db.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CandidatesRecordingListComponent,
    DbRecordingsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      RecordingsDbService, {dataEncapsulation: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
