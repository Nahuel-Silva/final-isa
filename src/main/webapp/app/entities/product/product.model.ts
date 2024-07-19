import dayjs from 'dayjs/esm';
import { ICategory } from 'app/entities/category/category.model';

export interface IProduct {
  id: number;
  title?: string | null;
  keywords?: string | null;
  description?: string | null;
  rating?: number | null;
  dateAdded?: dayjs.Dayjs | null;
  dateModified?: dayjs.Dayjs | null;
  categories?: ICategory[] | null;
}

export type NewProduct = Omit<IProduct, 'id'> & { id: null };
