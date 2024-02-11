import { TelegramChannel } from './telegram-channel.interface';

export interface TelegramPost {
  id: string;
  channel: TelegramChannel;
  channelId: string;
  title: string;
  content: string;
  publishedAt: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
