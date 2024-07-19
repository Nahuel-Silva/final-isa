import dayjs from 'dayjs/esm';

import { ICategory, NewCategory } from './category.model';

export const sampleWithRequiredData: ICategory = {
  id: 5193,
  description: 'within hummus',
};

export const sampleWithPartialData: ICategory = {
  id: 5691,
  description: 'despite nearly unruly',
  dateModified: dayjs('2024-07-19'),
  status: 'AVAILABLE',
};

export const sampleWithFullData: ICategory = {
  id: 23256,
  description: 'subsidiary weighty',
  sortOrder: 27599,
  dateAdded: dayjs('2024-07-19'),
  dateModified: dayjs('2024-07-19'),
  status: 'AVAILABLE',
};

export const sampleWithNewData: NewCategory = {
  description: 'mambo gee',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
