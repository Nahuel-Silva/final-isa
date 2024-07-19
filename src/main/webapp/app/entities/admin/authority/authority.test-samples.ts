import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'dafd4509-a1b5-4f28-a524-b50e214f02b1',
};

export const sampleWithPartialData: IAuthority = {
  name: '29443af5-b613-444e-b24d-134c1eade032',
};

export const sampleWithFullData: IAuthority = {
  name: '16c13d02-48f0-428c-8704-1ecf5f827031',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
