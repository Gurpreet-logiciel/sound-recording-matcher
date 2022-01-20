import { Component, OnDestroy, OnInit } from '@angular/core';
import { RECORDING } from 'src/app/interfaces/recording';
import { EventService } from 'src/app/services/event.service';
import { RecordingService } from 'src/app/services/recording.service';

@Component({
  selector: 'app-db-recordings-list',
  templateUrl: './db-recordings-list.component.html',
  styleUrls: ['./db-recordings-list.component.css']
})
export class DbRecordingsListComponent implements OnInit, OnDestroy {

  recordings: Array<RECORDING> = [];

  constructor(private recordingService: RecordingService,
      private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.listen('add_new_recording', this.onAddNewRecording);
    this.getRecordings();
  }
  
  ngOnDestroy() {
    this.eventService.destroy('add_new_recording', this.onAddNewRecording);
  }

  getRecordings() :void{
    this.recordingService.getDBRecordings().subscribe(res => {
      this.recordings = res;
    })
  }

  onAddNewRecording = (event: any) => {
    if (event.detail.recording) {
      let recording = event.detail.recording;
      recording['id'] = this.recordings.length + 1;

      this.recordings.push(recording);
    }
  }
}
