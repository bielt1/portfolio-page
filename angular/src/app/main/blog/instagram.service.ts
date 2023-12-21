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
    'IGQWROZAUtpSE9Ocno4UlpudlNlMkdoTDlNcENQdmNtZAU1TMVpaMDh2TnpXOG5XWmp3SmdYMV9RZA0s4VTRSNmI4R1lPVzd0NWo0Ui1SVHBiV0k1dnNBbUpVd3hvaFpnZAWpOV2ZAPU3lTd2VzUkRrU3ZAoc3hXOWRNYTAZD';

  constructor(private http: HttpClient) {}

  getInstagramPosts(): Observable<any> {
    const endpoint = `/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${this.accessToken}`;
    return this.http.get<any>(`${this.apiUrl}${endpoint}`);
  }
}
