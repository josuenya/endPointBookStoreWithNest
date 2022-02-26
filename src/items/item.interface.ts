import { Document } from 'mongoose';

export interface Item {
  name?: string;
  description?: string;
  qty?: number;
}
