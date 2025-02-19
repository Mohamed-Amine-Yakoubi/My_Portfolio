import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  getDataJourney(): Observable<any> {
    return this.http.get<any>('data/JourneyData.json');
  }
  getDataSkills():Observable<any>{
    return this.http.get<any>('data/skills.json')
  }
}
