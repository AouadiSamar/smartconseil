import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'https://webserver.staging.4indata.fr/api/users/';
  private childBaseUrl = 'https://webserver.staging.4indata.fr/api/childs/';
  private token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMzOTkxODYwLCJqdGkiOiI2MjFjYmYzYzNhM2Y0MDYwOTAzOGM5NWNjOTk5YmFiMyIsInVzZXJfaWQiOjY5Njh9.b-tuGeTOWo7Bav79MwPGKX2gIKgM2-AAvrSB2VlSNzc';

  constructor(private http: HttpClient) {}

  getChilds(username: string): Observable<any[]> {
    const url = `${this.baseUrl}${username}/childs/`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get<any[]>(url, { headers }).pipe(
      tap((response) => {
        console.log('Réponse API enfants :', response);
      })
    );
  }


  getChildDetails(childId: number): Observable<any> {
    const url = `${this.childBaseUrl}${childId}/`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.get(url, { headers });
  }

  updateChild(childId: number, childData: any): Observable<any> {
    const url = `${this.childBaseUrl}${childId}/`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
      'Content-Type': 'application/json',
    });
    return this.http.put(url, childData, { headers });
  }

  // API pour l'interface 1
  getUser(username: string): Observable<any> {
    const url = `${this.baseUrl}${username}/`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get(url, { headers }).pipe(
      tap((response) => {
        console.log('Données de l’utilisateur :', response);
      })
    );
  }

  updateUser(username: string, userData: any): Observable<any> {
    const url = `${this.baseUrl}${username}/`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
      'Content-Type': 'application/json',
    });

    return this.http.put(url, userData, { headers }).pipe(
      tap((response) => {
        console.log('Mise à jour réussie pour l’utilisateur :', response);
      })
    );
  }
}
