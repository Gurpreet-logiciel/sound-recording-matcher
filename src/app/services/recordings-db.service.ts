import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { RECORDING } from '../interfaces/recording';

@Injectable({
  providedIn: 'root'
})
export class RecordingsDbService implements InMemoryDbService {

  createDb() {
    const recordings: Array<RECORDING> = [
      {id: 1, artist: "Ed Sheeran", title: "Shape of You", isrc: "GBAHS1600463", duration: 233},
      {id: 2, artist: "Ed Sheeran", title: "Shape of You (Latin Remix)", isrc: "GBAHS1700245", duration: null},
      {id: 3, artist: "Muse", title: "Supremacy", isrc: "GBAHT1200389", duration: 295},
      {id: 4, artist: "Muse", title: "Supremacy", isrc: "GBAHT1500513", duration: null},
      {id: 5, artist: "Muse", title: "Supremacy (Live At Rome Olympic Stadium)", isrc: "GBAHT1326121", duration: null},
      {id: 6, artist: "Miles Davis", title: "Freddie Freeloader", isrc: "USSM15900114", duration: 586},
      {id: 7, artist: "Miles Davis", title: "Freddie Freeloader", isrc: "FR6V81367550", duration: 423},
      {id: 8, artist: "Miles Davis", title: "Freddie Freeloader", isrc: "DEPZ69005640", duration: 583},
      {id: 9, artist: "Miles Davis", title: "Freddie Freeloader", isrc: null, duration: null},
    ]

    return {recordings};
  }
}
