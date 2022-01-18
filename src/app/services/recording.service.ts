import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, take, tap } from 'rxjs';
import { RECORDING } from '../interfaces/recording';

@Injectable({
  providedIn: 'root'
})
export class RecordingService {

  private dbRecordingURL = 'api/recordings';

  constructor(private http: HttpClient) { }

  getDBRecordings(): Observable<RECORDING[]> {

    return this.http.get<RECORDING[]>(this.dbRecordingURL)
      .pipe(
        tap(_ => console.log('fetched recordings')),
        catchError(this.handleError<RECORDING[]>('getRecordings', []))
      );
  }  

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
    };
  }
}
