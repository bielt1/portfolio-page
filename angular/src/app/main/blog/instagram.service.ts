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
    'IGQWROQllTNnRzUXpEbnZAveS1WeWowMTlNbmNYUnA0VUxPWG5TOU11VGNBZAmJ0ZAVJvVG90cDFTNWJYZA0NabHMxQ2RTWWZAUT00xa3BENEhJa0M3aHp5OVo5WTIxQVpqM1VqbE94SFEzTTRid0JZAWjJnVGpWR0R1M00ZD';

  constructor(private http: HttpClient) {}

  getInstagramPosts(): Observable<any> {
    const endpoint = `/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${this.accessToken}`;
    return this.http.get<any>(`${this.apiUrl}${endpoint}`);
  }
}
