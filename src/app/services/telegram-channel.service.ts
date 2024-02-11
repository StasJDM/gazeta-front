import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TelegramPost } from '../types/telegram-post.interface';
import { PaginationResponse } from '../types/pagination-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TelegramChannelService {
  private endpointUrl = 'telegram';

  constructor(private http: HttpClient) {}

  public getPosts(): Observable<PaginationResponse<TelegramPost[]>> {
    return this.http.get<PaginationResponse<TelegramPost[]>>(
      `${this.endpointUrl}/posts`
    );
  }
}
