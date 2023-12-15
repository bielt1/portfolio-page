// instagram.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InstagramService {
  private apiUrl = 'https://graph.instagram.com/v12.0';
  private accessToken =
    'IGQWRPWDhNWldTdWs1Q2FDeVdWNmZAHNnlwZAUJJQWVSWHRrZAGp6MHMzWHl5ZA04wUTFISDB5S043dTZAqTmVRR0RTVm1MYnBEdXhOOEppdFZAKbC1TbEJ0TWhGT3lRZAUdVN2dOU1ZAKdkxDQXVDejRMcmJwNmhJTkJ4R1kZD';

  constructor(private http: HttpClient) {}

  getInstagramPosts(): Observable<any> {
    const endpoint = `/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${this.accessToken}`;
    return this.http.get<any>(`${this.apiUrl}${endpoint}`);
  }
}
