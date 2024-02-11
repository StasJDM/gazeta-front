import { Component, OnInit } from '@angular/core';
import { TelegramChannelService } from '../services/telegram-channel.service';

@Component({
  selector: 'app-page-posts',
  standalone: true,
  imports: [],
  template: ` <p>page-posts works!</p> `,
  styleUrl: './page-posts.component.scss',
})
export class PagePostsComponent implements OnInit {
  constructor(private telegramChannelService: TelegramChannelService) {}

  ngOnInit(): void {
    this.telegramChannelService.getPosts().subscribe((r) => {
      console.log('@@@', r);
    });
  }
}
