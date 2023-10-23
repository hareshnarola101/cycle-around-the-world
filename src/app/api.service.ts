import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000'; // Update with your backend URL
  private authToken: string = '';

  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string ) {
    const credentials = { username, password };
    return this.http.post(`${this.baseUrl}/auth`, credentials);
  }

  setAuthToken(token: string) {
    this.authToken = token;
    // console.log(this.authToken);
  }
  

  calculateCyclingTime(data: any) {
    
    const headers = { 'Authorization': `${this.authToken}` };
    return this.http.post(`${this.baseUrl}/calculate`, data, {headers});
  }
}
