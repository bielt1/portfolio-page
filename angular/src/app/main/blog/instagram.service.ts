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
    'IGQWRPVkZAKNEFJbUdFNUNja1V0dHVZAX1FMNWs4UjRfMEYzb2RPMnFBNnJndC1PT0kxai1KdkZAVdGItRHhYVUdSTnVBLWZA2eGdnQ3I2RzY4aHVac0N2aGE2X3RRa2E3UlM4ZATBtbWVyUWY4VnZAUSl8wRURqRENJUncZD';

  constructor(private http: HttpClient) {}

  getInstagramPosts(): Observable<any> {
    const endpoint = `/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${this.accessToken}`;
    return this.http.get<any>(`${this.apiUrl}${endpoint}`);
  }
}
