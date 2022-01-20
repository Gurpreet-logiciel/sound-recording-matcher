import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  fire(name: string, data: any) {
    
    if (navigator.userAgent.indexOf('MSIE') !== -1
      || navigator.appVersion.indexOf('Trident/') > -1) {
      /* Microsoft Internet Explorer detected in. */
      var evt = document.createEvent("CustomEvent");
      evt.initCustomEvent(name, false, false, data);
    } else {

      var evt = new CustomEvent(name, {
        detail: data
      });
    }
    console.log('Fire: ', name);
    document.dispatchEvent(evt)
  };

  /**
 * @method listen
 * @desc listen fired Custom Events
 * @param [name STRING]
 * @param [func FUNCTION]
 **/
  listen(name: string, func: any) {
    document.addEventListener(name, func, false);
  };

  /**
 * @method [destroy]
 * @desc destroy fired Custom Events
 * @param [name STRING]
   **/
  destroy(name : string, func : any) {
      console.log('Destroy: ', name, func);
      document.removeEventListener(name, func, false);
  };
}
