import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private reloadComponentSubject = new Subject<void>();
  reloadComponent$ = this.reloadComponentSubject.asObservable();

  triggerReload() {
    this.reloadComponentSubject.next();
  }
}
