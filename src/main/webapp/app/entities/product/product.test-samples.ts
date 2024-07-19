import dayjs from 'dayjs/esm';

import { IProduct, NewProduct } from './product.model';

export const sampleWithRequiredData: IProduct = {
  id: 26425,
  title: 'micronutrient',
};

export const sampleWithPartialData: IProduct = {
  id: 2463,
  title: 'drat',
  keywords: 'yahoo what whenever',
  description: 'parliament',
  dateAdded: dayjs('2024-07-19'),
  dateModified: dayjs('2024-07-19'),
};

export const sampleWithFullData: IProduct = {
  id: 11888,
  title: 'incidentally event ew',
  keywords: 'utterly',
  description: 'scarily violet',
  rating: 28433,
  dateAdded: dayjs('2024-07-19'),
  dateModified: dayjs('2024-07-19'),
};

export const sampleWithNewData: NewProduct = {
  title: 'milky',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
