import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 23892,
  login: 'ty.Yy6',
};

export const sampleWithPartialData: IUser = {
  id: 3293,
  login: 'o!LI@b\\--\\YE7YWa',
};

export const sampleWithFullData: IUser = {
  id: 18690,
  login: 'dkNOo',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
