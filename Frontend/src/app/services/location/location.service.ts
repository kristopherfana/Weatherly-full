import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  getCurrentLocation(): Observable<{ latitude: number; longitude: number }> {
    return new Observable((observer) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            observer.next({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
            observer.complete();
          },
          (error) => {
            console.error(error);
            observer.next({ latitude: 51.5074, longitude: 0.1278 });
            observer.complete();
          }
        );
      } else {
        alert("Hey");
        console.log('Geolocation not supported.');
        observer.next({ latitude: 51.5074, longitude: 0.1278 });
        observer.complete();
      }
    });
  }
}
