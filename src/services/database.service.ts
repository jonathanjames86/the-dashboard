import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/* Creates injector application wide */
@Injectable({
  /*
    Registering at the root level creates a single shared instance of the service,
    If registered at the component level, you get a new instance of the
    service with each instance of the component
  */
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

// Create an Observable that will start listening to geolocation updates
// when a consumer subscribes.
public getGeo() {
  const locations = new Observable((observer) => {
  // Get the next and error callbacks. These will be passed in when
  // the consumer subscribes.
  const {next, error} = observer;
  let watchId;

  // Simple geolocation API check provides values to publish
  if ('geolocation' in navigator) {
    watchId = navigator.geolocation.watchPosition(next, error);
  } else {
    error('Geolocation not available');
  }

  // When the consumer unsubscribes, clean up data ready for next subscription.
  return {unsubscribe() { navigator.geolocation.clearWatch(watchId); }};
  });

  // Call subscribe() to start listening for updates.
  const locationsSubscription = locations.subscribe(
  // Next handler is required
  position =>  console.log('Current Position: ', position),
  // Error and Complete are optional
  error => console.log('Error Getting Location: ', error) ,
  () => console.log('Complete')
  );

  // Stop listening for location after 10 seconds
  setTimeout(() => { locationsSubscription.unsubscribe(); }, 10000);
}
}
