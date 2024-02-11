import { Component, Input, ViewEncapsulation } from '@angular/core';
import { TelegramPost } from '../../types/telegram-post.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PostComponent {
  @Input() post: TelegramPost | undefined;
}
