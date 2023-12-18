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
    'IGQWRNUlB0TVBwXzN5X0ptemFvODJTTldHcmlBS0Q3a2V6OERzTk40blVVVkR3NUZAlbFJ5Y1hHNDVHQ3VMUGozQWZAnbGUyNDJsVlowQ1NDbS1wRDNESzMtVWlTNHhNRHpMS3VIVUprWGo4TnNMNlV4ZAFdQa2o4akkZD';

  constructor(private http: HttpClient) {}

  getInstagramPosts(): Observable<any> {
    const endpoint = `/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${this.accessToken}`;
    return this.http.get<any>(`${this.apiUrl}${endpoint}`);
  }
}
