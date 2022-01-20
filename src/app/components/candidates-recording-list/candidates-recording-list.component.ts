import { Component, OnInit } from '@angular/core';
import { RECORDING } from 'src/app/interfaces/recording';
import { EventService } from 'src/app/services/event.service';
import { InputRecordingsDataService } from 'src/app/services/input-recordings-data.service';
import { RecordingService } from 'src/app/services/recording.service';

@Component({
  selector: 'app-candidates-recording-list',
  templateUrl: './candidates-recording-list.component.html',
  styleUrls: ['./candidates-recording-list.component.css']
})
export class CandidatesRecordingListComponent implements OnInit {

  recordings: Array<any> = [];
  dbRecordings: Array<RECORDING> = [];

  constructor(private inputRecordingService: InputRecordingsDataService,
    private recordingService: RecordingService,
    private eventService: EventService) { }

  ngOnInit(): void {
    this.getRecordings();
    this.getDBRecordings();
  }

  getRecordings() :void{
    this.inputRecordingService.getInputRecordings().subscribe(res => {
      this.recordings = res;
    })
  }

  getDBRecordings() :void{
    this.recordingService.getDBRecordings().subscribe(res => {
      this.dbRecordings = res;
    })
  }

  matchwithDB(recording: any) {
    let matchedRecord = {};
    recording['isMatching'] = true;

    setTimeout(() => { //timout is only added for showing loader
      if (recording.isrc) {
        matchedRecord = this.matchRecordWithISRC(recording);
      } else {
        matchedRecord = this.matchRecordWithArtistTitle(recording);
      }
  
      if (Object.keys(matchedRecord).length > 0) {
        this.setStatusMatched(recording);
        recording['matchedDbRecord'] = matchedRecord;
      } else {
        this.setStatusNotMatched(recording);
      }
      
      recording['isMatching'] = false;
    }, 1000)

  }

  matchRecordWithISRC(rec: any): object {
    let record = [];

    record = this.dbRecordings.filter(recording => rec.isrc == recording.isrc);

    return (record.length > 0) ? record[0] : {};
  }

  matchRecordWithArtistTitle(rec: any): object {
    let record = [];

    record = this.dbRecordings.filter(recording => rec.artist == recording.artist && rec.title == recording.title);

    return (record.length > 0) ? record[0] : {};
  }

  setStatusMatched(recording: any) {
    recording['matchStatus'] = "matched";
  }

  setStatusNotMatched(recording: any) {
    recording['matchStatus'] = "not-matched";
  }

  addRecToDB(recording: any) {
    recording['isAdding'] = true;

    setTimeout(() => { //timout is only added for showing loader
      let data = {
        artist: recording.artist,
        title: recording.title,
        isrc: recording.isrc,
        duration: recording.duration
      };
      
      this.eventService.fire('add_new_recording', {recording: data});
  
      recording['isAdding'] = false;
      recording['matchStatus'] = "added-to-db";
    }, 500);
    
  }
}
