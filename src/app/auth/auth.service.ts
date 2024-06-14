import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseApiUrl = 'https://icherniakov.ru/yt-course/auth/'
  http = inject(HttpClient)



  login(payload: { username: string, password: string }) {
    const fd = new FormData()

    fd.append('username', payload.username)
    fd.append('password', payload.password)

    return this.http.post(`${this.baseApiUrl}token`, fd)
  }
}
