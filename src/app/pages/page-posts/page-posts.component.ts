import { Component, OnInit } from '@angular/core';
import { TelegramChannelService } from '../../services/telegram-channel.service';
import { TelegramPost } from '../../types/telegram-post.interface';
import { PostComponent } from '../../components/post/post.component';

@Component({
  selector: 'app-page-posts',
  standalone: true,
  imports: [PostComponent],
  templateUrl: './page-posts.component.html',
  styleUrl: './page-posts.component.scss',
})
export class PagePostsComponent implements OnInit {
  public posts: TelegramPost[] = [];

  constructor(private telegramChannelService: TelegramChannelService) {}

  ngOnInit(): void {
    this.telegramChannelService.getPosts().subscribe((res) => {
      this.posts = res.data;
    });
  }
}
