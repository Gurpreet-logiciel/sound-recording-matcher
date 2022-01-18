import { Injectable } from '@angular/core';
import { min, Observable, of } from 'rxjs';
import { RECORDING } from '../interfaces/recording';

@Injectable({
  providedIn: 'root'
})
export class InputRecordingsDataService {

  constructor() { }

  getInputRecordings(): Observable<RECORDING[]> {

    let recordings: Array<RECORDING> = [
      {id: 1, artist: "Ed Sheeran", title: "Shape of You", isrc: null, duration: 233},
      {id: 2, artist: "Ed Sheeran", title: "Shape of You (Latin Remix)", isrc: "GBAHS1700245", duration: 237},
      {id: 3, artist: "Ed Sheeran with Kranium, Nyla, Major Lazer", title: "Shape of You", isrc: "GBAHS1700228", duration: null},
      {id: 4, artist: "Ed Sheeran", title: "Shape of You (Acoustic)", isrc: null, duration: 223},
      {id: 5, artist: "Muse", title: "Supremacy", isrc: "GBAHT1200389", duration: 295},
      {id: 6, artist: "Mose", title: "Supremacy", isrc: "GBAHT1500513", duration: null},
      {id: 7, artist: "Muse", title: "Supremacy", isrc: "GBAHT1326121", duration: null},
      {id: 8, artist: "Miles Davis", title: "Freddie Freeloader", isrc: "USSM15900114", duration: 580},
      {id: 9, artist: "Miles Davis", title: "Freddie Freeloader", isrc: "FR6V81367550", duration: null},
      {id: 10, artist: "Miles Davis", title: "Fredie Freeloader", isrc: "DEPZ69005640", duration: 583},
      {id: 11, artist: "Miles Davis", title: "Freddie Freeloader (Album Version)", isrc: "USSM15900114", duration: 401}
    ];

    return of(recordings);
  }
}
