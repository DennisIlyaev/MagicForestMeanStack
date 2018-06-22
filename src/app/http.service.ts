import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(public http: HttpClient) { }

  getNews() {
    return this.http.get<any>('/api/getnews');
  }

  addNews(data) {
    return this.http.post('/api/postnews', data);
  }

  loginUser(user) {
    return this.http.post('/api/login', user);
  }

  updateText(data) {
   return this.http.put('/api/updatenews/' + data._id, data);
  }

  deleteField(data) {
    return this.http.delete('/api/delete/' + data._id);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logOut() {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }


}
