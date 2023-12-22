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
    'IGQWRNTDNhMzdRSGpaN3o5bV9obVJzelBhUUpJU3dCaTBCSndLY2hVMWRnWlRZAT2c4UktfZAUxuWlEtQldxM3U0WmpJbHRaUG01a3U2N2VuWUswT0toYVdRUU92d1YtaUtyZA0N4V2Y0NE5ucmJqMFlzaURBa21pZAjgZD';

  constructor(private http: HttpClient) {}

  getInstagramPosts(): Observable<any> {
    const endpoint = `/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${this.accessToken}`;
    return this.http.get<any>(`${this.apiUrl}${endpoint}`);
  }
}
