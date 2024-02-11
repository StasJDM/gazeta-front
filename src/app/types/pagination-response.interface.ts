import { PaginationOptions } from './pagination-options.interface';

export interface PaginationResponse<T> {
  data: T;
  pagination: PaginationOptions;
}
