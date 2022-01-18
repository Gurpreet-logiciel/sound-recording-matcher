import { Component, OnInit } from '@angular/core';
import { RECORDING } from 'src/app/interfaces/recording';
import { RecordingService } from 'src/app/services/recording.service';

@Component({
  selector: 'app-db-recordings-list',
  templateUrl: './db-recordings-list.component.html',
  styleUrls: ['./db-recordings-list.component.css']
})
export class DbRecordingsListComponent implements OnInit {

  recordings: Array<RECORDING> = [];

  constructor(private recordingService: RecordingService) { }

  ngOnInit(): void {
    this.getRecordings();
  }

  getRecordings() :void{
    this.recordingService.getDBRecordings().subscribe(res => {
      this.recordings = res;
    })
  }
}
