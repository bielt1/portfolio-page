// erstellt mit ChatGPT
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InstagramService {
  private apiUrl = 'https://graph.instagram.com/v12.0';
  private accessToken =
    'IGQWRQa1RhV2dpcHhkSHFVa2xma3hZAalZALdjcwRGxpRTczZAkhkM21sYlpuclJEWGxvdDN1SS1oQVA5S1RHTzJZAOWFWVXpjQjhqU3N0eG8wbnFhRUdudWh0aVFGYjJIazRsS0tHZAEdTMUkwYzRjMzN2QUw1QnlEb3cZD';

  constructor(private http: HttpClient) {}

  getInstagramPosts(): Observable<any> {
    const endpoint = `/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${this.accessToken}`;
    return this.http.get<any>(`${this.apiUrl}${endpoint}`);
  }
}
