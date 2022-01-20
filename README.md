# SoundRecordingMatcher

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.3.

## Development server
Run `npm install` first for download all the dependancy of project then.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Requirements
Node Version should be 12.20.x/14.15.x/16.10.x or later minor version

## Task Details
1. Input recordings and Database Recordings are displaying in same page.
2. Separate components are used for Display Input Recordings and Database Recordings.

## Database Recording Compoents
1. For display database recording not using any database. I'm using Angular In memory web api service and getting recording from there [Angular In Memory Web API](https://www.npmjs.com/package/angular-in-memory-web-api)

## Input Recording Compoents
1. For Display Input recordings in layout agian not using any Database. I'm fetching input recordings from service (InputRecordingsDataService)
2. In Lisiting of Input Recordings i added a action table heading(Check UI). In action i added a button "Click To Match"  
3. On that button click i matched input records with DB records in 2 steps.
    1. Step 1: If Input Recording has ISRC code then match first with ISRC code with DB recordings.
    2. Step 2: If input recording not has ISRC code then matching is run on Artist and Title 
    3. IMO: ISRC CODE is unique identification so i matched first based on ISRC Code
4. If Record matched then i displayed "Matched with ID 1(Id of db record)"
5. If Record not matched the i displayed "Not Matched" badge with "Add to DB" Button
6. On Add To DB button record is added in DB Recording list at the end. and displayed badge "Added to DB" with Input Recordings

FYI: No Database is used in this demo. But yes we can easily integrate this with Database and REST API.

## Layout
1. For UI i used [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/) . It's easy to use.
2. For Imporvment of User experiance we can use [Materialize CSS](https://materializecss.com/) also.
