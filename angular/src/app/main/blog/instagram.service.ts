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
    'IGQWROOWNFTHZAGci0wZAzYtMjVwWEkzNFNqMnhOSHdZAWkxCTnRuR2xjLUkzQ1ozc2FRRnYyOGxUZAGtVeUYwUjUyMnFwQlpzY2d0SHo0eGpNY21sdlhuYlRFSXJUZAjNiTllqcHM2TTRjelIwd0pZAZAjFYWkc5NGNrME0ZD';

  constructor(private http: HttpClient) {}

  getInstagramPosts(): Observable<any> {
    const endpoint = `/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${this.accessToken}`;
    return this.http.get<any>(`${this.apiUrl}${endpoint}`);
  }
}
